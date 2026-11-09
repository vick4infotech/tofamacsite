import {NextResponse} from "next/server";
import nodemailer from "nodemailer";
import {validateContact} from "@/lib/validate";
import {dbRequest,databaseReady} from "@/lib/db";
import {getSiteSettings} from "@/lib/site-settings";
export const runtime="nodejs";
export async function POST(req:Request){
 const body=await req.json().catch(()=>null);
 const v=validateContact(body??{});
 if(!v.ok)return NextResponse.json({ok:false,message:"Invalid input",errors:v.errors},{status:400});
 if(v.cleaned.name.length>160 || v.cleaned.email.length>254 || (v.cleaned.company?.length??0)>160 || v.cleaned.message.length>10000)return NextResponse.json({ok:false,message:"Message exceeds the allowed length"},{status:400});
 if(!databaseReady())return NextResponse.json({ok:false,message:"Support inbox is not configured yet. Please contact us by email."},{status:503});
 try{
  await dbRequest("tofamac_messages",{method:"POST",headers:{Prefer:"return=minimal"},body:JSON.stringify({...v.cleaned,company:v.cleaned.company??null})});
 }catch{return NextResponse.json({ok:false,message:"Could not save your message. Please try again."},{status:500})}
 // Email is only an optional notification; a saved message is already a successful submission.
 const {SMTP_HOST,SMTP_PORT,SMTP_USER,SMTP_PASS,SMTP_FROM}=process.env;
 if(SMTP_HOST&&SMTP_PORT&&SMTP_USER&&SMTP_PASS){
  try{
   const s=await getSiteSettings();
   await nodemailer.createTransport({host:SMTP_HOST,port:Number(SMTP_PORT),secure:Number(SMTP_PORT)===465,auth:{user:SMTP_USER,pass:SMTP_PASS}}).sendMail({from:SMTP_FROM||SMTP_USER,to:s.email,replyTo:v.cleaned.email,subject:`New website enquiry from ${v.cleaned.name}`,text:`Name: ${v.cleaned.name}\nEmail: ${v.cleaned.email}\nCompany: ${v.cleaned.company??"—"}\n\n${v.cleaned.message}`});
  }catch(err){console.error("Optional notification email failed",err instanceof Error?err.message:"Unknown error")}
 }
 return NextResponse.json({ok:true},{status:201});
}

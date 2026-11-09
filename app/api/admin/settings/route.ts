import {NextResponse} from "next/server";
import {isAdmin} from "@/lib/admin-auth";
import {authorizeAdminWrite} from "@/lib/admin-security";
import {databaseReady,dbRequest} from "@/lib/db";
import {getSiteSettings,validateSettings} from "@/lib/site-settings";
export const dynamic="force-dynamic";
export async function GET(){
 if (!(await isAdmin())) return NextResponse.json({error:"Unauthorized"},{status:401});
 return NextResponse.json({settings:await getSiteSettings(),connected:databaseReady()},{headers:{"Cache-Control":"no-store"}});
}
export async function PUT(req:Request){
 if (!(await authorizeAdminWrite(req))) return NextResponse.json({error:"Unauthorized"},{status:403});
 if (!databaseReady())return NextResponse.json({error:"Database not configured"},{status:503});
 const incoming=await req.json().catch(()=>null);
 let value;
 try{value=validateSettings(incoming)}catch(e){return NextResponse.json({error:e instanceof Error?e.message:"Invalid settings"},{status:400})}
 try{
  await dbRequest("tofamac_settings?on_conflict=key",{method:"POST",headers:{Prefer:"resolution=merge-duplicates,return=minimal"},body:JSON.stringify({key:"public",value,updated_at:new Date().toISOString()})});
  return NextResponse.json({ok:true,settings:value});
 }catch {return NextResponse.json({error:"Could not save settings. Check database schema."},{status:500})}
}

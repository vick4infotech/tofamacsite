import {NextResponse} from "next/server";
import {isAdmin} from "@/lib/admin-auth";
import {authorizeAdminWrite} from "@/lib/admin-security";
import {databaseReady,dbRequest} from "@/lib/db";
import {getSupportMessages} from "@/lib/support";
export const dynamic = "force-dynamic";
export async function GET() {
 if (!(await isAdmin())) return NextResponse.json({error:"Unauthorized"},{status:401});
 if (!databaseReady()) return NextResponse.json({error:"Database not configured"},{status:503});
 try {return NextResponse.json({messages:await getSupportMessages()},{headers:{"Cache-Control":"no-store"}})}
 catch{return NextResponse.json({error:"Could not load messages. Check database schema."},{status:500})}
}
export async function PATCH(req:Request) {
 if (!(await authorizeAdminWrite(req))) return NextResponse.json({error:"Unauthorized"},{status:403});
 const body=await req.json().catch(()=>null);
 if (!body || typeof body.id!=="string" || !/^[0-9a-f-]{36}$/i.test(body.id) || !["new","in_progress","resolved"].includes(body.status) || typeof body.admin_notes!=="string" || body.admin_notes.length>5000) return NextResponse.json({error:"Invalid input"},{status:400});
 try {
  const updated=await dbRequest<unknown[]>(`tofamac_messages?id=eq.${encodeURIComponent(body.id)}`,{method:"PATCH",headers:{Prefer:"return=representation"},body:JSON.stringify({status:body.status,admin_notes:body.admin_notes})});
  if (!updated.length) return NextResponse.json({error:"Message not found"},{status:404});
  return NextResponse.json({ok:true});
 } catch {return NextResponse.json({error:"Unable to save changes"},{status:500})}
}

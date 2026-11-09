import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME, createSession, sessionMaxAge, validCredentials } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
 const form = await request.formData();
 const username = String(form.get("username") ?? "").slice(0,128);
 const password = String(form.get("password") ?? "").slice(0,1024);
 const url = new URL("/admin",request.url);
 if (!validCredentials(username,password)) {
   url.searchParams.set("error","invalid");
   const response = NextResponse.redirect(url,303);
   response.headers.set("Cache-Control","no-store");
   return response;
 }
 const response = NextResponse.redirect(url,303);
 response.cookies.set(COOKIE_NAME,createSession(),{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/admin",maxAge:sessionMaxAge});
 response.headers.set("Cache-Control","no-store");
 return response;
}

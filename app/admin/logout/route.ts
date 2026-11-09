import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME } from "@/lib/admin-auth";
export async function POST(request: NextRequest) {
 const response=NextResponse.redirect(new URL("/admin",request.url),303);
 response.cookies.set(COOKIE_NAME,"",{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:0});
 response.headers.set("Cache-Control","no-store");
 return response;
}

import "server-only";
import { createHmac, createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const COOKIE_NAME = "tofamac_admin_session";
const MAX_AGE = 60 * 60 * 8;
const ADMIN_USER = "admin";

function secrets() {
 const password = process.env.ADMIN_PASSWORD;
 const key = process.env.ADMIN_SESSION_SECRET;
 if (!password || !key || key.length < 32) return null;
 return { password, key };
}

function equals(a: string, b: string): boolean {
 const ah = createHash("sha256").update(a).digest();
 const bh = createHash("sha256").update(b).digest();
 return timingSafeEqual(ah,bh);
}

export function configReady(): boolean { return secrets() !== null; }
export function validCredentials(username: string, password: string): boolean {
 const s = secrets();
 if (!s) return false;
 return equals(username, ADMIN_USER) && equals(password, s.password);
}
export function createSession(): string {
 const s = secrets();
 if (!s) throw new Error("Admin credentials not configured");
 const expires = Math.floor(Date.now()/1000)+MAX_AGE;
 const body=`v1.${expires}`;
 const mac=createHmac("sha256",s.key).update(body).digest("hex");
 return `${body}.${mac}`;
}
export async function isAdmin(): Promise<boolean> {
 const s = secrets();
 if (!s) return false;
 const token = (await cookies()).get(COOKIE_NAME)?.value;
 if (!token) return false;
 const parts=token.split(".");
 if (parts.length!==3 || parts[0]!=="v1" || !/^\d+$/.test(parts[1]) || !/^[a-f0-9]{64}$/.test(parts[2])) return false;
 const exp=Number(parts[1]);
 if (!Number.isSafeInteger(exp) || exp<Math.floor(Date.now()/1000)) return false;
 const body=`${parts[0]}.${parts[1]}`;
 const expected=createHmac("sha256",s.key).update(body).digest("hex");
 return timingSafeEqual(Buffer.from(expected,"hex"),Buffer.from(parts[2],"hex"));
}
export const sessionMaxAge = MAX_AGE;

import "server-only";
import { isAdmin } from "@/lib/admin-auth";
export async function authorizeAdminWrite(request: Request): Promise<boolean> {
 if (!(await isAdmin())) return false;
 const origin = request.headers.get("origin");
 const expected = new URL(request.url).origin;
 // Browsers send Origin for JSON writes. Require match to prevent cross-site requests.
 return Boolean(origin && origin === expected);
}

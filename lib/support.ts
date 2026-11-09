import "server-only";
import {dbRequest} from "@/lib/db";
export type SupportMessage = {
 id: string; created_at: string; name: string; email: string; company: string | null;
 message: string; status: "new"|"in_progress"|"resolved"; admin_notes: string;
};
export async function getSupportMessages(): Promise<SupportMessage[]> {
 return dbRequest<SupportMessage[]>("tofamac_messages?select=*&order=created_at.desc&limit=300");
}

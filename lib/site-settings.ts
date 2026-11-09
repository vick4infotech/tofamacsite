import "server-only";
import { site } from "@/lib/site";
import { databaseReady, dbRequest } from "@/lib/db";

export type Service = { title: string; summary: string; bullets: string[] };
export type SiteSettings = {
 name: string; tagline: string; description: string; email: string;
 mission: string; vision: string; promise: string; services: Service[];
};
export const defaultSettings: SiteSettings = {
 name: site.name, tagline: site.tagline, description: site.description, email: site.email,
 mission: site.mission, vision: site.vision, promise: site.promise,
 services: site.services.map(s => ({title:s.title,summary:s.summary,bullets:[...s.bullets]})),
};
export async function getSiteSettings(): Promise<SiteSettings> {
 if (!databaseReady()) return defaultSettings;
 try {
  const rows = await dbRequest<{value: SiteSettings}[]>("tofamac_settings?key=eq.public&select=value&limit=1");
  return rows[0]?.value ? {...defaultSettings, ...rows[0].value} : defaultSettings;
 } catch (error) { console.error("Could not load public settings", error); return defaultSettings; }
}
export function validateSettings(input: unknown): SiteSettings {
 if (!input || typeof input !== "object") throw new Error("Invalid settings payload");
 const v = input as Record<string,unknown>;
 const result = {...defaultSettings};
 for (const field of ["name","tagline","description","email","mission","vision","promise"] as const) {
   if (typeof v[field] !== "string" || !v[field].trim() || v[field].length > 4000) throw new Error(`Invalid ${field}`);
   result[field] = v[field].trim();
 }
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result.email)) throw new Error("Invalid email address");
 if (!Array.isArray(v.services) || v.services.length > 25) throw new Error("Invalid services");
 result.services = v.services.map((s:unknown) => {
   if (!s || typeof s !== "object") throw new Error("Invalid service");
   const item = s as Record<string,unknown>;
   if (typeof item.title!=="string" || !item.title.trim() || item.title.length>150 || typeof item.summary!=="string" || item.summary.length>1000 || !Array.isArray(item.bullets) || item.bullets.length>12 || item.bullets.some(b=>typeof b!=="string" || b.length>300)) throw new Error("Invalid service fields");
   return {title:item.title.trim(),summary:item.summary.trim(),bullets:(item.bullets as string[]).map(b=>b.trim()).filter(Boolean)};
 });
 return result;
}

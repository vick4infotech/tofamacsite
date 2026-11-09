import "server-only";

const base = () => process.env.SUPABASE_URL?.replace(/\/$/, "");
const key = () => process.env.SUPABASE_SERVICE_ROLE_KEY;
export function databaseReady() { return Boolean(base() && key()); }

export async function dbRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  if (!databaseReady()) throw new Error("DATABASE_NOT_CONFIGURED: Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  const result = await fetch(`${base()}/rest/v1/${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      apikey: key()!,
      Authorization: `Bearer ${key()!}`,
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  if (!result.ok) {
    const message = await result.text();
    console.error("Database request failed", result.status, message.slice(0, 350));
    throw new Error(`Database request failed (${result.status}). Check the setup and SQL schema.`);
  }
  if (result.status === 204) return undefined as T;
  const text = await result.text();
  return text ? JSON.parse(text) as T : undefined as T;
}

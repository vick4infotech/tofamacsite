export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export function validateContact(payload: Partial<ContactPayload> | any) {
  const errors: Record<string, string> = {};

  const name = String(payload?.name ?? "").trim();
  const email = String(payload?.email ?? "").trim();
  const message = String(payload?.message ?? "").trim();
  const companyRaw = payload?.company;
  const company = companyRaw != null ? String(companyRaw).trim() : "";

  if (!name || name.length < 2) errors.name = "Please enter your name";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email address";
  if (!message || message.length < 10)
    errors.message = "Please tell us a bit more so we can help";

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    cleaned: {
      name,
      email,
      company: company ? company : undefined,
      message,
    } as ContactPayload,
  };
}

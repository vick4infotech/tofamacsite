"use client";

import React from "react";
import { validateContact, ContactPayload } from "@/lib/validate";
import { Surface } from "@/components/Surface";
import { cn } from "@/lib/cn";
import { MotionStagger, MotionItem } from "@/components/MotionStagger";
import { HoverLift } from "@/components/HoverLift";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [form, setForm] = React.useState<ContactPayload>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = React.useState<Status>("idle");
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = React.useState<string | null>(null);

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerMessage(null);

    const v = validateContact(form);
    setErrors(v.errors);
    if (!v.ok) return;

    try {
      setStatus("sending");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(v.cleaned),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok: boolean; message?: string }
        | null;

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setServerMessage(data?.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
      setErrors({});
      setServerMessage("Thanks. Your message has been sent. We will respond shortly.");
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again.");
    }
  }

  return (
    <Surface className="p-7 sm:p-9" tint="violet">
      <form onSubmit={onSubmit} className="grid gap-4">
        <MotionStagger className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <MotionItem>
            <Field
              label="Full name"
              value={form.name}
              onChange={(v) => update("name", v)}
              error={errors.name}
              autoComplete="name"
            />
          </MotionItem>
          <MotionItem>
            <Field
              label="Email"
              value={form.email}
              onChange={(v) => update("email", v)}
              error={errors.email}
              autoComplete="email"
              inputMode="email"
            />
          </MotionItem>
        </div>

        <MotionItem>
          <Field
            label="Company (optional)"
            value={form.company ?? ""}
            onChange={(v) => update("company", v)}
            error={errors.company}
            autoComplete="organization"
          />
        </MotionItem>

        <MotionItem>
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-slate-950 dark:text-white">
            Message
          </label>
          <textarea
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={6}
            className={cn(
              "w-full rounded-xl border border-black/10 bg-white/75 px-4 py-3 text-sm text-slate-900 shadow-emboss outline-none backdrop-blur",
              "focus:ring-2 focus:ring-brand-400/60 dark:border-white/10 dark:bg-slate-900/40 dark:text-white dark:shadow-emboss-dark"
            )}
            placeholder="Tell us what you want to improve and what success should look like."
          />
          {errors.message ? (
            <p className="text-xs font-medium text-red-600 dark:text-red-300">
              {errors.message}
            </p>
          ) : null}
        </div>
        </MotionItem>

        <MotionItem>
          <HoverLift y={-2} scale={1.005}>
            <button
              type="submit"
              disabled={status === "sending"}
              className={cn(
                "mt-2 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide",
                "bg-brand-600 text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-700",
                "disabled:cursor-not-allowed disabled:opacity-70"
              )}
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
          </HoverLift>
        </MotionItem>

        <MotionItem>
          {serverMessage ? (
            <p
              className={cn(
                "text-sm font-medium",
                status === "success"
                  ? "text-accent-700 dark:text-accent-300"
                  : status === "error"
                  ? "text-red-600 dark:text-red-300"
                  : "text-slate-700 dark:text-slate-200"
              )}
            >
              {serverMessage}
            </p>
          ) : null}
        </MotionItem>
        </MotionStagger>
      </form>
    </Surface>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  autoComplete,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-slate-950 dark:text-white">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={cn(
          "w-full rounded-xl border border-black/10 bg-white/75 px-4 py-3 text-sm text-slate-900 shadow-emboss outline-none backdrop-blur",
          "focus:ring-2 focus:ring-brand-400/60 dark:border-white/10 dark:bg-slate-900/40 dark:text-white dark:shadow-emboss-dark"
        )}
      />
      {error ? (
        <p className="text-xs font-medium text-red-600 dark:text-red-300">{error}</p>
      ) : null}
    </div>
  );
}

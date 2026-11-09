-- Run once in Supabase Dashboard > SQL Editor.
-- Tables are private: browser clients must NOT get the service role key.
create extension if not exists pgcrypto;
create table if not exists public.tofamac_messages (
 id uuid primary key default gen_random_uuid(),
 created_at timestamptz not null default now(),
 name text not null,
 email text not null,
 company text,
 message text not null,
 status text not null default 'new' check (status in ('new','in_progress','resolved')),
 admin_notes text not null default ''
);
create index if not exists tofamac_messages_recent on public.tofamac_messages(created_at desc);
create table if not exists public.tofamac_settings (
 key text primary key, value jsonb not null, updated_at timestamptz not null default now()
);
alter table public.tofamac_messages enable row level security;
alter table public.tofamac_settings enable row level security;
-- No public/anon/authenticated policies. Only the server's service_role key can access.
revoke all on public.tofamac_messages from anon, authenticated;
revoke all on public.tofamac_settings from anon, authenticated;

-- ──────────────────────────────────────────────────────────────────────────
-- _template.sql — DO NOT APPLY
--
-- Copy this file when adding a new migration. The leading underscore keeps
-- it out of any numbered apply sequence.
--
-- Filename for the copy: NNN_short_description.sql (zero-padded prefix,
-- one increment above the highest existing migration; currently 001).
--
-- ─── Why explicit GRANTs? ────────────────────────────────────────────────
-- From October 30, 2026 Supabase no longer auto-grants `public` tables to
-- the Data API roles (anon, authenticated). Without the GRANT block below,
-- supabase-js / PostgREST / GraphQL cannot read the table even though RLS
-- would otherwise allow it.
--
-- The existing waitlist table (001_create_waitlist_table.sql) is
-- grandfathered — do not retro-add grants to applied migrations. Write a
-- new migration if you need to change something.
--
-- RLS is still the per-row access boundary. The GRANT only re-establishes
-- what the legacy default used to provide.
-- ──────────────────────────────────────────────────────────────────────────

-- ── Table ─────────────────────────────────────────────────────────────────
create table if not exists public.<table_name> (
  id          uuid primary key default gen_random_uuid(),
  -- ... columns ...
  created_at  timestamptz not null default now()
);

-- ── Indexes ───────────────────────────────────────────────────────────────
create index if not exists idx_<table_name>_created_at
  on public.<table_name> (created_at desc);

-- ── RLS ───────────────────────────────────────────────────────────────────
alter table public.<table_name> enable row level security;

-- ── Data API grants (required from 2026-10-30 onward) ─────────────────────
-- Anonymous form submits: keep ONLY if this table accepts public writes
-- (e.g. waitlist, contact form). Remove for tables that should never accept
-- unauthenticated inserts.
grant insert on public.<table_name> to anon;

-- Admin readback via the Supabase Dashboard or a future authenticated route.
grant select, insert, update, delete on public.<table_name> to authenticated;

-- Service role: full access for edge functions and admin operations.
grant all on public.<table_name> to service_role;

-- ── Policies ──────────────────────────────────────────────────────────────
drop policy if exists "anon can submit <table_name>" on public.<table_name>;
create policy "anon can submit <table_name>"
  on public.<table_name> for insert to anon
  with check (true);

-- Add SELECT / UPDATE / DELETE policies here only if/when authenticated
-- users need them. For a waitlist this is usually unnecessary — the
-- Dashboard's service-role view is the admin interface.

-- ──────────────────────────────────────────────────────────────────────────
-- After applying:
--   1. Open https://supabase.com/dashboard → SQL Editor → New query →
--      paste this file's contents (with placeholders replaced) → Run.
--   2. Confirm "Success. No rows returned" (or the expected row count).
-- ──────────────────────────────────────────────────────────────────────────

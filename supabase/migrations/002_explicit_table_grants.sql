-- ============================================================================
-- 002_explicit_table_grants.sql
-- ============================================================================
-- Belt-and-braces migration for the Supabase Data API default change.
-- Effective dates from the May 2026 announcement:
--   * 2026-05-30: new Supabase projects no longer auto-expose `public.*`
--     tables to the Data API (PostgREST / GraphQL / supabase-js).
--   * 2026-10-30: the new default is enforced for NEW tables in existing
--     projects too. Existing tables created before that date keep working
--     under the legacy default.
--
-- This migration issues explicit grants for the existing schema so that no
-- table in `public` is dependent on the legacy auto-expose default. It also
-- sets ALTER DEFAULT PRIVILEGES so future tables inherit the same grants.
-- New migrations should STILL include per-table grants explicitly (see
-- migrations/_template.sql) to keep intent visible.
--
-- IMPORTANT:
--   * RLS still gates row access. Grants only control *whether the role
--     can see the table at all* via the Data API; policies still decide
--     *which rows*.
--   * `anon` needs INSERT on the waitlist because the public signup form
--     uses the anon publishable key. The existing "Allow public inserts"
--     RLS policy already permits it; the grant below makes the Data API
--     visibility explicit.
--   * `service_role` bypasses RLS and is used by edge functions; it gets
--     ALL privileges so server-side flows continue to work.
--
-- Safe to re-run: every statement is idempotent.
-- ============================================================================

-- Schema usage (already granted by Supabase, but explicit here for clarity)
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;

-- Existing tables: blanket grants for authenticated and service_role.
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public
  TO authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;

-- Existing sequences (so inserts into tables with serial/identity columns work)
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public
  TO authenticated, service_role;

-- Anonymous: public waitlist signup form.
GRANT INSERT ON public.waitlist TO anon;

-- Default privileges for future objects created by the `postgres` role.
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO authenticated;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT ALL ON TABLES TO service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO authenticated, service_role;

-- ============================================================================
-- After applying: submit a test entry through the public signup form to
-- confirm the anon INSERT still works.
-- ============================================================================

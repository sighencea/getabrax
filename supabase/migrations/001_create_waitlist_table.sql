-- Migration: Create waitlist table for email signups
-- Run this in your Supabase SQL Editor

-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (public signup)
CREATE POLICY "Allow public inserts" ON public.waitlist
  FOR INSERT
  WITH CHECK (true);

-- Index for email lookups (performance)
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);

-- Index for listing by date (admin queries)
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist(created_at DESC);

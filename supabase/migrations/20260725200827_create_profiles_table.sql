/*
# Create TORIX profiles table

## Summary
Stores user profile data for TORIX athletes and practitioners.
Links to Supabase auth.users via user_id.

## New Tables
- `profiles`
  - `id` (uuid, PK) — internal row ID
  - `user_id` (uuid, FK to auth.users, unique) — the authenticated user
  - `full_name` (text) — display name
  - `age` (integer) — biological age in years
  - `gender` (text) — 'male' or 'female'
  - `height_cm` (numeric) — height in centimetres
  - `weight_kg` (numeric) — weight in kilograms
  - `activity_level` (text) — sedentary/light/moderate/active/very_active
  - `goal` (text) — weight_loss/maintenance/muscle_gain/performance/rehabilitation
  - `previous_injuries` (text[]) — optional list of known injuries
  - `created_at` / `updated_at` (timestamptz)

## Security
- RLS enabled
- 4 separate policies scoped to `authenticated` with ownership predicate
- user_id defaults to auth.uid() so inserts from the frontend work without passing it
*/

CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  age integer,
  gender text,
  height_cm numeric,
  weight_kg numeric,
  activity_level text DEFAULT 'moderate',
  goal text DEFAULT 'maintenance',
  previous_injuries text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "select_own_profile" ON profiles;
CREATE POLICY "select_own_profile" ON profiles
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "insert_own_profile" ON profiles;
CREATE POLICY "insert_own_profile" ON profiles
  FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "update_own_profile" ON profiles;
CREATE POLICY "update_own_profile" ON profiles
  FOR UPDATE TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "delete_own_profile" ON profiles;
CREATE POLICY "delete_own_profile" ON profiles
  FOR DELETE TO authenticated
  USING (auth.uid() = user_id);

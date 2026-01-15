// Supabase Edge Function: Validate ALTCHA and store waitlist submission
// Deploy with: supabase functions deploy waitlist-submit

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js";
import { verifySolution } from "npm:altcha-lib";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

interface WaitlistPayload {
  name: string;
  email: string;
  platforms: string[];
  altcha: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  const hmacKey = Deno.env.get("ALTCHA_HMAC_KEY");
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!hmacKey || !supabaseUrl || !supabaseServiceKey) {
    return new Response(
      JSON.stringify({ error: "Server configuration error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    const body: WaitlistPayload = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.altcha || !body.platforms || body.platforms.length === 0) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate platforms
    const validPlatforms = ['android', 'ios', 'web'];
    const invalidPlatforms = body.platforms.filter(p => !validPlatforms.includes(p));
    if (invalidPlatforms.length > 0) {
      return new Response(
        JSON.stringify({ error: "Invalid platform selection" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Verify ALTCHA solution
    const isValid = await verifySolution(body.altcha, hmacKey);
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: "Invalid captcha solution" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Store in database
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { error: dbError } = await supabase.from("waitlist").insert({
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      platforms: body.platforms,
    });

    if (dbError) {
      // Handle duplicate email (unique constraint violation)
      if (dbError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "email_exists" }),
          {
            status: 409,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to join waitlist" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

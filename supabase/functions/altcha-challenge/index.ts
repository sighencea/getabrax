// Supabase Edge Function: Generate ALTCHA proof-of-work challenge
// Deploy with: supabase functions deploy altcha-challenge

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createChallenge } from "npm:altcha-lib";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  const hmacKey = Deno.env.get("ALTCHA_HMAC_KEY");

  if (!hmacKey) {
    return new Response(
      JSON.stringify({ error: "ALTCHA not configured" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }

  try {
    const challenge = await createChallenge({
      hmacKey,
      maxNumber: 100000, // Adjust difficulty as needed
      algorithm: "SHA-256",
    });

    return new Response(JSON.stringify(challenge), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to create ALTCHA challenge:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create challenge" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

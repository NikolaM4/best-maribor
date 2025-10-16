import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
  [key: string]: any;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const CLOUDINARY_API_KEY = Deno.env.get('CLOUDINARY_API_KEY');
    const CLOUDINARY_API_SECRET = Deno.env.get('CLOUDINARY_API_SECRET');
    const CLOUDINARY_CLOUD_NAME = '737394184144837'; // Cloud name from API key

    if (!CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
      throw new Error('Cloudinary credentials not configured');
    }

    const formData = await req.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'best-maribor';

    if (!file) {
      return new Response(
        JSON.stringify({ error: 'No file provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create form data for Cloudinary
    const cloudinaryFormData = new FormData();
    cloudinaryFormData.append('file', file);
    cloudinaryFormData.append('folder', folder);
    cloudinaryFormData.append('api_key', CLOUDINARY_API_KEY);
    
    // Generate timestamp and signature
    const timestamp = Math.round(new Date().getTime() / 1000);
    cloudinaryFormData.append('timestamp', timestamp.toString());
    
    // Generate signature (simplified - in production use proper signing)
    const signatureString = `folder=${folder}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(signatureString);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    cloudinaryFormData.append('signature', signature);

    // Upload to Cloudinary
    const uploadResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: 'POST',
        body: cloudinaryFormData,
      }
    );

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      console.error('Cloudinary upload failed:', errorText);
      throw new Error('Failed to upload to Cloudinary');
    }

    const result: CloudinaryUploadResponse = await uploadResponse.json();

    return new Response(
      JSON.stringify({
        url: result.secure_url,
        publicId: result.public_id,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in cloudinary-upload function:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

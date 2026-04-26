import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const backendUrl = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
  if (!backendUrl) {
    return NextResponse.json(
      { ok: false, error: 'Backend URL is not configured' },
      { status: 500 }
    );
  }

  try {
    const incoming = await req.formData();
    const outgoing = new FormData();
    for (const [key, value] of incoming.entries()) {
      outgoing.append(key, value as string | Blob);
    }

    const upstream = await fetch(`${backendUrl}/api/v1/accounts/lead`, {
      method: 'POST',
      body: outgoing,
    });

    const contentType = upstream.headers.get('content-type') || '';
    const body = contentType.includes('application/json')
      ? await upstream.json()
      : { ok: upstream.ok, message: await upstream.text() };

    return NextResponse.json(body, { status: upstream.status });
  } catch (error) {
    console.error('Lead proxy error:', error);
    return NextResponse.json(
      { ok: false, error: 'Failed to reach lead service' },
      { status: 502 }
    );
  }
}

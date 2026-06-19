import { NextResponse } from 'next/server'

const BEEHIIV_API_URL = 'https://api.beehiiv.com/v2/publications'

export async function POST(request) {
  const apiKey = process.env.BEEHIIV_API_KEY
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID

  if (!apiKey || !publicationId) {
    console.error('Missing beehiiv environment variables.')
    return NextResponse.json(
      { error: 'Newsletter signup is temporarily unavailable.' },
      { status: 500 },
    )
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const email = String(body.email || '').trim().toLowerCase()
  const website = String(body.website || '').trim()

  // Honeypot fields are filled by bots, not people.
  if (website) return NextResponse.json({ ok: true })

  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: 'Enter a valid email address.' },
      { status: 400 },
    )
  }

  try {
    const beehiivResponse = await fetch(
      `${BEEHIIV_API_URL}/${encodeURIComponent(publicationId)}/subscriptions`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
          utm_source: 'stickandgrow.co',
          utm_medium: 'website',
          utm_campaign: 'site_optin',
          referring_site: request.headers.get('referer') || 'https://stickandgrow.co',
        }),
        cache: 'no-store',
      },
    )

    const result = await beehiivResponse.json().catch(() => ({}))

    if (!beehiivResponse.ok) {
      console.error('beehiiv subscription failed', beehiivResponse.status, result)
      const message = beehiivResponse.status === 400
        ? 'That email could not be subscribed. Please check it and try again.'
        : 'Newsletter signup is temporarily unavailable.'
      return NextResponse.json({ error: message }, { status: beehiivResponse.status })
    }

    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (error) {
    console.error('beehiiv request error', error)
    return NextResponse.json(
      { error: 'Newsletter signup is temporarily unavailable.' },
      { status: 500 },
    )
  }
}

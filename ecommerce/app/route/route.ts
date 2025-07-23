export async function GET() {
  return new Response('Hello, Testing route handlers with Next.js!', {
    status: 200,
  })
}

export async function POST() {
  return new Response('Thanks for posting this handler', {
    status: 200,
  })
}
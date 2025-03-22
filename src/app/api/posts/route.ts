export async function GET() {
    const res = await fetch('https://cms.negativeentropy.me/api/posts')
    const data = await res.json()
    console.log(data)
    return Response.json(data)
}
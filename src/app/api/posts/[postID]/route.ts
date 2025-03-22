export async function GET(
  request: Request,
  { params }: {
    params: Promise<{ postID: number }>
  }) {
    const { postID } = await params;
    const res = await fetch(`https://cms.negativeentropy.me/api/posts/${postID}`)
    const data = await res.json()
    
    return Response.json(data)
}
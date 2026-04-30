import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  const body = await req.json();

  const client = await clientPromise;
  const db = client.db("personal");

  await db.collection("messages").insertOne(body);

  return Response.json({ success: true });
}
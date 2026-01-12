import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  console.log("Message Received:", data);
  return NextResponse.json({ message: "Thank you! I got your message." });
}

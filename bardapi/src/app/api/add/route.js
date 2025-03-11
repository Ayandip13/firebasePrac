import { NextResponse } from "next/server";
export async function post(request) {
  let data = await request.json();
  console.log(data);
  return NextResponse.json({ success: true, data: "okay" });
}

import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const headerList = headers();
  const token = headerList.get("Authorization");
  if (token) {
    const response = NextResponse.json({
      message: "Welcome to our API!",
      version: "1.0",
      success: true,
    });
    response.headers.set("Aothorization", `Bearer ${token}`);
    return response;
  } else{
    return NextResponse.json({});
  }
}

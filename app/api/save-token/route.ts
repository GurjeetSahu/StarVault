import { NextResponse } from "next/server";
import { savePatToEnvFile } from "@/lib/env";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const token = payload?.token;

    if (!token || typeof token !== "string") {
      return NextResponse.json({ error: "Token is required." }, { status: 400 });
    }

    await savePatToEnvFile(token);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not save token." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const file = path.join(process.cwd(), "data", "submissions.json");

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const data = body as Record<string, unknown>;
  if (!data.naam || !data.bereikbaar || !data.vraag) {
    return NextResponse.json({ ok: false, error: "missing" }, { status: 400 });
  }
  await fs.mkdir(path.dirname(file), { recursive: true });
  let list: unknown[] = [];
  try {
    list = JSON.parse(await fs.readFile(file, "utf8"));
  } catch {
    list = [];
  }
  list.push({ type: "contact", at: new Date().toISOString(), ...data });
  await fs.writeFile(file, JSON.stringify(list, null, 2));
  return NextResponse.json({ ok: true });
}

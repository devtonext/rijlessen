import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const file = path.join(process.cwd(), "data", "submissions.json");

async function save(entry: Record<string, unknown>) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  let list: unknown[] = [];
  try {
    list = JSON.parse(await fs.readFile(file, "utf8"));
  } catch {
    list = [];
  }
  list.push(entry);
  await fs.writeFile(file, JSON.stringify(list, null, 2));
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  const data = body as Record<string, unknown>;
  if (!data.voornaam || !data.achternaam || !data.email || !data.telefoon) {
    return NextResponse.json({ ok: false, error: "missing" }, { status: 400 });
  }
  await save({ type: "aanmelden", at: new Date().toISOString(), ...data });
  return NextResponse.json({ ok: true });
}

import { promises as fs } from "fs";
import path from "path";

const envPath = path.join(process.cwd(), ".env.local");

export async function getPatFromEnvFile(): Promise<string | null> {
  try {
    const envContents = await fs.readFile(envPath, "utf8");
    const match = envContents.match(/^GITHUB_PAT=(.*)$/m);
    if (match) {
      return match[1].trim();
    }
  } catch {
    return null;
  }
  return null;
}

export async function getPat(): Promise<string | null> {
  if (process.env.GITHUB_PAT) {
    return process.env.GITHUB_PAT;
  }
  return await getPatFromEnvFile();
}

export async function savePatToEnvFile(token: string): Promise<void> {
  const normalizedToken = token.trim();
  if (!normalizedToken) {
    throw new Error("GITHUB_PAT value cannot be empty.");
  }

  let envContents = "";
  try {
    envContents = await fs.readFile(envPath, "utf8");
  } catch {
    envContents = "";
  }

  const lines = envContents.split(/\r?\n/).filter(Boolean);
  const patIndex = lines.findIndex((line) => line.startsWith("GITHUB_PAT="));
  if (patIndex >= 0) {
    lines[patIndex] = `GITHUB_PAT=${normalizedToken}`;
  } else {
    lines.push(`GITHUB_PAT=${normalizedToken}`);
  }

  await fs.writeFile(envPath, `${lines.join("\n")}\n`, "utf8");
}

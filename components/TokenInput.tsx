"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TokenInput() {
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (!token.trim()) {
      setStatus("error");
      setMessage("Please enter a valid GitHub personal access token.");
      return;
    }

    setStatus("saving");

    try {
      const response = await fetch("/api/save-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token.trim() }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.error || "Unable to save token.");
      }

      setStatus("success");
      setMessage("Token saved successfully. Reload the page to continue.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Failed to save token.");
    }
  }

  return (
    <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/30">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300/90">GitHub Token Required</p>
        <h2 className="text-2xl font-semibold text-white">Save GITHUB_PAT to .env.local</h2>
        <p className="text-sm leading-6 text-slate-300">
          Enter a GitHub personal access token with star read permissions. StarVault will store it locally in <code className="rounded bg-white/5 px-1 py-0.5 text-sm text-slate-100">.env.local</code>.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="pat">GitHub GITHUB_PAT</Label>
          <Input
            id="pat"
            type="password"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            placeholder="ghp_xxxx..."
            className="bg-slate-900/80"
          />
          <p className="text-xs text-slate-400">
            Create a Fine-Grained token with <strong>Starring</strong> access for your account.
          </p>
        </div>

        <Button type="submit" className="w-full" disabled={status === "saving"}>
          {status === "saving" ? "Saving token..." : "Save Token"}
        </Button>

        {message ? (
          <p className={status === "error" ? "text-destructive text-sm" : "text-emerald-400 text-sm"}>
            {message}
          </p>
        ) : null}
      </form>
    </div>
  );
}

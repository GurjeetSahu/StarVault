"use server";

import { Separator } from "@/components/ui/separator";
import ReposTable from "@/components/ReposTable";
import TopBar from "@/components/TopBar";
import GroupTable from "@/components/SideBar";
import TokenInput from "@/components/TokenInput";
import { getPat } from "@/lib/env";

export default async function Home() {
  const token = await getPat();

  if (token) {
    return (
      <div className="flex flex-col h-dvh">
        <TopBar />
        <div className="flex flex-row h-full  ">
          <div className="flex flex-col flex-30 p-4">
            <GroupTable />
          </div>
          <Separator orientation="vertical" />
          <div className="flex flex-col flex-70 p-4">
            <ReposTable />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-sky-500/15 px-4 py-1 text-sm font-semibold text-sky-300">
              StarVault Setup
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Enter your GitHub token to unlock star organization.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Save a GitHub personal access token locally as <code className="rounded bg-white/5 px-1 py-0.5 text-sm text-slate-100">GITHUB_PAT</code> in <code className="rounded bg-white/5 px-1 py-0.5 text-sm text-slate-100">.env.local</code>. StarVault then uses it to load your starred repositories and help you organize them into custom categories.
            </p>
            <div className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/20">
              <p className="font-medium text-slate-200">What this does</p>
              <ul className="space-y-2 text-slate-300">
                <li>• Stores the token locally for server-side GitHub API access.</li>
                <li>• Keeps your star management workflow private and local.</li>
                <li>• Uses token-based GraphQL requests to fetch starred repos securely.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
            <TokenInput />
          </div>
        </div>
      </div>
    </div>
  );
}

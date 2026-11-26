import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import { signOutAction } from "./actions";

export const instant = false;

export default async function WorkspacePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error?.name === "AuthSessionMissingError") {
    redirect("/login");
  }

  if (error) {
    throw new Error(`Unable to verify the Supabase session: ${error.message}`);
  }

  if (!data.user) {
    redirect("/login");
  }

  return (
    <main className="workspace">
      <header className="masthead">
        <p className="wordmark">Cortex</p>
        <p className="workspace-label">Organizational intelligence</p>
      </header>
      <section className="introduction" aria-labelledby="page-title">
        <p className="eyebrow">Authenticated session</p>
        <h1 id="page-title">Your workspace is being prepared.</h1>
        <p className="description">
          Signed in as <strong>{data.user.email}</strong>. Organization
          membership and role-based access will be connected next.
        </p>
        <form action={signOutAction}>
          <button type="submit">Sign out</button>
        </form>
      </section>
    </main>
  );
}

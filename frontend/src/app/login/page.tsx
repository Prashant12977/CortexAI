import Link from "next/link";

import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main className="workspace">
      <header className="masthead">
        <Link className="wordmark" href="/">
          Cortex
        </Link>
        <p className="workspace-label">Organizational intelligence</p>
      </header>
      <section className="introduction login-panel" aria-labelledby="page-title">
        <p className="eyebrow">Secure workspace access</p>
        <h1 id="page-title">Sign in to Cortex.</h1>
        <p className="description">
          Use the account invited to your organization. Public registration is
          not available.
        </p>
        <LoginForm />
        <p className="login-note">
          Account invitations and first-owner setup will be added with the
          organization membership flow.
        </p>
      </section>
    </main>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
      setErrorMessage("Enter your email and password.");
      setIsSubmitting(false);
      return;
    }

    try {
      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMessage("Sign-in failed. Check your credentials and try again.");
        setIsSubmitting(false);
        return;
      }

      router.replace("/workspace");
      router.refresh();
    } catch {
      setErrorMessage("Unable to reach the authentication service. Try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        autoComplete="email"
        id="email"
        name="email"
        required
        type="email"
      />
      <label htmlFor="password">Password</label>
      <input
        autoComplete="current-password"
        id="password"
        name="password"
        required
        type="password"
      />
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
      <p aria-live="polite" className="form-message" role="status">
        {errorMessage}
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <main className="workspace">
      <header className="masthead">
        <p className="wordmark">Cortex</p>
        <p className="workspace-label">Organizational intelligence</p>
      </header>
      <section className="introduction" aria-labelledby="page-title">
        <p className="eyebrow">Workspace foundation</p>
        <h1 id="page-title">
          Where organizational knowledge becomes organizational intelligence.
        </h1>
        <p className="description">
          Cortex is being built to capture authorized work sources, preserve
          their context, and make verified knowledge easier to use.
        </p>
        <p className="workspace-link">
          <a href="/login">Sign in to your workspace</a>
        </p>
      </section>
    </main>
  );
}

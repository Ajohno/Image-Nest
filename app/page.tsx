export default function Home() {
  return (
    // The home route renders a compact starter surface for the template.
    <main className="page-shell">
      <section className="intro" aria-labelledby="page-title">
        <p className="intro__eyebrow">Next.js Template</p>
        <h1 id="page-title">Image Nest</h1>
        <p>
          Start building with the App Router, TypeScript, and a small styling
          foundation that is easy to replace as the product takes shape.
        </p>
        {/* Starter links point to the two common next steps: learn and deploy. */}
        <div className="actions">
          <a className="button" href="https://nextjs.org/docs">
            Read the docs
          </a>
          <a className="button button--secondary" href="https://vercel.com/new">
            Deploy
          </a>
        </div>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    // The home route renders a compact starter surface for the template.
    <main className="grid min-h-screen place-items-center px-5 py-12">
      <section
        className="w-full max-w-[760px] rounded-lg border border-border-soft bg-panel p-7 shadow-[0_24px_70px_rgb(22_21_20_/_0.08)] sm:p-10 lg:p-14"
        aria-labelledby="page-title"
      >
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-accent">
          Next.js Template
        </p>
        <h1
          id="page-title"
          className="m-0 max-w-[12ch] text-5xl leading-[0.92] sm:text-7xl lg:text-8xl"
        >
          Image Nest
        </h1>
        <p className="mt-6 max-w-[58ch] text-base leading-7 text-muted sm:text-lg">
          Start building with the App Router, TypeScript, and a small styling
          foundation that is easy to replace as the product takes shape.
        </p>
        {/* Starter links point to the two common next steps: learn and deploy. */}
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-accent bg-accent px-5 font-bold text-white"
            href="https://nextjs.org/docs"
          >
            Read the docs
          </a>
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-accent bg-transparent px-5 font-bold text-accent-strong"
            href="https://vercel.com/new"
          >
            Deploy
          </a>
        </div>
      </section>
    </main>
  );
}

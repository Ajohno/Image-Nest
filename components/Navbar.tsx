import Link from "next/link";

export default function Navbar() {
  return (
    // Creates a full-width navbar area.
    <header className="border-b border-border-soft bg-panel">
      {/* Keeps content centered and spaced out. */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Brand logo & App Name */}
        <Link href="/" className="text-lg font-bold text-foreground">
          Image Nest
        </Link>

        {/* Navigation links. */}
        <div className="flex items-center gap-4 text-sm font-medium text-muted">
          <Link href="/" className="transition hover:text-foreground">
            Home
          </Link>
          <Link href="/gallery" className="transition hover:text-foreground">
            Gallery
          </Link>
          <Link href="/upload" className="transition hover:text-foreground">
            Upload
          </Link>
        </div>
      </nav>
    </header>
  );
}

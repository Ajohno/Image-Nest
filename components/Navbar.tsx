"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export default function Navbar() {
  const pathname = usePathname();
  const currentTab =
    pathname === "/gallery" || pathname === "/upload" ? pathname : "/";

  return (
    // Creates a full-width navbar area.
    <header className="border-b border-border-soft bg-panel">
      {/* Keeps content centered and spaced out. */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Brand logo & App Name */}
        <Link href="/" className="text-lg font-bold text-foreground">
          Image Nest
        </Link>

        {/* Navigation Tabs Section */}
        <div className="flex items-center gap-4 text-sm font-medium text-muted">
          {/* Box container for the tabs */}
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={currentTab}
              textColor="primary"
              indicatorColor="primary"
              aria-label="navigation tabs"
            >
              <Tab value="/" label="Home" href="/" />
              <Tab value="/gallery" label="Gallery" href="/gallery" />
              <Tab value="/upload" label="Upload" href="/upload" />
            </Tabs>
          </Box>
        </div>
      </nav>
    </header>
  );
}

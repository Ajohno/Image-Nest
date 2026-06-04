"use client";

// This file is a Client Component because usePathname reads browser route state.
import Link from "next/link";
import { usePathname } from "next/navigation";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

export default function Navbar() {
  const pathname = usePathname();

  // The selected MUI tab is derived from the URL instead of stored in local state.
  // Unknown routes fall back to the Home tab so MUI always receives a valid value.
  const currentTab =
    pathname === "/gallery" || pathname === "/upload" ? pathname : "/";

  return (
    // The header spans the page, while the nav keeps the content aligned.
    <header className="border-b border-border-soft bg-panel">
      <nav className=" flex max-w-6xl items-center justify-between px-5 py-4">
        {/* The brand link uses Next's Link component for client-side navigation. */}
        <Link href="/" className="text-lg font-bold text-foreground">
          Image Nest
        </Link>

        <div className="flex items-center gap-4 text-sm font-medium text-muted">
          {/* MUI's Box is a small layout wrapper that accepts the sx styling prop. */}
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={currentTab}
              textColor="primary"
              indicatorColor="primary"
              aria-label="navigation tabs"
            >
              {/* Each Tab's value matches a route so the active indicator follows the URL. */}
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

"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const routeLabels: Record<string, string> = {
  gallery: "Gallery",
  upload: "Upload",
};

function formatSegment(segment: string) {
  return routeLabels[segment] ?? segment.replaceAll("-", " ");
}

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="mx-auto w-full max-w-6xl px-5 pt-5" aria-label="breadcrumb">
      <Breadcrumbs aria-label="breadcrumb">
        <Link component={NextLink} underline="hover" color="inherit" href="/">
          Home
        </Link>

        {segments.map((segment, index) => {
          const href = `/${segments.slice(0, index + 1).join("/")}`;
          const label = formatSegment(segment);
          const isCurrentPage = index === segments.length - 1;

          return isCurrentPage ? (
            <Typography key={href} sx={{ color: "text.primary" }}>
              {label}
            </Typography>
          ) : (
            <Link
              key={href}
              component={NextLink}
              underline="hover"
              color="inherit"
              href={href}
            >
              {label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </nav>
  );
}

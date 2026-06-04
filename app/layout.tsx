import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";

// Shared metadata used by Next.js for the document title and description.
export const metadata: Metadata = {
  title: "Image Nest",
  description: "A Next.js starter template for Image Nest.",
};

// RootLayout wraps every route in the app and is the right place for global UI.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

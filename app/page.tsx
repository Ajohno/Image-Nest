import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />

      

      <main className="grid min-h-[calc(100vh-73px)] place-items-center px-5 py-12">
        
        <div className="justify-self-start">
          <Breadcrumb/>
        </div>
        <section
          className="w-full rounded-lg border border-border-soft bg-panel p-7 shadow-[0_24px_70px_rgb(22_21_20_/_0.08)] sm:p-10 lg:p-14"
          aria-labelledby="page-title"
        >
          
          <h1
            id="page-title"
            className="m-0 max-w-[12ch] text-5xl leading-[0.92] sm:text-7xl lg:text-8xl"
          >
            Organize your images.
          </h1>

          <p className="mt-6 max-w-[58ch] text-base leading-7 text-muted sm:text-lg">
            Build a calm home for your visual ideas, uploads, collections, and
            creative references.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-accent bg-accent px-5 font-bold text-white"
              href="/gallery"
            >
              View gallery
            </Link>

            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-accent bg-transparent px-5 font-bold text-accent-strong"
              href="/upload"
            >
              Upload image
            </Link>
          </div>

          {/* Album Grid */}
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  Album 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of Album 1.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </section>
      </main>
    </>
  );
}

import Navbar from "@/components/Navbar";

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-6xl flex-col justify-center px-5 py-12">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-accent">
          Gallery
        </p>
        <h1 className="m-0 max-w-[14ch] text-5xl leading-[0.95] sm:text-7xl">
          Your image nest starts here.
        </h1>
        <p className="mt-6 max-w-[58ch] text-base leading-7 text-muted sm:text-lg">
          This page is ready for collections, image cards, filters, and search
          once you add upload or storage features.
        </p>
      </main>
    </>
  );
}

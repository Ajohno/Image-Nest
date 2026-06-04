import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";

export default function UploadPage() {
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
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-accent">
          Upload
        </p>
        <h1 className="m-0 max-w-[13ch] text-5xl leading-[0.95] sm:text-7xl">
          Add images to your nest.
        </h1>
        <p className="mt-6 max-w-[58ch] text-base leading-7 text-muted sm:text-lg">
          This page is ready for a file picker, upload progress, metadata, and
          storage integration when the product grows.
        </p>
        </section>
        
      </main>
    </>
  );
}

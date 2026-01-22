import React, { useState } from "react";
import { PageId } from "../types";

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: Content */}
          <div className="space-y-8">
            {/* Badge + Title */}
            <div className="space-y-2">
              <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.22em] text-accent-secondary">
                A State-Level Symposium
              </span>

              <h1 className="font-display text-3xl font-black leading-[1.05] text-accent-primary md:text-4xl">
                NATIONAL <br />
                <span className="text-accent-secondary">SCIENCE DAY</span>
              </h1>
            </div>

            {/* Year + Sci-π */}
            <div className="flex flex-col items-start">
              <h2 className="blue-sci font-display text-2xl font-bold leading-tight text-slate-800 md:text-3xl">
                Sci-
                <span className="pi-font text-3xl lg:text-4xl">π</span> 2026
              </h2>
              <p className="max-w-xl font-bold text-base text-slate-800">
                Beyond Knowledge, Toward Innovation.
              </p>
            </div>

            {/* Date cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1 rounded-2xl border border-slate-200/60 bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  Event Date
                </p>
                <p className="text-sm font-bold text-slate-800 md:text-base">
                  28 February, 2026
                </p>
              </div>

              <div className="space-y-1 rounded-2xl border border-slate-200/60 bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  Deadline (Abstract)
                </p>
                <p className="text-sm font-bold text-yellow-500 md:text-base">
                  10 February, 2026
                </p>
              </div>

              <div className="space-y-1 rounded-2xl border border-slate-200/60 bg-slate-50 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                  Registration Ends
                </p>
                <p className="text-sm font-bold text-red-500 md:text-base">
                  20 February, 2026
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate("registration")}
                className="min-w-60 inline-flex items-center justify-center rounded-full bg-accent-primary px-8 py-3 text-xs font-black uppercase tracking-[0.22em] text-white shadow-xl shadow-accent-primary/25 transition-all duration-200 hover:bg-accent-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
              >
                Register Now
              </button>

              <button
                onClick={() => onNavigate("guidelines")}
                className="min-w-60 inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-3 text-xs font-black uppercase tracking-[0.22em] text-slate-700 transition-all duration-200 hover:border-accent-primary hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
              >
                View Guidelines
              </button>

              <a
                href="https://docs.google.com/viewerng/viewer?url=https://raw.githubusercontent.com/VasudevBarjadiya/sci-pi-assets/main/scipi_brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-60 inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-3 text-xs font-black uppercase tracking-[0.22em] text-slate-700 transition-all duration-200 hover:border-accent-primary hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
              >
                View Brochure
              </a>

              {/* <button
                onClick={() => setOpen(true)}
                className="min-w-60 inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-3 text-xs font-black uppercase tracking-[0.22em] text-slate-700 transition-all duration-200 hover:border-accent-primary hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
              >
                Download Brochure
              </button> */}
            </div>

            {/* Theme + Highlights */}
            <div className="grid gap-4 pt-4 md:grid-cols-2">
              <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-amber-600">
                  Theme
                </span>
                <p className="text-sm font-bold leading-snug text-slate-800 md:text-base">
                  Emerging Trends in Science &amp; Technology
                </p>
              </div>

              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <span className="mb-2 block text-xs font-black uppercase tracking-[0.22em] text-blue-600">
                  Highlights
                </span>
                <p className="text-sm font-bold leading-snug text-slate-800 md:text-base">
                  Keynote Speaker <br />
                  Oral Presentations <br />
                  Poster Presentations <br />
                  Drawing Competition
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Poster */}
          <div className="relative">
            <img
              src="home_poster.png"
              alt="SCI-π Poster"
              className="w-full max-w-[480px] shadow-xl shadow-[#b9dbfd] lg:ml-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* PDF MODAL */}
      {/* {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative w-[95vw] h-[95vh] max-w-6xl rounded-2xl bg-white overflow-hidden shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-white px-3 py-1 font-bold text-slate-700 hover:text-accent-primary shadow"
            >
              ✕
            </button>

            <iframe
              src="https://docs.google.com/gview?url=https://raw.githubusercontent.com/VasudevBarjadiya/sci-pi-assets/main/scipi_brochure.pdf&embedded=true"
              className="w-full h-full min-h-[80vh]"
              style={{ border: "none" }}
              title="Sci-Pi Brochure"
            />
          </div>
        </div>
      )} */}
    </section>
  );
};

export default Home;

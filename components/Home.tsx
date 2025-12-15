import React from "react";
import { PageId } from "../types";

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-16 lg:py-20">
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
            <div className="flex flex-col items-start ">
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

              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-60 inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-3 text-xs font-black uppercase tracking-[0.22em] text-slate-700 transition-all duration-200 hover:border-accent-primary hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
              >
                Download Brochure
              </a> */}
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
                  Keynote Speaker <br /> Oral Presentations
                  <br /> Poster Presentations <br />
                  Drawing Competition
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Poster */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-accent-secondary/10 blur-2xl transition-all duration-500 lg:group-hover:bg-accent-secondary/20" />
            <div className="relative">
              {/* <img
                src="https://cdn.jsdelivr.net/gh/VasudevBarjadiya/sci-pi-assets/Sci-Pi_Webpage.png"
                alt="SCI-π Poster"
                className="w-full max-w-[480px] rounded-2xl border border-slate-100 bg-white shadow-2xl md:rounded-3xl lg:ml-auto"
                loading="lazy"
              /> */}
              <img
                src="home_poster.png"
                alt="SCI-π Poster"
                className="w-full max-w-[480px] rounded-2xl border border-slate-100 bg-white shadow-2xl md:rounded-3xl lg:ml-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

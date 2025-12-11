import React from "react";

const Guidelines: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 md:space-y-14 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-4xl font-black text-accent-primary font-display">
          Participation Guidelines
        </h2>
        <p className="text-slate-500 font-medium text-sm md:text-base">
          Everything you need to know to prepare for the event.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Oral Presentation */}
        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-accent-primary flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-black text-accent-primary">
                  Oral Presentation
                </h3>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                  Abstract submission
                </p>
              </div>
            </div>
            <div className="text-sm text-right text-slate-500">
              <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 border border-red-100">
                Deadline:
                <span className="ml-1 font-bold">10 February, 2026</span>
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-accent-secondary">
                Abstract
              </h4>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                We invite abstract submissions for oral presentations on the
                theme
                <span className="font-semibold text-accent-primary">
                  {" "}
                  'Emerging Trends in Science and Technology'.
                </span>{" "}
                The abstract should not exceed 300 words and must include up to
                five keywords. Participants may choose any relevant subject
                within the theme. The last date for submission is 10th February,
                2026. Submissions received after the deadline will not be
                considered.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-accent-secondary">
                Abstract Submission Format
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 font-medium list-disc list-inside ">
                <li>
                  <span className="font-bold">Font:</span> Times New Roman
                </li>
                <li>
                  <span className="font-bold">Title:</span> 14-pt, bold,
                  UPPERCASE, centred
                </li>
                <li>
                  <span className="font-bold">Authors:</span> 12-pt, bold,
                  centred
                </li>
                <li>
                  <span className="font-bold">Affiliations:</span> 12-pt,
                  italics, centred
                </li>
                <li>
                  <span className="font-bold">Abstract Text:</span> 11-pt,
                  normal, justified, single-spaced
                </li>
                <li>
                  <span className="font-bold">Word Limit:</span> 250–300 words
                </li>
                <li>
                  <span className="font-bold">Keywords:</span> 3–5 keywords in
                  11-pt italics
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-amber-100 bg-amber-50 text-amber-900 text-xs md:text-sm font-medium">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Abstract must be submitted via mail on or
                before 10th February 2026 to{" "}
                <a
                  href="mailto:punit.vadher@darshan.ac.in"
                  className="underline font-black break-all"
                >
                  punit.vadher@darshan.ac.in
                </a>
                .
              </li>
            </ul>
          </div>
        </section>

        {/* Poster */}
        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-accent-secondary flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-black text-accent-primary">
                  Poster Guidelines
                </h3>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                  Digital poster
                </p>
              </div>
            </div>
            <div className="text-sm text-right text-slate-500">
              <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 border border-red-100">
                Deadline:
                <span className="ml-1 font-bold">20 February, 2026</span>
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <ul className="space-y-3 text-slate-600 font-medium text-sm list-disc list-inside">
              <li>
                Posters must be digitally designed and printed on a single page
                only.
              </li>
              <li>
                Exact size: <strong>3 ft × 2 ft (width × height)</strong> —
                strictly mandatory; any other dimension will not be accepted.
              </li>
              <li>
                Posters may include images, tables, charts, and graphs to
                support the research content.
              </li>
              <li>Posters must be presented in English.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl border border-amber-100 bg-amber-50 text-amber-900 text-xs md:text-sm font-medium">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Handwritten posters or posters exceeding/altering the specified
                dimensions will be disqualified.
              </li>
              <li>
                Poster must be submitted via mail on or before 20th February
                2026 to{" "}
                <a
                  href="mailto:vasudev.barjadiya@darshan.ac.in"
                  className="underline font-bold break-all"
                >
                  vasudev.barjadiya@darshan.ac.in
                </a>
                .
              </li>
            </ul>
          </div>
        </section>

        {/* Drawing */}
        <section className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-black text-accent-primary">
                  Drawing Competition
                </h3>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                  On-campus activity
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ul className="space-y-3 text-slate-600 font-medium text-sm list-disc list-inside">
              <li>
                Participants may use any medium such as pencil, crayons,
                watercolours, acrylics, etc.
              </li>
              <li>
                Evaluation will be based on creativity, relevance to the theme
                of science and technology, artistic skill, and overall visual
                impact.
              </li>
              <li>
                Drawings must be completed within the given time limit at the
                venue.
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl border border-amber-100 bg-amber-50 text-amber-900 text-xs md:text-sm font-medium">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Only the drawing sheet provided at the competition venue must be
                used.
              </li>
              <li>
                No external sheets or pre-prepared artwork will be accepted.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Guidelines;

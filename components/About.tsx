import React from "react";

const About: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-black text-accent-primary font-display">
          About Symposium
        </h2>
        <p className="text-slate-500 font-medium">
          Celebrating National Science Day at Darshan University with SCI-π 2026.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
        <div className="space-y-6">
          <p className="text-lg text-justify text-slate-700 leading-relaxed font-medium">
            Sci-&pi; 2026 is a state-level symposium organized on the occasion
            of National Science Day to promote scientific thinking, research
            culture and innovation among UG, PG and Research Scholars. The event
            provides a formal platform to present conceptual and experimental
            work across General and Life Sciences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/50 space-y-6">
              <h3 className="text-xl font-bold text-accent-primary flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent-primary text-white flex items-center justify-center text-sm">
                  1
                </span>
                Objectives
              </h3>
              <ul className="space-y-3">
                {[
                  "Platform for innovative work",
                  "Interdisciplinary learning",
                  "Inspiring keynote talks",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-600 font-medium"
                  >
                    <svg
                      className="w-5 h-5 text-accent-secondary mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/50 space-y-6">
              <h3 className="text-xl font-bold text-accent-primary flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-accent-primary text-white flex items-center justify-center text-sm">
                  2
                </span>
                Who Can Participate
              </h3>
              <ul className="space-y-3">
                {[
                  "Undergraduate students (UG)",
                  "Postgraduate students (PG)",
                  "Research Scholars",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-600 font-medium"
                  >
                    <svg
                      className="w-5 h-5 text-accent-secondary mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

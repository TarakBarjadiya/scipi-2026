import React from "react";

const Tracks: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-black text-accent-primary font-display">
          Event Categories
        </h2>
        <p className="text-slate-500 font-medium">
          Diverse scientific disciplines covered in our symposium.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-accent-primary transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-accent-primary flex items-center justify-center mb-6 group-hover:bg-accent-primary group-hover:text-white transition-colors">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-accent-primary mb-2">
            Group A: General Science
          </h3>

          <div className="flex flex-wrap gap-2">
            {["Physics", "Chemistry", "Mathematics", "Computer Science"].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200"
                >
                  {t}
                </span>
              )
            )}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-accent-secondary transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 text-accent-secondary flex items-center justify-center mb-6 group-hover:bg-accent-secondary group-hover:text-white transition-colors">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-accent-secondary mb-2">
            Group B: Life Sciences
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Microbiology",
              "Biochemistry",
              "Biotechnology",
              "Botany",
              "Zoology",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;

import { PageId } from "@/types";
import React from "react";

interface GuidelinesProps {
  onNavigate: (page: PageId) => void;
}

const Registration: React.FC<GuidelinesProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-black text-accent-primary font-display">
          Registration
        </h2>
        <p className="text-slate-500 font-medium">
          Join the next generation of scientific innovators.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 flex flex-col items-center text-center space-y-3">
        <div className="w-20 h-20 rounded-3xl bg-blue-50 text-accent-secondary flex items-center justify-center">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </div>

        <div className="space-y-4 max-w-lg">
          <h3 className="text-2xl font-black text-accent-primary">
            Secure Your Spot
          </h3>
          <p className="text-slate-600 font-medium leading-relaxed text-justify">
            Registration is mandatory for all participants. UG and PG students
            can register without any fees, while Research Scholars have a
            minimal fee.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 w-full max-w-md">
          <div className="p-6 rounded-2xl my-2  bg-slate-50 border border-slate-200 space-y-2">
            <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider">
              UG / PG Students
            </p>
            <p className="text-accent-primary font-black text-xl">FREE</p>
          </div>
          <div className="p-6 rounded-2xl my-2 bg-slate-50 border border-slate-200 space-y-2">
            <p className="text-[10px] uppercase font-black text-slate-400 tracking-wider">
              Research Scholars
            </p>
            <p className="text-accent-secondary font-black text-xl">₹ 500</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-200 text-red-800 text-xs font-black uppercase tracking-wider">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <button onClick={() => onNavigate("guidelines")}>
            READ GUIDELINES
          </button>
        </div>

        <a
          href="https://forms.gle/1B8knBJJmhetYHZV6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-2 rounded-full bg-accent-primary text-white font-black text-base uppercase tracking-widest hover:bg-accent-secondary transition-all transform hover:-translate-y-1 shadow-2xl shadow-accent-primary/30"
        >
          Register Now
        </a>

        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest underline underline-offset-4 animate-underlinePulse">
          Last Date: 20 February 2026
        </p>
      </div>
    </div>
  );
};

export default Registration;

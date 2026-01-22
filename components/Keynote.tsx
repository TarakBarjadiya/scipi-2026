import React from "react";

const Keynote: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-4xl font-black text-accent-primary font-display">
          Keynote Speakers
        </h2>
        <p className="text-slate-500 font-medium">
          Inspiring scientific excellence and innovation.
        </p>
      </div>

      {/* Speakers Grid */}
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Speaker 1 */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Shadow layer */}
              <div className="absolute inset-0 rounded-full shadow-2xl"></div>

              {/* Circle + crop */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src="https://cdn.jsdelivr.net/gh/VasudevBarjadiya/sci-pi-assets/kn2.png"
                  alt="Dr. Sanjay Amrutiya"
                  className="w-full h-full object-cover scale-[1.05]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl lg:text-3xl font-black text-accent-primary">
                Dr. Sanjay Amrutiya
              </h3>
              <p className="text-accent-secondary font-semibold text-lg">
                Associate Professor | Mathematics
              </p>
              <p className="text-slate-600 font-medium">IIT Gandhinagar</p>
            </div>
          </div>

          {/* Speaker 2 */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full shadow-2xl"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src="https://cdn.jsdelivr.net/gh/VasudevBarjadiya/sci-pi-assets/kn1.png"
                  alt="Dr. Sougata Ghosh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl lg:text-3xl font-black text-accent-primary">
                Dr. Sougata Ghosh
              </h3>
              <p className="text-accent-secondary font-semibold text-lg">
                Associate Professor | Microbiology
              </p>
              <p className="text-slate-600 font-medium">
                RK University, Rajkot
              </p>
              <p className="text-yellow-700 font-semibold">
                (Top 2% Scientists)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keynote;

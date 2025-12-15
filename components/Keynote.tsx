import React from "react";

const Keynote: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-4xl font-black text-accent-primary font-display">
          Keynote Speakers
        </h2>
        <p className="text-slate-500 font-medium">
          Inspiring scientific excellence and innovation.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center md:items-stretch">
          {/* Image Container: Matches height of content on md+ screens */}
          <div className="w-full md:w-2/5 flex items-center justify-center shrink-0">
            <div className="relative w-64 md:w-full aspect-square max-w-[320px] lg:max-w-[400px]">
              <div className="absolute -inset-4 rounded-full opacity-20"></div>
              <img
                src="https://cdn.jsdelivr.net/gh/VasudevBarjadiya/sci-pi-assets/kn.jpeg"
                alt="Dr. Sougata Ghosh"
                className="relative w-full h-full rounded-full object-cover shadow-2xl mx-auto"
              />
            </div>
          </div>

          {/* Content Block: Defines the height on md+ screens */}
          <div className="grow space-y-6 py-4 text-center md:text-left flex flex-col justify-center">
            <div className="mb-4 md:mb-6">
              <h3 className="text-3xl lg:text-4xl font-black text-accent-primary leading-tight">
                Dr. Sougata Ghosh
              </h3>
              <p className="text-accent-secondary font-bold text-xl">
                Associate Professor, <br /> R. K. University, Rajkot
              </p>
            </div>

            <p className="text-lg lg:text-xl text-slate-700 leading-relaxed font-medium italic border-l-4 border-accent-secondary/30 pl-4">
              "Recent developments and emerging directions in Science and
              Technology."
            </p>

            <p className="text-slate-600 leading-relaxed text-justify text-base lg:text-lg">
              Dr. Sougata Ghosh, listed among World's Top 2% Scientists in 2022,
              2023 & 2024, is an Associate Professor in the Department of
              Microbiology, School of Science, RK University, India. He was
              Visiting Professor at Kasetsart University, Thailand and
              Northeastern University, USA. His area of research includes
              nanomedicine, drug discovery against infectious diseases,
              diabetes, oxidative stress and cancer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keynote;

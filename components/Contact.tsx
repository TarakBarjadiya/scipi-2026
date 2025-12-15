import React from "react";

const Contact: React.FC = () => {
  const contacts = [
    { name: "Mr. Punit Vadher", phone: "+91 96624 43859" },
    { name: "Dr. Priya Vithalani", phone: "+91 84603 57193" },
    { name: "Mr. Vasudev Barjadiya", phone: "+91 90164 27200" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-black text-accent-primary font-display">
          Get in Touch
        </h2>
        <p className="text-slate-500 font-medium">
          Reach out to the organizing committee for any queries.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 space-y-6">
          <h3 className="text-2xl font-black text-accent-primary">
            Organizing Committee
          </h3>
          <p className="text-slate-600 font-medium leading-relaxed text-justify">
            The symposium is organized by the{" "}
            <strong>Department of Humanities and Sciences</strong> and the{' '}
            <strong>Department of Microbiology</strong>, Darshan University,
            with support from faculty and staff members across both departments.
          </p>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
              Location
            </p>
            <p className="text-slate-800 font-bold">
              Darshan University, Rajkot–Morbi Highway, Rajkot – 363650, Gujarat
              (India)
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100 space-y-6">
          <h3 className="text-2xl font-black text-accent-primary">
            Contact Details
          </h3>
          <div className="space-y-4">
            {contacts.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl border border-blue-100"
              >
                <span className="font-bold text-slate-800">{c.name}</span>
                <a
                  href={`tel:${c.phone}`}
                  className="text-accent-secondary font-black hover:underline"
                >
                  {c.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const Schedule: React.FC = () => {
  const dates = [
    {
      label: "Symposium Date",
      value: "28 Feb 2026",
      color: "bg-stone-100 text-accent-primary",
    },
    {
      label: "Abstract Submission",
      value: "10 Feb 2026",
      color: "bg-yellow-50 text-yellow-600",
    },
    {
      label: "Registration Deadline",
      value: "20 Feb 2026",
      color: "bg-red-50 text-red-500",
    },
  ];

  const sessions = [
    {
      time: "09:00 AM – 09:30 AM",
      activity: "Registration and Kit Distribution",
    },
    { time: "09:30 AM – 10:30 AM", activity: "Inauguration of Symposium" },
    {
      time: "10:30 AM – 01:00 PM",
      activity: "Presentations & Drawing Competition",
    },
    { time: "01:00 PM – 02:00 PM", activity: "Lunch Break" },
    { time: "02:00 PM – 03:00 PM", activity: "Keynote Session" },
    {
      time: "03:00 PM – 04:00 PM",
      activity: "Prize Distribution & Valedictory",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h2 className="text-4xl font-black text-accent-primary font-display">
          Schedule
        </h2>
        <p className="text-slate-500 font-medium">
          Mark your calendars for these key event moments.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {dates.map((d, i) => (
          <div
            key={i}
            className={`p-6 rounded-3xl shadow-md ${d.color} space-y-1`}
          >
            <p className="text-[10px] uppercase font-black opacity-60 tracking-widest">
              {d.label}
            </p>
            <p className="text-lg font-black">{d.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl overflow-hidden shadow-xl border-slate-100">
        <div className="p-8 border-b border-slate-100 bg-slate-200">
          <h3 className="text-xl font-black text-accent-primary ">
            Tentative Programme Flow
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">
                  Time
                </th>
                <th className="px-8 py-4 text-xs font-black text-slate-400 uppercase tracking-widest">
                  Session Activity
                </th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s, i) => (
                <tr
                  key={i}
                  className="group hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
                >
                  <td className="px-8 py-5 text-accent-primary font-bold text-sm">
                    {s.time}
                  </td>
                  <td className="px-8 py-5 text-slate-700 font-medium text-sm transition-all">
                    {s.activity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-center text-amber-900 text-xs font-bold uppercase tracking-wider shadow-2xl">
        Certificates will be issued only to full-time present participants.
      </div>
    </div>
  );
};

export default Schedule;

import { CalendarX, Receipt, Users, Globe, Megaphone, BarChart3, ChevronRight } from "lucide-react";

const problems = [
  { icon: CalendarX, title: "Missed bookings" },
  { icon: Receipt, title: "Manual billing" },
  { icon: Users, title: "No client history" },
  { icon: BarChart3, title: "Staff mismanagement" },
  { icon: Globe, title: "No online presence" },
  { icon: Megaphone, title: "Weak marketing" },
  { icon: BarChart3, title: "High competition in Tier‑1 cities" },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 text-center">
          Running a salon shouldn’t feel chaotic.
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map(({ icon: Icon, title }) => (
            <div key={title} className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-white transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <div className="font-medium text-neutral-800">{title}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-800">
            See how we fix this <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

import { CalendarCheck2, UserRound, MessageSquare, Package, Wallet, BarChart3 } from "lucide-react";

const features = [
  {
    icon: CalendarCheck2,
    title: "Booking System",
    desc: "Online bookings, live staff availability, slot optimization, stylist preference, UPI payments, no‑show protection.",
  },
  {
    icon: UserRound,
    title: "CRM",
    desc: "Client profiles with photo, service history, skin/hair notes, tags, reminders, and visit tracking.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    desc: "Confirmations, reminders, upsells, review requests, renewals, birthday offers — fully automated.",
  },
  {
    icon: Wallet,
    title: "Staff Payroll",
    desc: "Attendance, shifts, commissions, dashboards, payouts and leaderboards designed for salons.",
  },
  {
    icon: Package,
    title: "Inventory + Retail",
    desc: "Purchase orders, low stock & expiry alerts, vendors, retail sales, auto stock deduction.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    desc: "Sales, profitability, performance, marketing ROI, no‑shows, sources — beautiful insights.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 text-center">Your Complete Salon Management & Growth Platform</h2>
        <p className="mt-4 text-neutral-600 text-center max-w-3xl mx-auto">
          A modern SaaS that automates bookings, CRM, staff & operations, marketing, reviews, payroll and inventory.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-neutral-200 bg-white hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-200 to-amber-200 text-rose-700 flex items-center justify-center mb-4">
                <Icon size={22} />
              </div>
              <div className="font-semibold text-neutral-900 text-lg">{title}</div>
              <p className="mt-2 text-neutral-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

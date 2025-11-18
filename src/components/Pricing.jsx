import { useState } from "react";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const price = annual ? 1499 : 2499;

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-3">
          <div className="text-3xl sm:text-4xl font-bold text-neutral-900 text-center">Simple pricing</div>
          <div className="inline-flex items-center gap-2 text-sm border border-neutral-200 rounded-full px-3 py-1 ml-3">
            <span className={!annual ? "font-semibold" : "text-neutral-500"}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className={`relative w-12 h-6 rounded-full mx-1 transition ${annual ? "bg-neutral-900" : "bg-neutral-300"}`}>
              <span className={`absolute top-0.5 ${annual ? "left-6" : "left-0.5"} w-5 h-5 bg-white rounded-full transition`} />
            </button>
            <span className={annual ? "font-semibold" : "text-neutral-500"}>Annual <span className="ml-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs">40% OFF</span></span>
          </div>
        </div>
        <p className="mt-3 text-neutral-600 text-center">Switch anytime. No hidden fees.</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-rose-200 bg-rose-50/60">
            <div className="text-sm inline-flex px-2 py-1 rounded-full bg-white border border-rose-200 text-rose-700">Best for trying out the whole system</div>
            <div className="mt-3 text-2xl font-semibold">Free Trial — 30 Days</div>
            <ul className="mt-4 space-y-2 text-neutral-700 text-sm">
              {[
                "All features unlocked",
                "Support included",
                "Website builder",
                "Unlimited bookings",
                "WhatsApp automation (limited credits)",
              ].map(x => <li key={x}>✔ {x}</li>)}
            </ul>
            <button className="mt-6 w-full rounded-full bg-neutral-900 text-white font-semibold py-3">Start Free Trial</button>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-200 bg-white">
            <div className="text-sm inline-flex px-2 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700">Most Popular</div>
            <div className="mt-3 text-2xl font-semibold">Premium Plan</div>
            <div className="mt-2 text-5xl font-extrabold tracking-tight">₹{price}<span className="text-base font-medium text-neutral-500">/mo</span></div>
            <div className="text-sm text-neutral-500">{annual ? "billed annually" : "billed monthly"}</div>
            <ul className="mt-4 space-y-2 text-neutral-700 text-sm">
              {[
                "Full salon management suite",
                "Unlimited staff",
                "Unlimited clients",
                "Unlimited bookings",
                "Unlimited SMS/WhatsApp automations",
                "Advanced AI marketing",
                "Inventory & payroll",
                "Dedicated support",
              ].map(x => <li key={x}>✔ {x}</li>)}
            </ul>
            <button className="mt-6 w-full rounded-full bg-neutral-900 text-white font-semibold py-3">Get Started Now</button>
            <div className="mt-4 text-center text-sm text-neutral-500">Compare plans</div>
          </div>
        </div>
      </div>
    </section>
  );
}

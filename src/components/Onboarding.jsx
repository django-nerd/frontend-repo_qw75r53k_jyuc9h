import { useState } from "react";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    phone: "",
    otp: "",
    salonName: "",
    category: "Salon",
    city: "",
    logo: null,
    services: "Haircut, Facial, Manicure",
  });

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  return (
    <section id="onboarding" className="py-20 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="p-6 rounded-2xl border border-neutral-200 bg-white">
          <div className="text-2xl font-bold">Get started in 2 minutes</div>
          <p className="text-neutral-600">Ultra-simple onboarding — your dashboard unlocks instantly</p>

          {step === 1 && (
            <div className="mt-6 grid gap-4">
              <div>
                <label className="text-sm text-neutral-600">Phone number</label>
                <input className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2" placeholder="Enter phone number" value={form.phone} onChange={e => update("phone", e.target.value)} />
              </div>
              <button onClick={() => setStep(2)} className="rounded-xl bg-neutral-900 text-white font-semibold py-3">Send OTP</button>
            </div>
          )}

          {step === 2 && (
            <div className="mt-6 grid gap-4">
              <div>
                <label className="text-sm text-neutral-600">Enter OTP</label>
                <input className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2" placeholder="6-digit OTP" value={form.otp} onChange={e => update("otp", e.target.value)} />
              </div>
              <button onClick={() => setStep(3)} className="rounded-xl bg-neutral-900 text-white font-semibold py-3">Verify</button>
            </div>
          )}

          {step === 3 && (
            <div className="mt-6 grid gap-4">
              <div>
                <label className="text-sm text-neutral-600">Salon name</label>
                <input className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2" placeholder="e.g., Glow Studio" value={form.salonName} onChange={e => update("salonName", e.target.value)} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-neutral-600">Category</label>
                  <select className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2" value={form.category} onChange={e => update("category", e.target.value)}>
                    {["Salon","Spa","Makeup Artist","Nail Studio","Barbershop"].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-sm text-neutral-600">City</label>
                  <input className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2" placeholder="e.g., Pune" value={form.city} onChange={e => update("city", e.target.value)} />
                </div>
              </div>
              <div>
                <label className="text-sm text-neutral-600">Logo</label>
                <input type="file" className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2" onChange={e => update("logo", e.target.files?.[0] || null)} />
              </div>
              <div>
                <label className="text-sm text-neutral-600">Main services</label>
                <input className="mt-1 w-full border border-neutral-300 rounded-xl px-3 py-2" value={form.services} onChange={e => update("services", e.target.value)} />
              </div>
              <button onClick={() => setStep(4)} className="rounded-xl bg-neutral-900 text-white font-semibold py-3">Finish</button>
            </div>
          )}

          {step === 4 && (
            <div className="mt-6 text-center">
              <div className="text-2xl font-semibold">Welcome to Beauty OS</div>
              <p className="text-neutral-600">Your dashboard is unlocked. Explore bookings, CRM, marketing and more.</p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                {["Bookings","CRM","WhatsApp","Inventory","Payroll","Analytics"].map(x => (
                  <div key={x} className="px-3 py-2 rounded-xl border border-neutral-200 bg-neutral-50">{x}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

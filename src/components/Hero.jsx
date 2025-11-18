export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-rose-200 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-pink-100 blur-3xl opacity-60" />
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-300/60 bg-white/80 text-rose-700 text-sm">
          The All-In-One Beauty & Wellness Growth OS
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
          Grow Your Salon 10× Faster
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-amber-500"> with the All‑In‑One Beauty Business OS</span>
        </h1>
        <p className="mt-6 text-lg text-neutral-600 max-w-3xl mx-auto">
          Bookings • CRM • Automation • Payroll • Inventory • Website • Marketing
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-800">
            Start Free Trial — 30 Days
          </button>
          <button className="px-6 py-3 rounded-full border border-neutral-300 font-medium hover:bg-neutral-100">
            Watch Demo
          </button>
        </div>
        <p className="mt-3 text-sm text-neutral-500">No card required</p>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 text-neutral-600">
          {[
            "Beauty salons",
            "Hair studios",
            "Nail studios",
            "Spas",
            "Makeup artists",
            "Home-based beauticians",
            "Small barbershops",
            "Franchise chains",
          ].map((item) => (
            <div key={item} className="px-3 py-2 rounded-xl bg-white/70 border border-neutral-200">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

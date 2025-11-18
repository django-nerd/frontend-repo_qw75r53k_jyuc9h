export default function SocialProof() {
  return (
    <section id="social" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-neutral-900 text-center">Loved by salons across India</h3>
        <p className="mt-3 text-neutral-600 text-center">Real stories of growth after switching to Beauty OS</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="p-6 rounded-2xl border border-neutral-200 bg-white">
              <div className="aspect-video rounded-xl bg-neutral-100 mb-4" />
              <p className="text-neutral-700">“In 60 days, our no‑shows dropped by 65% and monthly revenue grew 28% — the WhatsApp automation is a game changer.”</p>
              <div className="mt-4 text-sm text-neutral-500">Glow Studio • Pune</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

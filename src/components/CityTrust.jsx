export default function CityTrust() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-sm uppercase tracking-widest text-neutral-500">Made for India’s Fastest Growing Beauty Entrepreneurs</div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-neutral-700">
          {["Mumbai","Delhi","Bengaluru","Hyderabad","Pune","Chennai","Kolkata","Ahmedabad"].map(c => (
            <div key={c} className="px-3 py-2 rounded-xl border border-neutral-200 bg-neutral-50">{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

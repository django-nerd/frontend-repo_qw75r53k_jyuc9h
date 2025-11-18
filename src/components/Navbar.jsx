import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-300 via-rose-400 to-rose-500 shadow-inner" />
          <div className="text-xl font-semibold tracking-tight text-neutral-900">
            Beauty OS
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-neutral-700">
          <a href="#features" className="hover:text-neutral-900">Features</a>
          <a href="#pricing" className="hover:text-neutral-900">Pricing</a>
          <a href="#social" className="hover:text-neutral-900">Customers</a>
          <a href="#onboarding" className="hover:text-neutral-900">Get Started</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex px-4 py-2 text-sm font-medium rounded-full border border-neutral-300 hover:bg-neutral-100">Watch Demo</button>
          <button className="inline-flex px-4 py-2 text-sm font-semibold rounded-full bg-neutral-900 text-white hover:bg-neutral-800">Start Free Trial</button>
          <button className="md:hidden p-2 rounded-lg hover:bg-neutral-100" aria-label="Menu">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}

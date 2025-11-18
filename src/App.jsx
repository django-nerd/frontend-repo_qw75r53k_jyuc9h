import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import CityTrust from "./components/CityTrust";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";
import Onboarding from "./components/Onboarding";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <CityTrust />
      <SocialProof />
      <Pricing />
      <Onboarding />
      <footer className="py-12 border-t border-neutral-200 text-center text-neutral-500">
        Made for India’s Beauty & Wellness industry • Reseller & Affiliate programs available
      </footer>
    </div>
  );
}

export default App;

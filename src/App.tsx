import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/navigation/Navbar';
import { Background } from '@/components/common/Background';
import { ResponsiveHelper } from '@/components/common/ResponsiveHelper';
import { Playground } from '@/pages/Playground';
import { Platform } from '@/pages/Platform';

import { Hero } from '@/components/sections/Hero';
import { WhySection } from '@/components/sections/why/WhySection';
import { ArchitectureSection } from '@/components/sections/architecture/ArchitectureSection';
import { CapabilitiesSection } from '@/components/sections/capabilities/CapabilitiesSection';
import { CTASection } from '@/components/sections/cta/CTASection';
import { Footer } from '@/components/layout/Footer';

function Home() {
  return (
    <>
      <Hero />
      <WhySection />
      <ArchitectureSection />
      <CapabilitiesSection />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Background />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/internal/playground" element={<Playground />} />
          {/* Other routes will be implemented in subsequent phases */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ResponsiveHelper />
    </div>
  );
}

export default App;

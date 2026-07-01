import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Background } from '@/components/common/Background';
import { ResponsiveHelper } from '@/components/common/ResponsiveHelper';
import { Playground } from '@/pages/Playground';

// Placeholder Home Component
function Home() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="text-5xl font-heading font-bold text-heading">LoCoML Platform</h1>
        <p className="mt-4 text-xl text-paragraph">Architecture Phase 1 Complete.</p>
      </div>
    </div>
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

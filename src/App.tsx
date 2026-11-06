import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { useLenis } from "./hooks/useLenis";
import { ScrollProgress } from "./components/motion/ScrollProgress";
import { ScrollToTop } from "./components/motion/ScrollToTop";
import { CustomCursor } from "./components/motion/CustomCursor";
import { Navbar } from "./components/navigation/Navbar";
import { Footer } from "./components/sections/Footer";
import { ScrollToTopOnRoute } from "./components/navigation/ScrollToTopOnRoute";

// Primary Consulting Pages
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { CustomersPage } from "./pages/CustomersPage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { InsightsPage } from "./pages/InsightsPage";
import { InsightDetailPage } from "./pages/InsightDetailPage";
import { SpeakingPage } from "./pages/SpeakingPage";
import { ContactPage } from "./pages/ContactPage";

// Secondary Technical Deep-Dives
import { SiliconToSystemPage } from "./pages/SiliconToSystemPage";
import { PackagingPage } from "./pages/PackagingPage";
import { EcosystemPage } from "./pages/EcosystemPage";

function AppContent() {
  const location = useLocation();

  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useLenis(true);

  return (
    <div className="relative min-h-screen bg-[#08090B] text-[#FAFAF8] overflow-x-hidden selection:bg-[#C9A46C]/30 selection:text-white flex flex-col justify-between">
      {/* Automatically reset window scroll position when changing routes */}
      <ScrollToTopOnRoute />

      {/* Global Scroll Progress Bar */}
      <ScrollProgress />

      {/* Floating Scroll to Top button at bottom-right */}
      <ScrollToTop />

      {/* Subtle Interactive Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Persistent Consulting Navbar */}
      <Navbar />

      {/* Routed Page Content with subtle fade-in transition */}
      <main id="main-content" className="flex-1 flex flex-col">
        <div key={location.pathname} className="animate-page-fade-in flex-1 flex flex-col">
          <Routes location={location}>
            {/* Primary Consulting Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Services Overview & Dedicated Detail Pages */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            
            {/* Slugs redirects for backwards compatibility */}
            <Route
              path="/services/tech-business-dev"
              element={<Navigate to="/services/technology-business-development" replace />}
            />
            <Route
              path="/services/manufacturing-scaleup"
              element={<Navigate to="/services/manufacturing-scale-up" replace />}
            />

            <Route path="/customers" element={<CustomersPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:id" element={<InsightDetailPage />} />
            <Route path="/speaking" element={<SpeakingPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Preserved Secondary Deep-Dive Technical Routes */}
            <Route path="/silicon-to-system" element={<SiliconToSystemPage />} />
            <Route path="/packaging" element={<PackagingPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/journey" element={<Navigate to="/experience" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      {/* Executive Consulting Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { WhatsAppFab } from "./components/WhatsAppFab.jsx";
import { useScrollRevealAll } from "./hooks/useScrollReveal.js";
import { useNavProgress } from "./hooks/useNavProgress.js";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import InteriorsPage from "./pages/InteriorsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function PageWrapper({ children }) {
  useScrollRevealAll();
  return children;
}

export default function App() {
  const progress = useNavProgress();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Reading progress bar */}
      <div className="nav-progress" style={{ width: `${progress}%` }} />
      <ScrollToTop />
      <Header />
      <main className="flex-1 pt-18">
        <Routes>
          <Route path="/"          element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/products"  element={<PageWrapper><ProductsPage /></PageWrapper>} />
          <Route path="/interiors" element={<PageWrapper><InteriorsPage /></PageWrapper>} />
          <Route path="/about"     element={<PageWrapper><AboutPage /></PageWrapper>} />
          <Route path="/contact"   element={<PageWrapper><ContactPage /></PageWrapper>} />
          <Route path="*"          element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

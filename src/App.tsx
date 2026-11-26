import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import ContactPage from "./presentation/pages/Contact/ContactPage";
import { Toaster } from 'sonner';
import ScrollToTop from "./components/ScrollToTop";
import Drag from "./presentation/components/Drag";

function CanonicalLink() {
  const { pathname } = useLocation();

  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) return;
    link.href = `https://diegobottegoni.github.io${pathname === "/" ? "/" : pathname}`;
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <CanonicalLink />
      <Toaster position="top-right" className="z-100" />
      <ScrollToTop />
      <Drag />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
export default App
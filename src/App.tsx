import { Routes, Route } from "react-router-dom";
import Home from "@/components/Home/Home";
import ContactPage from "@/pages/Contact/ContactPage";
import { Toaster } from 'sonner';
import ScrollToTop from "@/components/ScrollToTop";
import Drag from "@/components/Drag";


function App() {
  return (
    <>
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
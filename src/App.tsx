import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import ContactPage from "./presentation/pages/Contact/ContactPage";
import { Toaster } from 'sonner';


function App() {
  return (
    <>
      <Toaster position="top-right" className="z-100" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
export default App
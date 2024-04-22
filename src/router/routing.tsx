import NotFound from "@/pages/errorPages/notFound";
import Dashboard from "@/pages/public/dashboard";
import Devis from "@/pages/public/devis";
import Vitrine from "@/pages/public/vitrine";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Vitrine />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/devis" element={<Devis />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

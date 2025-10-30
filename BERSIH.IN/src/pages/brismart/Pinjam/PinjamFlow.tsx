import { Routes, Route } from "react-router-dom";
import PinjamHome from "./PinjamHome";
import PinjamForm from "./PinjamForm";
import ConfirmationScreen from "./ConfirmationScreen";
import InvoicePopup from "./InvoicePopup";

export default function PinjamFlow() {
  return (
    <Routes>
      <Route path="/" element={<PinjamHome />} />
      <Route path="/form" element={<PinjamForm />} />
      <Route path="/confirmation" element={<ConfirmationScreen />} />
      <Route path="/invoice" element={<InvoicePopup />} />
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";
import InputScreen from "./InputScreen";
import PackageScreen from "./PackageScreen";
import PaymentScreen from "./PaymentScreen";
import ConfirmationScreen from "./ConfirmationScreen";
import InvoicePopup from "./InvoicePopup";

export default function BPJSFlow() {
  return (
    <Routes>
      <Route path="/" element={<InputScreen />} />
      <Route path="/package" element={<PackageScreen />} />
      <Route path="/payment" element={<PaymentScreen />} />
      <Route path="/confirmation" element={<ConfirmationScreen />} />
      <Route path="/invoice" element={<InvoicePopup />} />
    </Routes>
  );
}

import { Routes, Route } from "react-router-dom";
import SembakoHome from "./SembakoHome";
import ConfirmationScreen from "./ConfirmationScreen";

export default function SembakoFlow() {
  return (
    <Routes>
      <Route path="/" element={<SembakoHome />} />
      <Route path="/confirmation" element={<ConfirmationScreen />} />
    </Routes>
  );
}

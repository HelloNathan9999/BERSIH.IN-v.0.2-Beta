import { Routes, Route } from "react-router-dom";
import VoucherList from "./VoucherList";
import VoucherDetail from "./VoucherDetail";
import RewardHistory from "./RewardHistory";
import RewardDetail from "./RewardDetail";

export default function VoucherFlow() {
  return (
    <Routes>
      <Route path="/" element={<VoucherList />} />
      <Route path=":id" element={<VoucherDetail />} />
      <Route path="reward" element={<RewardHistory />} />
      <Route path="reward/:id" element={<RewardDetail />} />
    </Routes>
  );
}

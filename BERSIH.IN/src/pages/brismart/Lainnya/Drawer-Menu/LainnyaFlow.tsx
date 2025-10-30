import React from "react";
import { Routes, Route } from "react-router-dom";
import LainnyaHome from "../LainnyaHome";
import ServiceDetailScreen from "../ServiceDetailScreen";
import CheckoutScreen from "../CheckoutScreen";
import ConfirmationScreen from "./ConfirmationScreen";

export default function LainnyaFlow() {
  return (
    <Routes>
      <Route path="/" element={<LainnyaHome />} />
      <Route path="/detail/:id" element={<ServiceDetailScreen />} />
      <Route path="/checkout/:id" element={<CheckoutScreen />} />
      <Route path="/confirmation" element={<ConfirmationScreen />} />
    </Routes>
  );
}

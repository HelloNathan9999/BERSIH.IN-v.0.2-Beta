import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const EmergencyScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Fitur Darurat</h2>
      <Button onClick={() => navigate("/emergency/ambulance")}>Cari Ambulans Terdekat</Button>
      <Button onClick={() => navigate("/emergency/apotek")}>Cari Apotek Terdekat</Button>
      <Button onClick={() => navigate("/emergency/pertolongan-pertama")}>Panduan Pertolongan Pertama</Button>
    </div>
  );
};

export default EmergencyScreen;

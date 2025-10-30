import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const VerifikasiOTP: React.FC = () => {
  const [otp, setOtp] = useState("");

  const kirimOTP = () => {
    alert("OTP terkirim!");
  };

  const verifikasiOTP = () => {
    // nanti connect ke Supabase
    alert(`OTP ${otp} berhasil diverifikasi!`);
  };

  return (
    <div className="p-4 space-y-4">
      <Button onClick={kirimOTP}>Kirim OTP</Button>
      <Input placeholder="Masukkan OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <Button onClick={verifikasiOTP}>Verifikasi</Button>
    </div>
  );
};

export default VerifikasiOTP;

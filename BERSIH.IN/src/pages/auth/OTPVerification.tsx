import { useState } from "react";
import { Button, Input } from "@/components/ui";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp === "123456") {
      alert("Verifikasi berhasil!");
    } else {
      alert("Kode OTP salah.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center px-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Verifikasi OTP</h1>

      <Input placeholder="Masukkan Kode OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <Button onClick={handleVerify} className="mt-6 w-full">
        Verifikasi
      </Button>
    </div>
  );
}

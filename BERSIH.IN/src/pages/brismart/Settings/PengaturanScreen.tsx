import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PengaturanScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Profil</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={() => navigate("/settings/edit-profile")}>Edit Profil</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Keamanan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button onClick={() => navigate("/settings/ganti-password")}>Ganti Password</Button>
          <Button onClick={() => navigate("/settings/verifikasi-otp")}>Verifikasi OTP</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PengaturanScreen;

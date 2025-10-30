import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PulsaScreen() {
  const navigate = useNavigate();
  const [nomor, setNomor] = useState("");
  const [nominal, setNominal] = useState("");

  const handleSubmit = () => {
    if (!nomor || !nominal) {
      alert("Isi nomor HP dan nominal pulsa dulu, bro!");
      return;
    }
    alert(`Pulsa sebesar ${nominal} berhasil dikirim ke ${nomor} ⚡`);
  };

  return (
    <AppLayout>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-green-700">Isi Pulsa</h1>
        </div>

        {/* Card Utama */}
        <Card>
          <CardHeader>
            <CardTitle>Masukkan Detail Pulsa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nomor HP</label>
              <Input
                placeholder="08xxxxxxxxxx"
                value={nomor}
                onChange={(e) => setNomor(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Nominal Pulsa</label>
              <Input
                placeholder="Contoh: 10.000"
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
              />
            </div>

            <Button className="w-full mt-2" onClick={handleSubmit}>
              Beli Pulsa
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

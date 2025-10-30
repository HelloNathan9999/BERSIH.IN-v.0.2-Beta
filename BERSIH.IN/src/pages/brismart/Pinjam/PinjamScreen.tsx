import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PinjamScreen() {
  const navigate = useNavigate();
  const [jumlah, setJumlah] = useState("");
  const [alasan, setAlasan] = useState("");

  const handleSubmit = () => {
    if (!jumlah || !alasan) {
      alert("Isi jumlah pinjaman dan alasan dulu, bro!");
      return;
    }
    alert(`Pinjaman sebesar ${jumlah} berhasil diajukan dengan alasan: ${alasan} 💰`);
  };

  return (
    <AppLayout>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-green-700">Ajukan Pinjaman</h1>
        </div>

        {/* Card Utama */}
        <Card>
          <CardHeader>
            <CardTitle>Form Pinjaman</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium">Jumlah Pinjaman (Rp)</label>
              <Input
                placeholder="Contoh: 200.000"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Alasan Pinjaman</label>
              <Input
                placeholder="Contoh: Membayar tagihan"
                value={alasan}
                onChange={(e) => setAlasan(e.target.value)}
              />
            </div>

            <Button className="w-full mt-2" onClick={handleSubmit}>
              Ajukan Pinjaman
            </Button>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}

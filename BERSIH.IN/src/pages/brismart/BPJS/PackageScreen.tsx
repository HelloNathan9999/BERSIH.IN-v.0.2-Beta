import { useLocation, useNavigate } from "react-router-dom";
import { Button, Card, CardContent } from "@/components/ui";

export default function PackageScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { bpjsNumber } = location.state || {};

  const tagihan = {
    nama: "Nathan Wijaya",
    periode: "Oktober 2025",
    jumlah: 150000,
  };

  const handleNext = () => {
    navigate("/brismart/bpjs/payment", { state: { bpjsNumber, tagihan } });
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-center">Detail Tagihan BPJS</h2>
      <Card>
        <CardContent className="space-y-2">
          <p>Nama: {tagihan.nama}</p>
          <p>Periode: {tagihan.periode}</p>
          <p>Total Tagihan: Rp {tagihan.jumlah.toLocaleString()}</p>
        </CardContent>
      </Card>
      <Button className="w-full" onClick={handleNext}>
        Lanjut ke Pembayaran
      </Button>
    </div>
  );
}

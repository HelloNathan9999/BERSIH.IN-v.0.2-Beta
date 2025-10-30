import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Button } from "@/components/ui";

export default function ConfirmationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userId, amount, duration } = location.state || {};

  const handleConfirm = () => {
    navigate("/brismart/pinjam/invoice", {
      state: { userId, amount, duration },
    });
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-center">Konfirmasi Pinjaman</h2>
      <Card>
        <CardContent className="space-y-2">
          <p>ID User: {userId}</p>
          <p>Jumlah Pinjaman: Rp {Number(amount).toLocaleString()}</p>
          <p>Jangka Waktu: {duration} Hari</p>
          <p>Biaya Admin: Rp {(Number(amount) * 0.02).toLocaleString()}</p>
          <p>Total Pengembalian: Rp {(Number(amount) * 1.02).toLocaleString()}</p>
        </CardContent>
      </Card>
      <Button className="w-full" onClick={handleConfirm}>
        Konfirmasi & Ajukan
      </Button>
    </div>
  );
}

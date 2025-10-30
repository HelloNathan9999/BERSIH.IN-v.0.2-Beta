import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Button } from "@/components/ui";

export default function ConfirmationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart, total } = location.state || {};

  const handleConfirm = () => {
    alert("Pesanan berhasil!");
    navigate("/brismart");
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-center">Konfirmasi Pesanan</h2>
      <div className="space-y-2">
        {cart?.map((item: any, idx: number) => (
          <Card key={idx}>
            <CardContent className="flex justify-between">
              <p>{item.name}</p>
              <p>Rp {item.price.toLocaleString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-right font-bold">Total: Rp {total.toLocaleString()}</p>
      <Button className="w-full mt-4" onClick={handleConfirm}>
        Selesaikan Pesanan
      </Button>
    </div>
  );
}

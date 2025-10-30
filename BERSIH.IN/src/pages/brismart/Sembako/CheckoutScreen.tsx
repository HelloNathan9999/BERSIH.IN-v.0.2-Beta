import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CheckoutScreenProps {
  cartItems: Product[];
}

export default function CheckoutScreen({ cartItems }: CheckoutScreenProps) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setIsProcessing(true);
    setTimeout(() => {
      alert(`Checkout berhasil! Total bayar: Rp ${total.toLocaleString()} 🎉`);
      setIsProcessing(false);
      navigate(-1);
    }, 1000);
  };

  return (
    <AppLayout>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-green-700">Checkout</h1>
        </div>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex justify-between">
                <span>{item.name}</span>
                <span>Rp {item.price.toLocaleString()}</span>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardContent className="flex justify-between font-bold">
              <span>Total</span>
              <span>Rp {total.toLocaleString()}</span>
            </CardContent>
          </Card>

          <Button className="w-full" onClick={handleCheckout} disabled={isProcessing}>
            {isProcessing ? "Proses..." : "Bayar Sekarang"}
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}

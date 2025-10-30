import { Button } from "@/components/ui";

interface PaymentScreenProps {
  meterId: string;
  billId: string;
  onPay: () => void;
}

export default function PaymentScreen({ meterId, billId, onPay }: PaymentScreenProps) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pembayaran PLN</h1>
      <p>ID Meter / No. Pelanggan: {meterId}</p>
      <p>Tagihan: {billId}</p>
      <Button className="mt-4" onClick={onPay}>
        Bayar Sekarang
      </Button>
    </div>
  );
}

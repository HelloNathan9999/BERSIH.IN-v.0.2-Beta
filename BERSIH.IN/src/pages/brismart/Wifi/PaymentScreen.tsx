import { Button } from "@/components/ui";

interface PaymentScreenProps {
  account: string;
  billId: string;
  onPay: () => void;
}

export default function PaymentScreen({ account, billId, onPay }: PaymentScreenProps) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pembayaran WiFi</h1>
      <p>ID Pelanggan: {account}</p>
      <p>Tagihan: {billId}</p>
      <Button className="mt-4" onClick={onPay}>
        Bayar Sekarang
      </Button>
    </div>
  );
}

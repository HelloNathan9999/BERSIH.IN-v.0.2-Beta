import { Button } from "@/components/ui";

interface PaymentScreenProps {
  phone: string;
  packageId: string;
  onPay: () => void;
}

export default function PaymentScreen({ phone, packageId, onPay }: PaymentScreenProps) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Pembayaran Pulsa</h1>
      <p>Nomor Telepon: {phone}</p>
      <p>Paket Pulsa: {packageId}</p>
      <Button className="mt-4" onClick={onPay}>
        Bayar Sekarang
      </Button>
    </div>
  );
}

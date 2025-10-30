import { Dialog, Button } from "@/components/ui";

interface InvoicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  phone: string;
  packageId: string;
}

export default function InvoicePopup({ isOpen, onClose, phone, packageId }: InvoicePopupProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">Invoice Pulsa</h2>
        <p>Nomor: {phone}</p>
        <p>Paket: {packageId}</p>
        <Button className="mt-4" onClick={onClose}>Tutup</Button>
      </div>
    </Dialog>
  );
}

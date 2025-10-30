import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface Props {
  bank: {
    nama: string;
    alamat: string;
    jarak: string;
    koordinat: string;
  };
  onClose: () => void;
}

const BankSampahDetail: React.FC<Props> = ({ bank, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-11/12 max-w-md space-y-3">
        <h2 className="text-xl font-bold">{bank.nama}</h2>
        <p className="text-sm text-muted-foreground">{bank.alamat}</p>
        <p className="text-sm text-green-600">Jarak: {bank.jarak}</p>

        <div className="flex items-center justify-center my-3">
          <MapPin className="text-green-600 mr-2" />
          <span className="text-sm font-medium">{bank.koordinat}</span>
        </div>

        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={() =>
              window.open(
                `https://www.google.com/maps?q=${bank.koordinat}`,
                "_blank"
              )
            }
          >
            Buka di Maps
          </Button>
          <Button onClick={onClose} className="bg-green-600 text-white">
            Tutup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BankSampahDetail;

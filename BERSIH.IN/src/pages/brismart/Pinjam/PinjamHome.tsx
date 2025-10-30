import { Button, Card, CardContent } from "@/components/ui";
import { useNavigate } from "react-router-dom";

export default function PinjamHome() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/brismart/pinjam/form");
  };

  return (
    <div className="p-6 space-y-4 text-center">
      <h1 className="text-xl font-bold">Pinjam Saldo dengan Sampah</h1>
      <p className="text-gray-600 text-sm">
        Tukarkan sampahmu untuk meminjam saldo mulai dari Rp200.000 hingga Rp1.000.000
      </p>
      <Card className="mt-4">
        <CardContent>
          <ul className="text-left list-disc pl-6 space-y-1 text-sm">
            <li>Limit pinjaman hingga Rp1.000.000</li>
            <li>Tenor 7 – 30 hari</li>
            <li>Tanpa bunga, hanya biaya admin ringan</li>
          </ul>
        </CardContent>
      </Card>
      <Button className="w-full mt-4" onClick={handleStart}>
        Ajukan Pinjaman
      </Button>
    </div>
  );
}

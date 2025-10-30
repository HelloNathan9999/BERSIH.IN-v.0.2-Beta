import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AppLayout from "@/components/layout/AppLayout";

export default function BRISmartIndex() {
  const menuItems = [
    { name: "Kuota", path: "/brismart/kuota" },
    { name: "Pulsa", path: "/brismart/pulsa" },
    { name: "WiFi", path: "/brismart/wifi" },
    { name: "PLN", path: "/brismart/pln" },
    { name: "PDAM", path: "/brismart/pdam" },
    { name: "BPJS", path: "/brismart/bpjs" },
    { name: "Pinjam", path: "/brismart/pinjam" },
    { name: "Sembako", path: "/brismart/sembako" },
  ];

  return (
    <AppLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-green-700">BRISMART</h1>
        <p className="text-gray-600 mb-6">
          Pilih layanan yang ingin kamu gunakan.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {menuItems.map((item) => (
            <Card
              key={item.name}
              className="hover:shadow-lg transition-all cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-green-700">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link to={item.path}>
                  <Button className="w-full flex justify-between items-center">
                    Buka <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

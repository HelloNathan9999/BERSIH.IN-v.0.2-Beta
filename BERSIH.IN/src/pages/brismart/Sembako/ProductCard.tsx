import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  addToCart: (id: number) => void;
}

export default function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-green-700">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="text-gray-700">Harga: Rp {product.price.toLocaleString()}</p>
        <Button onClick={() => addToCart(product.id)}>Tambah ke Keranjang</Button>
      </CardContent>
    </Card>
  );
}

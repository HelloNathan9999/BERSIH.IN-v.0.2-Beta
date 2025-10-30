import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import ProductCard from "./ProductCard";
import CategoryBar from "./CategoryBar";
import { Button } from "@/components/ui/button";

const dummyProducts = [
  { id: 1, name: "Tas Daur Ulang", price: 75000, category: "Tas" },
  { id: 2, name: "Botol Plastik Bekas", price: 5000, category: "Botol" },
  { id: 3, name: "Kertas Bekas", price: 2000, category: "Kertas" },
  { id: 4, name: "Mainan Daur Ulang", price: 45000, category: "Mainan" },
];

export default function BelanjaHome() {
  const [cart, setCart] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const addToCart = (id: number) => setCart([...cart, id]);

  const filteredProducts = selectedCategory
    ? dummyProducts.filter((p) => p.category === selectedCategory)
    : dummyProducts;

  return (
    <AppLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Belanja Daur Ulang</h1>

        <CategoryBar
          categories={["Tas", "Botol", "Kertas", "Mainan"]}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-2 gap-4 mt-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        <Button className="fixed bottom-4 right-4 bg-green-700 text-white px-4 py-2 rounded-full shadow-lg">
          Keranjang ({cart.length})
        </Button>
      </div>
    </AppLayout>
  );
}

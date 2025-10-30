import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import ProductCard from "./ProductCard";
import DrawerMenu from "./DrawerMenu";
import { Card, CardContent } from "@/components/ui/card";

const dummyProducts = [
  { id: 1, name: "Beras 5kg", price: 65000 },
  { id: 2, name: "Minyak Goreng 2L", price: 30000 },
  { id: 3, name: "Gula 1kg", price: 15000 },
  { id: 4, name: "Telur 1kg", price: 25000 },
];

export default function SembakoHome() {
  const [cart, setCart] = useState<number[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
  };

  return (
    <AppLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Belanja Sembako</h1>
        <div className="grid grid-cols-2 gap-4">
          {dummyProducts.map((item) => (
            <ProductCard key={item.id} product={item} addToCart={addToCart} />
          ))}
        </div>

        <button
          className="fixed bottom-4 right-4 bg-green-700 text-white px-4 py-2 rounded-full shadow-lg"
          onClick={() => setDrawerOpen(true)}
        >
          Keranjang ({cart.length})
        </button>

        {drawerOpen && <DrawerMenu cart={cart} close={() => setDrawerOpen(false)} />}
      </div>
    </AppLayout>
  );
}

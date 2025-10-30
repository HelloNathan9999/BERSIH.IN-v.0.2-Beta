import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CheckoutScreen from "./CheckoutScreen";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface DrawerMenuProps {
  cart: number[];
  close: () => void;
}

const dummyProducts: Product[] = [
  { id: 1, name: "Beras 5kg", price: 65000 },
  { id: 2, name: "Minyak Goreng 2L", price: 30000 },
  { id: 3, name: "Gula 1kg", price: 15000 },
  { id: 4, name: "Telur 1kg", price: 25000 },
];

export default function DrawerMenu({ cart, close }: DrawerMenuProps) {
  const cartItems = dummyProducts.filter((item) => cart.includes(item.id));
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-end z-50">
      <div className="bg-white w-80 p-4 h-full shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 font-bold"
          onClick={close}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold text-green-700 mb-4">Keranjang</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Keranjang masih kosong 😢</p>
        ) : (
          <div className="space-y-3">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="flex justify-between">
                  <span>{item.name}</span>
                  <span>Rp {item.price.toLocaleString()}</span>
                </CardContent>
              </Card>
            ))}
            <div className="flex justify-between font-bold mt-2 mb-4">
              <span>Total</span>
              <span>Rp {total.toLocaleString()}</span>
            </div>
            <CheckoutScreen cartItems={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
}

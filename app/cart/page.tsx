"use client";

import { useCart } from "@/app/context/CartContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, totalPrice } = useCart();

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="flex items-start mb-4">
        <Link href={"/"}><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg></Link>
        
      </div>

      <h1 className="text-2xl font-semibold mb-4">🛒 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <Card
              key={item.id}
              className="flex items-center p-4 gap-4 hover:bg-slate-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <CardContent className="flex-1">
                <h2 className="text-lg font-medium">{item.title}</h2>
                <p className="text-gray-600">
                  ${item.price} x {item.quantity}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeFromCart(item.id)}
                >
                  <Trash2 className="w-5 h-5" />
                </Button>
              </CardFooter>
            </Card>
          ))}

          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <h3 className="text-xl font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

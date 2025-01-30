"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: any) {
      const { addToCart } = useCart();
  return (
<Card className="max-w-sm w-full sm:w-72 md:w-80 shadow-lg hover:shadow-2xl transition-shadow">
  <CardHeader className="flex items-center justify-center">
    <Link href={`/product/${product.id}`}>
      <Image
        src={product.image}
        alt={product.title}
        width={150}
        height={150}
        className="object-contain h-36 sm:h-40 md:h-44"
      />
    </Link>
  </CardHeader>
  
  <CardContent className="grid gap-y-2">
    <Link href={`/product/${product.id}`}>
      <CardTitle className="text-lg font-semibold text-center hover:underline hover:text-blue-500">
        {product.title}
      </CardTitle>
    </Link>

    <p className="text-gray-500 text-center">${product.price.toFixed(2)}</p>
  </CardContent>

  <CardFooter className="flex justify-center">
    <Button
      onClick={() => addToCart(product)}
      variant="default"
      className="w-full sm:w-auto px-4"
    >
      Add to Cart
    </Button>
  </CardFooter>
</Card>

  );
}

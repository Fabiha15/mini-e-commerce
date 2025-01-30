"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useCart } from "../context/CartContext";
  
  export default function SingleProductCard({ product }: any) {
    const { addToCart } = useCart();
    return (
        <Card className="max-w-sm w-full sm:w-72 md:w-96 shadow-lg hover:shadow-2xl transition-shadow">
        <CardHeader className="flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
            className="object-contain h-36"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-lg font-semibold text-center ">
            {product.title}
          </CardTitle>
          <CardDescription className="text-justify">{product.description}</CardDescription>

          <p className="text-gray-500 text-center mt-1">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => addToCart(product)}
            variant="default"
            className="w-full"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    );
  }
  
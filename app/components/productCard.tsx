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

export default function ProductCard({ product }: any) {
  return (
    <Card className="w-80 shadow-lg">
      <CardHeader className="flex items-center justify-center">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
            className="object-contain h-36"
          />
        </Link>
      </CardHeader>
      <CardContent>
        <Link href={`/product/${product.id}`}>
          <CardTitle className="text-lg font-semibold text-center hover:underline hover:text-blue-500">
            {product.title}
          </CardTitle>
        </Link>

        <p className="text-gray-500 text-center mt-1">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="default" className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

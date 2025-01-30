import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getProducts, getSingleProduct } from "@/app/servers/products";
import axios from "axios";
import ProductCard from "@/app/components/productCard";

export async function generateStaticParams() {
  const res = await axios.get("https://fakestoreapi.com/products");
  const products = await res.data;

  return products.map((product: any) => ({
    id: product.id.toString(), // Ensure ID is a string
  }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getSingleProduct(params.id);
  const relatedProducts = await getProducts().then((data) =>
    data.filter((p: any) => p.category === product.category && p.id != product.id)
  );

  return (
    <div>
      <h1 className="py-5 text-3xl font-bold text-center">
        Explore Product Details
      </h1>
      <div className="p-8">
        <Card className="w-96 shadow-lg">
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
            <CardDescription>{product.description}</CardDescription>

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
      </div>
      <h1 className="py-5 text-3xl font-bold text-center">
          All Related Products:
        </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
       
        {relatedProducts.slice(0, 10).map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

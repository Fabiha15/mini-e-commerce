import { Button } from "@/components/ui/button";
import ProductCard from "./components/productCard";
import { getProducts } from "./servers/products";
import Link from "next/link";

export default async function Home() {
  const products: any = await getProducts();

  return (
    <div>
      <h1 className="py-5 text-3xl font-bold text-center">
        ShopEase – Easy shopping experience
      </h1>
      <div className="flex items-end justify-end pr-16">
        <Link href="/cart">
          <Button variant="default" className="">
            {" "}
            🛒 Go to Cart
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
        {products.slice(0, 10).map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

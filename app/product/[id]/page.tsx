import ProductCard from "@/app/components/productCard";
import SingleProductCard from "@/app/components/singleProductCard";
import { getProducts, getSingleProduct } from "@/app/servers/products";
import { Product, ProductArray } from "@/types/product";
import Link from "next/link";

export default async function ProductPage({ params }: any) {
  const product: Product = await getSingleProduct(params?.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const allProducts = await getProducts();
  const relatedProducts: ProductArray = allProducts.filter(
    (p: Product) => p.category === product.category && p.id != product.id
  );

  return (
    <div>
      <h1 className="py-5 text-3xl font-bold text-center">
        <Link href={"/"} className="flex items-center justify-start ml-8">
          <svg
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
          </svg>
        </Link>{" "}
        Explore Product Details
      </h1>
      <div className="p-8">
        <SingleProductCard product={product} />
      </div>
      <h1 className="py-5 text-3xl font-bold text-center">
        All Related Products:
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
        {relatedProducts.slice(0, 10).map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product: Product) => ({
    id: product.id.toString(),
  }));
}

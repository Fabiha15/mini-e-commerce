import ProductCard from "./components/productCard";
import { getProducts } from "./servers/products";

export default async function Home() {
  const products : any = await getProducts();
  console.log(products);
  return (
    <div>
      <h1 className="py-5 text-3xl font-bold text-center">
        ShopEase – Easy shopping experience
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8">
        {products.slice(0, 10).map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

import ProductCard from "@/components/ProductCard";
import { api } from "@/services/api";
import { useEffect, useState } from "react";

export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export default function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4 max-w-300 w-full mx-auto pb-20">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          cover={product.cover}
          price={product.price}
          description={product.description}
          id={product.id}
        />
      ))}
    </section>
  );
}

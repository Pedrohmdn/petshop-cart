import type { ProductType } from "@/pages/Home";
import { ShoppingCartPlus } from "lucide-react";
import { useContext } from "react";
import { formatPrice } from "@/utils/formatters";
import { CartContext } from "@/contexts/CartContext";
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export default function ProductCard(product: ProductType) {
  const { addProduct } = useContext(CartContext);
  return (
    <Card className="relative w-full pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-secondary/10" />
      <img
        src={product.cover}
        alt={product.title}
        className="relative z-20  aspect-video w-full object-cover  "
      />
      <CardHeader className="h-full">
        <CardTitle className="font-semibold text-base">
          {product.title}
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <span className="font-bold text-lg text-secondary">
          {formatPrice(product.price)}
        </span>

        <Button
          size={"lg"}
          className="cursor-pointer"
          onClick={() => addProduct(product)}
        >
          <ShoppingCartPlus className="size-5" />
        </Button>
      </CardFooter>
    </Card>
  );
}

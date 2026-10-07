import { CartContext, type CartProps } from "@/contexts/CartContext";

import { formatPrice } from "@/utils/formatters";
import { useContext } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export default function CartItem(product: CartProps) {
  const { addProduct, removeProduct } = useContext(CartContext);
  return (
    <Card className="grid grid-cols-3 px-8">
      <div className="w-full">
        <img
          src={product.cover}
          alt={product.title}
          className="w-full max-w-30"
        />
      </div>
      <div className="flex gap-2 items-center justify-center w-full">
        <Button
          size={"icon-lg"}
          className="cursor-pointer"
          onClick={() => removeProduct(product.id)}
        >
          -
        </Button>
        <strong className="text-base">{product.amount}</strong>
        <Button
          size={"icon-lg"}
          className="cursor-pointer"
          onClick={() => addProduct(product)}
        >
          +
        </Button>
      </div>
      <div className="w-full flex  items-center justify-end">
        <strong className="text-base">
          SubTotal:{" "}
          <span className="text-secondary">
            {formatPrice(product.subtotal)}
          </span>
        </strong>
      </div>
    </Card>
  );
}

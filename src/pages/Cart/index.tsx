import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/contexts/CartContext";
import { formatPrice } from "@/utils/formatters";
import { useContext } from "react";
import { toast } from "sonner";

export default function Cart() {
  const { cart, total, cartAmout } = useContext(CartContext);
  return (
    <div className="max-w-300 w-full mx-auto pb-20">
      <h1 className="font-bold text-3xl text-center mb-10">Seus Produtos</h1>
      <section className="flex flex-col gap-6">
        {cartAmout === 0 && (
          <span className="text-center font-medium text-base">
            Você não tem nenhum produto no Carrinho!
          </span>
        )}
        {cart.map((product) => (
          <CartItem
            key={product.id}
            title={product.title}
            cover={product.cover}
            price={product.price}
            id={product.id}
            amount={product.amount}
            subtotal={product.subtotal}
            description={product.description}
          />
        ))}
      </section>
      {cartAmout > 0 && (
        <div className="mt-15 flex items-center justify-between">
          <strong className="text-lg ">
            Total: <span className="text-secondary">{formatPrice(total)}</span>
          </strong>
          <Button
            size={"lg"}
            className={"cursor-pointer"}
            onClick={() =>
              toast.success("Compra feita com Sucesso!", {
                position: "top-right",
              })
            }
          >
            Finalizar Compra
          </Button>
        </div>
      )}
    </div>
  );
}

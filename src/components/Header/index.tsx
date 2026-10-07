import { CartContext } from "@/contexts/CartContext";
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router";

export default function Header() {
  const { cartAmout } = useContext(CartContext);
  return (
    <header className="flex justify-center items-center h-20 sticky top-0 z-50 w-full border-b border-border/60 bg-card/80 backdrop-blur-md mb-15 px-6">
      <div className="flex justify-between items-center max-w-300 w-full">
        <Link to={"/"}>
          <h1 className="font-bold text-2xl">
            <span className="text-primary">Pet</span>Shop
          </h1>
        </Link>
        <Link to={"/cart"} className="relative">
          <ShoppingCart size={24} color="#000" />
          {cartAmout > 0 && (
            <span className="absolute h-6 w-6 rounded-full bg-primary text-white text-center -right-3 -top-3">
              {cartAmout}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

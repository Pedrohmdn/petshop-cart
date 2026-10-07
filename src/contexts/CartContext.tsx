import type { ProductType } from "@/pages/Home";

import { createContext, useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";

interface CartContextProps {
  cartAmout: number;
  cart: CartProps[];
  addProduct: (product: ProductType) => void;
  removeProduct: (id: number) => void;
  total: number;
}

export interface CartProps extends ProductType {
  amount: number;
  subtotal: number;
}

interface CartContextProvider {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProvider) {
  const [cart, setCart] = useState<CartProps[]>(() => {
    const Products = localStorage.getItem("@petshop");

    if (Products) {
      try {
        return JSON.parse(Products);
      } catch (error) {
        console.error(error);
        return [];
      }
    }

    return [];
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((ac, product) => ac + product.subtotal, 0);
    setTotal(total);
  }, [cart]);

  function addProduct(newProduct: ProductType) {
    const productIndex = cart.findIndex(
      (product) => product.id === newProduct.id,
    );
    let updatedCart: CartProps[];

    if (productIndex != -1) {
      updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          product.amount += 1;
          product.subtotal = product.amount * product.price;
        }
        return product;
      });

      setCart(updatedCart);
      localStorage.setItem("@petshop", JSON.stringify(updatedCart));
      toast.success(`+ 1 ${newProduct.title} adicionado ao carrinho`);
      return;
    }

    updatedCart = [
      ...cart,
      { ...newProduct, amount: 1, subtotal: newProduct.price },
    ];

    setCart(updatedCart);
    localStorage.setItem("@petshop", JSON.stringify(updatedCart));
    toast.success(`Produto adicionado ao carrinho`);
  }

  function removeProduct(id: number) {
    const productIndex = cart.findIndex((item) => item.id === id);
    let updatedCart;

    if (cart[productIndex].amount === 1) {
      updatedCart = cart.filter((product) => product.id !== id);
      setCart(updatedCart);
      localStorage.setItem("@petshop", JSON.stringify(updatedCart));
      toast.warning(`Produto Removido`);
      return;
    }

    updatedCart = cart.map((product) => {
      if (product.id === id) {
        product.amount -= 1;
        product.subtotal = product.amount * product.price;
      }
      return product;
    });

    setCart(updatedCart);
    localStorage.setItem("@petshop", JSON.stringify(updatedCart));
  }

  return (
    <CartContext.Provider
      value={{
        cart: cart,
        total: total,
        cartAmout: cart.length,
        addProduct: addProduct,
        removeProduct: removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

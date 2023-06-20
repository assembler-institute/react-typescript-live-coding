import { ReactNode } from "react";

export type ProductProps = {
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  price: number | undefined;
  img: string | undefined;
  quantity: number  | undefined;
}

export type ParentStateProps = {
  counterClicked: boolean | null;
  setCounterClicked: (counterClicked: boolean) => void;
  cartItems: ProductProps[] | null | undefined;
  setCartItems: (cartItems: ProductProps[]) => void;
  children: ReactNode;
}
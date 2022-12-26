import { CartItemType, Product } from "../services/interfaces";

export const addToCart = (
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  product: Product
) => {
  setCart((prev) => [...prev, { product: product, amount: 1 }]);
};

export const deleteFromCart = (
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  itemId: number
) => {
  setCart((prev) => prev.filter((cartItem) => cartItem.product.id !== itemId));
};

export const increaseCartProductAmount = (
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  itemId: number,
  amount: number
) => {
  setCart((prev) => {
    let productToAdd = prev.find((el) => el.product.id === itemId);
    if (!productToAdd) {
      return prev;
    }
    return prev.map((cartItem) =>
      cartItem.product.id === itemId
        ? { ...cartItem, amount: cartItem.amount + amount }
        : cartItem
    );
  });
};
export const decreaseCartProductAmount = (
  setCart: React.Dispatch<React.SetStateAction<CartItemType[]>>,
  itemId: number,
  amount: number
) => {
  setCart((prev) => {
    let productToAdd = prev.find((el) => el.product.id === itemId);
    if (!productToAdd) {
      return prev;
    }
    if (productToAdd.amount - amount <= 0) {
      return prev.filter((cartItem) => cartItem.product.id !== itemId);
    }
    return prev.map((cartItem) =>
      cartItem.product.id === itemId
        ? { ...cartItem, amount: cartItem.amount - 1 }
        : cartItem
    );
  });
};

import { useOutletContext } from "react-router-dom";
import CartItem from "../components/CartItem";
import {
  increaseCartProductAmount,
  decreaseCartProductAmount,
} from "../utils/cartUtils";
import { OutletContext } from "../services/interfaces";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const { cart: cartState } = useOutletContext<OutletContext>();
  const [cart, setCart] = cartState;
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-black">
        {!cart.length && <h1 className="font-mono text-white bg-black px-4 py-3">[Cart is empty]</h1>}
        {cart.map((item) => (
          <CartItem
            item={item}
            handleIncreaseAmount={() =>
              increaseCartProductAmount(setCart, item.product.id, 1)
            }
            handleDecreaseAmount={() =>
              decreaseCartProductAmount(setCart, item.product.id, 1)
            }
            handleDeleteFromCart={() =>
              decreaseCartProductAmount(setCart, item.product.id, 999999)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;

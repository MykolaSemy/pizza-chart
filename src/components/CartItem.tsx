import { CartItemType } from "../services/interfaces";

interface CartItemProps {
  item: CartItemType;
  handleIncreaseAmount: () => void;
  handleDecreaseAmount: () => void;
  handleDeleteFromCart: () => void;
}

const CartItem: React.FC<CartItemProps> = ({
  item,
  handleDecreaseAmount,
  handleDeleteFromCart,
  handleIncreaseAmount,
}) => {
  const { product, amount } = item;
  return (
    <div className="flex bg-black justify-between items-center p-4 m-2  ">
      <div className="flex h-full justify-center items-center">
        <img
          src={product.thumbnail}
          className="w-48 h-24 aspect-square object-cover"
          alt=""
        />
        <div className=" h-full flex flex-col p-3 mx-12 border-x-[1px] border-opacity-25 border-gray-50 justify-start items-start">
          <h1 className="text-white">{product.title}</h1>
          <p className="text-white opacity-60">{product.brand}</p>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button
          onClick={handleDeleteFromCart}
          className="text-black font-mono mx-2 bg-red-300 border-2 border-red-300 px-4 py-3 hover:bg-black hover:text-red-300 duration-200"
        >
          [Delete]
        </button>
        <div className="w-9 ml-5">
          <button
            onClick={handleIncreaseAmount}
            className="w-full  bg-black border-2 border-primary text-primary hover:text-black hover:bg-primary duration-200 ease-out flex justify-center items-center"
          >
            +
          </button>
          <input
            className="w-full  bg-black text-primary outline-none text-center"
            type="text"
            value={amount}
          />
          <button
            onClick={handleDecreaseAmount}
            className="w-full  bg-black border-2 border-primary text-primary hover:text-black hover:bg-primary duration-200 ease-out flex justify-center items-center"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

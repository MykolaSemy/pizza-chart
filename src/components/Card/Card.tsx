import { Product } from "../../services/interfaces";

interface CardProps {
  product: Product;
  handleAddToCart: () => void;
  handleDeleteFromCart: () => void;
  isInCart: boolean;
}

const Card: React.FC<CardProps> = ({
  product,
  handleAddToCart,
  isInCart,
  handleDeleteFromCart,
}) => {
  const {
    title,
    brand,
    category,
    description,
    discountPercentage,
    id,
    images,
    price,
    rating,
    stock,
    thumbnail,
  } = product;

  return (
    <div className="flex flex-col group w-fit min-w-1/5 h-fit bg-black m-3 overflow-hidden hover:scale-[1.01] hover:shadow-2xl duration-300 ease-in-out ">
      <img
        className="w-full h-72 group-hover:scale-100 scale-150 duration-300 ease-in-out aspect-square object-contain relative"
        src={thumbnail}
        alt=""
        loading="lazy"
      />
      <div className="p-4 w-full flex flex-col justify-start items-start z-40 bg-black">
        <div className="flex justify-between w-full items-start">
          <div className="w-1/2">
            <h1 className="whitespace-nowrap text-white text-base">{title}</h1>
            <p className="text-white opacity-40">{brand}</p>
          </div>
          <div>
            <span className="text-black rounded p-1 flex justify-center items-center bg-primary text-sm font-bold">
              ${price}
            </span>
          </div>
        </div>
        <div className="mt-3 w-full flex justify-end items-center">
          <button className="font-mono text-primary mx-3 text-sm hover:text-white">
            See more
          </button>
          {!isInCart ? (
            <button
              onClick={handleAddToCart}
              className="font-mono border-primary text-base font-semibold duration-200 ease-in-out  border-2 py-2 px-3 text-primary hover:bg-primary hover:text-black "
            >
              Add to cart
            </button>
          ) : (
            <button
              onClick={handleDeleteFromCart}
              className="font-mono border-primary text-base font-semibold duration-200 ease-in-out  border-2 py-2 px-3 text-primary hover:bg-red-300 hover:border-red-300 hover:text-black "
            >
              Delete from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;

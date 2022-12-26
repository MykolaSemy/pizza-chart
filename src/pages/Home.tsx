import { useOutletContext } from "react-router-dom";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination";
import { OutletContext} from "../services/interfaces";
import { addToCart, deleteFromCart } from "../utils/cartUtils";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { cart: cartState, data, page } = useOutletContext<OutletContext>();
  const [cart, setCart] = cartState;
  return (
    <div className="flex pb-5 flex-col justify-start items-center w-full">
      <div className="flex flex-wrap justify-center items-end">
        {data.products.map((product, id) => (
          <Card
            product={product}
            key={product.id}
            handleDeleteFromCart={() => deleteFromCart(setCart, product.id)}
            handleAddToCart={() => addToCart(setCart, product)}
            isInCart={cart.some((el) => el.product.id === product.id)}
          />
        ))}
      </div>
      <Pagination page={page} />
    </div>
  );
};

export default Home;

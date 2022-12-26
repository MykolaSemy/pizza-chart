import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { CartItemType, Product, Products } from "./services/interfaces";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [data, setData] = useState<Products>();
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?skip=${page}&limit=10`
        );
        const data = await response.json();
        if (!data) {
          throw new Error("Something went wrong!");
        }
        setData(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page]);

  return (
    <div className="w-full min-h-screen bg-primary flex flex-col justify-start ">
      <Sidebar cartAmount={cart.length} />
      {!isLoading ? (
        <Outlet
          context={{ data: data, cart: [cart, setCart], page: [page, setPage] }}
        />
      ) : (
        <div className="w-10 aspect-square h-auto m-auto  border-4 rounded-full border-t-transparent ease-in-out animate-spin duration-100 border-black " />
      )}
    </div>
  );
};

export default App;

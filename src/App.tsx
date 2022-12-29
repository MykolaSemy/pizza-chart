import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { useGetData } from "./hooks/useGetData";
import { CartItemType, Product, Products } from "./services/interfaces";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [page, setPage] = useState<number>(0);

  const { data, errors, isLoading } = useGetData(page);

  return (
    <div className="w-full min-h-screen bg-primary flex flex-col justify-start ">
      <Sidebar cartAmount={cart.length} />
      {!!errors && (
        <h1 className="m-auto font-bold text-e3xl font-mono ">
          [ An error occured! ]
        </h1>
      )}
      {!isLoading && !errors ? (
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

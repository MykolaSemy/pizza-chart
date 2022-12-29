import { useState, useEffect } from "react";
import { Products } from "../services/interfaces";

export const useGetData = (page: number, limit = 10) => {
  const [data, setData] = useState<Products>();
  const [errors, setErrors] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products?skip=${page}&limit=${limit}`
        );
        const data = await response.json();
        if (!data) {
          setErrors(true);
          throw new Error("Something went wrong!");
        }
        setData(data);
      } catch (err) {
        console.log(err);
        setErrors(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page]);

  return { data, errors, isLoading };
};

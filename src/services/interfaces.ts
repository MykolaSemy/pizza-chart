export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface Products {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface CartItemType {
  product: Product;
  amount: number;
}

export interface OutletContext {
  data: Products;
  cart: [CartItemType[], React.Dispatch<React.SetStateAction<CartItemType[]>>];
  page: [number, React.Dispatch<React.SetStateAction<number>>];
}

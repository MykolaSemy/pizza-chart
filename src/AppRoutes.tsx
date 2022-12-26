import { Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./pages/Cart";
import Chart from "./pages/Chart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

interface AppRoutesProps {}

const AppRoutes: React.FC<AppRoutesProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="chart" element={<Chart />} />
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

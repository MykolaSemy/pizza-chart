import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { navs } from "../../services/navs";

interface SidebarProps {
  cartAmount: number;
}

const Sidebar: React.FC<SidebarProps> = ({ cartAmount }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-black w-full h-fit sticky top-0 left-0 flex justify-start z-50">
      <div className=" p-4">
        <h1
          onClick={() => navigate("")}
          className="text-primary italic font-mono whitespace-nowrap cursor-pointer text-white text-xl font-base "
        >
          Pizza-Chart
        </h1>
      </div>
      <nav className="flex ">
        {navs.map((nav) => (
          <NavLink
            className={({ isActive }) =>
              ` p-2 px-4 m-2 flex font-mono justify-center items-center duration-150 ease-in-out  ${
                isActive
                  ? " bg-primary text-black "
                  : " bg-transparent text-primary "
              } `
            }
            to={nav.path}
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>
      <div className="w-fit mr-10 ml-auto  flex justify-center items-center">
        <span className="font-mono text-white flex justify-center items-center mx-2">
          {!!!cartAmount ? "[cart is empty]" : `[${cartAmount}]`}
        </span>
        <NavLink
          to={"cart"}
          className="flex items-center justify-center p-1 text-white text-3xl cursor-pointer  hover:bg-primary hover:text-black duration-200 ease-in-out"
        >
          <AiOutlineShoppingCart />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

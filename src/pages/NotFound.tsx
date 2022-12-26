import { NavLink, useNavigate } from "react-router-dom";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-primary flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-5">
          Oops! <span className="text-red">[404]</span> Page not found{" "}
        </h1>
        <NavLink className="bg-black text-primary px-4 py-2 rounded" to="">
          Back to main page{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;

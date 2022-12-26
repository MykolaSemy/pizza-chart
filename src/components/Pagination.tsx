import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { BiReset } from "react-icons/bi";

interface PaginationProps {
  page: [number, React.Dispatch<React.SetStateAction<number>>];
}

const Pagination: React.FC<PaginationProps> = ({ page: pageState }) => {
  const [page, setPage] = pageState;

  return (
    <div className="w-full flex justify-center items-center">
      {page !== 0 && (
        <button
          onClick={() => setPage(0)}
          className="bg-black text-primary flex justify-center items-center p-2 mx-1"
        >
          <BiReset className="text-primary" />
        </button>
      )}
      <button
        onClick={() => setPage((prev) => prev - 10)}
        className="bg-black text-primary flex justify-center items-center p-2 mx-1"
      >
        <MdNavigateBefore className="text-primary" />
      </button>
      <button
        onClick={() => setPage((prev) => prev + 10)}
        className="bg-black text-primary flex justify-center items-center p-2 mx-1"
      >
        <MdNavigateNext className="text-primary" />
      </button>
    </div>
  );
};

export default Pagination;

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BinURL from "../components/BinURL";

function Bin() {
  const { uuid } = useParams();
  return (
    <>
      <div className="fixed  h-screen bg-white left-0 shadow-sm border-r-gray-200 w-96">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-600 text-md mt-5 mb-4 block ml-4"
        >
          Back to all bins
        </Link>
        <hr className="mt-3" />
        <div className="mt-4 mx-4">
          <h2 className="font-bold mb-2">Your Bin</h2>
          <BinURL uuid={uuid} />
        </div>
        <div className="mt-6 mx-4">
          <h2 className="font-bold mb-2">All Requests</h2>
          {/* Get the requests */}
        </div>
      </div>
      <div>{uuid}</div>
    </>
  );
}

export default Bin;

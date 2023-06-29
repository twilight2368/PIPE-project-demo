import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Notfound(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-white w-full h-full text-4xl bg-black-op text-center relative">
        <img
          src={require("../images/Notfound.jpg")}
          alt=""
          className="block w-3/4 h-full mx-auto rounded-2xl"
        />
        <button
          className="text-white absolute bottom-6 left-48 text-2xl border-2 border-gray-50 rounded-xl p-1"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <span className="px-2 text-2xl">Back to Earth</span>
          <GlobeAsiaAustraliaIcon className="h-6 w-6 text-white inline" />
        </button>
      </div>
    </>
  );
}

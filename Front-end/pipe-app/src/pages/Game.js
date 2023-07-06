import { StarIcon } from "@heroicons/react/20/solid";
import { BoltIcon } from "@heroicons/react/24/outline";
import Rating from "../components/Rating";
import { useNavigate } from "react-router-dom";
export default function Game(props) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className=" m-24 my-6">
          <div className=" h-60 bg-black-op grid grid-cols-2 rounded-2xl">
            <div className=" text-white  px-6 py-4">
              <div className=" text-3xl">404 NOT FOUND</div>
              <div
                className=" text-xl"
                onClick={(e) => {
                  navigate("/developer/id");
                }}
              >
                PIPE
              </div>
              <div>
                <span className=" text-lg">Category: </span>
                <span className="mr-1">#hastag</span>
                <span className="mr-1">#hastag</span>
                <span className="mr-1">#hastag</span>
                <span className="mr-1">#hastag</span>
              </div>
              <div className="mt-2">
                <span className=" text-black px-2 p border-2 bg-orange-400 border-orange-600 rounded-xl">
                  <BoltIcon class="h-3 w-3 inline mr-1" />
                  <span className=" font-semibold italic">00.00</span>
                </span>
              </div>
              <div className="mt-3">
                <span className=" mr-6">
                  <button
                    className="bg-blue-400 p-1 px-2 rounded-md disabled:hover:cursor-not-allowed"
                    disabled
                  >
                    Download
                  </button>
                </span>
                <span className=" mr-6">
                  <button
                    className="bg-pink-400 p-1 px-2 rounded-md disabled:hover:cursor-not-allowed"
                    disabled
                  >
                    Add to wishlist
                  </button>
                </span>
              </div>
            </div>
            <div className=" text-white h-full w-full p-0 relative">
              <img
                src={require("../images/game.jpg")}
                alt=""
                className=" h-60 w-full rounded-e-2xl"
              />
              <div className=" h-full w-full absolute bg-faded-black rounded-e-2xl top-0 z-[1]"></div>
            </div>
          </div>
          <div className="text-white h-52 bg-black-op mt-2 grid grid-cols-2 rounded-2xl px-6 py-4">
            <div>
              <div>Details:</div>
              <ul className="list-disc">
                <li>
                  <span>Downloaded: </span>
                </li>
                <li>
                  <span>Release Date: </span>
                </li>
                <li>
                  <span>Version: </span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3">
              <div className=" col-span-2 p-4">
                <div className=" W-full h-full">
                  <Rating />
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <div className="h-12 w-12 flex justify-end items-baseline">
                  <span className=" text-6xl">5.0</span>
                </div>
                <div className="h-12 w-12 flex justify-center items-center">
                  <StarIcon className="h-12 w-12 text-yellow-500 block" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

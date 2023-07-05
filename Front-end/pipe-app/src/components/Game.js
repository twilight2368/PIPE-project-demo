import { StarIcon } from "@heroicons/react/24/solid";
import { useNavigate, NavLink, Link } from "react-router-dom";

export default function Game(props) {
  return (
    <>
      <div className="text-white h-40 w-full bg-black-op rounded-lg py-2.5 px-3 pb-2 max-lg:text-sm">
        <div className=" h-full w-full grid grid-cols-2 grid-rows-6 max-lg:grid-rows-5">
          <div className="col-span-2 row-span-4 max-lg:row-span-3">
            <img
              src={require("../images/game.jpg")}
              alt=""
              className="w-full h-full rounded-lg "
            />
          </div>

          <div className="pl-3 pt-1 max-xl:text-sm">
            <Link to={'/all/something'} className=" no-underline text-white">404 Not found</Link>
          </div>
          <div className="pl-3 pt-2 pr-2 w-full">
            <div className=" flex justify-end items-center gap-1">
              <div className="h-3 w-3 flex justify-end items-center">
                <span className=" text-base">5.0</span>
              </div>
              <div className="h-3 w-3 flex justify-center items-center">
                <StarIcon className="h-12 w-12 text-yellow-500 block" />
              </div>
            </div>
          </div>
          <div className="pl-3 max-md:hidden max-xl:hidden" >
            <Link to={'/developer/id'} className=" text-white no-underline">PIPE</Link>
          </div>
        </div>
      </div>
    </>
  );
}

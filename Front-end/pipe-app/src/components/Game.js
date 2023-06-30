import { StarIcon } from "@heroicons/react/24/solid";

export default function Game(props) {
  return (
    <>
      <div className="text-white h-40 w-full bg-black-op rounded-lg py-2.5 px-3 pb-2 max-lg:text-sm">
        <div className=" h-full w-full grid grid-cols-2 grid-rows-6">
          <div className="col-span-2 row-span-4 max-lg:row-span-3">
            <img
              src={require("../images/game.jpg")}
              alt=""
              className="w-full rounded-lg "
            />
          </div>

          <div className="pl-3 pt-1">404 Not found</div>
          <div className="pl-3 pt-1 pr-2">
            <div className=" w-full flex justify-end items-center">
              <span className="mx-1 text-base">5</span>
              <span className=" inline-block relative">
                <StarIcon className="text-yellow-500 h-3" />
              </span>
            </div>
          </div>
          <div className="pl-3 max-xl:hidden">PIPE</div>
        </div>
      </div>
    </>
  );
}

import { useRef } from "react";
import Game from "./Game"
import {
  ArrowSmallRightIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/outline";

export default function MainChart(props) {
   const div_ref = useRef();
  function handle_left() {
    const element = div_ref.current;
    element.scrollBy(-510, 0);
  }
  function handle_right() {
    const element = div_ref.current;
    element.scrollBy(510, 0);
  }
  return (
    <>
      <div className=" w-auto mx-0 p-3 px-10 bg-black-op rounded-2xl my-6">
        <h2 className=" mb-0 px-12 text-teal-50 ">Just a chart</h2>

        <div className="relative h-48 w-full">
          <button
            className=" left-0 top-1/2 -translate-x-3 -translate-y-3/4 absolute bg-black rounded-full border-2 border-blue-600 h-10 w-10 flex justify-center items-center opacity-60 hover:opacity-100 duration-100"
            onClick={handle_left}
          >
            <ArrowSmallLeftIcon className="h-6 w-6 text-blue-600" />
          </button>
          <button
            className=" right-0 top-1/2 translate-x-3 -translate-y-3/4 absolute bg-black rounded-full border-2 border-red-600 h-10 w-10 flex justify-center items-center opacity-60 hover:opacity-100 duration-100"
            onClick={handle_right}
          >
            <ArrowSmallRightIcon className="h-6 w-6 text-red-600" />
          </button>

          <div
            className=" h-full w-full mx-auto pt-3 px-16 pl-0 pb-0 scroll-bar-image-chart"
            ref={div_ref}
          >
            <div className=" h-3/4 w-1/4 mx-2 inline-block">
              <Game />
            </div>
            <div className=" h-3/4 w-1/4  mx-2 inline-block">
              <Game />
            </div>
            <div className=" h-3/4 w-1/4  mx-2 inline-block">
              <Game />
            </div>
            <div className=" h-3/4 w-1/4  mx-2 inline-block">
              <Game />
            </div>

            <div className=" h-3/4 w-1/4  mx-2 inline-block">
              <Game />
            </div>
            <div className=" h-3/4 w-1/4  mx-2 inline-block">
              <Game />
            </div>
            <div className=" h-3/4 w-1/4  mx-2 inline-block">
              <Game />
            </div>
            <div className=" h-3/4 w-1/4  mx-2 inline-block">
              <Game />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

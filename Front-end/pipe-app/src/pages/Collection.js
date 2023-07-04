import { useRef } from "react";
import Game from "../components/Game";
import {
  ArrowSmallRightIcon,
  ArrowSmallLeftIcon,
} from "@heroicons/react/24/outline";

export default function Collection(props) {

  const wishlist_div_ref = useRef();
  const downloaded_div_ref = useRef();

  function handle_left_wishlist() {
     const element = wishlist_div_ref.current;
     element.scrollBy(-610, 0);
  }  
  function handle_right_wishlist() {
    const element = wishlist_div_ref.current;
    element.scrollBy(610, 0);
  }  

  function handle_left_downloaded() {
    const element = downloaded_div_ref.current;
    element.scrollBy(-610, 0);
  }
  function handle_right_downloaded() {
    const element = downloaded_div_ref.current;
    element.scrollBy(610, 0);
  } 

  return (
    <>
      <div>
        <div className=" w-auto mx-28 p-3 px-10 ">
          <h2 className=" mb-0 px-12 text-teal-50 bg-black rounded-2xl hover:underline">
            Wishlist
          </h2>

          <div className="relative h-48 w-full">
            <button
              className=" left-0 top-1/2 -translate-x-3 -translate-y-3/4 absolute bg-black rounded-full border-2 border-blue-600 h-10 w-10 flex justify-center items-center opacity-60 hover:opacity-100 duration-100"
              onClick={handle_left_wishlist}
            >
              <ArrowSmallLeftIcon className="h-6 w-6 text-blue-600" />
            </button>
            <button
              className=" right-0 top-1/2 translate-x-3 -translate-y-3/4 absolute bg-black rounded-full border-2 border-red-600 h-10 w-10 flex justify-center items-center opacity-60 hover:opacity-100 duration-100"
              onClick={handle_right_wishlist}
            >
              <ArrowSmallRightIcon className="h-6 w-6 text-red-600" />
            </button>
            <div
              ref={wishlist_div_ref}
              className=" h-full w-full mx-auto pt-3 pl-0 px-16 pb-0 scroll-bar-image"
            >
              <div className=" h-3/4 w-1/4  mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4  mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4  mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4 mx-2  inline-block">
                <Game />
              </div>

              <div className=" h-3/4 w-1/4 500 mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4  mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4  mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4   mx-2 inline-block">
                <Game />
              </div>
            </div>
          </div>
        </div>

        <div className=" w-auto mx-28 p-3 px-10">
          <h2 className=" mb-0 px-12 text-teal-50 bg-black rounded-2xl hover:underline">
            Downloaded
          </h2>

          <div className="relative h-48 w-full">
            <button
              className=" left-0 top-1/2 -translate-x-3 -translate-y-3/4 absolute bg-black rounded-full border-2 border-blue-600 h-10 w-10 flex justify-center items-center opacity-60 hover:opacity-100 duration-100"
              onClick={handle_left_downloaded}
            >
              <ArrowSmallLeftIcon className="h-6 w-6 text-blue-600" />
            </button>
            <button
              className=" right-0 top-1/2 translate-x-3 -translate-y-3/4 absolute bg-black rounded-full border-2 border-red-600 h-10 w-10 flex justify-center items-center opacity-60 hover:opacity-100 duration-100"
              onClick={handle_right_downloaded}
            >
              <ArrowSmallRightIcon className="h-6 w-6 text-red-600" />
            </button>
            <div className=" h-full w-full mx-auto pt-3 pl-0 px-16 pb-0 scroll-bar-image" ref={downloaded_div_ref}>
              <div className=" h-3/4 w-1/4  mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4  mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4  mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4 mx-2  inline-block">
                <Game />
              </div>

              <div className=" h-3/4 w-1/4 500 mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4  mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4  mx-2 inline-block">
                <Game />
              </div>
              <div className=" h-3/4 w-1/4   mx-2 inline-block">
                <Game />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

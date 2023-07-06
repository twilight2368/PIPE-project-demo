import { useState } from "react";
import Salegame from "./Salegame";
import { FireIcon } from "@heroicons/react/24/outline";

export default function SaleBanner(params) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className=" h-52 w-full relative rounded-xl"
        onMouseOver={(e) => {
          setShow(true);
        }}
        onMouseLeave={(e) => {
          setShow(false);
        }}
      >
        <div
          className={
            show
              ? "absolute top-0 w-full h-0 overflow-hidden duration-1000 bannersale rounded-xl"
              : "absolute top-0 w-full h-full overflow-hidden duration-1000 bannersale rounded-xl"
          }
        >
          <div className=" absolute bottom-5 left-20">
            <span className=" text-3xl text-purple-800 rounded-full font-black italic px-8 bg-green-lin">
              <FireIcon class="pr-2 h-8 w-8 inline" />
              <span className=" text-3xl">ON SALE</span>
              <FireIcon class="pl-2 h-8 w-8 inline" />
            </span>
          </div>
        </div>

        <div className=" w-full h-full rounded-xl bg-black-op p-4 grid grid-cols-2 grid-rows-3 gap-1">
          <Salegame />
          <Salegame />
          <Salegame />
          <Salegame />
          <Salegame />
          <Salegame />
        </div>
      </div>
    </>
  );
}

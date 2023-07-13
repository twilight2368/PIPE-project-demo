import { useEffect, useState } from "react";
import Salegame from "./Salegame";
import { FireIcon } from "@heroicons/react/24/outline";

export default function SaleBanner(params) {
  const [show, setShow] = useState(false);

  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3333/cheapgame")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setData(data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
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
              <span className=" text-3xl uppercase">on a budget</span>
              <FireIcon class="pl-2 h-8 w-8 inline" />
            </span>
          </div>
        </div>

        <div className=" w-full h-full rounded-xl bg-black-op p-4 grid grid-cols-2 grid-rows-3 gap-1">
          {
            data ? data.map((e)=>{
              return (
                <>
                  <Salegame
                    key={e.game_id}
                    price={e.price}
                    game_key={e.game_id}
                    game_name={e.game_name}
                    game_dev={e.dev_name}
                    dev_key = {e.developer_id}
                  />
                </>
              );
            }) : <></>
          }
        </div>
      </div>
    </>
  );
}

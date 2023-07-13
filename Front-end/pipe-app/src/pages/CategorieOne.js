import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Game from "../components/Game";

export default function CategoryOne(props) {
  const [mydata, setMydata] = useState();
  let { id } = useParams();

  useEffect(() => {
    console.log(id);
    fetch("http://localhost:3333/category/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setMydata(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      {mydata ? (
        <>
          <div className=" h-full w-full">
            <div className=" w-4/5 bg-black-op mx-auto h-20 m-4 rounded-xl px-5 text-white flex items-center text-6xl">
              {mydata[0].genre_name}
            </div>
            <div className=" my-10 mx-6 p-4 pb-10 grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2">
                {mydata ? (
                    mydata.map((e) => {
                        return (
                          <>
                            <div className=" h-40 px-2">
                              <Game
                                key={e.game_id}
                                game_dev={e.dev_name}
                                game_name={e.game_name}
                                rating={e.rating}
                                game_key={e.game_id}
                                dev_key={e.developer_id}
                              />
                            </div>
                          </>
                        );
                    }) ) : <></>}
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

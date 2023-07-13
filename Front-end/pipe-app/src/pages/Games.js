import { useEffect, useState } from "react";
import Game from "../components/Game";

export default function Games(props) {
  const [mydata, setMydata] = useState();
  useEffect(() => {
    fetch("http://localhost:3333/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setMydata(data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
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
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

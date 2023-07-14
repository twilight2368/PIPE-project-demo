import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Game from "../components/Game";

export default function Developer(props) {
  const [mydata, setMydata] = useState();
  const [gamedata, setGamedata] = useState();

  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetch("http://localhost:3333/developerinfor/" + id)
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

  useEffect(() => {
    console.log(id);
    fetch("http://localhost:3333/developer/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setGamedata(data)
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      {mydata && gamedata ? (
        <>
          <div className=" w-full">
            <div className=" mt-8 bg-black-op m-8 rounded-lg h-auto px-10 pt-3 pb-4">
              <h2 className=" text-white mb-0">{mydata.name}</h2>
              <span className="text-gray-500">Offical website: </span>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 no-underline"
              >
                {mydata.website}
              </a>
              <ul className=" text-gray-500">
                <li className=" list-inside list-disc">
                  Address: {mydata.address}
                </li>
                <li className=" list-inside list-disc">
                  Email: {mydata.email}
                </li>
                <li className=" list-inside list-disc">
                  {" "}
                  Strating date: {mydata.starting_date.split('T')[0]}
                </li>
              </ul>
            </div>
            <div className=" my-10 mx-6 p-4 pb-10 grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2">
              {gamedata ? (
                gamedata.map((e) => {
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
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

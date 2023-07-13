import {
  MagnifyingGlassIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Game from "../components/Game";

export default function Search(props) {
  const [data, setData] = useState();
  const [word, setWord] = useState();

  function searchSpecify() {
    const data_search = {
      search: word,
    };
    fetch("http://localhost:3333/supersearch", {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data_search),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <>
      <div className="h-full w-full">
        <form
          class="flex items-center mx-auto mt-3 w-1/2"
          id="searchforfun"
          onSubmit={(e) => {
            e.preventDefault();
            searchSpecify();
          }}
        >
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <input
            type="text"
            id="simple-search"
            class="bg-black border text-white text-xl border-gray-300 rounded-lg block w-full p-1.5"
            placeholder="Search"
            onChange={(e) => {
              setWord(e.target.value);
            }}
            required
          />
          <button
            type="submit"
            form="searchforfun"
            class="p-2.5 ml-2 w-24 text-sm font-medium text-white bg-rose-400 rounded-lg border-0 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-red-800 lg:block md:block max-sm:hidden"
          >
            <RocketLaunchIcon className="h-5 pr-1 w-auto text-white-500 inline" />
            <span className="lg:inline sm:hidden">Search</span>
            <span class="sr-only">Search</span>
          </button>
        </form>

        <div className=" my-10 mx-6 p-4 pb-10 grid grid-cols-5 gap-4 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2">
          {data ? (
            data.map((e) => {
              return (
                <>
                  <div className=" h-40 px-2">
                    <Game
                      key={e.game_id}
                      game_dev={e.dev_name}
                      game_name={e.game_name}
                      rating={e.rating}
                      game_key={e.game_id}
                      dev_key={e.dev_id}
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
  );
}

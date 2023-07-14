import { useEffect, useState } from "react";

export default function WeekChart(props) {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3333/topfree")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div className=" bg-black-op text-black w-full h-96 mb-10 rounded-xl">
        <div className=" w-full h-1/10 flex justify-center items-center">
          <span className="text-3xl w-full text-center font-bold chartheader weekchart">
            Top Free
          </span>
        </div>

        <ol className="text-orange-400 font-bold list-decimal list-inside px-3">
          {data ? (
            data.map((e) => {
              return (
                <>
                  <li
                    title={e.name}
                    className="h-7 mb-1 pl-2 text-xl rounded-full duration-150 hover:text-black hover:bg-orange-400 overflow-hidden text-ellipsis"
                  >
                    {" "}
                    {e.name}{" "}
                  </li>
                </>
              );
            })
          ) : (
            <></>
          )}
        </ol>
      </div>
    </>
  );
}

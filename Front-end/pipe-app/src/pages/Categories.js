import { useEffect, useState } from "react";
import Category from "../components/Category";

export default function Categories() {
  const [category, setCategory] = useState();

  useEffect(() => {
    fetch("JSON/Categories.json")
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="text-white h-auto grid grid-cols-4 gap-6 justify-items-center mb-24 mt-12 mx-28 max-lg:grid-cols-2 max-lg:mx-18 max-md:grid-cols-1 max-md:mx-10">
        {category ? (
          <>
            {category.map(function (e) {
              return <Category key={e.id} name={e.name} img_path={e.img} />;
            })}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

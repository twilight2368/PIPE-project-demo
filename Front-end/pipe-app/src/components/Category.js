export default function Category(props) {
  return (
    <>
      <div className=" text-white w-2/3 h-36 bg-black border-purple-500 rounded-lg border-4">
        <div className=" p-2 grid grid-rows-6 h-full">
          <div className=" row-span-4">
            <img
              src={props.img_path}
              alt=""
              className="block h-full w-auto mx-auto"
            />
          </div>
          <div className="mx-auto text-xl bold">{props.name}</div>
        </div>
      </div>
    </>
  );
}
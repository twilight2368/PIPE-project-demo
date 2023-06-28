import {
  MagnifyingGlassIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
export default function Search(props) {
  return (
    <>
      <form class="flex items-center mx-auto mt-3 w-1/2">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <input
          type="text"
          id="simple-search"
          class="bg-black border text-white text-xl border-gray-300 rounded-lg block w-full p-1.5"
          placeholder="Search"
          required
        />
        <button
          type="submit"
          class="p-2.5 ml-2 w-24 text-sm font-medium text-white bg-rose-400 rounded-lg border-0 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-red-800 lg:block md:block max-sm:hidden"
        >
          <RocketLaunchIcon className="h-5 pr-1 w-auto text-white-500 inline" />
          <span className="lg:inline sm:hidden">search</span>
          <span class="sr-only">Search</span>
        </button>
      </form>
    </>
  );
}

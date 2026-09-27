import SearchIcon from "./icons/SearchIcon";

export default function Search() {
  return (
    <div className="search flex gap-2 py-2 px-4 bg-gray-800 items-center rounded-3xl text-gray-300">
      <SearchIcon/>
      <input type="search" className="text outline-none w-full" placeholder="Search"/>
    </div>
  );
}


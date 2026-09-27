import MoreIcon from "./icons/MoreIcon";
import Image from "./Image";
import Link from "next/link";


export default function PopularTags() {
  return (
    <div className="popular flex flex-col gap-4 border-[1] border-gray-800 rounded-2xl py-2 px-4">
      <h1 className="text-white font-bold ">{"What's"} Happening!</h1>
      
      <div className="flex flex-row gap-4 ">
        <div className="image relative rounded-xl w-20 h-20 overflow-hidden">
          <Image path="/x/user/p1.jpeg"  w={120}  h={120}  alt="event" className=""/>
        </div>
        <div>
          <h2 className="font-bold ">Mogamed v Abdul</h2>
          <span className="text-gray-500 text-sm ">Last night.</span>
        </div>
      </div>

      <div className="technology-trending ">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-sm text-gray-500">Technology . Trending</h2>
          <span className="cursor-pointer">
            <MoreIcon />
          </span>
        </div>
        <h2>OpenIA</h2>
        <span className="text-gray-500 text-sm ">20k posts</span>
      </div>
      <div className="technology-trending ">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-sm text-gray-500">Technology . Trending</h2>
          <span className="cursor-pointer">
            <MoreIcon />
          </span>
        </div>
        <h2>OpenIA</h2>
        <span className="text-gray-500 text-sm ">20k posts</span>
      </div>      
      
      <div className="technology-trending ">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-sm text-gray-500">Technology . Trending</h2>
          <span className="cursor-pointer">
            <MoreIcon />
          </span>
        </div>
        <h2>OpenIA</h2>
        <span className="text-gray-500 text-sm ">20k posts</span>
      </div>
      
      <Link href="" className="text-iconBlue text-sm">Show More</Link>

    </div>
  );
}

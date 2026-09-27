import Link from "next/link";
import Image from "./Image";
import ButtonBlue from "./ButtonBlue";

export default function Recommendations() {
  return (
    <div className="recommendations flex flex-col gap-4 border-[1] border-gray-800 rounded-2xl py-2 px-4">
      <h1 className="text-white font-bold ">Who to follow</h1>
      
        <div className="flex justify-between items-center gap-2">
            <Link href="/username/status/124" className="flex items-center gap-2">
              <Image path="/x/user/p1.jpeg"  w={40}  h={40}  alt="user" className="cursor-pointer rounded-[50%]" />
              <div className="text-sm">
                <h1>Mohamed</h1> 
                <span className="text-textGray cursor-pointer">@username</span>
                <span className="text-textGray">1 day</span>
              </div>
            </Link>
            <ButtonBlue text="Follow"/>
        </div>

        <div className="flex justify-between items-center gap-2">
            <Link href="/username/status/124" className="flex items-center gap-2">
              <Image path="/x/user/p1.jpeg"  w={40}  h={40}  alt="user" className="cursor-pointer rounded-[50%]" />
              <div className="text-sm">
                <h1>Mohamed</h1> 
                <span className="text-textGray cursor-pointer">@username</span>
                <span className="text-textGray">1 day</span>
              </div>
            </Link>
            <ButtonBlue text="Follow"/>
        </div>

        <div className="flex justify-between items-center gap-2">
            <Link href="/username/status/124" className="flex items-center gap-2">
              <Image path="/x/user/p1.jpeg"  w={40}  h={40}  alt="user" className="cursor-pointer rounded-[50%]" />
              <div className="text-sm">
                <h1>Mohamed</h1> 
                <span className="text-textGray cursor-pointer">@username</span>
                <span className="text-textGray">1 day</span>
              </div> 
            </Link>
            <ButtonBlue text="Follow"/>
        </div>

      <Link href="" className="text-iconBlue text-sm">Show More</Link>

    </div>
  );
}

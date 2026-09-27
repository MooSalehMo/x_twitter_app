import Feed from "@/src/components/Feed";
import Share from "@/src/components/Share";
import Link from "next/link"

export default function Home() {
  return (
    <div className="home">

      <div className="top-bar px-4 pt-4 font-bold text-textGray flex justify-between items-center border-b border-borderGray">
        <Link className="pb-4 border-b border-iconBlue" href="">For You</Link>
        <Link className="pb-4 border-b border-iconBlue" href="">React</Link>
        <Link className="hidden md:flex pb-4 border-b border-iconBlue" href="">Newest</Link>
        <Link className="hidden md:flex pb-4" href="">Fowlloing</Link>
      </div>

      <Share />
      <Feed />
      
    </div>
  );
}

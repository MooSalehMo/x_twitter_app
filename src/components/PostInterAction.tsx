"use client"
import ChartIcon from "./icons/ChartIcon";
import Comment from "./icons/CommentIcon";
import HeartIcon from "./icons/HeartIcon";
import LoadIcon from "./icons/loadIcon";
import SaveIcon from "./icons/SaveIcon";
import ShareIcon from "./icons/ShareIcon";

export default function Reaction() {
  return (
    <div className="feed">       
        <div className="text-media">
            <p className="text flex flex-row justify-around mt-5">
                <div className="cursor-pointer flex flex-row gap-1 "> <HeartIcon className="hover:text-black"/>4 </div>
                <div className="cursor-pointer flex flex-row gap-1"> <Comment />7 </div>
                <div className="cursor-pointer flex flex-row gap-1"> <LoadIcon />7 </div>
                <div className="cursor-pointer flex flex-row gap-1"> <ChartIcon />9 </div>
                <div className="cursor-pointer flex flex-row gap-1"> <SaveIcon /> </div>
                <div className="cursor-pointer flex flex-row gap-1"> <ShareIcon />1 </div>
            </p>
        </div>
    </div>
  );
}

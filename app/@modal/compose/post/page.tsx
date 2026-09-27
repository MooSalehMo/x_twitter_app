"use client";
import ButtonBlue from "@/src/components/ButtonBlue";
import BrushIcon from "@/src/components/icons/BrushIcon";
import CalenderIcon from "@/src/components/icons/CalenderIcon";
import CancelIcon from "@/src/components/icons/Cancel";
import EmojiIcon from "@/src/components/icons/EmojIcon";
import EyeIcon from "@/src/components/icons/EyeIcon";
import FontIcon from "@/src/components/icons/FontIcon";
import ImageIcon from "@/src/components/icons/ImageIcon";
import LocationIcon from "@/src/components/icons/LocationIcon";
import PollIcon from "@/src/components/icons/PollIcon";
import Image from "@/src/components/Image";

const PostModal = ()=>{
//   const[open, setOpen] = useState(true)

    return (
        <div>
            
            <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#010c13a6] flex justify-center ">
                <div className="bg-black flex flex-col my-20 rounded-2xl gap-2 p-2 w-100 h-max">

                    <div className="close flex flex-row justify-between items-center *:cursor-pointer p-1">
                        <span className="hover:opacity-60 w-6 h-6 rounded-full bg-red-500 text-white items-center flex justify-center ">
                            <CancelIcon />
                        </span>
                        <span className="text-iconBlue text-sm">Drafts</span>
                    </div>

                    <div className="icon-input flex gap-2 mb-8 mt-3">
                        <Image path="/x/user/p1.jpeg" w={40} h={40} alt="imge" className="rounded-full"/>
                        <input name="desc" type="text" className="input-text outline-none w-full" placeholder="What is happening ?"/>
                    </div>

                    <div className="text-iconBlue text-sm cursor-pointer flex gap-1 items-center">
                        Everyone can reply 
                        <EyeIcon />
                    </div>

                    <div className="post flex justify-between items-center py-2 border-t border-gray-900">
                        <div className="options flex gap-2 text-gray-500 *:cursor-pointer items-center">
                            <input name="file" 
                                type="file" 
                                className="hidden" 
                                //    onChange={handleMediaChange} 
                                id="file"
                                accept="image/*,video/*"
                        />
                            <label htmlFor="file">
                            <ImageIcon/>
                            </label>
                            <EmojiIcon />
                            <LocationIcon />
                            <PollIcon />
                            <CalenderIcon />
                            <FontIcon />
                            <BrushIcon />
                        </div>
                        <ButtonBlue text="Post"/>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default PostModal
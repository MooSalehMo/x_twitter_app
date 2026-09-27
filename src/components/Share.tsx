"use client"

import Image from "./Image";
import NextImage from "next/image";
import ImageIcon from "./icons/ImageIcon";
import CancelIcon from "./icons/Cancel";
import EmojIcon from "./icons/EmojIcon"; 
import LocationIcon from "./icons/LocationIcon";
import PollIcon from "./icons/PollIcon";
import CalenderIcon from "./icons/CalenderIcon";
import { useState } from "react";
import { shareAction } from "../Actions";
import ImageEditor from "./ImageEditor";
import BrushIcon from "./icons/BrushIcon";
import FontIcon from "./icons/FontIcon";
import ButtonBlue from "./ButtonBlue";

export default function Share() {
  const [media, setMedia] = useState<File | null>(null)
  const [isEditorOpen, setIsEditorOpen] = useState(false)
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false
  })

  const handleMediaChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0])
    }
  }

  const previewURL = media ? URL.createObjectURL(media) : null ;
  console.log(previewURL);
  
  return ( 
    <form className="share p-2" action={FormData => shareAction(FormData, settings)} >
      <div className="contianer flex-col">

        <div className="icon-input flex gap-2 ">
            <Image path="/x/user/p1.jpeg" w={40} h={40} alt="imge" className="rounded-full"/>
            <input name="desc" type="text" className="input-text outline-none w-full" placeholder="What is happening ?"/>
        </div>

        { media?.type.includes("image") &&
          previewURL && 
            <div className="relative mt-2 rounded-xl overflow-hidden ">
            <NextImage src={previewURL} alt="" width={600} height={600}
                className={`w-full rounded-xl
                            ${
                            settings.type === "original" 
                            ? "h-full object-contain " : settings.type === "square"
                            ? "aspect-square object-cover" : "aspect-video object-cover"
                            }`}
            />
            <div 
              onClick={()=> setIsEditorOpen(true)}
              className="bg-black opacity-50 text-white absolute top-2 left-2 py-1 px-2 text-sm cursor-pointer rounded-2xl hover:opacity-80"
            > Edite
            </div>
            <div className="close absolute top-2 right-2 bg-red-500 bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                 onClick={()=>setMedia(null)}
            >
              <CancelIcon />
            </div>
          </div>
        }

        { media?.type.includes("video") && previewURL && (
          <div className="relative mt-2 rounded-xl overflow-hidden " onClick={()=>setMedia(null)}>
            <video src={previewURL} controls />
            <div className="close absolute top-2 right-2 bg-red-500 bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                 onClick={()=>setMedia(null)}
            >
              <CancelIcon />
            </div>
          </div>
        )}

        {
          isEditorOpen && previewURL && <ImageEditor 
          onClose={()=> setIsEditorOpen(false)}
          previewURL = {previewURL}
          settings={settings}
          setSettings= { setSettings}
          />
        }

        <div className="post flex justify-between items-center py-2">
          <div className="options flex gap-2 text-gray-500 *:cursor-pointer md:pl-5 items-center">
            
            <input name="file" 
                   type="file" 
                   className="hidden" 
                   onChange={handleMediaChange} 
                   id="file"
                   accept="image/*,video/*"
            />
            <label htmlFor="file">
            <ImageIcon/>
            </label>
            <EmojIcon />
            <LocationIcon />
            <PollIcon />
            <CalenderIcon />
            <FontIcon />
            <BrushIcon />
          
          </div>
          
          <ButtonBlue text="Post"/>
        </div>
        
      </div>
    </form>
  );
}

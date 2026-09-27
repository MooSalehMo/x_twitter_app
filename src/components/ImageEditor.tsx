import Image from "next/image";
import ArrowBackIcon from "./icons/ArrowBackIcon"
import SquareIcon from "./icons/SquareIcon"
import WideIcon from "./icons/WideIcon";




const ImageEditor  = ({onClose, previewURL, settings, setSettings}: {
    onClose: ()=>void;
    previewURL: string;
    settings:{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    };
    setSettings: React.Dispatch<React.SetStateAction<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
    }>>
}) => {
    
    const handleChangeSensitive = (sensitive: boolean) => {
        setSettings(prev => ({ ...prev, sensitive }))
    }

    const handleChangeType = (type: "original" | "wide" | "square") => {
        setSettings(prev => ({ ...prev, type }))
    }


    return(
        <div className="fixed w-screen h-screen left-0 top-0 bg-black z-10 flex justify-center items-center overflow-hidden">
            <div className="bg-black p-8 rounded-xl flex flex-col gap-4 ">

                <div className="top text-gray-400 bg-transparent flex justify-between items-center text-sm">
                    <div className="cursor-pointer hover:text-white" onClick={onClose}>
                        <ArrowBackIcon />
                    </div>
                    <h2 >Media Settings</h2>
                    <button className="bg-blue-600 text-white text-sm rounded-full py-1 px-2 cursor-pointer hover:opacity-85"
                            onClick={onClose}
                    >Save
                    </button>
                </div>

                <div className="image">
                    <Image src={previewURL} width={600} height={600} alt="" 
                        className={`w-full rounded-xl
                            ${
                            settings.type === "original" 
                            ? "h-full object-contain " : settings.type === "square"
                            ? "aspect-square object-cover" : "aspect-video object-cover"
                            }`}
                    />
                </div>

                <div className="settings flex items-center justify-between ">
                    <div className="flex flex-row gap-3 items-center justify-center">

                        <div className={`original text-sm cursor-pointer flex flex-row gap-1 items-center justify-center
                                            ${settings.type === "original" ? "text-blue-600" : "text-white"}
                                        `} 
                             onClick={()=>handleChangeType("original")}
                            >
                            {/* <SquareIcon /> */}
                            Original
                        </div>
                        
                        <div className={`original text-sm cursor-pointer flex flex-row gap-1 items-center justify-center
                                            ${settings.type === "wide" ? "text-blue-600" : "text-white"}
                                        `} 
                             onClick={()=>handleChangeType("wide")}
                            >
                            <WideIcon />
                            Wide
                        </div>

                        <div className={`original text-sm cursor-pointer flex flex-row gap-1 items-center justify-center
                                            ${settings.type === "square" ? "text-blue-600" : "text-white"}
                                        `} 
                             onClick={()=>handleChangeType("square")}
                            >
                            <SquareIcon />
                            Suare
                        </div>

                    </div>
                    <div className={`cursor-pointer py-1 px-3 rounded-full hover:opacity-80 text-black ${settings.sensitive ? "bg-red-800": "bg-white"}`}
                         onClick={()=> handleChangeSensitive(!settings.sensitive)}
                    >
                        Sensitive
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageEditor
import { imageKit } from "../utils";
import Image from "./Image";
import Video from "./Video";
// import PostInfo from "./PostInfo";
import Reaction from "./PostInterAction";
import RepostIcon from "./icons/RepostIcon";
import Link from "next/link";



interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

 const Post = async () => {

    const getFileDetails = async (fileId: string): Promise<FileDetailsResponse> => {
        return new Promise((resolve, reject)=>{
            imageKit.getFileDetails(fileId, function(error, result) {
                if (error) reject(error)
                else resolve(result as FileDetailsResponse)
            })
        })
    }

    const fileDetails = await getFileDetails("6aa309c0ead997d09a1bbb4f")
    console.log(fileDetails)

  return (
    <div className="post p-4 border-t border-borderGray">       
        <div className="container flex flex-col gap-3"> 

             <div className="icon flex gap-2 text-textGray">
                <span><RepostIcon /></span>
                <span>Mo</span>
                <span>reposted</span>
             </div>

             <div className="user flex flex-row gap-3 ">
                <div className="content">

                    
                    <Link href='/username' className="flex items-center gap-2">
                        <Image path="/x/user/p1.jpeg"  w={40}  h={40}  alt="user" className="cursor-pointer rounded-[50%]" />
                        <h1>Mohamed</h1> 
                        <span className="text-textGray cursor-pointer">@username</span>
                        <span className="text-textGray">1 day</span>
                    </Link>

                    <Link href="/username/status/124" className="paragraph-image">       
                        <div className="text-media">

                            <p className="text p-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ab praesentium.
                            </p>

                            {fileDetails && fileDetails.fileType === "image" 
                                ? 
                                ( <Image path={fileDetails.filePath} w={fileDetails.width} h={fileDetails.height} alt="imge" 
                                    className={`rounded-[5%] ${fileDetails.customMetadata?.sensitive ? "blur-md" : ""}`} />) 
                                : 
                                <Video path={fileDetails.filePath} w={fileDetails.width} h={fileDetails.height} className={fileDetails.customMetadata?.sensitive ? "blur-md": ""}/>
                            }

                        </div>
                    </Link>
                    
                    <Reaction />

                </div>
             </div>

        </div>
    </div>
  );
}

export default Post
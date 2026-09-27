import Like from "./icons/LikeIcon"
import ReplyIcon from "./icons/ReplyIcon"
import Image from "./Image"



const Comment = ()=>{
    return (
        <div className="flex flex-col gap-2  p-3">
            <div className="flex items-center gap-2 ">
                <Image path="/x/user/p1.jpeg"  w={40}  h={40}  alt="user" className="cursor-pointer rounded-[50%]" />
                <h1>Mohamed</h1> 
                <span className="text-textGray">1 day</span>
            </div>

            <div className="text text-sm pl-10 flex flex-col gap-4">
                <p>
                    This is Cool, Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <div className="flex flex-row gap-2 *:cursor-pointer">
                    <ReplyIcon />
                    <Like />
                </div>
            </div>
            
        </div>
    )
}

export default Comment
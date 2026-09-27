import ArrowBackIcon from "@/src/components/icons/ArrowBackIcon"
import Comment from "@/src/components/Comment"
import Post from "@/src/components/Post"
import Image from "@/src/components/Image"
import SendIcon from "@/src/components/icons/SendIcon"

const PostId = ()=>{
    return (
        <div className="">
            <div className="icon-title flex gap-4 font-bold p-3 sticky bg-black top-0 opacity-90">
                <div className="cursor-pointer"> <ArrowBackIcon /> </div>
                <h1> Post</h1>
            </div>
            <div className="border-gray-800">
                <Post />
            </div>
            <div className="comments">
                <form className="icon-input flex gap-2 mb-8 justify-between items-center py-5 px-6 shadow-md shadow-gray-700">
                    <div className=" flex flex-row gap-2 items-center flex-1">
                        <Image path="/x/user/p1.jpeg" w={40} h={40} alt="imge" className="rounded-full"/>
                        <input name="desc" type="text" className="input-text outline-none w-full" placeholder="Write a Comment!"/>
                    </div>
                    <button className="bg-blue-500 p-2 rounded-full cursor-pointer outline-none">
                        <SendIcon />
                    </button>
                    
                </form>
                <h1 className="text-gray-500 pl-7 pb-2 font-bold text-xl">Comments</h1>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    )
}

export default PostId
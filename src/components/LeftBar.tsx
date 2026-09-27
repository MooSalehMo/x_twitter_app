import Link from "next/link";
import XLogoIcon from "./icons/XIcon";
import HomeIcon from "./icons/HomeIcon";
import SearchIcon from "./icons/SearchIcon"; 
import NotificationIcon from "./icons/NotificationIcon";
import MailIcon from "./icons/MailIcon";
import JobsIcon from "./icons/JobIcon";
import SaveFillIcon from "./icons/SaveIcon";
import FriendsIcon from "./icons/FriendsIcon";
import MoreIcon from "./icons/MoreIcon";
import ProfileIcon from "./icons/ProfileIcon";
import AddPostIcon from "./icons/AddPostIcon";
import Image from "@/src/components/Image";
import ButtonBlue from "./ButtonBlue";

const data = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: <HomeIcon />,
    target:"",
  },  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: <SearchIcon />,
    target:"",
  },  
  {
    id: 3,
    name: "NotificationIcon",
    link: "/",
    icon: <NotificationIcon />,
    target:"",
  },  
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: <MailIcon />,
    target:"",
  },  
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: <SaveFillIcon />,
    target:"",
  },  
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: <JobsIcon />,
    target:"",
  },  
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: <FriendsIcon />,
    target:"",
  }, 
  {
    id: 9,
    name: "Premium",
    link: "/",
    icon: <XLogoIcon />,
    target:"",
  },   
  {
    id: 10,
    name: "More",
    link: "/",
    icon: <MoreIcon />,
    target:"",
  },  
  {
    id: 11,
    name: "Profile",
    link: "/username",
    icon: <ProfileIcon />,
    target:"",
    title:"Profile user"
  },
]

export default function LeftBar() {
  return (
    <div className="left-bar sticky gap-4 h-screen  top-0 flex flex-col justify-between pt-2 pb-8 overflow-hidden">       
        <div className="menu flex flex-col gap-4 items-center justify-center"> 
          <Link className="logo" href="/" ><XLogoIcon /></Link>
          <div className="icon-name flex flex-col gap-1">
            {data.map(item => (
              <Link href={item.link} title={item.title} target={item.target} key={item.id} className="flex gap-2 items-center rounded-full p-3 hover:bg-black">
                {item.icon}
                <span className="hidden xl:flex">{item.name}</span>
              </Link>
            ))}
          </div>
          <Link href="/compose/post" className="add-post-icon rounded-full p-2 bg-blue-500 text-white xl:hidden">
            <AddPostIcon />
            
          </Link>
          <Link href="/compose/post" className="add-post-btn hidden xl:flex bg-blue-500 rounded-full w-full  justify-center">
            <ButtonBlue text="Post"/>
          </Link>
          
        </div>

        <Link href="/username" className="user flex items-center justify-center gap-2 cursor-pointer"> 
          <div className="img max-w-7.5 max-h-7.5">
            <Image path="/x/user/p1.jpeg" w={100} h={100} alt="user" className="max-w-full max-h-[50%] rounded-[50%]" />
          </div>
          <div className="name hidden xl:flex flex-col">
            <span className="p-0 m-0">MoSaleh</span>
            <span className="text-[12px] text-textGray p-0 m-0">@MoSaleh</span>
          </div>
          <div className="more text-lg font-bold hidden xl:block">...</div>
        </Link>

    </div>
  );
}


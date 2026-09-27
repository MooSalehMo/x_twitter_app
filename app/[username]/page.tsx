import ButtonBlue from "@/src/components/ButtonBlue";
import Feed from "@/src/components/Feed";
import ArrowBackIcon from "@/src/components/icons/ArrowBackIcon";
import CalenderIcon from "@/src/components/icons/CalenderIcon";
import LocationIcon from "@/src/components/icons/LocationIcon";
import MailIcon from "@/src/components/icons/MailIcon";
import MoreIcon from "@/src/components/icons/MoreIcon";
import SearchIcon from "@/src/components/icons/SearchIcon";
import Image from "@/src/components/Image";

export default function UserPage() {
  return (
    <div className="user-page">
     
     <div className="icon-title flex gap-4 font-bold p-3 sticky bg-black top-0 opacity-90">
       <div className="cursor-pointer"><ArrowBackIcon /></div>
        <h1> Mohamed</h1>
     </div>

      <div className="cover-avatar relative w-full">
        <div className="cover w-full aspect-3/1 relative items-center">
          <Image path="/x/user/p1.jpeg" w={600} h={200} alt="imge" className="h-full w-full"/>
        </div>
        <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute left-4 -translate-y-1/2 items-center flex justify-center">
          <Image path="/x/avatars/avatar.jpg" w={100} h={100} alt="imge" className=""/>
        </div>
      </div>

      <div className="more flex items-center justify-end gap-2 p-2 *:cursor-pointer">
        <div className="more flex items-center justify-center rounded-2xl w-8 h-8 border border-gray-700">
          <MoreIcon />
        </div>
        <div className="more flex items-center justify-center rounded-2xl w-8 h-8 border border-gray-700">
          <SearchIcon />
        </div>
        <div className="more flex items-center justify-center rounded-2xl w-8 h-8 border border-gray-700 ">
          <MailIcon />
        </div>
        <div className="more flex items-center justify-center">

          <ButtonBlue text="Follow"/>
        </div>
      </div>

      <div className="info flex flex-col gap-4 p-5">
        <div className="name-user">
          <h1 className="Mohamed">Mohamed Saleh</h1>
          <p className="text-gray-600">@memo</p>
        </div>
        <p className="font-bold">Mohamed Youtube Channel</p>
        <div className="location text-gray-600 flex gap-2 items-center">
          <LocationIcon />
          <span>Milan</span>
        </div>
        <div className="location text-gray-600 flex gap-2 items-center">
          <CalenderIcon />
          <span>joined May 2020</span>
        </div>
        <div className="location flex gap-2 items-center">
          <div className="flex gap-2">
            <p className="font-bold">5002</p>
            <span className="text-gray-600">Followers</span>
          </div>
          <div className="flex gap-2">
            <p className="font-bold">2038</p>
            <span className="text-gray-600">Following</span>
          </div>
        </div>
      </div>

      <Feed />

    </div>
  );
}

import Footer from "./Footer";
import PopularTags from "./PopularTags";
import Recommendations from "./Recommendations";
import Search from "./Search";

export default function RightBar() {
  return (     
    <div className="right-bar sticky gap-4 h-max  top-0 flex flex-col justify-around pt-2 pb-8 overflow-hidden"> 
      <Search />
      <PopularTags /> 
      <Recommendations />
      <Footer />
    </div>
   
  );
}

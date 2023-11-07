// importing app logo from assets/images/app_logo
import yt_logo from "../../assets/images/app_logo/yt-logo.png";
// import yt_logo from "../../assets/images/app_logo";
import yt_logo_mobile from "../../assets/images/app_logo/yt-logo-mobile.png";

// importing icons from react-icons
import { BsBell } from "react-icons/bs";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../utilities/app_context/AppContext";
import MenuBtn from "./MenuBtn";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const searchQuery = (event) => {
    if (event.key === "Enter" && event.target.value) {
      navigate(`/searchResults/${event.target.value}`);
    }
  };
  return (
    <div className="flex gap-3 justify-between items-center w-full h-16 overflow-hidden bg-black/80 text-white/90 px-1 pr-2 md:px-4">
      <div className="flex items-center gap-1.5 h-full">
        <MenuBtn />
        {/* Logo */}
        <Link to={"/home"} className="contents">
          <div className="flex items-center h-4/6 py-1 cursor-pointer grow">
            {/* Youtube logo for web site */}
            <img
              className="hidden md:block h-[60%] object-cover"
              src={yt_logo}
              alt="youtube logo"
            />
            {/* Youtube logo for mobile site */}
            <img
              className="object-cover h-[65%] md:hidden"
              src={yt_logo_mobile}
              alt="youtube logo mobile"
            />
          </div>
        </Link>
      </div>
      {/* Search Bar */}
      <div className="flex gap-0 justify-center items-center h-5/6 md:h-full box-content w-7/12 md:w-3/6 lg:w-5/12">
        <input
          type="text"
          placeholder="Search"
          className="w-3/4 grow ma-w-[550px] mi-w-[200px] h-4/6 bg-transparent rounded-l-full border border-gray-600 focus:outline-none px-5 py-2 focus:border-blue-500 border-r-0"
          onKeyUp={searchQuery}
        />
        <button className="h-4/6 rounded-r-full px-3 md:px-5 py-1 text-lg border border-gray-600 bg-gray-600/40">
          <AiOutlineSearch />
        </button>
      </div>
      {/* User Profile Buttons */}
      <div className="flex items-center justify-center h-full gap-3">
        <div className="hidden md:contents">
          <button className="p-2 text-xl hover:bg-white/20  rounded-full">
            <BsBell />
          </button>
          <button className="p-2 text-xl hover:bg-white/20  rounded-full">
            <RiVideoAddLine />
          </button>
        </div>
        {/* Login Status Check Phase 2.0 */}
        {false ? (
          <button className="text-4xl hover:bg-white/20  rounded-full">
            <MdAccountCircle className="w-full h-full" />
          </button>
        ) : (
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="profile_avatar"
            className="h-8 w-8 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Header;

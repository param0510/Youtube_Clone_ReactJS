import { AiFillHome } from "react-icons/ai";

const SideNavItem = ({ name, icon, type }) => {
  return (
    <button className="flex items-center gap-4 justify-start rounded-lg hover:bg-white/20 py-2.5 px-2">
      <div className="contents text-2xl">{icon}</div>
      {/* Just changing the name value to 'Home' if it is set to 'New' (this has something to do with api request to get the data accordingly) */}
      <p>{name.toLowerCase() === "new" ? "Home" : name}</p>
    </button>
  );
};

export default SideNavItem;

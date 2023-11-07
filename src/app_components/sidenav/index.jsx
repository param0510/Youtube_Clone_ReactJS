import React, { useContext } from "react";
import SideNavItem from "./SideNavItem";
import { Context } from "../../utilities/app_context/AppContext";

import { categories } from "./data";
import { Link } from "react-router-dom";

const SideNav = () => {
  const { menuVisible } = useContext(Context);

  if (!menuVisible) {
    return null;
  }
  // Try to add transition effect later using react animations because using tailwind transition is not convinient as the state re-renders the whole component both times (show/hide) which si not good for the performance of react app. (John Smilga)
  // Or you can use purejavascript to create to slide in/out effect (Not sure about this though)
  return (
    // menuVisible state is crucial as it adds the class translate-x-0 which transitions from left to inwards into the app content
    <div
      className={`w-64 absolute left-0 top-0 z-10 overflow-y-auto bg-black/90 -translate-x-64 transition-all duration-700 ${
        menuVisible && "translate-x-0"
      }`}
    >
      <div className="px-4 py-1 flex flex-col gap-2 overflow-y-auto">
        {categories.map((category, index) => {
          return (
            // Both works <></> || <React.Fragment></React.Fragment> the same. <></> is a shorthand version.
            <React.Fragment key={index}>
              <Link to={`/${category.name.toLowerCase()}`} className="contents">
                <SideNavItem {...category} />
              </Link>
              {category?.divider && (
                <hr className="w-11/12 self-center my-5 border-white/30" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;

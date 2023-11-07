import { useContext } from "react";
import { Context } from "../../utilities/app_context/AppContext";

import { RxCross1 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const MenuBtn = () => {
  const { menuVisible, setMenuVisible } = useContext(Context);
  const toggleMenu = () => {
    setMenuVisible((currentStateValue) => !currentStateValue);
  };
  {
    /* Bars icon button for toggle menu (Toggles with cross icon) */
  }
  return (
    <button
      className="p-1 text-xl hover:bg-white/20  rounded-full"
      onClick={toggleMenu}
    >
      {menuVisible ? <RxCross1 /> : <AiOutlineMenu />}
    </button>
  );
};

export default MenuBtn;

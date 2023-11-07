import { createContext, useState } from "react";

export const Context = createContext();

// Use this for any login/signup functionality. Because this globally accessible. So wherever it is used. The component will be re-rendered so use it wisely. Otherwise you won't get good performance because of needless rendering
const AppContext = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <Context.Provider value={{ menuVisible, setMenuVisible }}>
      {props.children}
    </Context.Provider>
  );
};

export default AppContext;

import React, { useContext } from "react";
import Header from "./app_components/header";
import SideNav from "./app_components/sidenav";

import { Route, Routes, BrowserRouter } from "react-router-dom";
// import classnames from "classnames";

import { Context } from "./utilities/app_context/AppContext";
import Feed from "./pages/Feed";
import SearchResults from "./pages/SearchResults";
import VideoDetails from "./pages/VideoDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="w-full relative h-[calc(100%-60px)]">
        {/* This has absolute position. Flows over the background page being rendered out of the Routes listed below */}
        <SideNav />
        {/* </div> */}
        <Routes>
          <Route path="/:category?" Component={Feed}></Route>
          <Route path="/searchResults/:query" Component={SearchResults}></Route>
          <Route path="/watch/video/:id" Component={VideoDetails}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

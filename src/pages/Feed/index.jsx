import { Link, useNavigate, useParams } from "react-router-dom";

// Components
import FeedVideoCard from "./components/FeedVideoCard";
import ErrorPage from "../../app_components/shared/ErrorPage";
import Loader from "../../app_components/shared/Loader";

// Replace this with the api call to make it dynamic to clicks on menu
import { useEffect, useState } from "react";

import { categories } from "../../app_components/sidenav/data";
import { useAppStatus } from "../shared/hooks/app_status_hooks";
// Importing custom function to resolve promise to get data from the api
import { getData } from "../shared/utilities/data_loader";

// Find a better way to do this validation for url parameter
var categoriesArray = [];
categories.forEach((category) => {
  const categoryName = category.name.toLowerCase();
  if (
    categoryName !== "settings" &&
    categoryName !== "report history" &&
    categoryName !== "help" &&
    categoryName !== "send feedback"
  ) {
    categoriesArray.push(categoryName);
  }
});
// module constant - Used for category validation
const AcceptedCategoryArray = categoriesArray;

// Feed Component
const Feed = () => {
  // router objects
  const navigate = useNavigate();
  const { category } = useParams();

  // bringing them out in common
  const { isLoading, setIsLoading, isError, setIsError } = useAppStatus();
  // stateObj Definition - Manages/Stores List of video cards on home page
  const [feedVideosObj, setFeedVideosObj] = useState([]);

  // This runs after the component has rendered. It is like a destructor
  // Moreover the dependency array [category] - makes it run only after there is change in category route parameter
  // This will help in not executing requests to the server for the same category multiple times. Improves performance as well
  useEffect(() => {
    // console.log("category changed");
    if (!category) {
      getData("home/", setIsLoading, setIsError, setFeedVideosObj);
      return;
    }
    var finalUrl = "";
    const feedCategory = category.toLowerCase();
    // If the route parameter belongs to any of the listed categories above in AcceptedCategoryArray
    if (AcceptedCategoryArray.indexOf(feedCategory) !== -1) {
      finalUrl = `search/?q=${feedCategory}`;
    } else if (feedCategory === "home") {
      finalUrl = `${feedCategory}/`;
    } else {
      // navigate("/home");
      return;
    }
    // Updating the state value for Feed Page Content
    getData(finalUrl, setIsLoading, setIsError, setFeedVideosObj);
  }, [category]);

  // Loader Component shows loading status
  if (isLoading) {
    return <Loader />;
  }

  // Error page loaded if there is Error
  if (isError) {
    return <ErrorPage />;
  }

  // If there is no error then the data returned is rendered
  return (
    <div className="p-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-baseline">
      {feedVideosObj?.contents?.map((videoObj, index) => {
        const testVideoObj = videoObj?.video;
        return !testVideoObj ? null : (
          <Link key={index} to={`/watch/video/${testVideoObj?.videoId}`}>
            <FeedVideoCard {...testVideoObj} />
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;

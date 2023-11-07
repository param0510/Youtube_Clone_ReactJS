// imported router objects
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// importedComponents
import SearchResultCard from "./components/SearchResultCard";
import Loader from "../../app_components/shared/Loader";
import ErrorPage from "../../app_components/shared/ErrorPage";

// custom Functions for State Management and Data loading
import { useAppStatus } from "../shared/hooks/app_status_hooks";
import { getData } from "../shared/utilities/data_loader";

// SearchResults component
const SearchResults = () => {
  // app state management objects
  // used to set the loading or error status for the page
  const { isLoading, setIsLoading, isError, setIsError } = useAppStatus();
  // SearchResults - Manages the state of search results recieved from the api
  const [searchResult, setSearchResult] = useState({});
  const { query } = useParams();

  useEffect(() => {
    const url = `search/?q=${query}`;
    getData(url, setIsLoading, setIsError, setSearchResult);
  }, [query]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return (
    <div className="mx-auto w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[68%] py-6 flex flex-col gap-7">
      {searchResult?.contents?.map((content, index) => {
        const videoDataObj = content?.video;
        return videoDataObj ? (
          <Link key={index} to={`/watch/video/${videoDataObj?.videoId}`}>
            <SearchResultCard {...videoDataObj} />
          </Link>
        ) : null;
      })}
    </div>
  );
};

export default SearchResults;

import { useEffect, useState } from "react";
// third party library for video player
import ReactPlayer from "react-player";
// router objects
import { useParams } from "react-router-dom";
// components
import SuggestionVideoList from "./components/SuggestionVideoList";
import ChannelInfo from "../shared/components/ChannelInfo";

// formater function in custom utilities
import { countFormatter } from "../../utilities/shared/formatter";

// react icons
import { BiDislike, BiLike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosMore } from "react-icons/io";

// app status - state objects
import { useAppStatus } from "../shared/hooks/app_status_hooks";
import { getData } from "../shared/utilities/data_loader";
import Loader from "../../app_components/shared/Loader";
import ErrorPage from "../../app_components/shared/ErrorPage";

// VideoDetails Component
const VideoDetails = () => {
  // router objects
  const { id } = useParams();

  // app state management objects
  // used to set the loading or error status for the page
  const { isLoading, setIsLoading, isError, setIsError } = useAppStatus();
  // SearchResults - Manages the state of search results recieved from the api
  const [videoDetails, setVideoDetails] = useState({});
  const [relatedVideosObj, setRelatedVideosObj] = useState({});

  useEffect(() => {
    const videoDetailsUrl = `video/details/?id=${id}`;
    // updating the state object value for videoDetails Object
    getData(videoDetailsUrl, setIsLoading, setIsError, setVideoDetails);
    const relatedVideosUrl = `video/related-contents/?id=${id}`;
    // updating the state object value for relatedVideos Object
    getData(relatedVideosUrl, setIsLoading, setIsError, setRelatedVideosObj);
  }, [id]);

  // Video Details Data
  const { title, author, stats, publishedDate, description } = videoDetails;
  // Views and likes count for video in abbreviated format
  const abbrVideoViewCount = countFormatter(stats?.views);
  const abbrVideoLikesCount = countFormatter(stats?.likes);

  const authorAvatar = author?.avatar?.[0]?.url;
  const authorBadges = author?.badges;
  const authorTitle = author?.title;
  const authorStats = author?.stats;

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorPage />;
  }
  return (
    <div className="grid gap-12 grid-cols-1 lg:grid-cols-5 h-full p-5 lg:px-10 ">
      {/* Video + Details */}
      <div className="w-full flex flex-col gap-5 lg:col-span-3">
        {/* Video Player (Third-party) Experiment with this [Customize it even more]*/}
        <div className="w-full h-56 min-[425px]:h-72 sm:h-96 md:h-[500px] rounded-2xl overflow-hidden">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            controls={true}
            pip={true} // Enable this player in player mode
            stopOnUnmount={false}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        {/* Video Title */}
        <p className="line-clamp-2 text-lg font-bold">{title}</p>
        {/* Video Description + Options + More info */}
        <div className="w-full flex gap-3 justify-between items-center flex-wrap">
          {/* Channel Horizontal Stack */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Channel Avatar */}
            <img
              src={authorAvatar}
              alt="author_avatar"
              className="w-10 h-10 rounded-full"
            />
            {/* Channel Info (Name + Subscribe_count) */}
            <div className="flex flex-col gap-1 font-bold">
              <div className="text-white contents">
                <ChannelInfo
                  authorTitle={authorTitle}
                  authorBadges={authorBadges}
                />
              </div>
              <span className="text-gray-500 text-xs">
                {authorStats?.subscribersText}
              </span>
            </div>
            {/* Subscribe button */}
            <button className="px-3 py-1 font-medium text-bae rounded-2xl text-black bg-white hover:bg-white/80">
              Subscribe
            </button>
          </div>
          {/* Video Buttons (Like|Dislike|Share|Download|More) Horizontal Stack */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex gap-0 rounded-xl ">
              <button className="flex gap-2 items-center justify-center rounded-l-3xl px-3 py-2 border-r-[1px] border-r-white/60 bg-gray-700/80 hover:bg-gray-600  ">
                <BiLike className="h-full" />
                <span className="font-semibold tracking-tight">
                  {abbrVideoLikesCount}
                </span>
              </button>
              <button className="rounded-r-3xl px-3 py-2 bg-gray-700/80 hover:bg-gray-600 ">
                <BiDislike />
              </button>
            </div>
            <button className="flex gap-2 items-center justify-center rounded-3xl px-3 py-2  bg-gray-700/80 hover:bg-gray-600 ">
              <PiShareFatLight />
              <span className="font-semibold"> Share</span>
            </button>
            <button className="flex gap-2 items-center justify-center rounded-3xl px-3 py-2  bg-gray-700/80 hover:bg-gray-600  ">
              <LiaDownloadSolid />
              <span className="font-semibold"> Download</span>
            </button>
            <button className="rounded-3xl p-3 bg-gray-700/80 hover:bg-gray-600  ">
              <IoIosMore />
            </button>
          </div>
        </div>

        {/* Video - View_Count + Published Date + Description */}
        <div className="flex flex-col gap-3 p-3 rounded-xl REMOVE(bg-[#2f2f2f] hover:bg-[#3f3f3f]) bg-gray-700/70 hover:bg-gray-700 cursor-pointer mb-10">
          <div className="flex gap-2">
            {abbrVideoViewCount && <span>{abbrVideoViewCount} views</span>}
            <span>{publishedDate} </span>
          </div>
          <p className="tracking-wide line-clamp-4 text-base">{description}</p>
        </div>
      </div>
      {/* Suggested Videos List */}
      <div className="lg:col-span-2 min-h-[400px] overflow-y-auto">
        <SuggestionVideoList relatedVideosObj={relatedVideosObj} />
      </div>
    </div>
  );
};

export default VideoDetails;

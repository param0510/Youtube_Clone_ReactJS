import SuggestionVideoCard from "./SuggestionVideoCard";

import { Link } from "react-router-dom";
const SuggestionVideoList = ({ relatedVideosObj }) => {
  return (
    <div className="w-full flex flex-col gap-3.5 mb-4">
      {relatedVideosObj?.contents?.map((content) => {
        const videoData = content?.video;
        if (!videoData) {
          return;
        }
        return (
          <Link
            key={videoData.videoId}
            to={`/watch/video/${videoData.videoId}`}
          >
            <SuggestionVideoCard {...videoData} />
          </Link>
        );
      })}
    </div>
  );
};

export default SuggestionVideoList;

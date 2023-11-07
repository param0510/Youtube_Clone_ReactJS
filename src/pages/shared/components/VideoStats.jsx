import { countFormatter } from "../../../utilities/shared/formatter";

const VideoStats = ({ publishedTimeText, stats }) => {
  // Extraction of total views on video
  // Refractor and find a better way to do this
  const [firstProp] = Object.keys(stats);
  const videoViews =
    typeof stats[firstProp] === "number" ? stats[firstProp] : null;
  const abbreviatedViewCount = countFormatter(videoViews);

  return (
    <div className="flex items-center gap-1 justify-start text-xs">
      {abbreviatedViewCount && <p>{abbreviatedViewCount} views</p>}
      {abbreviatedViewCount && publishedTimeText && (
        <span className="font-bold pb-1.5">.</span>
      )}
      <p>{publishedTimeText}</p>
    </div>
  );
};

export default VideoStats;

import ChannelInfo from "../../shared/components/ChannelInfo";
import VideoStats from "../../shared/components/VideoStats";
import VideoThumbnail from "../../shared/components/VideoThumbnail";

const SuggestionVideoCard = ({
  title,
  author,
  thumbnails,
  stats,
  lengthSeconds,
  publishedTimeText,
}) => {
  return (
    <div className="w-full grid grid-cols-3 max-[450px]:grid-cols-5 gap-2">
      <div className="col-span-1 max-[450px]:col-span-2">
        <VideoThumbnail thumbnails={thumbnails} lengthSeconds={lengthSeconds} />
      </div>
      <div className="flex flex-col gap-2 col-span-2 max-[450px]:col-span-3">
        <p className="line-clamp-2 font-bold text-sm">{title}</p>
        {/* Channel Info + Video Stats */}
        <div className="flex flex-col gap-0 text-gray-400 font-emibold">
          <ChannelInfo
            authorTitle={author?.title}
            authorBadges={author?.badges}
          />
          <div className="line-clamp-1">
            <VideoStats publishedTimeText={publishedTimeText} stats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionVideoCard;

import ChannelInfo from "../../shared/components/ChannelInfo";
import VideoStats from "../../shared/components/VideoStats";
import VideoThumbnail from "../../shared/components/VideoThumbnail";

const SearchResultCard = ({
  author,
  badges,
  descriptionSnippet,
  lengthSeconds,
  stats,
  publishedTimeText,
  thumbnails,
  title,
}) => {
  return (
    <div className="w-full grid grid-cols-2 min-[530px]:grid-cols-5 md:grid-cols-3 gap-3">
      <div className="col-span-1 min-[530px]:col-span-2 md:col-span-1 max-h-[190px]">
        <VideoThumbnail lengthSeconds={lengthSeconds} thumbnails={thumbnails} />
      </div>
      <div className="col-span-1 min-[530px]:col-span-3 md:col-span-2 flex flex-col gap-3 justify-start">
        <div className="flex flex-col gap-0.5 justify-start">
          <p className="font-semibold line-clamp-2 text-sm min-[420px]:text-base sm:text-lg">
            {title}
          </p>
          <div className="text-[#aaa] font-medium">
            <VideoStats publishedTimeText={publishedTimeText} stats={stats} />
          </div>
        </div>

        <div className="flex items-center gap-2 justify-start text-[#aaa] font-medium text-xs">
          <img
            className="w-6 h-6 rounded-full"
            src={author?.avatar?.[0]?.url}
            alt="channel_avatar"
          />
          <ChannelInfo
            authorTitle={author?.title}
            authorBadges={author?.badges}
          />
        </div>

        <p className="hidden sm:block tracking-wide text-xs line-clamp-2 font-medium text-[#aaa]">
          {descriptionSnippet}
        </p>

        <div className="flex flex-nowrap sm:flex-wrap overflow-x-auto gap-2 items-center justify-start line-clamp-1">
          {badges?.map((badge, index) => {
            return (
              <span
                key={index}
                className="px-1 py-[1px] rounded-sm font-semibold text-xs bg-[#272727] text-[#9f9f9f]"
              >
                {badge.toLowerCase() === "cc" ? "Subtitles" : badge}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResultCard;

import DurationTag from "../../shared/components/DurationTag";
import ChannelInfo from "../../shared/components/ChannelInfo";
import VideoStats from "../../shared/components/VideoStats";
import VideoThumbnail from "../../shared/components/VideoThumbnail";

const FeedVideoCard = ({
  thumbnails,
  title,
  stats,
  publishedTimeText,
  lengthSeconds,
  isLiveNow, // Use this later for displaying 'Live' mode on videos
  author,
}) => {
  // Try declaring less constants. Directly use optional chaining
  const { avatar } = author;

  // Video Card Template
  return (
    <div className="w-full flex flex-col gap-2.5">
      {/* Thumbnail */}
      {/* <div className=""> */}
      <VideoThumbnail lengthSeconds={lengthSeconds} thumbnails={thumbnails} />
      {/* </div> */}

      {/* Video Info */}
      <div className="flex gap-2.5 items-start">
        {/* Optional chaining is very necessary to eliminate undefined errors. If the property is undefined, then this part of the component will not be rendered at all!! */}
        {/* Channel Avatar Image */}
        <img
          src={avatar?.[0]?.url}
          alt="channel_avatar"
          className="w-10 h-10 rounded-full"
        />

        {/* Video Title | Channel Name | Published Time | Total Views */}
        <div className="grow flex flex-col gap-1 justify-start">
          {/* Video Title */}
          <p className="line-clamp-2 font-bold text-base">{title}</p>
          {/* (Channel Name + Video Stats) Section */}
          <div className="flex flex-col gap-0 text-gray-400">
            {/* Channel Name + Badge (Artist/Verified) */}
            <ChannelInfo
              authorTitle={author?.title}
              authorBadges={author?.badges}
            />
            {/* Video Stats - {view count + published time} */}
            <VideoStats publishedTimeText={publishedTimeText} stats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedVideoCard;

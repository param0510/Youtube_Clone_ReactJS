import DurationTag from "./DurationTag";
const VideoThumbnail = ({ lengthSeconds, thumbnails }) => {
  const [mobileThumbnail, webThumbnail] = thumbnails;
  return (
    <div className="w-full h-full relative rounded-xl overflow-hidden hover:overflow-visible hover:scale-[1.02] transition-all duration-1000">
      <img
        src={mobileThumbnail?.url}
        alt="mobile_thumbnail"
        className="block w-full h-full sm:hidden object-cover"
      />
      <img
        src={webThumbnail?.url}
        alt="web_thumbnail"
        className="hidden w-full h-full sm:block object-cover"
      />
      {/* Time stamp */}
      <DurationTag lengthSeconds={lengthSeconds} />
    </div>
  );
};

export default VideoThumbnail;

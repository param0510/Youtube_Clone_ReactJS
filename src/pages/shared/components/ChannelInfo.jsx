import { IoIosCheckmarkCircle } from "react-icons/io";
import { BsMusicNote } from "react-icons/bs";

const ChannelInfo = ({ authorTitle, authorBadges }) => {
  const channelIsVerified = authorBadges?.[0]?.type === "VERIFIED_CHANNEL";
  const channelIsOfficialArtist =
    authorBadges?.[0]?.type === "OFFICIAL_ARTIST_CHANNEL";
  return (
    <div className="flex items-center justify-start gap-1.5 ">
      <p className="line-clamp-1">{authorTitle}</p>
      {channelIsVerified && <IoIosCheckmarkCircle />}
      {channelIsOfficialArtist && <BsMusicNote className="text-sm" />}
    </div>
  );
};

export default ChannelInfo;

import moment from "moment/moment";

import momentDurationFormatSetup from "moment-duration-format";

const DurationTag = ({ lengthSeconds }) => {
  // setting up the duration plugin to calculate the moment
  momentDurationFormatSetup(moment);
  // Timestamp formating
  const timeStamp = parseInt(lengthSeconds)
    ? moment.duration(parseInt(lengthSeconds), "seconds").format()
    : null;

  return (
    <div className="w-fit absolute bottom-2 right-2 px-1.5 py-0.5 rounded-md bg-black/90 text-xs tracking-wide">
      <span>{timeStamp}</span>
    </div>
  );
};

export default DurationTag;

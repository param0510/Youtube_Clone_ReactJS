import { useState } from "react";

// Custom Hook Definer function for state management of the list of videos being fetched
// For the following components -
// Feed - List of video cards on home page
// SearchResults - Search result cards
// VideoDetails - Related videos list
export const useVideoObjList = () => {
  const [videoObjList, setVideoObjList] = useState([]);
  return [videoObjList, setVideoObjList];
};

// Custom Hook Definer function for state management of the video details being fetched for the VideoDetails Component
export const useVideoDataObj = () => {
  const [videoDataObj, setVideoDataObj] = useState([]);
  return [videoDataObj, setVideoDataObj];
};

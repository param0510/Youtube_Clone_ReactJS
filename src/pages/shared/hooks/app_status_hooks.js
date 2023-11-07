import { useState } from "react";

// Custom Hook Definer for app states like - (Loading | Error)
export const useAppStatus = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  return { isLoading, setIsLoading, isError, setIsError };
};

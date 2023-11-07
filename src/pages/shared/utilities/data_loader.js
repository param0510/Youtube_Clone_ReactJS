import fetchDataFromApi from "../../../utilities/data_api/api";

// Common utitlity for getting video Related Data on each page
// uses params to set the state value for app_status
// sets the value for the state of currently rendered component
// sets the status to loading or error if any error is recieved and finally sets the value for the data recieved using
// setDataStateFunc - sets the the state value to the data returned from the api
export const getData = async (
  url,
  setIsLoading,
  setIsError,
  setDataStateFunc
) => {
  setIsLoading(true);
  try {
    const respData = await fetchDataFromApi(url);
    setDataStateFunc(respData?.data || {});
    // console.log(respData);
  } catch (error) {
    setIsError(true);
    // console.log(error);
  } finally {
    setIsLoading(false);
  }
};

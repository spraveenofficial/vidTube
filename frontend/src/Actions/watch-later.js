import axios from "axios";
import baseUrl from "../Utils/baseurl";
const addToWatchLaterAction = async (videoId) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `${baseUrl}/watchlater/add`,
      headers: {
        token: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        videoId,
      },
    });
    if (data.success) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { addToWatchLaterAction };

import Skeleton from "../../Components/Skeleton";
import VideoCard from "../../Components/VideoCard";
import { useLikedVideos } from "../../Hooks/videos";
import "./style.css";
const LikedVideo = () => {
  const { state } = useLikedVideos();
  const { loading, videos, success } = state;
  if (!loading && !success)
    return (
      <div className="homepage-items">
        <h2 className="mt-10 ml-20">No liked videos</h2>
      </div>
    );
  if (loading) {
    return (
      <div className="homepage-items">
        <div className="wrapper flex">
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <Skeleton key={e} />
          ))}
        </div>
      </div>
    );
  }
  return (
    success && (
      <div className="homepage-items">
        <h2 className="mt-10 ml-10">Total Liked Videos: {videos.count}</h2>
        <div className="wrapper">
          {videos.data.map((video, index) => (
            <VideoCard key={index} data={video} access={"like"} />
          ))}
        </div>
      </div>
    )
  );
};

export default LikedVideo;

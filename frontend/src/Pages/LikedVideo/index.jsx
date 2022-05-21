import Skeleton from "../../Components/Skeleton";
import VideoCard from "../../Components/VideoCard";
import { useLikedVideos } from "../../Hooks/videos";
import "./style.css";
const LikedVideo = () => {
  const { state, handleDeleteVideo } = useLikedVideos();
  const { loading, videos, success } = state;
  if ((!loading && !success) || videos.length == 0)
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
        <h2 className="mt-10 ml-10">Total Liked Videos: {videos.length}</h2>
        <div className="wrapper">
          <div className="video-list">
            {videos?.map((video, index) => (
              <VideoCard
                key={index}
                data={video}
                access={"like"}
                handleDeleteVideo={handleDeleteVideo}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default LikedVideo;

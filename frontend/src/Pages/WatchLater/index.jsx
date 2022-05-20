import Loader from "../../Components/Loader";
import VideoCard from "../../Components/VideoCard";
import { useWatchLater } from "../../Hooks/videos";

const WatchLater = () => {
  const { state } = useWatchLater();
  const { loading, success, videos } = state;
  if (loading) {
    return (
      <div className="homepage-items">
        <Loader />
      </div>
    );
  }
  if (videos?.length === 0 || !success) {
    return (
      <div className="homepage-items">
        <h2 className="mt-10 ml-20">Nothing found in Watch Later.</h2>
      </div>
    );
  }
  return (
    success && (
      <div className="homepage-items">
        <h2 className="mt-10 ml-10">
          Total Videos in Watch Later: {videos.length}
        </h2>
        <div className="wrapper">
          {videos.map((video, index) => (
            <VideoCard key={index} data={video} />
          ))}
        </div>
      </div>
    )
  );
};

export default WatchLater;

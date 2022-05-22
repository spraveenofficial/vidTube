import VideoCard from "../../Components/VideoCard";
import { useHomePageVideos } from "../../Hooks/videos";
import Skeleton from "../../Components/Skeleton";
import "./style.css";
const Home = () => {
  const { state } = useHomePageVideos();
  const { loading, videos, success } = state;
  if (loading)
    return (
      <div className="homepage-items">
        <div className="wrapper flex">
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <Skeleton key={e} />
          ))}
        </div>
      </div>
    );
  return (
    !loading &&
    success && (
      <div className="homepage-items">
        <div className="wrapper">
          {videos.data.length > 0 ? (
            videos.data.map((video, index) => (
              <VideoCard key={index} data={video} superAccess={"home"} />
            ))
          ) : (
            <div className="w-max">
              <h1>No Videos Found</h1>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Home;

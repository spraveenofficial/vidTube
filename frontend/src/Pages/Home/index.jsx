import VideoCard from "../../Components/VideoCard";
import { useHomePageVideos } from "../../Hooks/videos";
import Skeleton from "../../Components/Skeleton";
import "./style.css";
import Sidebar from "../../Components/Sidebar";
const Home = () => {
  const { state } = useHomePageVideos();
  const { loading, videos, success } = state;
  if (loading)
    return (
      <>
        <Sidebar />
        <div className="homepage-items">
          <div className="wrapper flex">
            {[1, 2, 3, 4, 5, 6].map((e) => (
              <Skeleton key={e} />
            ))}
          </div>
        </div>
      </>
    );
  return (
    !loading &&
    success && (
      <>
        <Sidebar />
        <div className="homepage-items">
          <div className="wrapper">
            {videos.data.map((video, index) => (
              <VideoCard key={index} data={video} />
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default Home;

import VideoCard from "../../Components/VideoCard";
import { useHomePageVideos } from "../../Hooks/videos";
import Skeleton from "../../Components/Skeleton";
const Home = () => {
  const { state } = useHomePageVideos();
  const { loading, videos, success } = state;
  if (loading)
    return (
      <div className="wrapper">
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <Skeleton key={e} />
        ))}
      </div>
    );
  return (
    !loading &&
    success && (
      <div className="wrapper">
        {videos.data.map((video, index) => (
          <VideoCard key={index} data={video} />
        ))}
      </div>
    )
  );
};

export default Home;

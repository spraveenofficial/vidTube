import Loader from "../../Components/Loader";
import VideoCard from "../../Components/VideoCard";
import { useHistory } from "../../Hooks/history";
import "./style.css";

const History = () => {
  const { loading, history, success } = useHistory();
  if (loading) {
    return (
      <div className="homepage-items">
        <Loader />
      </div>
    );
  }
  if (history.count === 0 || (!loading && !success)) {
    return (
      <div className="homepage-items">
        <h2 className="mt-10 ml-20">No History Found</h2>
      </div>
    );
  }
  return (
    !loading &&
    success && (
      <div className="homepage-items p">
        <h2>History</h2>
        <div className="playlist-item-content">
          <div className="playlist-item-content-item">
            <div className="playlist-item-content-item-title">
              {history.data[0].videos.map((video, index) => (
                <VideoCard key={index} data={video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default History;

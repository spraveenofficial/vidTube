import { deleteHistoryAction } from "../../Actions";
import Loader from "../../Components/Loader";
import VideoCard from "../../Components/VideoCard";
import { useHistory } from "../../Hooks/history";
import "./style.css";

const History = () => {
  const { loading, history, success, dispatch } = useHistory();
  const clearHistoryHandler = () => {
    deleteHistoryAction(dispatch);
  };
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
        <div className="history-title">
          <h1>History</h1>
          <button
            onClick={clearHistoryHandler}
            className="btn btn-primary mb-10"
          >
            Clear History
          </button>
        </div>
        <div className="homepage-items">
          <div className="wrapper">
            <div className="video-list">
              {history.data[0].videos.map((video, index) => (
                <VideoCard key={index} data={video} access={"history"} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default History;

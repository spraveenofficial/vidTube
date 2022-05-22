import "./style.css";
import { usePlaylist } from "../../Hooks/playlist";
import Loader from "../../Components/Loader";
import VideoCard from "../../Components/VideoCard";
import { DeleteIcon } from "../../Components/Icons";
import { deletePlaylist } from "../../Actions";
const Playlist = () => {
  const { loading, playlist, success, dispatch } = usePlaylist();
  const handleDelete = async (id) => {
    deletePlaylist(id, dispatch);
  };
  if (loading) {
    return (
      <div className="homepage-items">
        <Loader />
      </div>
    );
  }
  if (playlist?.data?.length === 0 || !success) {
    return (
      <div className="homepage-items">
        <h2 className="mt-10 ml-20">No Playlist Found</h2>
      </div>
    );
  }
  return (
    success && (
      <div className="homepage-items">
        <div className="playlist">
          <div className="playlist-title">
            <h1>Playlists</h1>
          </div>
        </div>
        <div className="playlist-content">
          {playlist.data.map((playlist, index) => (
            <div key={index} className="playlist-item">
              <div className="playlist-item-title">
                <h2>
                  {index + 1}. {playlist.name}
                </h2>
                <div className="pointer">
                  <DeleteIcon onClick={() => handleDelete(playlist._id)} />
                </div>
              </div>
              <div className="wrapper">
                {playlist.videos.map((video, index) => (
                  <VideoCard key={index} data={video} access={"playlist"} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Playlist;

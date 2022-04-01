import Button from "../../Components/Button";
import "./style.css";
import { useCreatePlaylist, usePlaylist } from "../../Hooks/playlist";
import Loader from "../../Components/Loader";
import VideoCard from "../../Components/VideoCard";
const Playlist = () => {
  const { openModalClick, showModal } = useCreatePlaylist();
  const { loading, playlist, success } = usePlaylist();
  if (loading) {
    return (
      <div className="homepage-items">
        <Loader />
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
          <div className="add-playlist-btn">
            <Button onClick={() => openModalClick()} name="Add Playlist" />
          </div>
        </div>
        <div className="playlist-content">
          {playlist.data.map((playlist, index) => (
            <div key={index} className="playlist-item">
              <div className="playlist-item-title mb-10">
                <h2>
                  {index + 1}. {playlist.name}
                </h2>
              </div>
              <div className="playlist-item-content">
                <div className="playlist-item-content-item">
                  <div className="playlist-item-content-item-title">
                    {playlist.videos.length === 0 ? (
                      <div className="no-playlist">
                        <h3>No videos in this playlist</h3>
                      </div>
                    ) : (
                      playlist.videos.map((video, index) => (
                        <VideoCard key={index} data={video} />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showModal()}
      </div>
    )
  );
};

export default Playlist;

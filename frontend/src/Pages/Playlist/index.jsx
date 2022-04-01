import Button from "../../Components/Button";
import "./style.css";
import { usePlaylist } from "../../Hooks/playlist";
const Playlist = () => {
  const { openModalClick, showModal } = usePlaylist();
  return (
    <div className="homepage-items">
      <div className="playlist">
        <div className="playlist-title">
          <h1>Playlist</h1>
        </div>
        <div className="add-playlist-btn">
          <Button onClick={() => openModalClick()} name="Add Playlist" />
        </div>
      </div>
      {showModal()}
    </div>
  );
};

export default Playlist;

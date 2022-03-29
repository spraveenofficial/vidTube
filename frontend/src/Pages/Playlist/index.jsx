import Button from "../../Components/Button";
import "./style.css";

const Playlist = () => {
  return (
    <div className="homepage-items">
      <div className="playlist">
        <div className="playlist-title">
          <h1>Playlist</h1>
        </div>
        <div className="add-playlist-btn">
          <Button name="Add Playlist" />
        </div>
      </div>
    </div>
  );
};

export default Playlist;

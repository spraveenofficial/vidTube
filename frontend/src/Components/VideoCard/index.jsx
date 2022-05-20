import "./style.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const VideoCard = (props) => {
  const { data, access } = props;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { id, title, thumbnailUrl, views, userId, duration, createdAt } = data;
  const durationMinutes = Math.floor(duration / 60);
  const durationSeconds = duration - durationMinutes * 60;
  const durationFormatted =
    durationMinutes > 0
      ? `${durationMinutes}.${durationSeconds.toFixed()} min`
      : `${durationSeconds} sec`;

  const handleOpenOptions = () => {
    setOpen(!open);
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    // Check if user clicked on the video card or the options button
    if (
      e.target.tagName === "path" ||
      e.target.tagName === "svg" ||
      e.target.tagName === "BUTTON"
    ) {
      return setOpen(!open);
    }
    navigate(`/video/${data._id}`);
  };

  const RenderOptions = () => {
    return (
      <div className="video_option">
        {access === "later" && <p>Delete From Watch Later</p>}
        {access === "like" && <p>Delete From Liked Videos</p>}
      </div>
    );
  };
  return (
    <div onClick={handleNavigate} className="clip">
      <section className="preview-container">
        <img src={thumbnailUrl} alt="video" />
        <span className="time-status">{durationFormatted}</span>
        <div className="overlay-preview">
          <div className="play-icon">
            <svg viewBox="0 0 24 24" className="style-scope yt-icon">
              <g className="style-scope yt-icon">
                <path d="M8 5v14l11-7z" className="style-scope yt-icon"></path>
              </g>
            </svg>
          </div>
          <div className="preview">
            <img src={thumbnailUrl} alt="video" />
          </div>
          <button className="watch-later-button">
            <svg viewBox="0 0 24 24">
              <g className="style-scope yt-icon">
                <path
                  d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z"
                  className="style-scope yt-icon"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </section>
      <section className="content-container relative">
        <h3>{title}</h3>
        {access && (
          <div className="parent_video_option">
            <button
              type="button"
              className="relative"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={handleOpenOptions}
            >
              <svg
                className="options-w-h"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="black"
                aria-hidden="true"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        )}
        {open && <RenderOptions />}
        <footer>
          <p className="channel-name">{userId.channelName}</p>
          <div className="meta">
            <p>{views} views</p>
            <p>{moment(createdAt).fromNow()}</p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default VideoCard;

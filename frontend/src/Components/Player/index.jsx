import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Player = ({ src: previewUrl }) => {
  const videoRef = useRef(null);
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/path/to/video.mp4",
        type: "video/mp4",
      },
    ],
  };
  useEffect(() => {
    const vjsPlayer = videojs(videoRef.current, videoJsOptions);
    if (previewUrl) {
      vjsPlayer.src({ type: "video/mp4", src: previewUrl });
    }
    return () => {
      if (vjsPlayer) {
        vjsPlayer.dispose();
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video
        controls
        ref={videoRef}
        autoPlay={true}
        className="video-js vjs-fluid vjs-big-play-centered"
      ></video>
    </div>
  );
};

export default Player;

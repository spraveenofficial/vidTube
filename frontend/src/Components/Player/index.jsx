import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const Player = ({ src: previewUrl }) => {
  const videoRef = useRef(null);
  const videoJsOptions = {
    // lookup the options in the docs for more options
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
    const vjsPlayer = videojs(videoRef.current);
    if (previewUrl) {
      vjsPlayer.src({ type: "video/mp4", src: previewUrl });
    }

    // vjsPlayer.on("ended", () => {
    //   client(`${process.env.REACT_APP_BE}/videos/${videoId}/view`);
    // });

    return () => {
      if (vjsPlayer) {
        vjsPlayer.dispose();
      }
    };
  }, []);

  return (
    // Make autoPlay true to play the video when the component is loaded

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

import { useEffect } from "react";
import "./style.css";
import { fromEvent, of } from "rxjs";
import { delay, takeUntil, flatMap } from "rxjs/operators";
const VideoCard = () => {
  useEffect(() => {
    const card = document.querySelectorAll(".clip");
    card.forEach((eachCard) => {
      const mouseEnter$ = fromEvent(eachCard, "mouseenter");
      const mouseLeave$ = fromEvent(eachCard, "mouseleave");
      mouseEnter$.subscribe(() => {
        eachCard.classList.add("hoverable");
      });
      mouseEnter$
        .pipe(flatMap((e) => of(e).pipe(delay(2500), takeUntil(mouseLeave$))))
        .subscribe(() => {
          eachCard.classList.remove("hoverable");
          eachCard.classList.add("show-play-icon");
        });

      mouseLeave$.subscribe(() => {
        eachCard.classList.remove("hoverable");
        eachCard.classList.remove("show-play-icon");
      });
    });
  });
  return (
    <div className="clip">
      <section className="preview-container">
        <img src="https://res.cloudinary.com/dtswa0rzu/video/upload/v1647790440/lolipop%20Lagelu.webp" />
        <span className="time-status">5:15</span>
        <div className="overlay-preview">
          <div className="play-icon">
            <svg viewBox="0 0 24 24" className="style-scope yt-icon">
              <g className="style-scope yt-icon">
                <path d="M8 5v14l11-7z" className="style-scope yt-icon"></path>
              </g>
            </svg>
          </div>
          <div className="preview">
            <img src="https://im2.ezgif.com/tmp/ezgif-2-22d8315081.webp" />
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
      <section className="content-container">
        <h3>RAP AGAINST DICTATORSHIP</h3>
        <footer>
          <p className="channel-name">Praveen Kumar Singh</p>
          <div className="meta">
            <p>2M views</p>
            <p>6 months ago</p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default VideoCard;

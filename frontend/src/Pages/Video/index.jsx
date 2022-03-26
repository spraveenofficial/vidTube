import "./style.css";
import { LikeIcon, DislikeIcon } from "../../Components/Icons";
import Button from "../../Components/Button";
import Player from "../../Components/Player";
import { useEachVideo, useVideoLike } from "../../Hooks/videos";
import { useParams } from "react-router-dom";
import Skeleton from "../../Components/Skeleton";
import moment from "moment";
import baseUrl from "../../Utils/baseurl";
import NotFound from "../../Components/NotFound";
const Video = () => {
  const { id } = useParams();
  const { states, handleLike, handleDisLike } = useVideoLike(id);
  const { liked, disLiked } = states;
  const { state, dispatch } = useEachVideo(id);
  const { loading, video, success, error } = state;
  console.log(state.video);
  if (loading)
    return (
      <div className="wrapper">
        {[1, 2, 3, 4, 5, 6].map((e) => (
          <Skeleton key={e} />
        ))}
      </div>
    );

  if (error) return <NotFound />;
  const {
    title,
    views,
    likes,
    dislikes,
    url,
    image,
    userId,
    createdAt,
    _id,
  } = video.data;
  const { channelName, subscribers, photoUrl } = userId;
  const handleLikes = async (videoId) => {
    const status = await handleLike(videoId);
    if (status) {
      dispatch({ type: "INCREASELIKE" });
    } else {
      dispatch({ type: "DECREASELIKE" });
    }
  };
  const handleDisLikes = (videoId) => {
    handleDisLike(videoId);
  };
  return (
    !loading &&
    success && (
      <div className="video">
        <div className="video__container">
          <Player src={url} />
          <div className="videotitleData">
            <h1 className="videotitleData__title">{title}</h1>
            <div className="videotitleData__info">
              <div className="video-title-views flex gap10">
                <p className="videotitleData__info__author">
                  {views} views - <span>{moment(createdAt).fromNow()}</span>
                </p>
              </div>
              <div className="video-titles-buttons">
                <LikeIcon
                  isblue={liked ? liked : null}
                  onClick={() => handleLikes(_id)}
                />
                {likes}
                <DislikeIcon
                  isblue={disLiked ? disLiked : null}
                  onClick={() => handleDisLikes(_id)}
                />
                {dislikes}
              </div>
            </div>
          </div>
          <div className="video-channel-info">
            <div className="video-channel-info__container">
              <div className="video-channel-info__container__image">
                <img src={`${baseUrl}/${photoUrl}`} alt="" className="avatar" />
                <div className="video-channel-info__container__image__info">
                  <p className="video-channel-info__container__image__info__name">
                    {channelName}
                  </p>
                  <p className="video-channel-info__container__image__info__subscriberss">
                    <span>{subscribers}</span> subscribers
                  </p>
                </div>
                <Button className="btn btn-primary" name="Subscribe" />
              </div>
              <div className="video-channel-info__container__description">
                <p className="video-channel-info__container__description__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quidem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Video;

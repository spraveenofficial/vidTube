import "./style.css";
import baseUrl from "../../Utils/baseurl";
const SubscriptionIcon = ({ channel }) => {
  const { channelName, photoUrl } = channel.channelId;
  return (
    <div className="subscription-icon-container">
      <div className="badge channel-icons">
        <img className="avatar" src={`${baseUrl}/${photoUrl}`}></img>
        <p>{channelName}</p>
      </div>
    </div>
  );
};

export default SubscriptionIcon;

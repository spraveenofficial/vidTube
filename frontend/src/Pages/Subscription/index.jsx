import "./style.css";
import SubscriptionIcon from "../../Components/SubscriptionIcon";
import { useSubscriptions } from "../../Hooks/subscriptions";
import Loader from "../../Components/Loader";
const Subscription = () => {
  const { loading, error, subscriptions, success } = useSubscriptions();
  if (loading) {
    return (
      <div className="homepage-items">
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className="homepage-items">
        <p>{error}</p>
      </div>
    );
  }
  return (
    !loading &&
    success && (
      <div className="homepage-items mt-10 ml-10">
        {subscriptions.data.length > 0 ? (
          <>
            <h3 className="mb-10">
              Total Subscriptions : {subscriptions.count}
            </h3>
            <div className="channel-lists">
              {subscriptions.data.map((subscription) => (
                <SubscriptionIcon
                  key={subscription.id}
                  channel={subscription}
                />
              ))}
            </div>
          </>
        ) : (
          <h2>No Subscriptions Found.</h2>
        )}
      </div>
    )
  );
};

export default Subscription;

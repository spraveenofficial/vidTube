import "./style.css";
import Container from "../../Components/Container";
const Channel = () => {
  return (
    <Container>
      <div className="channel">
        <div className="channel__header">
          <div className="channel__header__left__icon">
            <div>
              <img
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                class="main-profile-img avatar"
              />
              <i class="fa fa-edit"></i>
            </div>
          </div>
          <div className="channel-info-card">
            <div className="channel-info-card__header">
              <h1>Channel</h1>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Channel;

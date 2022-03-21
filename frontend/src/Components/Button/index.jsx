import Spinner from "../Spinner";
const Button = ({ loading, onClick, name, ...rest }) => {
  return (
    <button onClick={onClick} className="btn loading-btn" {...rest}>
      {loading && <Spinner />}
      {name}
    </button>
  );
};

export default Button;

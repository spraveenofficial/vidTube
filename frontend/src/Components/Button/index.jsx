const Button = ({ onClick, name, ...rest }) => {
  return (
    <button onClick={onClick} className="btn" {...rest}>
      {name}
    </button>
  );
};

export default Button;

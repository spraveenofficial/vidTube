import "./style.css";

const Input = ({ onChange, label, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input onChange={onChange} className="input-main" {...rest} />
    </div>
  );
};

export default Input;

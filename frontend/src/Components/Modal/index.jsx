import "./style.css";
const Modal = ({ onClose, children }) => {
  const closeModal = () => {
    onClose();
  };
  return (
    <div className="modal-window">
      <div>
        <p onClick={closeModal} className="modal-close"></p>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import "./style.css";
const Modal = ({ onClose }) => {
  const closeModal = () => {
    onClose();
  };
  return (
    <div className="modal-window">
      <div>
        <p onClick={closeModal} className="modal-close"></p>
        <h1>Voilà!</h1>
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
          praesentium, dolorum sit quia assumenda sint excepturi eos cum.
          Laborum blanditiis magni perferendis optio? Minus atque vel facilis
          ipsam vero odit?
        </div>
        👉 VidTube: This is Testing Modal
      </div>
    </div>
  );
};

export default Modal;

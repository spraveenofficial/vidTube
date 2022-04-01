import { useState } from "react";
import Modal from "../Components/Modal";

const usePlaylist = () => {
  const [modal, setModal] = useState(false);
  const openModalClick = () => setModal(true);
  const closeModalClick = () => setModal(false);
  const showModal = () => modal && <Modal onClose={() => closeModalClick()} />;
  return { showModal, openModalClick };
};

export { usePlaylist };

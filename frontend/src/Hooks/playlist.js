import { useEffect, useReducer, useState } from "react";
import Modal from "../Components/Modal";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { fetchPlaylist } from "../Reducers";
import { fetchPlaylistAction } from "../Actions";

const usePlaylist = () => {
  const inirialState = {
    loading: false,
    playlist: [],
    error: null,
    success: false,
  };
  const [state, dispatch] = useReducer(fetchPlaylist, inirialState);
  useEffect(() => {
    fetchPlaylistAction(dispatch);
  }, []);
  const { loading, playlist, error, success } = state;
  return { loading, playlist, error, success, dispatch };
};

const useCreatePlaylist = () => {
  const [modal, setModal] = useState(false);
  const openModalClick = () => setModal(true);
  const closeModalClick = () => setModal(false);
  const showModal = () =>
    modal && (
      <Modal onClose={() => closeModalClick(0)}>
        <div className="customized-model-playlist">
          <h1>Create Playlist</h1>
          <Input label="Enter Name" placeholder="Add Playlist Title" />
          <Input
            label="Enter Description"
            placeholder="Add Playlist Description"
          />
          <Button className="mt-20 btn full-width" name="Create New Playlist" />
        </div>
      </Modal>
    );
  return { showModal, openModalClick };
};

export { useCreatePlaylist, usePlaylist };

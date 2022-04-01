import { useEffect, useReducer, useState } from "react";
import Modal from "../Components/Modal";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { addPlaylist, fetchPlaylist } from "../Reducers";
import { addPlaylistAction, fetchPlaylistAction } from "../Actions";

const usePlaylist = () => {
  const initialState = {
    loading: false,
    playlist: [],
    error: null,
    success: false,
  };
  const [state, dispatch] = useReducer(fetchPlaylist, initialState);
  useEffect(() => {
    fetchPlaylistAction(dispatch);
  }, []);
  const { loading, playlist, error, success } = state;
  console.log(playlist);
  return { loading, playlist, error, success, dispatch };
};

const useCreatePlaylist = (id) => {
  const [userInput, setUserInput] = useState({
    name: "",
    description: "",
  });
  const initialState = {
    loading: false,
    playlist: [],
    error: null,
    success: false,
  };
  const [modal, setModal] = useState(false);
  const openModalClick = () => setModal(true);
  const closeModalClick = () => setModal(false);
  const [state, setState] = useReducer(addPlaylist, initialState);
  const handleNewPlaylist = async () => {
    const status = await addPlaylistAction(setState, {
      name: userInput.name,
      description: userInput.description,
      videos: id,
    });
    if (status) {
      setModal(false);
    }
  };
  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    });
  };
  const showModal = () =>
    modal && (
      <Modal onClose={() => closeModalClick(0)}>
        <div className="customized-model-playlist">
          <h1>Create Playlist</h1>
          <Input
            name="name"
            onChange={handleChange}
            label="Enter Name"
            placeholder="Add Playlist Title"
          />
          <Input
            name="description"
            onChange={handleChange}
            label="Enter Description"
            placeholder="Add Playlist Description"
          />
          <Button
            loading={state.loading}
            onClick={() => handleNewPlaylist()}
            className="mt-20 btn full-width"
            name="Create New Playlist"
          />
        </div>
      </Modal>
    );
  return { showModal, openModalClick };
};

export { useCreatePlaylist, usePlaylist };

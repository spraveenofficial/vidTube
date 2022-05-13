import "./style.css";
import Container from "../../Components/Container";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useAuth } from "../../Contexts/auth-context";
import Toast from "../../Components/Toast";
import { useVideoUpload } from "../../Hooks/videos";
import { useEffect, useState } from "react";
const Upload = () => {
  const { user } = useAuth();
  const { state, upload } = useVideoUpload();
  const { loading, success, message } = state;
  const { channelName } = user;
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedThumnail, setThumbnailFile] = useState(null);
  const [userData, setUserData] = useState({
    title: "",
    description: "",
  });
  const getDuration = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      var video = document.createElement("video");
      video.src = e.target.result;
      video.onloadedmetadata = (e) => {
        setUserData({ ...userData, duration: video.duration });
      };
    };
  };
  useEffect(() => {
    selectedFile && getDuration(selectedFile);
  }, [selectedFile]);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("thumbnail", selectedThumnail);
    formData.append("title", userData.title);
    formData.append("description", userData.description);
    formData.append("duration", userData.duration);
    await upload(formData);
  };
  return (
    <div className="homepage-items">
      <Container>
        <div className=" upload">
          <h2 className="text-center">Upload Video</h2>
          <div className="upload__form">
            <form
              onSubmit={handleSubmit}
              method="POST"
              encType="multipart/form-data"
            >
              <Input
                label="Enter Title"
                placeholder="Enter Video Title"
                name="title"
                onChange={handleChange}
              />
              <Input
                label="Enter Description"
                placeholder="Enter Video Description"
                name="description"
                onChange={handleChange}
              />
              <Input
                label="Select Video"
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                accept="video/mp4/mkv"
              />
              <Input
                label="Select Thumbnail"
                type="file"
                onChange={(e) => setThumbnailFile(e.target.files[0])}
              />
              <Input
                label="Channel Name"
                type="text"
                disabled={true}
                defaultValue={channelName}
              />
              <Button
                loading={loading}
                className="btn full-width"
                name="Upload"
              />
            </form>
          </div>
          {!loading && message && <Toast message={message} success={success} />}
        </div>
      </Container>
    </div>
  );
};

export default Upload;

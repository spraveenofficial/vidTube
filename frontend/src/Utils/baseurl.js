const baseUrl =
  process.env.REACT_APP_MODE === "dev"
    ? "http://localhost:4000/v1/api"
    : "https://vid-tube-backend.vercel.app/v1/api";

export default baseUrl;

import { useAuth } from "../../Contexts/auth-context";
import Button from "../Button";
import Input from "../Input";
import "./style.css";

const Comment = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className="comment mt-10">
      <h2>Comments</h2>
      <div className="comment-write">
        {isAuthenticated ? (
          <>
            <Input placeholder="Write Comment" />
            <Button name="Post Comment" className="btn mt-10">
              Comment
            </Button>
          </>
        ) : (
          <p>Login Now, to comment</p>
        )}
      </div>
    </div>
  );
};

export default Comment;

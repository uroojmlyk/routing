import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>Post Detail</h3>
      <p>Post ID: {id}</p>
    </div>
  );
};

export default PostDetail;
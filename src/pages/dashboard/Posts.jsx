import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <h3>Posts List</h3>

      <ul>
        <li><Link to="1">Post 1</Link></li>
        <li><Link to="2">Post 2</Link></li>
        <li><Link to="3">Post 3</Link></li>
      </ul>
    </div>
  );
};

export default Posts;
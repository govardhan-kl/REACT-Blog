import { Link } from "react-router-dom";

function Navbar() {
    return (
      <div>
        <ul id="nav">
          {/* Link is coming from react-router-dom */}
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/post/:postid">View Blog</Link> </li>
          <li><Link to="/create-post">Create Blog</Link> </li>
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  
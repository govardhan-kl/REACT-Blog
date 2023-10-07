import { Link } from "react-router-dom";
import styled from "styled-components";

//to style third party componets like <Link>
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9e9e9e;

  &:hover{
    text-decoration: underline;
  }
`;

function Navbar() {
    return (
      <div>
        <ul id="nav">
          {/* Link is coming from react-router-dom */}
          <li><StyledLink to="/">Home</StyledLink> </li>
          {/* <li><Link to="/post/:postid">View Blog</Link> </li> */}
          <li><Link to="/create-post">Create Blog</Link> </li>
          {/* <li><a href="/home">Test</a></li> */}
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  
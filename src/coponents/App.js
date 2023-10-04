import { Route, Routes } from "react-router-dom";
import { Home, PostDetail, CreatePost, Navbar} from "./index";

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      {/* everything of route should be kept inside Routes and other Components should be kept outside */}
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/post/:postid" Component={PostDetail}></Route>
        <Route path="/create-post" Component={CreatePost}></Route>
      </Routes>
    </div>
  );
}

export default App;

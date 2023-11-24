import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Pages/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Friends from "./components/Pages/Friends";
import FriendDetail from "./components/Pages/FriendDetail";
import Posts from "./components/Pages/Posts";
import PostDetail from "./components/Pages/PostDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="friends/:friendId" element={<FriendDetail></FriendDetail>}></Route>
        <Route path="/posts" element={<Posts></Posts>}>
          <Route path=":postId" element={<PostDetail></PostDetail>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

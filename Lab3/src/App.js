import "./App.css";
import Home from "./Components/Home/Home";
import Posts from "./Components/Posts";
import viewPost from "./Components/viewPost";
import PostForm from "./Components/PostForm";
import NotFound from "./Components/NotFound";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Posts />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<viewPost />} />
          <Route path="posts/:id/edit" element={<PostForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

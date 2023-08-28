import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "./api";
import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const posts = await fetchAllPosts();
      setPosts(posts);
    };
    getAllPosts();
  }, []);
  return <div></div>;
};

export default App;

<React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>;


import { useState, useEffect } from "react";

const COHORT_NAME = "2302-ACC-ET-WEB-PT-B";
const BASE_URL = "https://strangers-things.herokuapp.com/api/${COHORT_NAME}";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${BASE_URL}/posts`);
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};


export default App;

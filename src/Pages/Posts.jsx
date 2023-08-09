import { useState, useEffect } from "react";
import { baseUrl } from "../Helpers";
import PostItem from "../components/PostComponents/PostItem";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchPosts() {
      setError(false);
      try {
        const response = await fetch(`${baseUrl}/posts`);
        const result = await response.json();

        setPosts(result.data.posts);
      } catch (error) {
        setError(true);
        console.log(setError);
      }
    }

    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </>
  );
}

export default Posts;

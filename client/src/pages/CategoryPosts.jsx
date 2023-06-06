import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const CategoryPosts = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("cat");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts?cat=${category}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts();
  }, [category]);

//   return (
//     <div>
//       <h2>{category.toUpperCase()} Posts</h2>
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h3>{post.title}</h3>
//           <img src= {`http://localhost:3001/uploads/${post.img}`} alt={post.title} />
//           <p>{post.body}</p>
//           <p>Author: {post.createdUser}</p>
//           <p>Time: {post.timeCreated}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryPosts;

return (
  <div>
    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>{category.toUpperCase()} Posts</h2>
    {posts.map((post) => (
      <div key={post.id} style={{ marginBottom: "20px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>{post.title}</h3>
        <img src={`http://localhost:3001/uploads/${post.img}`} alt={post.title} style={{ maxWidth: "100%" }} />
        <p style={{ marginTop: "10px" }}>{post.body}</p>
        <p>Author: {post.createdUser}</p>
        <p>Time: {post.timeCreated}</p>
      </div>
    ))}
  </div>
);
};

export default CategoryPosts;

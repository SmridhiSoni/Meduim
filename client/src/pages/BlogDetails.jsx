// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// function BlogDetails() {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     fetchBlogData();
//   }, []);

//   // Fetch the blog data
//   const fetchBlogData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/blogs/${id}`);
//       setBlog(response.data);
//     } catch (error) {
//       console.error("Error fetching blog data:", error);
//     }
//   };

//   if (!blog) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{blog.title}</h1>
//       <h2>{blog.subtitle}</h2>
//       <img src= {`http://localhost:3001/uploads/${blog.img}`} alt={blog.title} height="150px" width="250px"/>
//       {/* <p>{blog.body}</p> */}
//       <p>Author: {blog.createdUser}</p>
//       <p>Time Created: {blog.timeCreated}</p>
      
//     </div>
//   );
// }

// export default BlogDetails;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [showFullBody, setShowFullBody] = useState(false);

  useEffect(() => {
    fetchBlogData();
  }, []);

  // Fetch the blog data
  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/blogs/${id}`);
      setBlog(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const handleReadMore = () => {
    setShowFullBody(true);
  };

  const handleReadLess = () => {
    setShowFullBody(false);
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <h2>{blog.subtitle}</h2>
      <img
        src={`http://localhost:3001/uploads/${blog.img}`}
        alt={blog.title}
        height="150px"
        width="250px"
      />
      {showFullBody ? (
        <div>
          <p>{blog.body}</p>
          <button onClick={handleReadLess}>Read Less</button>
        </div>
      ) : (
        <div>
          <p>{blog.body.substring(0, 200)}...</p>
         
        </div>
      )}
      <p>Author: {blog.createdUser}</p>
      <p>Time Created: {blog.timeCreated}</p>
    </div>
  );
}

export default BlogDetails;

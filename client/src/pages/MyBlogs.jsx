
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import {Link} from "react-router-dom";

function MyBlogs() {
  const [username, setUsername] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedUsername = Cookies.get("username");
    if (storedUsername) {
      setUsername(storedUsername);
      fetchUserBlogs(storedUsername);
    }
  }, []);

  // Fetch blogs associated with the logged-in user
  const fetchUserBlogs = async (username) => {
    try {
      const response = await axios.get(`http://localhost:3001/myblogs?username=${username}`);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching user blogs:", error);
    }
  };

  // Delete a blog post
  const deleteBlog = async (blogId) => {
    try {
      await axios.delete(`http://localhost:3001/blogs/${blogId}`);
      // Refresh blogs after deletion
      fetchUserBlogs(username);
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };

//   return (
//     <>
//       <h1>My Blogs</h1>
//       {blogs.map((blog) => (
//         <div key={blog.id}>
//           <h2>{blog.title}</h2>
//           {/* <img src= {`http://localhost:3001/uploads/${blog.img}`} alt={blog.title} /> */}
//           <img src={blog.img ? `http://localhost:3001/uploads/${blog.img}` : null} alt="Blog Image" height="100px" width="100px" />
//           <p>{blog.subtitle}</p>
//           <p>{blog.body}</p>
//           <p>Category: {blog.category}</p>
//           <p>Author: {blog.createdUser}</p>
//           <p>Time: {blog.timeCreated}</p>

//           {/* Edit button */}
//           <Link to={`/blogs/${blog.id}/edit`}>
//             <button className="editbtn">Edit</button>
//           </Link>

//           {/* Delete button */}
//           <button onClick={() => deleteBlog(blog.id)}>Delete</button>

//           {/* Read button/link */}
//           <a href={`/blogs/${blog.id}`}>Read</a>
//         </div>
//       ))}
//     </>
//   );
// }

// export default MyBlogs;


return (
  <>
    <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>My Blogs</h1>
    {blogs.map((blog) => (
      <div key={blog.id} style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "20px", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>{blog.title}</h2>
        <img
          src={blog.img ? `http://localhost:3001/uploads/${blog.img}` : null}
          alt="Blog Image"
          height="100px"
          width="100px"
          style={{ marginBottom: "10px" }}
        />
        <p style={{ marginBottom: "10px" }}>{blog.subtitle}</p>
        <p style={{ marginBottom: "10px" }}>{blog.body}</p>
        <p style={{ marginBottom: "10px" }}>Category: {blog.category}</p>
        <p style={{ marginBottom: "10px" }}>Author: {blog.createdUser}</p>
        <p style={{ marginBottom: "10px" }}>Time: {blog.timeCreated}</p>

        {/* Edit button */}
        <Link to={`/blogs/${blog.id}/edit`}>
          <button className="editbtn" style={{ marginRight: "10px", padding: "5px 10px", backgroundColor: "#1DA1F2", color: "#fff", border: "none", borderRadius: "5px" }}>Edit</button>
        </Link>

        {/* Delete button */}
        <button onClick={() => deleteBlog(blog.id)} style={{ padding: "5px 10px", backgroundColor: "#E0245E", color: "#fff", border: "none", borderRadius: "5px" }}>Delete</button>

        {/* Read button/link */}
        <a href={`/blogs/${blog.id}`} style={{ marginLeft: "10px", textDecoration: "none", color: "#1DA1F2", fontSize: "14px" }}>Read</a>
      </div>
    ))}
  </>
);
}

export default MyBlogs;



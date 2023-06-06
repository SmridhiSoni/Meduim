import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Cookies from 'js-cookie';
import { FaHeart, FaBookmark } from 'react-icons/fa';

const Home2 = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState('');
  const [likedBlogs, setLikedBlogs] = useState([]);
  const [savedBlogs, setSavedBlogs] = useState([]);

  useEffect(() => {
    const storedUsername = Cookies.get('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    // Fetch the blogs from the backend API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/home2'); // Replace with your API endpoint
        const updatedBlogs = response.data.map((blog) => ({
          ...blog,
          likes: blog.likes || 0, // Initialize likes to 0 if it's undefined or null
          saved: savedBlogs.includes(blog.id), // Check if the blog is saved
        }));
        setBlogs(updatedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [savedBlogs]);

  const handleLike = (blogId) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog) => {
        if (blog.id === blogId) {
          const updatedLikes = likedBlogs.includes(blogId) ? blog.likes  : blog.likes + 1;
          return { ...blog, likes: updatedLikes };
        }
        return blog;
      })
    );
   
    setLikedBlogs((prevLikedBlogs) =>
      prevLikedBlogs.includes(blogId) ? prevLikedBlogs.filter((id) => id !== blogId) : [...prevLikedBlogs, blogId]
    );
  };

  const handleSave = (blogId) => {
    setSavedBlogs((prevSavedBlogs) =>
      prevSavedBlogs.includes(blogId) ? prevSavedBlogs.filter((id) => id !== blogId) : [...prevSavedBlogs, blogId]
    );
  };

  return (
    <div>
      <Navbar />
      <h1>Welcome {username}</h1>
      <div style={containerStyle}>
        {blogs.map((blog) => (
          <div key={blog.id} style={blogContainerStyle}>
            <div style={headerStyle}>
              <div style={topRightStyle}>
                <button style={saveButtonStyle} onClick={() => handleSave(blog.id)}>
                  <FaBookmark style={savedBlogs.includes(blog.id) ? savedIconStyle : iconStyle} />
                </button>
              </div>
              <h2 style={titleStyle}>{blog.title}</h2>
              <div style={metaContainerStyle}>
                <p style={authorStyle}>By {blog.createdUser}</p>
                <p style={timeStyle}>{blog.timeCreated}</p>
              </div>
            </div>
            <img src={`http://localhost:3001/uploads/${blog.img}`} alt={blog.title} style={imageStyle} />
             <a href={`/blogs/${blog.id}`} style={{ marginLeft: "10px", textDecoration: "none", color: "#1DA1F2", fontSize: "14px" }}>Read</a>
            {/* <p style={bodyStyle}>{blog.body}</p> */}
            <div style={footerStyle}>
              <button style={likeButtonStyle} onClick={() => handleLike(blog.id)}>
                <FaHeart style={likedBlogs.includes(blog.id) ? likedIconStyle : iconStyle} />
              </button>
              <p style={likeCountStyle}>{blog.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home2;

// Internal CSS styles
const containerStyle = {
  maxWidth: '700px',
  margin: '0 auto',
  
  padding: '20px',
};

const blogContainerStyle = {
  marginBottom: '40px',
  backgroundColor: '#fff',
  borderRadius: '4px',
  padding: '20px',

  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  marginBottom: '10px',
  position: 'relative',
};

const topRightStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
};

const saveButtonStyle = {
  padding: '0',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const metaContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const authorStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#888',
  marginRight: '10px',
};

const timeStyle = {
  fontSize: '14px',
  color: '#888',
};

const imageStyle = {
  width: '100%',
  marginBottom: '20px',
  borderRadius: '4px',
};

const bodyStyle = {
  fontSize: '16px',
  lineHeight: '1.5',
  marginBottom: '20px',
};

const footerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const likeButtonStyle = {
  padding: '0',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

const iconStyle = {
  fontSize: '18px',
  color: '#888',
};

const likedIconStyle = {
  fontSize: '18px',
  color: 'red',
};

const savedIconStyle = {
  fontSize: '18px',
  color: 'blue',
};

const likeCountStyle = {
  fontSize: '14px',
  marginLeft: '5px',
  color: '#888',
};

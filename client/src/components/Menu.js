// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Menu = ({cat}) => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/posts/?cat=${cat}`);
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [cat]);
 
  
//   return (
//     <div className="menu">
//       <h1>Other posts you may like</h1>
//       {posts.map((post) => (
//         <div className="post" key={post.id}>
//           <img src={`../upload/${post?.img}`} alt="" />
//           <h2>{post.title}</h2>
//           <button>Read More</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Menu;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="menu" style={menuStyle}>
      <h1 style={headingStyle}>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" style={postStyle} key={post.id}>
          <img src={`../upload/${post?.img}`} alt="" style={imageStyle} />
          <h2 style={titleStyle}>{post.title}</h2>
          <button style={buttonStyle}>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;

// Internal CSS styles
const menuStyle = {
  backgroundColor: "#f3f3f3",
  padding: "20px",
  borderRadius: "4px",
  fontFamily: "Arial, sans-serif",
};

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};

const postStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "20px",
};

const imageStyle = {
  width: "100%",
  marginBottom: "10px",
  borderRadius: "4px",
};

const titleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#1DA1F2",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
};

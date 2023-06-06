
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    const navElement = navRef.current;

    if (navElement.classList.contains("responsive_nav")) {
      navElement.classList.remove("responsive_nav");
    } else {
      navElement.classList.add("responsive_nav");
    }
  };

  return (
    <header style={headerStyle}>
      <h3 style={titleStyle}>MEDIUM</h3>
      <nav ref={navRef} style={navStyle}>
        <div className="links" style={linksStyle}>
          <span style={linkStyle}>
            <Link to="/Home2" style={linkTextStyle}>Home</Link>
          </span>
          <span style={linkStyle}>
            <select onChange={(e) => (window.location.href = `/posts?cat=${e.target.value}`)} style={selectStyle}>
              <option value="">All Categories</option>
              <option value="art">Art</option>
              <option value="science">Science</option>
              <option value="technology">Technology</option>
              <option value="movie">Movie</option>
              <option value="fashion">Fashion</option>
              <option value="food">Food</option>
            </select>
          </span>
          <span style={linkStyle}>
            <Link to="/write" style={linkTextStyle}>Write</Link>
          </span>
          <span style={linkStyle}>
            <Link to="/myblogs" style={linkTextStyle}>My Blogs</Link>
          </span>
          <span style={linkStyle}>
            <Link to="/login" style={linkTextStyle}>Logout</Link>
          </span>
        </div>
        {/* <button className="nav-btn nav-close-btn" onClick={showNavbar} style={closeButtonStyle}>
          <FaTimes />
        </button> */}
      </nav>
      <button className="nav-btn" onClick={showNavbar} style={menuButtonStyle}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;

// Internal CSS styles
const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  backgroundColor: "#000",
  color: "#fff",
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: 0,
  fontFamily: "Arial, sans-serif",
};

const navStyle = {
  display: "flex",
  alignItems: "center",
};

const linksStyle = {
  display: "flex",
  alignItems: "center",
};

const linkStyle = {
  marginRight: "10px",
};

const linkTextStyle = {
  color: "#fff",
  textDecoration: "none",
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  fontWeight: "bold",
};

const selectStyle = {
  padding: "5px",
  borderRadius: "5px",
  backgroundColor: "#fff",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  fontWeight: "bold",
  color: "#000",
};

const closeButtonStyle = {
  border: "none",
  backgroundColor: "transparent",
  color: "#fff",
  cursor: "pointer",
};

const menuButtonStyle = {
  border: "none",
  backgroundColor: "transparent",
  color: "#fff",
  cursor: "pointer",
};

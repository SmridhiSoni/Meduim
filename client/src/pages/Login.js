// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Axios from "axios";
// import { NavLink } from "react-router-dom";
// import Cookies from "js-cookie";

// function Login({ loggedin }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   // when clicks on log in button
//   const log = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const response = await Axios.post(
//         `http://localhost:3001/login`, // use the selected user type to determine the login route
//         {
//           Username: username,
//           Password: password,
//         }
//       );
//       setIsLoading(false);
//       if (response.data.success) {
//         setSuccess(true);
//         localStorage.setItem("token", response.data.token);
//         Cookies.set("username", username);
//         Cookies.set("Id", response.data.Id);
//         // if(username=="admin"){
//         //   navigate("/admin");
//         // }else{
//         navigate(`/Home2`);
//         // }
//       } else {
//         setError(response.data.error);
//       }
//     } catch (error) {
//       setIsLoading(false);
//       setError(error.message);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundColor: "#f5f8fa",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "#fff",
//           borderRadius: "8px",
//           padding: "40px",
//           boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//           width: "320px",
//         }}
//       >
//         <div>
//           <center>
//             <h1 style={{ fontSize: "28px", color: "#000", marginBottom: "20px" }}>Login</h1>
//           </center>
//           <center>
//             <input
//               type="text"
//               style={{
//                 width: "100%",
//                 height: "40px",
//                 padding: "8px",
//                 fontSize: "14px",
//                 border: "1px solid #e1e8ed",
//                 borderRadius: "4px",
//               }}
//               placeholder="Username"
//               onChange={(e) => {
//                 setUsername(e.target.value);
//               }}
//             />
//             <br /> <br />
//             <input
//               type="password"
//               style={{
//                 width: "100%",
//                 height: "40px",
//                 padding: "8px",
//                 fontSize: "14px",
//                 border: "1px solid #e1e8ed",
//                 borderRadius: "4px",
//               }}
//               placeholder="Password"
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//             />
//             <br />
//             {isLoading && <p style={{ color: "#888" }}>Loading...</p>}
//             {error && <p style={{ color: "#ff4136" }}>{error}</p>}
//             {success && <p style={{ color: "#0074d9" }}>Success!</p>}
//             <br />
//             <button
//               onClick={log}
//               style={{
//                 width: "100%",
//                 height: "40px",
//                 marginTop: "16px",
//                 backgroundColor: "#0074d9",
//                 color: "#fff",
//                 fontSize: "16px",
//                 border: "none",
//                 borderRadius: "4px",
//                 cursor: "pointer",
//               }}
//             >
//               Log in
//             </button>
//           </center>
//           <br />
//         </div>
//         <div>
//           <center className="noacc" style={{ fontSize: "14px", color: "#888" }}>
//             Don't have an account?{" "}
//             <NavLink className="link" exact to="/register" style={{ color: "#0074d9" }}>
//               Sign up
//             </NavLink>
//           </center>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

function Login({ loggedin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const log = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await Axios.post(
        `http://localhost:3001/login`,
        {
          Username: username,
          Password: password,
        }
      );
      setIsLoading(false);
      if (response.data.success) {
        setSuccess(true);
        localStorage.setItem("token", response.data.token);
        Cookies.set("username", username);
        Cookies.set("Id", response.data.Id);
        navigate(`/Home2`);
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f8fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "40px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          width: "320px",
        }}
      >
        <div>
          <center>
            <h1 style={{ fontSize: "28px", color: "#000", marginBottom: "20px" }}>Log in</h1>
          </center>
          <center>
            <input
              type="text"
              style={{
                width: "100%",
                height: "40px",
                padding: "8px",
                fontSize: "14px",
                border: "1px solid #e1e8ed",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <br />
            <input
              type="password"
              style={{
                width: "100%",
                height: "40px",
                padding: "8px",
                fontSize: "14px",
                border: "1px solid #e1e8ed",
                borderRadius: "4px",
                marginBottom: "16px",
              }}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            {isLoading && <p style={{ color: "#888" }}>Loading...</p>}
            {error && <p style={{ color: "#ff4136", marginBottom: "16px" }}>{error}</p>}
            {success && <p style={{ color: "#0074d9", marginBottom: "16px" }}>Success!</p>}
            <button
              onClick={log}
              style={{
                width: "100%",
                height: "40px",
                backgroundColor: "#000",
                color: "#fff",
                fontSize: "16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                marginBottom: "16px",
              }}
            >
              Log in
            </button>
          </center>
        </div>
        <div>
          <center className="noacc" style={{ fontSize: "14px", color: "#888" }}>
            Don't have an account?{" "}
            <NavLink className="link" exact to="/register" style={{ color: "#black" }}>
              Sign up
            </NavLink>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Login;

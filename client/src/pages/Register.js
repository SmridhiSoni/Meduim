// import React, {useState} from "react";
// import Axios from "axios";
// import { NavLink } from "react-router-dom";

// function Signup(){
//     const [usernameReg, setUsernameReg]=useState('')
//     const [passwordReg, setPasswordReg]=useState('')
//     const [mobReg, setMobReg]=useState('')
//     const [cpasswordReg, setCpasswordReg]=useState('')
//     const [errorMsg, setErrorMsg] = useState('');

    
//     const sregister=()=>{
//       Axios.post("http://localhost:3001/register", {
//         MobNumber: mobReg,
//         Username:usernameReg,
//         Password: passwordReg,
//         Cpassword: cpasswordReg,
//       }).then((response)=>{
//         console.log(response);
//         if(response.data === 'User already exists') {
//           setErrorMsg("Username already exists");
//         } else if(response.data === 'fill all fields') {
//           setErrorMsg("Please fill all the fields");
//         }else if(response.data === 'Password mismatch'){
//           setErrorMsg("Password does not match");
//         }else{
//           setErrorMsg("User Created Successfully");
//         }
//       });
//     };


// //   return(
// //     <div className="obox">
// //       <div>
// //         <br/>
// //         <center><h1>Register</h1></center>
// //         <center>
// //         <p className="para">Sign up to find the best tutors online.</p> <br/>
// //         <input type="text" className="inpbox" placeholder="Mobile Number" id="MobNumber" onChange={(e)=>{
// //             setMobReg(e.target.value);
// //         }}/>   
// //         <input type="text" className="inpbox" placeholder="Username" id="Username" onChange={(e)=>{
// //             setUsernameReg(e.target.value);
// //         }}/>   <br/><br/>
// //         <input type="password" className="inpbox" placeholder="Password" id="Password" onChange={(e)=>{
// //             setPasswordReg(e.target.value);
// //         }}/>   
// //         <input type="password" className="inpbox" placeholder="Confirm Password" id="Cpassword" onChange={(e)=>{
// //             setCpasswordReg(e.target.value);
// //         }}/>   <br/>
// //         <p>By signing up, you agree to our Terms , Privacy<br/> Policy and Cookies Policy .</p>
// //         {errorMsg && <p style={{color: 'red'}}>{errorMsg}</p>}
// //         <button onClick={sregister} className="btn sign">Sign up</button>
// //         <br/>
// //         <NavLink exact to="/login">Go to Login Page</NavLink>
// //         </center>

// //       </div>
// //     </div>
// //   );
// // } 
// // export default Signup;

// return (
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       backgroundColor: "#f5f8fa",
//     }}
//   >
//     <div
//       style={{
//         backgroundColor: "#fff",
//         borderRadius: "8px",
//         padding: "20px",
//         boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
//         width: "320px",
//       }}
//     >
//       <div>
//         <br />
//         <center>
//           <h1 style={{ fontSize: "24px" }}>Register</h1>
//         </center>
//         <center>
//           <p style={{ fontSize: "14px", color: "#657786" }}>
           
//           </p>{" "}
//           <br />
//           <input
//             type="text"
//             style={{
//               width: "100%",
//               height: "40px",
//               padding: "8px",
//               fontSize: "14px",
//               border: "1px solid #e1e8ed",
//               borderRadius: "4px",
//             }}
//             placeholder="Mobile Number"
//             id="MobNumber"
//             onChange={(e) => {
//               setMobReg(e.target.value);
//             }}
//           />
//           <br></br>
//           <br></br>
//           <input
//             type="text"
//             style={{
//               width: "100%",
//               height: "40px",
//               padding: "8px",
//               fontSize: "14px",
//               border: "1px solid #e1e8ed",
//               borderRadius: "4px",
//             }}
//             placeholder="Username"
//             id="Username"
//             onChange={(e) => {
//               setUsernameReg(e.target.value);
//             }}
//           />{" "}
//           <br />
//           <br />
//           <input
//             type="password"
//             style={{
//               width: "100%",
//               height: "40px",
//               padding: "8px",
//               fontSize: "14px",
//               border: "1px solid #e1e8ed",
//               borderRadius: "4px",
//             }}
//             placeholder="Password"
//             id="Password"
//             onChange={(e) => {
//               setPasswordReg(e.target.value);
//             }}
//           />
//           <br></br>
//           <br></br>
//           <input
//             type="password"
//             style={{
//               width: "100%",
//               height: "40px",
//               padding: "8px",
//               fontSize: "14px",
//               border: "1px solid #e1e8ed",
//               borderRadius: "4px",
//             }}
//             placeholder="Confirm Password"
//             id="Cpassword"
//             onChange={(e) => {
//               setCpasswordReg(e.target.value);
//             }}
//           />{" "}
//           <br />
//           <p style={{ fontSize: "12px", color: "#657786" }}>
//             By signing up, you agree to our Terms, Privacy Policy and Cookies
//             Policy.
//           </p>
//           {errorMsg && <p style={{ color: "red", fontSize: "14px" }}>{errorMsg}</p>}
//           <button
//             onClick={sregister}
//             style={{
//               width: "100%",
//               height: "40px",
//               marginTop: "16px",
//               backgroundColor: "#1da1f2",
//               color: "#fff",
//               fontSize: "16px",
//               border: "none",
//               borderRadius: "4px",
//               cursor: "pointer",
//             }}
//           >
//             Sign up
//           </button>
//           <br />
//           <NavLink exact to="/login" style={{ fontSize: "14px", color: "#1da1f2", textDecoration: "none", marginTop: "16px" }}>
//             Go to Login Page
//           </NavLink>
//         </center>
//       </div>
//     </div>
//   </div>
// );
// }

// export default Signup;

import React, { useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
//import Register from './Register';

function Register() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [mobReg, setMobReg] = useState("");
  const [cpasswordReg, setCpasswordReg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const sregister = () => {
    Axios.post("http://localhost:3001/register", {
      MobNumber: mobReg,
      Username: usernameReg,
      Password: passwordReg,
      Cpassword: cpasswordReg,
    }).then((response) => {
      console.log(response);
      if (response.data === "User already exists") {
        setErrorMsg("Username already exists");
      } else if (response.data === "fill all fields") {
        setErrorMsg("Please fill all the fields");
      } else if (response.data === "Password mismatch") {
        setErrorMsg("Password does not match");
      } else {
        setErrorMsg("User Created Successfully");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f8fa",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          width: "320px",
        }}
      >
        <div>
          <br />
          <center>
            <h1 style={{ fontSize: "24px", color: "#000" }}>Register</h1>
          </center>
          <center>
            <p style={{ fontSize: "14px", color: "#657786" }}></p> <br />
            <input
              type="text"
              style={{
                width: "100%",
                height: "40px",
                padding: "8px",
                fontSize: "14px",
                border: "1px solid #e1e8ed",
                borderRadius: "4px",
              }}
              placeholder="Mobile Number"
              id="MobNumber"
              onChange={(e) => {
                setMobReg(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <input
              type="text"
              style={{
                width: "100%",
                height: "40px",
                padding: "8px",
                fontSize: "14px",
                border: "1px solid #e1e8ed",
                borderRadius: "4px",
              }}
              placeholder="Username"
              id="Username"
              onChange={(e) => {
                setUsernameReg(e.target.value);
              }}
            />{" "}
            <br />
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
              }}
              placeholder="Password"
              id="Password"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />
            <br></br>
            <br></br>
            <input
              type="password"
              style={{
                width: "100%",
                height: "40px",
                padding: "8px",
                fontSize: "14px",
                border: "1px solid #e1e8ed",
                borderRadius: "4px",
              }}
              placeholder="Confirm Password"
              id="Cpassword"
              onChange={(e) => {
                setCpasswordReg(e.target.value);
              }}
            />{" "}
            <br />
            <p style={{ fontSize: "12px", color: "#657786" }}>
              By signing up, you agree to our Terms, Privacy Policy and Cookies
              Policy.
            </p>
            {errorMsg && <p style={{ color: "red", fontSize: "14px" }}>{errorMsg}</p>}
            <button
              onClick={sregister}
              style={{
                width: "100%",
                height: "40px",
                marginTop: "16px",
                backgroundColor: "#000",
                color: "#fff",
                fontSize: "16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Sign up
            </button>
            <br />
            <NavLink
              exact
              to="/login"
              style={{
                fontSize: "14px",
                color: "#000",
                textDecoration: "none",
                marginTop: "16px",
              }}
            >
              Go to Login Page
            </NavLink>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Register;

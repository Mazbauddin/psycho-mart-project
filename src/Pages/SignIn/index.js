// import { useContext, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";

// import { MyContext } from "../../App";

// import Logo from "../../assets/images/logo.png";
// import GoogleImg from "../../assets/images/googleImg.png";
// import FacebookImg from "../../assets/images/FACEBOOK.webp";

// const SignIn = () => {
//   const { setIsHeaderFooterShow } = useContext(MyContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsHeaderFooterShow(false);
//   }, [setIsHeaderFooterShow]);

//   const handleShowHeaderFooter = () => {
//     setIsHeaderFooterShow(true);
//   };

//   const handleCancel = () => {
//     setIsHeaderFooterShow(true);
//     navigate("/");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <section className="section signInPage">
//       <div className="shape-bottom">
//         <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8">
//           <path
//             className="st0"
//             d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
//           />
//         </svg>
//       </div>

//       <div className="container">
//         <div className="box card p-3 shadow border-0">
//           <div className="logoWrapper text-center">
//             <Link to="/" onClick={handleShowHeaderFooter}>
//               <img src={Logo} alt="Psycho Mart Logo" className="logo" />
//             </Link>
//           </div>

//           <form className="mb-2" onSubmit={handleSubmit}>
//             <h2 className="mb-2">Sign In</h2>

//             <div className="form-group">
//               <TextField
//                 id="sign-in-email"
//                 label="Email"
//                 type="email"
//                 required
//                 variant="standard"
//                 className="w-100"
//               />
//             </div>

//             <div className="form-group">
//               <TextField
//                 id="sign-in-password"
//                 label="Password"
//                 type="password"
//                 required
//                 variant="standard"
//                 className="w-100"
//               />
//             </div>

//             <button type="button" className="border-effect cursor txt mb-0">
//               Forgot Password?
//             </button>

//             <div className="d-flex align-items-center mt-3 mb-3">
//               <Button type="submit" className="btn-blue col btn-lg btn-big">
//                 Sign In
//               </Button>

//               <Button
//                 type="button"
//                 className="btn-lg col btn-big ml-3"
//                 variant="outlined"
//                 onClick={handleCancel}
//               >
//                 Cancel
//               </Button>
//             </div>

//             <p className="txt">
//               Not Registered?{" "}
//               <Link to="/signUp" className="border-effect">
//                 Sign Up
//               </Link>
//             </p>

//             <h6 className="mt-2 text-center font-weight-bold">
//               Or continue with social account
//             </h6>

//             <Tooltip title="Please Sign In With Google" arrow>
//               <Button
//                 type="button"
//                 className="loginWithGoogle mt-2"
//                 variant="outlined"
//               >
//                 <img src={GoogleImg} alt="Google" className="w-100" />
//                 Sign In With Google
//               </Button>
//             </Tooltip>

//             <Tooltip title="Please Sign In With Facebook" arrow>
//               <Button
//                 type="button"
//                 className="loginWithGoogle mt-2"
//                 variant="outlined"
//               >
//                 <img src={FacebookImg} alt="Facebook" className="w-100" />
//                 Sign In With Facebook
//               </Button>
//             </Tooltip>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SignIn;

import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import Logo from "../../assets/images/logo.png";
import GoogleImg from "../../assets/images/googleImg.png";
import FacebookImg from "../../assets/images/FACEBOOK.webp";

const SignIn = () => {
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section signInPage">
      <div className="shape-bottom">
        <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8">
          <path
            className="st0"
            d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
          />
        </svg>
      </div>

      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="logoWrapper text-center">
            <Link to="/">
              <img src={Logo} alt="Psycho Mart Logo" className="logo" />
            </Link>
          </div>

          <form className="mb-2" onSubmit={handleSubmit}>
            <h2 className="mb-2">Sign In</h2>

            <div className="form-group">
              <TextField
                id="sign-in-email"
                label="Email"
                type="email"
                required
                variant="standard"
                className="w-100"
              />
            </div>

            <div className="form-group">
              <TextField
                id="sign-in-password"
                label="Password"
                type="password"
                required
                variant="standard"
                className="w-100"
              />
            </div>

            <button type="button" className="border-effect cursor txt mb-0">
              Forgot Password?
            </button>

            <div className="d-flex align-items-center mt-3 mb-3">
              <Button type="submit" className="btn-blue col btn-lg btn-big">
                Sign In
              </Button>

              <Button
                component={Link}
                to="/"
                type="button"
                className="btn-lg col btn-big ml-3"
                variant="outlined"
              >
                Cancel
              </Button>
            </div>

            <p className="txt">
              Not Registered?{" "}
              <Link to="/signUp" className="border-effect">
                Sign Up
              </Link>
            </p>

            <h6 className="mt-2 text-center font-weight-bold">
              Or continue with social account
            </h6>

            <Tooltip title="Please Sign In With Google" arrow>
              <Button
                type="button"
                className="loginWithGoogle mt-2"
                variant="outlined"
              >
                <img src={GoogleImg} alt="Google" className="w-100" />
                Sign In With Google
              </Button>
            </Tooltip>

            <Tooltip title="Please Sign In With Facebook" arrow>
              <Button
                type="button"
                className="loginWithGoogle mt-2"
                variant="outlined"
              >
                <img src={FacebookImg} alt="Facebook" className="w-100" />
                Sign In With Facebook
              </Button>
            </Tooltip>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

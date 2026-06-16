import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleImg from "../../assets/images/googleImg.png";
import FacebookImg from "../../assets/images/FACEBOOK.webp";
import Tooltip from "@mui/material/Tooltip";
const SignIn = () => {
  const context = useContext(MyContext);
  useEffect(() => {
    context.setIsHeaderFooterShow(false);
  }, []);
  return (
    <section className="section signInPage">
      <div class="shape-bottom">
        {" "}
        <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8">
          {" "}
          <path
            class="st0"
            d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"
          ></path>{" "}
        </svg>
      </div>

      <div className="container">
        <div className="box card p-3 shadow border-0">
          <div className="logoWrapper text-center">
            <Link to={"/"}>
              <img
                src={Logo}
                alt="logo"
                className="logo"
                onClick={() => context.setIsHeaderFooterShow(true)}
              />
            </Link>
          </div>

          <form className="mb-2">
            <h2 className="mb-2">Sign In</h2>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                required
                variant="standard"
                className="w-100"
              />
            </div>
            <div className="form-group">
              <TextField
                id="standard-basic"
                label="Password"
                type="password"
                required
                variant="standard"
                className="w-100"
              />
            </div>
            <a className="border-effect cursor txt mb-0">Forgot Password?</a>

            <div className="d-flex align-items-center mt-3 mb-3">
              <Button className="btn-blue col btn-lg btn-big">Sign In</Button>
              <Link to="/">
                <Button
                  className="btn-lg col btn-big ml-3"
                  variant="outlined"
                  onClick={() => context.setIsHeaderFooterShow(true)}
                >
                  Cancel
                </Button>
              </Link>
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
              <Button className="loginWithGoogle mt-2" variant="outlined">
                <img src={GoogleImg} alt="" className="w-100" />
                Sign In With Google
              </Button>
            </Tooltip>
            <Tooltip title="Please Sign In With Facebook" arrow>
              <Button className="loginWithGoogle mt-2" variant="outlined">
                <img src={FacebookImg} alt="" className="w-100" />
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

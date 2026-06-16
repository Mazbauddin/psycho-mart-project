import { Link } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import Logo from "../../assets/images/logo.png";
import GoogleImg from "../../assets/images/googleImg.png";
import FacebookImg from "../../assets/images/FACEBOOK.webp";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section signInPage signUpPage">
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
            <h2 className="mb-3">Sign Up</h2>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <TextField
                    id="sign-up-name"
                    label="Name"
                    type="text"
                    required
                    variant="standard"
                    className="w-100"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <TextField
                    id="sign-up-phone"
                    label="Phone No."
                    type="text"
                    required
                    variant="standard"
                    className="w-100"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <TextField
                id="sign-up-email"
                label="Email"
                type="email"
                required
                variant="standard"
                className="w-100"
              />
            </div>

            <div className="form-group">
              <TextField
                id="sign-up-password"
                label="Password"
                type="password"
                required
                variant="standard"
                className="w-100"
              />
            </div>

            <button type="button" className="border-effect cursor txt">
              Forgot Password?
            </button>

            <div className="d-flex align-items-center mt-2 mb-1">
              <div className="row w-100">
                <div className="col-md-6">
                  <Button
                    type="submit"
                    className="btn-blue w-100 btn-lg btn-big"
                  >
                    Sign Up
                  </Button>
                </div>

                <div className="col-md-6 pr-0">
                  <Button
                    component={Link}
                    to="/"
                    type="button"
                    className="btn-lg w-100 btn-big"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>

            <p className="txt mt-2">
              Are You Registered?{" "}
              <Link to="/signIn" className="border-effect">
                Sign In
              </Link>
            </p>

            <h6 className="mt-2 text-center font-weight-bold">
              Or continue with social account
            </h6>

            <div className="row mt-3">
              <div className="col-md-6">
                <Tooltip title="Please Sign Up With Google" arrow>
                  <Button
                    type="button"
                    className="loginWithGoogle"
                    variant="outlined"
                  >
                    <img src={GoogleImg} alt="Google" className="w-100" />
                    Sign Up With Google
                  </Button>
                </Tooltip>
              </div>

              <div className="col-md-6">
                <Tooltip title="Please Sign Up With Facebook" arrow>
                  <Button
                    type="button"
                    className="loginWithGoogle"
                    variant="outlined"
                  >
                    <img src={FacebookImg} alt="Facebook" className="w-100" />
                    Sign Up With Facebook
                  </Button>
                </Tooltip>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

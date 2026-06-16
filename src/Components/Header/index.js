import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

import CountryDropDown from "../CountryDropDown";

import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { useContext } from "react";

const Header = () => {
  const context = useContext(MyContext);

  return (
    <>
      <div className="headerWrapper">
        <div className="top-strip bg-black">
          <div className="container">
            <p className="mb-0 mt-0 text-center text-white">
              Psycho Mart is a demo e-commerce website created for educational
              purposes.
            </p>
          </div>
        </div>
        <header className="header">
          <div className="container">
            <div className="row">
              {/* Logo Start Here */}
              <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={"/"}>
                  <img src={Logo} alt="logo" className="logo" />
                </Link>
              </div>
              {/* Header Second Start */}
              <div className="col-sm-10 d-flex align-items-center part2">
                {context.countryList.length !== 0 && <CountryDropDown />}

                {/* Header Search Start Here */}
                <SearchBox />
                {/* Header Search Ends Here */}

                {/* Header Cart Start Here */}
                <div className="part3 d-flex align-items-center ml-auto">
                  {/* Islogin Part start */}
                  {context.isLogin !== true ? (
                    <Link to="/signIn">
                      {" "}
                      <Button className="btn-blue btn-lg btn-big btn-round mr-3">
                        Sign In
                      </Button>
                    </Link>
                  ) : (
                    <Button className="circle mr-2">
                      <FaRegUser />
                    </Button>
                  )}

                  <div className="ml-auto cartTab d-flex align-items-center">
                    <span className="cartCount">$3.29</span>
                    <div className="position-relative ml-2">
                      <Link to="/cart">
                        <Button className="circle">
                          <IoBagHandleOutline />
                        </Button>
                      </Link>
                      <span className="count d-flex align-items-center justify-content-center">
                        1
                      </span>
                    </div>
                  </div>
                </div>
                {/* Header Cart End Here */}
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Start Here */}
        <Navigation />
      </div>
    </>
  );
};

export default Header;

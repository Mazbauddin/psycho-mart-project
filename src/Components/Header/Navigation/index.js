import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { SiHotwire } from "react-icons/si";
import { MdOutlineBakeryDining } from "react-icons/md";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Navigation = () => {
  const [isOpenSidebarVal, setIsOpenSidebarVal] = useState(false);

  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="col-sm-2 navPart1">
              <div className="catWrapper">
                <Button
                  className="allCatTab align-items-center"
                  onClick={() => setIsOpenSidebarVal(!isOpenSidebarVal)}
                >
                  <span className="icon1 mr-2">
                    {" "}
                    <IoIosMenu />
                  </span>
                  <span className="text">All Categories</span>
                  <span className="icon2 ml-2">
                    {" "}
                    <FaAngleDown />
                  </span>
                </Button>

                <div
                  className={`sidebarNav ${
                    isOpenSidebarVal === true ? "open" : ""
                  }`}
                >
                  <ul>
                    <li>
                      <Link to="/">
                        <Button>
                          <GiClothes /> &nbsp; men{" "}
                          <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>

                      <div className="submenu">
                        <li>
                          <Link to="/">
                            <Button>women</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>beauty</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>watches</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>gifts</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>men</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>women</Button>
                          </Link>
                        </li>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                          <GiClothes /> &nbsp; women{" "}
                          <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu">
                        <li>
                          <Link to="/">
                            <Button>women</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>beauty</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>watches</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>gifts</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>men</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>women</Button>
                          </Link>
                        </li>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                          <GiClothes /> &nbsp; beauty
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                          <GiClothes /> &nbsp; watches
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                          <GiClothes /> &nbsp; gifts
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                          <GiClothes /> &nbsp; men
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                          <GiClothes /> &nbsp; women{" "}
                          <FaAngleRight className="ml-auto" />
                        </Button>
                      </Link>
                      <div className="submenu">
                        <li>
                          <Link to="/">
                            <Button>women</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>beauty</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>watches</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>gifts</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>men</Button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <Button>women</Button>
                          </Link>
                        </li>
                      </div>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                          <GiClothes /> &nbsp; beauty
                        </Button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Button>
                          <GiClothes /> &nbsp; watches
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-10 navPart2 d-flex align-items-center">
              <ul className="list list-inline ml-auto">
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>
                      <IoHomeOutline />
                      &nbsp; Home
                    </Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/cat/1">
                    <Button>
                      <GiClothes /> &nbsp; men
                    </Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear</Button>
                    </Link>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear</Button>
                    </Link>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>
                      <SiHotwire /> &nbsp; women
                    </Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear</Button>
                    </Link>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear</Button>
                    </Link>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                  </div>
                </li>

                <li className="list-inline-item">
                  <Link to="/">
                    <Button>
                      <MdOutlineBakeryDining /> &nbsp; beauty
                    </Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear</Button>
                    </Link>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear</Button>
                    </Link>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>
                      <MdOutlineBakeryDining /> &nbsp; watches
                    </Button>
                  </Link>
                  <div className="submenu shadow">
                    <Link to="/">
                      <Button>clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear</Button>
                    </Link>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                    <Link to="/">
                      <Button>clothing</Button>
                    </Link>
                    <Link to="/">
                      <Button>footwear</Button>
                    </Link>
                    <Link to="/">
                      <Button>watches</Button>
                    </Link>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>
                      {" "}
                      <MdOutlineBakeryDining /> &nbsp; kids
                    </Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>
                      {" "}
                      <MdOutlineBakeryDining /> &nbsp; gifts
                    </Button>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <Button>
                      <MdOutlineBakeryDining /> &nbsp; Contact Us
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

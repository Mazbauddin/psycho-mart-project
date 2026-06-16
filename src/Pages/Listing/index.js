import React, { useState } from "react";
import SideBar from "../../Components/SideBar";
import Button from "@mui/material/Button";

import { CgMenuGridO } from "react-icons/cg";
import { IoMenuSharp } from "react-icons/io5";
import { BsFillGridFill } from "react-icons/bs";
import { CiGrid2V } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../../Components/ProductItem";
import Pagination from "@mui/material/Pagination";

const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState("four");

  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="product_Listing_Page">
      <div className="container">
        <div className="productListing d-flex">
          <SideBar />

          <div className="content_right">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
              alt=""
              className="w-100"
              style={{ borderRadius: "8px" }}
            />

            <div className="showBy mt-3 mb-3 d-flex align-items-center">
              <div className="d-flex align-items-center btnWrapper">
                <Button
                  className={productView === "one" && "act"}
                  onClick={() => setProductView("one")}
                >
                  <IoMenuSharp />
                </Button>

                <Button
                  className={productView === "two" && "act"}
                  onClick={() => setProductView("two")}
                >
                  <CiGrid2V />
                </Button>
                <Button
                  className={productView === "three" && "act"}
                  onClick={() => setProductView("three")}
                >
                  <BsFillGridFill />
                </Button>
                <Button
                  className={productView === "four" && "act"}
                  onClick={() => setProductView("four")}
                >
                  <CgMenuGridO />
                </Button>
              </div>

              <div className="ml-auto showByFilter">
                <Button onClick={handleClick}>
                  Show 9 <FaAngleDown />
                </Button>
                <Menu
                  className="w-100 showPerPageDropdown"
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openDropdown}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose}>9</MenuItem>
                  <MenuItem onClick={handleClose}>18</MenuItem>
                  <MenuItem onClick={handleClose}>27</MenuItem>
                  <MenuItem onClick={handleClose}>36</MenuItem>
                </Menu>
              </div>
            </div>

            <div className="productListing">
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
              <ProductItem itemView={productView} />
            </div>

            <div className="paginationWrapper d-flex align-items-center justify-content-center mt-5">
              <Pagination count={10} color="primary" size="large" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;

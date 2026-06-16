import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import Button from "@mui/material/Button";
import { IoMdHeartEmpty } from "react-icons/io";

import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import image from "../../assets/images/cat-2-removebg-preview.png";

const ProductItem = (props) => {
  const context = useContext(MyContext);
  const viewProductDetails = (id) => {
    context.setIsOpenProductModal(true);
  };

  return (
    <>
      <div className={`item productItem ${props.itemView}`}>
        <div className="imgWrapper">
          <img src={image} className="w-100" alt="" />
          <span className="badge badge-primary">28%</span>

          <div className="actions">
            <Button onClick={() => viewProductDetails(1)}>
              <TfiFullscreen />
            </Button>
            <Button>
              <IoMdHeartEmpty style={{ fontSize: "20px" }} />
            </Button>
          </div>
        </div>
        <div className="info">
          {" "}
          <Link to="/product/1">
            <h4>All Natural Italian-Style Chicken Meatballs</h4>
          </Link>
          <span className="text-success d-block">In Stock</span>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
          <div className="d-flex">
            <span className="oldPrice">$20.00</span>
            <span className="netPrice text-danger ml-2">$15.00</span>
          </div>
        </div>
      </div>

      {/* {<ProductModal />} */}
    </>
  );
};

export default ProductItem;

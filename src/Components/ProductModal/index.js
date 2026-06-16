import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Rating from "@mui/material/Rating";

import { IoCloseSharp } from "react-icons/io5";
import { useContext } from "react";

import "react-inner-image-zoom/lib/styles.min.css";
import QuantityBox from "../QuantityBox";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";

const ProductModal = (props) => {
  const context = useContext(MyContext);

  return (
    <>
      <Dialog
        open={true}
        onClose={() => context.setIsOpenProductModal(false)}
        className="productModal"
      >
        <Button
          className="closeModelLocation"
          onClick={() => context.setIsOpenProductModal(false)}
        >
          <IoCloseSharp />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          All Natural Italian-Style Chicken Meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center mr-4">
            <span>Brands:</span>
            <span className="ml-2">
              <b>Welch's</b>
            </span>
          </div>
          <Rating
            className="mt-2 mb-2"
            name="read-only"
            value={5}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>
        <hr />

        <div className="row mt-2 productDetailModal">
          <div className="col-md-5">
            <ProductZoom />
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg">$20.00</span>
              <span className="netPrice text-danger ml-2 lg">$15.00</span>
            </div>
            <span className="badge bg-success text-uppercase">In Stock</span>

            <p className="mt-3">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="d-flex align-items-center">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </Button>
            </div>

            <div className="d-flex align-items-center mt-5 actions">
              <Button className="btn-round btn-sml" variant="outlined">
                <FaRegHeart className="" /> &nbsp; Add to Wishlist
              </Button>
              <Button className="btn-round btn-sml ml-3" variant="outlined">
                <MdOutlineCompareArrows className="" /> &nbsp; Compare
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModal;

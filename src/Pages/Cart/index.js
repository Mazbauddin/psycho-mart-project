import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import { FaShoppingCart } from "react-icons/fa";
const Cart = () => {
  return (
    <section className="section cartPage">
      <div className="container">
        <h2 className="hd mb-2">Your Cart</h2>
        <p>
          There are <b className="text-red">3</b> products in your cart
        </p>
        <div className="row">
          {/* Left Side */}
          <div className="col-md-9 pr-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th width="35%">Product</th>
                    <th width="15%">Unit Price</th>
                    <th width="20%">Quantity</th>
                    <th width="15%">Subtotal</th>
                    <th width="10%">Remove</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemImgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg"
                              className="w-100"
                              alt=""
                            />
                          </div>

                          <div className="info px-3">
                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                            <Rating
                              name="read-only"
                              value={4.5}
                              readOnly
                              precision={0.5}
                              size="small"
                            />
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$2.51</td>
                    <td width="20%">
                      <QuantityBox />
                    </td>
                    <td width="15%">$2.51</td>
                    <td width="10%">
                      <span className="remove">
                        {" "}
                        <MdDelete />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemImgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg"
                              className="w-100"
                              alt=""
                            />
                          </div>

                          <div className="info px-3">
                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                            <Rating
                              name="read-only"
                              value={4.5}
                              readOnly
                              precision={0.5}
                              size="small"
                            />
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$2.51</td>
                    <td width="20%">
                      <QuantityBox />
                    </td>
                    <td width="15%">$2.51</td>
                    <td width="10%">
                      <span className="remove">
                        {" "}
                        <MdDelete />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemImgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg"
                              className="w-100"
                              alt=""
                            />
                          </div>

                          <div className="info px-3">
                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                            <Rating
                              name="read-only"
                              value={4.5}
                              readOnly
                              precision={0.5}
                              size="small"
                            />
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$2.51</td>
                    <td width="20%">
                      <QuantityBox />
                    </td>
                    <td width="15%">$2.51</td>
                    <td width="10%">
                      <span className="remove">
                        {" "}
                        <MdDelete />
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td width="35%">
                      <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemImgWrapper">
                          <div className="imgWrapper">
                            <img
                              src="https://nest-frontend-v6.vercel.app/assets/imgs/shop/product-1-1.jpg"
                              className="w-100"
                              alt=""
                            />
                          </div>

                          <div className="info px-3">
                            <h6>Field Roast Chao Cheese Creamy Original</h6>
                            <Rating
                              name="read-only"
                              value={4.5}
                              readOnly
                              precision={0.5}
                              size="small"
                            />
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$2.51</td>
                    <td width="20%">
                      <QuantityBox />
                    </td>
                    <td width="15%">$2.51</td>
                    <td width="10%">
                      <span className="remove">
                        {" "}
                        <MdDelete />
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Right Side */}
          <div className="col-md-3">
            <div className="card shadow p-3 cartDetails">
              <h4>CART TOTAL</h4>

              <div className="d-flex align-items-center mb-3">
                <span>Subtotal</span>
                <span className="ml-auto text-red font-weight-bold">
                  $12.31
                </span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <span>Shipping</span>
                <span className="ml-auto">
                  <b>Free</b>
                </span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <span>Estimate for</span>
                <span className="ml-auto">
                  <b>United Kingdom</b>
                </span>
              </div>
              <div className="d-flex align-items-center">
                <span>Total</span>
                <span className="ml-auto text-red font-weight-bold">
                  $12.31
                </span>
              </div>

              <br />

              <Button className="btn-blue btn-lg btn-big">
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;

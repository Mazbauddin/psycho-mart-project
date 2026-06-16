import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);
  const [activeTabs, setActiveTabs] = useState(0);

  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <section className="productDetails section mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 pl-5">
            <ProductZoom />
          </div>
          <div className="col-md-7 pl-5 pr-5">
            <h2 className="hd"> All Natural Italian-Style Chicken Meatballs</h2>

            <ul className="list list-inline d-flex align-items-center">
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <span className="text-light mr-2">Brands:</span>
                  <span className="">Welch's</span>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <Rating
                    name="read-only"
                    value={4.5}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                  <span className="text-light cursor ml-2">1 Review</span>
                </div>
              </li>
              <li className="list-inline-item">
                <div className="d-flex align-items-center">
                  <span className="text-light mr-2">SKU:</span>
                  <span className="">ant123456</span>
                </div>
              </li>
            </ul>

            <div className="d-flex mb-3 info">
              <span className="oldPrice lg">$20.00</span>
              <span className="netPrice lg text-danger ml-2">$15.00</span>
            </div>
            <span className="badge badge-success">IN STOCK</span>

            <p className="mt-2">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
              luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>
            <p className="mt-2">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
              luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquent
            </p>

            <div className="productSize d-flex align-items-center">
              <span>Size / Weight:</span>
              <ul className="list list-inline mb-0 pl-4">
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 0 ? "active" : ""}`}
                    onClick={() => isActive(0)}
                  >
                    50g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 1 ? "active" : ""}`}
                    onClick={() => isActive(1)}
                  >
                    100g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 2 ? "active" : ""}`}
                    onClick={() => isActive(2)}
                  >
                    200g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 3 ? "active" : ""}`}
                    onClick={() => isActive(3)}
                  >
                    300g
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className={`tag ${activeSize === 4 ? "active" : ""}`}
                    onClick={() => isActive(4)}
                  >
                    500g
                  </a>
                </li>
              </ul>
            </div>

            <div className="d-flex align-items-center mt-3">
              <QuantityBox />
              <Button className="btn-blue btn-lg btn-big btn-round ml-3">
                <BsCartFill /> &nbsp; Add to Cart
              </Button>
              <Tooltip title="Add to Wishlist" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                  <FaRegHeart /> &nbsp;
                </Button>
              </Tooltip>
              <Tooltip title="Compare This Product" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                  <MdCompareArrows /> &nbsp;
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="card mt-5 p-5 detailsPageTabs">
          <div className="customTabs">
            <ul className="list list-inline">
              <li className="list-inline-item">
                <Button
                  className={`${activeTabs === 0 && "active"}`}
                  onClick={() => setActiveTabs(0)}
                >
                  Description
                </Button>
              </li>
              <li className="list-inline-item">
                <Button
                  className={`${activeTabs === 1 && "active"}`}
                  onClick={() => setActiveTabs(1)}
                >
                  Additional Information
                </Button>
              </li>
              <li className="list-inline-item">
                <Button
                  className={`${activeTabs === 2 && "active"}`}
                  onClick={() => setActiveTabs(2)}
                >
                  Reviews (3)
                </Button>
              </li>
            </ul>

            <br />

            {activeTabs === 0 && (
              <div className="tabContent">
                <p>
                  Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                  Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                  elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                  fermentum iaculis nibh, at sodales leo maximus a. Nullam
                  ultricies sodales nunc, in pellentesque lorem mattis quis.
                  Cras imperdiet est in nunc tristique lacinia. Nullam aliquam
                  mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet
                  vel ornare vel, dignissim a tortor.
                </p>
                <p>
                  Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
                  auctor, eleifend nunc a, lobortis neque. Praesent aliquam
                  dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit
                  amet, maximus sagittis dolor. Vivamus nisi sapien, elementum
                  sit amet eros sit amet, ultricies cursus ipsum. Sed consequat
                  luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel
                  diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus,
                  ipsum in vestibulum vulputate, lorem orci convallis quam, sit
                  amet consequat nulla felis pharetra lacus. Duis semper erat
                  mauris, sed egestas purus commodo vel.
                </p>
                <br />

                <h2>Packaging & Delivery</h2>
                <p>
                  Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                  Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                  elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                  fermentum iaculis nibh, at sodales leo maximus a. Nullam
                  ultricies sodales nunc, in pellentesque lorem mattis quis.
                  Cras imperdiet est in nunc tristique lacinia. Nullam aliquam
                  mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet
                  vel ornare vel, dignissim a tortor.
                </p>
                <p>
                  Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
                  auctor, eleifend nunc a, lobortis neque. Praesent aliquam
                  dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit
                  amet, maximus sagittis dolor. Vivamus nisi sapien, elementum
                  sit amet eros sit amet, ultricies cursus ipsum. Sed consequat
                  luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel
                  diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus,
                  ipsum in vestibulum vulputate, lorem orci convallis quam, sit
                  amet consequat nulla felis pharetra lacus. Duis semper erat
                  mauris, sed egestas purus commodo vel.
                </p>

                <br />

                <h2>Suggested Use</h2>
                <p>
                  Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                  Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                  elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                  fermentum iaculis nibh, at sodales leo maximus a. Nullam
                  ultricies sodales nunc, in pellentesque lorem mattis quis.
                  Cras imperdiet est in nunc tristique lacinia. Nullam aliquam
                  mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet
                  vel ornare vel, dignissim a tortor.
                </p>
                <p>
                  Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat
                  auctor, eleifend nunc a, lobortis neque. Praesent aliquam
                  dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit
                  amet, maximus sagittis dolor. Vivamus nisi sapien, elementum
                  sit amet eros sit amet, ultricies cursus ipsum. Sed consequat
                  luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel
                  diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus,
                  ipsum in vestibulum vulputate, lorem orci convallis quam, sit
                  amet consequat nulla felis pharetra lacus. Duis semper erat
                  mauris, sed egestas purus commodo vel.
                </p>
              </div>
            )}

            {activeTabs === 1 && (
              <div className="tabContent">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr class="stand-up">
                        <th>Stand Up</th>
                        <td>
                          <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                        </td>
                      </tr>
                      <tr class="folded-wo-wheels">
                        <th>Folded (w/o wheels)</th>
                        <td>
                          <p>32.5″L x 18.5″W x 16.5″H</p>
                        </td>
                      </tr>
                      <tr class="folded-w-wheels">
                        <th>Folded (w/ wheels)</th>
                        <td>
                          <p>32.5″L x 24″W x 18.5″H</p>
                        </td>
                      </tr>
                      <tr class="door-pass-through">
                        <th>Door Pass Through</th>
                        <td>
                          <p>24</p>
                        </td>
                      </tr>
                      <tr class="frame">
                        <th>Frame</th>
                        <td>
                          <p>Aluminum</p>
                        </td>
                      </tr>
                      <tr class="weight-wo-wheels">
                        <th>Weight (w/o wheels)</th>
                        <td>
                          <p>20 LBS</p>
                        </td>
                      </tr>
                      <tr class="weight-capacity">
                        <th>Weight Capacity</th>
                        <td>
                          <p>60 LBS</p>
                        </td>
                      </tr>
                      <tr class="width">
                        <th>Width</th>
                        <td>
                          <p>24″</p>
                        </td>
                      </tr>
                      <tr class="handle-height-ground-to-handle">
                        <th>Handle height (ground to handle)</th>
                        <td>
                          <p>37-45″</p>
                        </td>
                      </tr>
                      <tr class="wheels">
                        <th>Wheels</th>
                        <td>
                          <p>12″ air / wide track slick tread</p>
                        </td>
                      </tr>
                      <tr class="seat-back-height">
                        <th>Seat back height</th>
                        <td>
                          <p>21.5″</p>
                        </td>
                      </tr>
                      <tr class="head-room-inside-canopy">
                        <th>Head room (inside canopy)</th>
                        <td>
                          <p>25″</p>
                        </td>
                      </tr>
                      <tr class="pa_color">
                        <th>Color</th>
                        <td>
                          <p>Black, Blue, Red, White</p>
                        </td>
                      </tr>
                      <tr class="pa_size">
                        <th>Size</th>
                        <td>
                          <p>M, S</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTabs === 2 && (
              <div className="tabContent">
                <div className="row">
                  <div className="col-md-8">
                    <h3>Customer questions & answers</h3>
                    <br />
                    <div className="card p-4 reviewsCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt="hello"
                          />
                        </div>
                        <span className="text-success d-block text-center font-weight-bold">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2024 at 3:12 pm
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="card p-4 reviewsCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt="hello"
                          />
                        </div>
                        <span className="text-success d-block text-center font-weight-bold">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2024 at 3:12 pm
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="card p-4 reviewsCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt="hello"
                          />
                        </div>
                        <span className="text-success d-block text-center font-weight-bold">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2024 at 3:12 pm
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="card p-4 reviewsCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt="hello"
                          />
                        </div>
                        <span className="text-success d-block text-center font-weight-bold">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2024 at 3:12 pm
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt?
                        </p>
                      </div>
                    </div>
                    <div className="card p-4 reviewsCard flex-row">
                      <div className="image">
                        <div className="rounded-circle">
                          <img
                            src="https://nest-frontend-v6.vercel.app/assets/imgs/blog/author-2.png"
                            alt="hello"
                          />
                        </div>
                        <span className="text-success d-block text-center font-weight-bold">
                          Sienna
                        </span>
                      </div>

                      <div className="info pl-5">
                        <div className="d-flex align-items-center">
                          <h5 className="text-light">
                            December 4, 2024 at 3:12 pm
                          </h5>
                          <div className="ml-auto">
                            <Rating
                              name="half-rating-read"
                              defaultValue={2.5}
                              precision={0.5}
                              readOnly
                            />
                          </div>
                        </div>

                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Delectus, suscipit exercitationem accusantium
                          obcaecati quos voluptate nesciunt facilis itaque modi
                          commodi dignissimos sequi repudiandae minus ab
                          deleniti totam officia id incidunt?
                        </p>
                      </div>
                    </div>

                    <br />
                    <br />

                    <form className="reviewForm">
                      <h4>Add a review</h4>

                      <br />
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          placeholder="Write a Review"
                        ></textarea>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Website"
                        />
                      </div>
                      <br />
                      <div className="form-group">
                        <Button className="btn-blue  btn-big">
                          Submit Review
                        </Button>
                      </div>
                    </form>
                  </div>

                  {/* Right Side Start */}
                  <div className="col-md-4 pl-5">
                    <h4>Customer review</h4>

                    <div className="d-flex align-items-center mt-2">
                      <Rating
                        name="half-rating-read"
                        defaultValue={4.5}
                        precision={0.5}
                        readOnly
                      />
                      <strong className="ml-3">4.8 out of 5</strong>
                    </div>

                    <br />

                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">5 star</span>
                      <div
                        class="progress"
                        style={{ width: "75%", height: "20px" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "85%", height: "20px" }}
                        >
                          85%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">4 star</span>
                      <div
                        class="progress"
                        style={{ width: "75%", height: "20px" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "75%", height: "20px" }}
                        >
                          75%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">3 star</span>
                      <div
                        class="progress"
                        style={{ width: "75%", height: "20px" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "50%", height: "20px" }}
                        >
                          50%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">2 star</span>
                      <div
                        class="progress"
                        style={{ width: "75%", height: "20px" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "35%", height: "20px" }}
                        >
                          35%
                        </div>
                      </div>
                    </div>
                    <div className="progressBarBox d-flex align-items-center">
                      <span className="mr-3">1 star</span>
                      <div
                        class="progress"
                        style={{ width: "75%", height: "20px" }}
                      >
                        <div
                          class="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "25%", height: "20px" }}
                        >
                          25%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <RelatedProducts title="RELATED PRODUCTS" />

        <RelatedProducts title="RECENTLY VIEWED PRODUCTS" />
      </div>
    </section>
  );
};

export default ProductDetails;

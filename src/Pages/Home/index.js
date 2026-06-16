import Button from "@mui/material/Button";
import HomeBanner from "../../Components/HomeBanner";
import side_banner1 from "../../assets/images/side_banner1.png";
import side_banner2 from "../../assets/images/side_banner2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";

import small_banner1 from "../../assets/images/small_banner1.png";
import small_banner2 from "../../assets/images/small_banner2.png";
import newsletterImg from "../../assets/images/coupon.png";
import { IoMailOutline } from "react-icons/io5";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={side_banner1} alt="" className="cursor w-100" />
                </div>
                <div className="banner mt-5">
                  <img src={side_banner2} alt="" className="cursor w-100" />
                </div>
              </div>
            </div>
            {/* Best Seller Product */}
            <div className="col-md-9">
              <div className="d-flex align-items-center">
                <div className="info w-75">
                  <h3 className="mb-0">Best Sellers</h3>
                  <p className="text-light  mb-0">
                    Do not miss the current offers until the end of March.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <FaArrowRightLong />
                </Button>
              </div>

              {/* Product area start */}
              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={10}
                  slidesPerGroup={2}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, // <--- This enables hover pause
                  }}
                  navigation={true}
                  modules={[Navigation, Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* New Arrival Product */}
              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0">NEW PRODUCTS</h3>
                  <p className="text-light  mb-0">
                    New products with updated stocks.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All <FaArrowRightLong />
                </Button>
              </div>

              {/* Product area start */}
              <div className="product_row productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>

              <div className="d-flex mt-4 bannerSec">
                <div className="banner mr-4">
                  <img src={small_banner1} alt="" className="cursor w-100" />
                </div>{" "}
                <div className="banner">
                  <img src={small_banner2} alt="" className="cursor w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section Start */}
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white mb-1">
                $20 discount for your first order
              </p>
              <h3 className="text-white">Join our newsletter and get...</h3>
              <p className="text-light">
                Join our email subscription now to get updates on <br />
                promotions and coupons.
              </p>

              <form>
                <IoMailOutline />
                <input type="text" placeholder="Your Email Address" />
                <Button className="subscribeBtn">Subscribe</Button>
              </form>
            </div>
            <div className="col-md-6">
              <img src={newsletterImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section End */}
    </>
  );
};

export default Home;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Categories from "../../assets/images/cat-2-removebg-preview.png";
const HomeCat = () => {
  const [itemBg, setItemBg] = useState([
    "#2298ffff",
    "#ffb0ffff",
    "#a8d3ffff",
    "#b9dcffff",
    "#ffbbbbff",
    "#2e9dffff",
    "#41a0ffff",
    "#178bffff",
    "#c1e0ffff",
    "#ff5c5cff",
    "#2298ffff",
    "#ffb0ffff",
    "#a8d3ffff",
    "#b9dcffff",
    "#ffbbbbff",
    "#2e9dffff",
    "#41a0ffff",
    "#178bffff",
    "#c1e0ffff",
    "#ff5c5cff",
    "#ffbbbbff",
  ]);

  return (
    <section className="homeCat">
      <div className="container info">
        <h3 className="mb-4">Features Categories</h3>
        <Swiper
          slidesPerView={8}
          spaceBetween={8}
          slidesPerGroup={3}
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
          {itemBg.map((item, index) => {
            return (
              <SwiperSlide>
                <div
                  className="item text-center cursor"
                  style={{ background: item }}
                >
                  <img src={Categories} alt="Category 1" />
                  <h6>Beverages</h6>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeCat;

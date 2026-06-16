import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const HomeBanner = () => {
  return (
    <div className="container mt-3">
      <div className="homeBannerSection">
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res0ac911f0d8ba27499d73ffd1e90bcdbcfr.jpg"
                alt=""
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="http://im.uniqlo.com/global-cms/spa/res1f0fe8887b3edc47c4cf45a46d34ebb0fr.jpg"
                alt=""
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://im.uniqlo.com/global-cms/spa/resdb9df0d58b7236d1a3e3816ee056db87fr.jpg"
                alt=""
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://im.uniqlo.com/global-cms/spa/res0da10e5b3159e8ad508b7b9b4c5bf913fr.jpg"
                alt=""
                className="w-100"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeBanner;

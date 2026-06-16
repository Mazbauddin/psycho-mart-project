import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import ProductItem from "../../../Components/ProductItem";

const RelatedProducts = (props) => {
  return (
    <div className="mt-2">
      {/* Related Product Start */}
      <div className="relatedProducts pt-5 pb-4">
        <div className="d-flex align-items-center">
          <div className="info w-75">
            <h3 className="mb-0">{props.title}</h3>
          </div>
          {/* <Button className="viewAllBtn ml-auto">
              View All <FaArrowRightLong />
            </Button> */}
        </div>

        {/* Product area start */}
        <div className="product_row w-100 mt-4">
          <Swiper
            slidesPerView={5}
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
      </div>

      {/* Related Product End */}
    </div>
  );
};

export default RelatedProducts;

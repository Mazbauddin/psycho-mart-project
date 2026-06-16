import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import InnerImageZoom from "react-inner-image-zoom";
import { useRef, useState } from "react";
import image from "../../assets/images/side_banner1.png";
const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const goto = (index) => {
    setSlideIndex(index);
    zoomSlider.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };
  return (
    <div className="productZoom">
      <div className="productZoom position-relative boAll">
        <div className="badge badge-primary">23%</div>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
          slidePerGroup={1}
          modules={[Navigation]}
          className="zoomSliderBig"
          ref={zoomSliderBig}
        >
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src={image}
                className="w-100"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src={image}
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src={image}
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src={image}
                className="w-100"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <InnerImageZoom
                zoomType="hover"
                zoomScale={1.5}
                src={image}
                className="w-100"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        navigation={true}
        loop={true}
        slidePerGroup={1}
        modules={[Navigation]}
        className="zoomSlider"
        ref={zoomSlider}
      >
        <SwiperSlide>
          <div className={`item ${slideIndex === 0 && "item_active"}`}>
            <img src={image} className="w-100" onClick={() => goto(0)} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 1 && "item_active"}`}>
            <img src={image} className="w-100" onClick={() => goto(1)} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 2 && "item_active"}`}>
            <img src={image} className="w-100" onClick={() => goto(2)} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 3 && "item_active"}`}>
            <img src={image} className="w-100" onClick={() => goto(3)} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`item ${slideIndex === 4 && "item_active"}`}>
            <img src={image} className="w-100" onClick={() => goto(4)} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductZoom;

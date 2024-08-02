import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
SwiperCore.use([Navigation]);

const Slider = () => {
  return (
    <div>
      <Swiper navigation allowSlideNext={false}>
        <SwiperSlide
          style={{
            position: "relative",
            background: `url('/img1.jpeg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "580px",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex flex-col justify-center items-center text-white text-center">
            <div className="max-w-5xl flex flex-col items-center">
              <h1 className="text-white lg:text-5xl sm:text-4xl text-3xl font-semibold px-4">
                Aiming to be clients' top tech partner and community contributor
              </h1>
              <p className="text-white sm:text-xl text-lg pt-6 sm:px-24 px-16">
                Stand out with an impressive resume, connect with top companies,
                and gain valuable insights for your professional journey
              </p>
              <a href="" className="w-fit">
                <button
                  className="bg-blue-600 text-white flex items-center justify-center gap-x-2 text-lg 
                py-3 rounded-full px-8 mt-6"
                >
                  Get Started
                  <img src="/arrow.svg" alt="open" className="fill-current" />
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

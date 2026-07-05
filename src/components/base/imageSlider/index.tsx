import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide, type SwiperProps } from "swiper/react";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

type Slides = {
  id: number;
  src: string;
  alt: string;
};

type SliderProps = SwiperProps & {
  slides: Slides[];
};

const ImageSlider = ({ slides, ...props }: SliderProps) => {
  return (
    <Swiper
      {...props}
      modules={[EffectFade, Autoplay, Navigation, Pagination]}
      pagination={{ clickable: true }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      className="relative"
    >
      {slides.map((slides) => (
        <SwiperSlide key={slides.id}>
          <img src={slides.src} alt={slides.alt} />
        </SwiperSlide>
      ))}

      <div className="swiper-button-next absolute! p-2! w-9! h-9! mt-0! mx-3! rounded-sm bg-black/50 hover:bg-black/70 text-white! "></div>
      <div className="swiper-button-prev absolute! p-2!  w-9! h-9! mt-0! mx-3! rounded-sm bg-black/50 hover:bg-black/70 text-white! "></div>
    </Swiper>
  );
};

export default ImageSlider;

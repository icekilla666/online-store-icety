import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode, Autoplay } from "swiper/modules"; 
import { useState } from "react";
import "swiper/swiper.css";

interface SwiperSliderProps {
  images: string[];
  mainImage?: string;
  productName: string;
  className?: string;
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({
  images,
  mainImage,
  productName,
  className = "",
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const allImages = mainImage ? [mainImage, ...images] : images;

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative mb-6">
        <Swiper
          modules={[Navigation, Thumbs, Autoplay]} 
          thumbs={{ swiper: thumbsSwiper }}
          className="rounded-xl overflow-hidden"
          loop={true} 
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        >
          {allImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[280px] sm:h-[400px] md:h-[600px]">
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                  <img
                    src={image}
                    alt={`${productName} - изображение ${index + 1}`}
                    className="p-4 sm:p-9 bg-wrapper rounded-2xl border-2 border-custom object-contain h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {allImages.length > 1 && (
        <div className="py-2 px-3 sm:px-4 border border-border rounded-[30px]">
          <Swiper
            modules={[FreeMode, Thumbs, Autoplay]} 
            onSwiper={setThumbsSwiper}
            watchSlidesProgress
            freeMode={true}
            slidesPerView={4}
            spaceBetween={12}
            className="thumbs-slider"
            loop={true}
            autoplay={{
              delay: 2000, 
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
            }}
          >
            {allImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="cursor-pointer transition-all duration-200 hover:opacity-80">
                  <div className="aspect-square flex items-center justify-center p-1">
                    <img
                      src={image}
                      alt={`Миниатюра ${index + 1}`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default SwiperSlider;

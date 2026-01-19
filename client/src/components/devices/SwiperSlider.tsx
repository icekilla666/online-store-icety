// components/ui/SwiperSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";
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
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          className="rounded-xl overflow-hidden"
        >
          {allImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[400px] md:h-[500px]">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img
                    src={image}
                    alt={`${productName} - изображение ${index + 1}`}
                    className="p-9 bg-wrapper rounded-2xl border-2 border-custom object-contain max-h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {allImages.length > 1 && (
        <div className="py-2 px-4 border border-border rounded-[30px]">
          <Swiper
            modules={[FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            watchSlidesProgress
            freeMode={true}
            slidesPerView={4}
            spaceBetween={12}
            className="thumbs-slider"
          >
            {allImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="cursor-pointer transition-all duration-200 "
                >
                  <div className="aspect-square flex items-center justify-center p-1">
                    <img
                      src={image}
                      alt={`Миниатюра ${index + 1}`}
                      className="w-full h-full object-contain"
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

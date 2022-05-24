import { Center, Flex, Image, Stack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CarouselImg } from './CarouselImg';
// import 'swiper/css/scrollbar';

export function Carousel() {
  return (
    <Flex marginBottom='100px' mt='52px'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <CarouselImg
            title='Europa'
            subtitle='O continente mais antigo.'
            backgroundImg='https://user-images.githubusercontent.com/90292951/169891035-4cd9604d-d9ae-4642-8480-a5bf72e624bc.svg'
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselImg
            title='América do Norte'
            subtitle='EUA mais dois.'
            backgroundImg='https://user-images.githubusercontent.com/90292951/169945947-0c7f1781-d794-4a3d-87d3-f8a7e94b3e4a.jpg'
          />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Flex>
  );
}

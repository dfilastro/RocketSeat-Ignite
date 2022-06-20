import { CarouselImg } from './CarouselImg';
import { Flex, Link } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

// import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import 'swiper/css/scrollbar';

export function Carousel() {
  return (
    <Flex
      marginBottom={['20px', '40px', '60px', '100px']}
      mt={['11px', '22px', '33px', '52px']}
      pr={['20px', '40px', '60px', '100px']}
      pl={['20px', '40px', '60px', '100px']}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <Link href={'/continent/1'} style={{ textDecoration: 'none' }}>
            <CarouselImg
              title='Europa'
              subtitle='O continente mais antigo.'
              backgroundImg='https://user-images.githubusercontent.com/90292951/169891035-4cd9604d-d9ae-4642-8480-a5bf72e624bc.svg'
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/continent/2'} style={{ textDecoration: 'none' }}>
            <CarouselImg
              title='América do Norte'
              subtitle='EUA mais dois.'
              backgroundImg='https://user-images.githubusercontent.com/90292951/169945947-0c7f1781-d794-4a3d-87d3-f8a7e94b3e4a.jpg'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/continent/3'} style={{ textDecoration: 'none' }}>
            <CarouselImg
              title='América do Sul'
              subtitle='A maior floresta tropical do mundo.'
              backgroundImg='https://magazine.zarpo.com.br/wp-content/uploads/2019/02/15-destinos-irresistiveis-para-viagem-na-america-do-sul.jpg'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/continent/4'} style={{ textDecoration: 'none' }}>
            <CarouselImg
              title='Ásia'
              subtitle='O maior de todos.'
              backgroundImg='https://media.iatiseguros.com/wp-content/uploads/sites/6/2019/11/22075917/roteiro-10-dias-malasia.jpg'
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href={'/continent/5'} style={{ textDecoration: 'none' }}>
            <CarouselImg
              title='África e Oceania'
              subtitle='Diversidade'
              backgroundImg='https://media.iatiseguros.com/wp-content/uploads/sites/6/2019/11/22075918/roteiro-10-dias-singapura.jpg'
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}

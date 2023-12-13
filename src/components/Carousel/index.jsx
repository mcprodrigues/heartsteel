import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import { ImageContainer, Image } from "../ImageContainer/index";

import styled from "styled-components";


const StyledSwiper = styled(Swiper)`
  width: 56rem;
  margin: 0;

  .swiper-button-next,
  .swiper-button-prev {
    color: ${props => props.theme.colors.golden}; 
    
  }

  .swiper-pagination-bullet {
    background-color: ${props => props.theme.colors.golden}; 
  }
`;


const images = [
  { id: 1, src: 'img/carousel/heartsteel-01.png' },
  { id: 2, src: 'img/carousel/heartsteel-02.png' },
  { id: 3, src: 'img/carousel/heartsteel-03.png' },
  { id: 4, src: 'img/carousel/heartsteel-04.png' },
  { id: 5, src: 'img/carousel/heartsteel-05.png' },
  { id: 6, src: 'img/carousel/heartsteel-06.png' },
  { id: 7, src: 'img/carousel/heartsteel-07.png' },
];

export const Carousel = () => {
  return (
    <ImageContainer>
    <StyledSwiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    slidesPerView={1}
    pagination={{ clickable: true }}
    autoplay= {{ delay: 4000, disableOnInteraction: false }}

    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <Image src={image.src} alt="Heartsteel" />
        </SwiperSlide>
      ))}
    </StyledSwiper>
    </ImageContainer>
  );
};


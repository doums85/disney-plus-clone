import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react'

export default function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
      return (
        <Carousel {...settings}>
          <Wrap>
            <img src="/images/slider-badging.jpg" alt="badging" />
          </Wrap>
          <Wrap>
            <img src="/images/slider-badag.jpg" alt="badging" />
          </Wrap>
        </Carousel>
      );
}

const Carousel = styled(Slider)`
  margin-top: 20px;
  ul li button {
    ::before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.stick-active button::before {
    color: white;
  }
  button {
    z-index: 1;
  }
  .slick-list {
    overflow: visible;
  }
`;

const Wrap = styled.div`

  img {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    
    
    &:hover{
      border: 4px solid rgba(249, 249, 249, .8);
    }
  }
  @media (max-width: 768px) {
    height: 250px;
    img{
      grid-template-columns: repeat(1, minmax(0, 1fr));
      object-fit: cover;
      object-position: 70% center;
    }
  }
`;

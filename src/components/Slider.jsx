

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';


const Slider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
       
           <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/BLggp0w/brennan-burling-xn602-Ft9-HJQ-unsplash.jpg"
            text='Share Concerns, Get Better Solutions!'
            title="Post your questions and get tailored recommendations from real users and experts."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://i.ibb.co.com/sWXmpWk/glenn-carstens-peters-npx-XWg-Q33-ZQ-unsplash.jpg"
            text='Solve Your Product Dilemmas in Minutes!'
            title="Get fast, reliable answers to your product questions and make confident decisions."
          />
        </SwiperSlide>
       
        <SwiperSlide>
          <Slide
         image="https://i.ibb.co.com/mbj7TCX/pexels-leeloothefirst-5428835-1.jpg"
            text='Discover Smarter Alternatives for Everyday Choices'
            title="Browse personalized recommendations and find smarter, more affordable solutions."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
         image="https://i.ibb.co.com/ftSLxjX/krakenimages-Y5bv-Rlc-Cx8k-unsplash.jpg"
            text='Empowering Informed Consumer Decisions'
            title="Access a wide range of trusted insights to help you choose what’s right for you."
          />
        </SwiperSlide>
      </Swiper>

        </div>
    );
};

export default Slider;
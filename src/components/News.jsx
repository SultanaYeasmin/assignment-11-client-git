import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import NewsSlide from './NewsSlide';

import img1 from "../assets/images/sustainability.jpg"
import img2 from "../assets/images/tech-innovation.jpg"
import img3 from "../assets/images/market-analysis.jpg"
import img4 from "../assets/images/startup-success.jpg"
import img5 from "../assets/images/cyber-security.jpg"
import img6 from "../assets/images/health-tech.jpg"




const News = () => {
    return (
        <>
        <h1 className='text-3xl text-center my-5 font-extrabold'>Latest News!</h1>
          <div className='mb-20'>
          <Swiper
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 10 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                  }}
                
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
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
                    <NewsSlide
                    imageURL={img1} time="1"
                   topic="climate"
                    title="Sustainable Living Trends" 
                    subTitle="Explore innovative solutions for a greener tomorrow."
                    url="https://explodingtopics.com/blog/sustainability-trends"
                    
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsSlide
                   imageURL={img2} topic="Tech" time="1 hr"
                    title="Breakthrough in AI Technology" 
                    subTitle="Revolutionizing industries with cutting-edge advancements."
                      url="https://www.forbes.com/sites/bernardmarr/2024/12/16/6-game-changing-ai-breakthroughs-that-defined-2024/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsSlide
                   imageURL={img3} topic="Market" time="2 hrs"
                    title="Global Market Insights" 
                    subTitle="Key updates shaping the future of business."
                      url="https://www.gminsights.com/"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsSlide
                   imageURL={img4} topic="Business" time="3 hrs"
                    title="Startups on the Rise"
                    subTitle="Inspiring stories of new ventures breaking boundaries."
                      url=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsSlide
                   imageURL={img5} topic="IT" time="1 day"
                    title="Cybersecurity Alert"
                    subTitle="Staying ahead in the fight against digital threats."
                      url="https://explodingtopics.com/blog/fast-growing-companies"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <NewsSlide
                   imageURL={img6} topic="health" time="2 day"
                    title="Healthcare Meets Technology"
                    subTitle="Innovations redefining patient care and wellness."
                      url="https://www.forbes.com/councils/forbestechcouncil/2023/05/16/where-healthcare-meets-tech-three-crucial-areas-of-discussion/"
                    />
                </SwiperSlide>
                


            </Swiper>
          </div>
        </>
    );
};

export default News;



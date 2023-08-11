
"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Grid, Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {

      return (
            <>
                  <Swiper
                        slidesPerView={1}
                        loop={true}
                        grid={{
                              rows: 1,
                        }}
                        spaceBetween={20}
                        centeredSlides={true}
                       
                        autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                        }}
                      
                        pagination={{
                              clickable: true,
                        }}
                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation, Grid ]}

                        className="bigSlider h-[35vh] lg:h-[80vh]"
                  >
                        <SwiperSlide>
                              <div className=" duration-700 ease-in-out h-full">
                                    <img className="w-full h-full" src="/images/Vumiseba-banner_1.jpg" alt="img5" />
                              </div>

                        </SwiperSlide>
                        <SwiperSlide>
                              <div className=" duration-700 ease-in-out h-full">
                                    <img className="w-full h-full" src="/images/c5.jpg" alt="img5" />
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className=" duration-700 ease-in-out h-full">
                                    <img className="w-full h-full" src="/images/c8.jpg" alt="img5" />
                              </div>

                        </SwiperSlide>

                        <SwiperSlide>
                              <div className=" duration-700 ease-in-out h-full">
                                    <img className="w-full h-full" src="/images/Vumiseba-banner_1.jpg" alt="img5" />
                              </div>

                        </SwiperSlide>
                        <SwiperSlide>
                              <div className=" duration-700 ease-in-out h-full">
                                    <img className="w-full h-full" src="/images/c5.jpg" alt="img5" />
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className=" duration-700 ease-in-out h-full">
                                    <img className="w-full h-full" src="/images/c8.jpg" alt="img5" />
                              </div>

                        </SwiperSlide>

                        <SwiperSlide>
                              <div className=" duration-700 ease-in-out h-full">
                                    <img className="w-full h-full" src="/images/Vumiseba-banner_1.jpg" alt="img5" />
                              </div>

                        </SwiperSlide>
                        <SwiperSlide>
                              <div className=" duration-700 ease-in-out h-full">
                                    <img className="w-full h-full" src="/images/c5.jpg" alt="img5" />
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              <div className=" duration-700 ease-in-out h-full">
                                    <img className="w-full h-full" src="/images/c8.jpg" alt="img5" />
                              </div>

                        </SwiperSlide>
                  </Swiper></>
      )
}

export default Slider;
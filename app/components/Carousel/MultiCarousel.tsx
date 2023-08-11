
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

const MultiCarousel = () => {
      const progressCircle = useRef(null);
      const progressContent = useRef(null);



      return (
            <>
                  <Swiper
                        slidesPerView={3}
                        loop={true}
                        grid={{
                              rows: 1,
                        }}
                        spaceBetween={20}
                        centeredSlides={true}

                        autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                        }}

                        pagination={{
                              clickable: true,
                        }}
                        // navigation={true}
                        modules={[Autoplay, Pagination, Navigation, Grid]}

                        breakpoints={{
                              425: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                              },
                              375: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                              },
                              320: {
                                    slidesPerView: 1,
                                    spaceBetween: 40,
                              },
                              768: {
                                    slidesPerView: 2.9,
                                    spaceBetween: 40,
                              },
                              1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                              },
                        }}

                        className="mySwiper h-[35vh] lg:h-[80vh]"
                  >
                        <SwiperSlide>
                              <div className="item bg-slate-50 border rounded-md group w-full">
                                    <a href="#">
                                          <div className="container flex justify-center items-center h-[165px]">
                                                <div className="w-[100px]">
                                                      <img className="h-[100px] group-hover:scale-150 transition-all duration-1000" src="./images/tottho_jachai.png" alt />
                                                </div>
                                          </div>
                                          <div className="bg-primary flex justify-center items-center h-[70px] rounded-b-md">
                                                <h3 className="text-slate-50 text-20 group-hover:font-bold transition-all duration-1000">খতিয়ান তথ্য যাচাই</h3>
                                          </div>
                                    </a>
                              </div>


                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="item bg-slate-50 border rounded-md group w-full">
                                    <a href="#">
                                          <div className="container flex justify-center items-center h-[165px]">
                                                <div className="w-[100px]">
                                                      <img className="h-[100px] group-hover:scale-150 transition-all duration-1000" src="./images/tottho_jachai.png" alt />
                                                </div>
                                          </div>
                                          <div className="bg-primary flex justify-center items-center h-[70px] rounded-b-md">
                                                <h3 className="text-slate-50 text-20 group-hover:font-bold transition-all duration-1000">ভূমি তথ্য যাচাই</h3>
                                          </div>
                                    </a>
                              </div>

                        </SwiperSlide>
                        <SwiperSlide>
                              <div className="item bg-slate-50 border rounded-md group w-full">
                                    <a href="#">
                                          <div className="container flex justify-center items-center h-[165px]">
                                                <div className="w-[100px]">
                                                      <img className="h-[100px] group-hover:scale-150 transition-all duration-1000" src="./images/tottho_jachai.png" alt />
                                                </div>
                                          </div>
                                          <div className="bg-primary flex justify-center items-center h-[70px] rounded-b-md">
                                                <h3 className="text-slate-50 text-20 group-hover:font-bold transition-all duration-1000">সনদের আবেদন </h3>
                                          </div>
                                    </a>
                              </div>


                        </SwiperSlide>

                        <SwiperSlide>
                              <div className="item bg-slate-50 border rounded-md group w-full">
                                    <a href="#">
                                          <div className="container flex justify-center items-center h-[165px]">
                                                <div className="w-[100px]">
                                                      <img className="h-[100px] group-hover:scale-150 transition-all duration-1000" src="./images/tottho_jachai.png" alt />
                                                </div>
                                          </div>
                                          <div className="bg-primary flex justify-center items-center h-[70px] rounded-b-md">
                                                <h3 className="text-slate-50 text-20 group-hover:font-bold transition-all duration-1000">ই-নামজারি তথ্য</h3>
                                          </div>
                                    </a>
                              </div>

                        </SwiperSlide>

                        <SwiperSlide>
                              <div className="item bg-slate-50 border rounded-md group w-full">
                                    <a href="#">
                                          <div className="container flex justify-center items-center h-[165px]">
                                                <div className="w-[100px]">
                                                      <img className="h-[100px] group-hover:scale-150 transition-all duration-1000" src="./images/tottho_jachai.png" alt />
                                                </div>
                                          </div>
                                          <div className="bg-primary flex justify-center items-center h-[70px] rounded-b-md">
                                                <h3 className="text-slate-50 text-20 group-hover:font-bold transition-all duration-1000">ই-নামজারি তথ্য</h3>
                                          </div>
                                    </a>
                              </div>

                        </SwiperSlide>

                        <SwiperSlide>
                              <div className="item bg-slate-50 border rounded-md group w-full">
                                    <a href="#">
                                          <div className="container flex justify-center items-center h-[165px]">
                                                <div className="w-[100px]">
                                                      <img className="h-[100px] group-hover:scale-150 transition-all duration-1000" src="./images/tottho_jachai.png" alt />
                                                </div>
                                          </div>
                                          <div className="bg-primary flex justify-center items-center h-[70px] rounded-b-md">
                                                <h3 className="text-slate-50 text-20 group-hover:font-bold transition-all duration-1000">ই-নামজারি তথ্য</h3>
                                          </div>
                                    </a>
                              </div>

                        </SwiperSlide>

                        <SwiperSlide>
                              <div className="item bg-slate-50 border rounded-md group w-full">
                                    <a href="#">
                                          <div className="container flex justify-center items-center h-[165px]">
                                                <div className="w-[100px]">
                                                      <img className="h-[100px] group-hover:scale-150 transition-all duration-1000" src="./images/tottho_jachai.png" alt />
                                                </div>
                                          </div>
                                          <div className="bg-primary flex justify-center items-center h-[70px] rounded-b-md">
                                                <h3 className="text-slate-50 text-20 group-hover:font-bold transition-all duration-1000">ই-নামজারি তথ্য</h3>
                                          </div>
                                    </a>
                              </div>

                        </SwiperSlide>

                  </Swiper></>
      )
}

export default MultiCarousel;
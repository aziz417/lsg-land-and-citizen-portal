"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faUserTie, faUsers } from "@fortawesome/free-solid-svg-icons";
import { cn } from '@/lib/utils';
import Link from 'next/link';


export default function Navbar() {
      const [mobileMenu, setMobileMenu] = useState<boolean>(false)
      const [isShowSearch, setIsShowSearch] = useState<boolean>(false)

      const mouseHoverHandler = (event: React.MouseEvent<HTMLDivElement>, type: string) => {
            const box: HTMLDivElement = event.currentTarget;
            box.children[1].style.display = type;
      };

      const mobileMenuHandel = (event: React.MouseEvent<HTMLButtonElement>, showHide: boolean) => {
            setMobileMenu(showHide)
      }

      const pages = ['Ainobidhi', 'Poripotro', 'Nitimala', 'Manual', 'VumisebaForm',
            'ProkolpoSongkhap', 'UddashoLokkho', 'NagorikSubidha', 'ProklpoOutput', 'VumiList', 'Faq', 'Contact']

      return (

            <div className='mb-[80px]'>
                  <div className="lg:hidden bg-primary flex items-center p-3">
                        <svg className="mr-3" width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd"
                                    d="M21.75 3.5H19.5V2H18V3.5H6V2H4.5V3.5H2.25L1.5 4.25V22.25L2.25 23H21.75L22.5 22.25V4.25L21.75 3.5ZM21 21.5H3V8H21V21.5ZM21 6.5H3V5H21V6.5ZM6 12.5H4.5V14H6V12.5ZM4.5 15.5H6V17H4.5V15.5ZM6 18.5H4.5V20H6V18.5ZM9 12.5H10.5V14H9V12.5ZM10.5 15.5H9V17H10.5V15.5ZM9 18.5H10.5V20H9V18.5ZM10.5 9.5H9V11H10.5V9.5ZM13.5 12.5H15V14H13.5V12.5ZM15 15.5H13.5V17H15V15.5ZM13.5 18.5H15V20H13.5V18.5ZM15 9.5H13.5V11H15V9.5ZM18 12.5H19.5V14H18V12.5ZM19.5 15.5H18V17H19.5V15.5ZM18 9.5H19.5V11H18V9.5Z" fill="#FFFFFF" />
                        </svg>
                        <p className="text-slate-50 text-14">
                              {"২৩ শ্রাবণ ১৪৩০ / সোমবার, ৭ আগস্ট, ২০২৩"}
                        </p>
                  </div>
                  <nav className="mb-8 px-3 lg:px-0 lg:py-3 bg-[#FFFFFF] drop-shadow-lg fixed w-full z-50 top-0">
                        <div className="container mx-auto px-[1vw] flex justify-between items-center drop-shadow-2xl">
                              <Link href="/" className="w-[30%] lg:w-[15%]">
                                    <img src="/images/logo.svg" alt="images" />
                              </Link>
                              <div className="flex justify-end items-center space-x-5 lg:w-[82%] lg:pr-56 pr-11">
                                    <div className="flex flex-col space-y-3">
                                          <div className="flex justify-end items-center space-x-7">
                                                <div className="lg:flex items-center space-x-1 hidden">
                                                      <svg className="mr-1" width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M21.75 3.5H19.5V2H18V3.5H6V2H4.5V3.5H2.25L1.5 4.25V22.25L2.25 23H21.75L22.5 22.25V4.25L21.75 3.5ZM21 21.5H3V8H21V21.5ZM21 6.5H3V5H21V6.5ZM6 12.5H4.5V14H6V12.5ZM4.5 15.5H6V17H4.5V15.5ZM6 18.5H4.5V20H6V18.5ZM9 12.5H10.5V14H9V12.5ZM10.5 15.5H9V17H10.5V15.5ZM9 18.5H10.5V20H9V18.5ZM10.5 9.5H9V11H10.5V9.5ZM13.5 12.5H15V14H13.5V12.5ZM15 15.5H13.5V17H15V15.5ZM13.5 18.5H15V20H13.5V18.5ZM15 9.5H13.5V11H15V9.5ZM18 12.5H19.5V14H18V12.5ZM19.5 15.5H18V17H19.5V15.5ZM18 9.5H19.5V11H18V9.5Z" fill="#198754" />
                                                      </svg>
                                                      <p className="text-secondary text-14">
                                                            {"২৩ শ্রাবণ ১৪৩০ / সোমবার, ৭ আগস্ট, ২০২৩"}
                                                      </p>
                                                </div>
                                                <div className="flex items-center justify-center space-x-3">
                                                      <button className="text-primary" onClick={e => setIsShowSearch(!isShowSearch)}>
                                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                                      </button>
                                                      <button className="border border-primary rounded-md"><span className="bg-primary p-1.5 text-slate-50 rounded-md text-13 font-medium">বাং</span><span className="text-secondary rounded-md p-1 text-13 font-medium">EN</span></button>
                                                </div>
                                          </div>
                                          <ul className="lg:flex items-center space-x-4 hidden text-15">
                                                <li><Link className="text-semiblack font-medium hover:text-magenta" href="/">হোম</Link></li>
                                                <li>
                                                      <div
                                                            onMouseEnter={e => mouseHoverHandler(e, "block")}
                                                            onMouseLeave={e => mouseHoverHandler(e, "")}
                                                            className="inline-block relative">

                                                            <button
                                                                  className="text-semiblack focus:outline-none font-medium lg:text-18
                                                                  text-center inline-flex items-center">
                                                                  মন্ত্রণালয়/ বিভাগ

                                                                  <svg className="ml-2" width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1.875 5.2125L2.26219 4.6875L12.7566 4.6875L13.125 5.19375L7.84969 10.3125H7.07437L1.875 5.2125Z" fill="#1E433D" />
                                                                  </svg>
                                                            </button>


                                                            <div className="w-60 z-50 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                                                                  <ul className="py-2 text-semiblack pb-3 flex flex-col space-y-2" aria-labelledby="dropdownHoverButton1">
                                                                        <li>
                                                                              <Link href="https://minland.gov.bd/" target="_blank" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি মন্ত্রণালয়</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="http://www.lrb.gov.bd/" target="_blank" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি সংস্কার বোর্ড</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="http://lab.gov.bd/" target="_blank" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি আপিল বোর্ড</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="http://www.dlrs.gov.bd/" target="_blank" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি রেকর্ড ও জরিপ
                                                                                    অধিদপ্তর</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="http://www.latc.gov.bd/" target="_blank" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি প্রশাসন ও প্রশিক্ষণ
                                                                                    কেন্দ্র</Link>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </li>
                                                <li>
                                                      <div
                                                            onMouseEnter={e => mouseHoverHandler(e, "block")}
                                                            onMouseLeave={e => mouseHoverHandler(e, "")}
                                                            className="inline-block relative">

                                                            <button
                                                                  className="text-semiblack focus:outline-none font-medium lg:text-18
                                                                  text-center inline-flex items-center">
                                                                  প্রকল্প সম্পর্কিত

                                                                  <svg className="ml-2" width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1.875 5.2125L2.26219 4.6875L12.7566 4.6875L13.125 5.19375L7.84969 10.3125H7.07437L1.875 5.2125Z" fill="#1E433D" />
                                                                  </svg>
                                                            </button>


                                                            <div className="w-60 z-50 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                                                                  <ul className="py-2 text-semiblack pb-3 flex flex-col space-y-2" aria-labelledby="dropdownHoverButton1">
                                                                        <li>
                                                                              <Link href="/ProkolpoSongkhap" className="block py-2 hover:text-magenta mx-4 border-b">প্রকল্প সারসংক্ষেপ</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="/UddashoLokkho" className="block py-2 hover:text-magenta mx-4 border-b">উদ্দেশ্যে ও লক্ষ্য</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="/NagorikSubidha" className="block py-2 hover:text-magenta mx-4 border-b">নাগরিকের সুবিধা</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="/ProklpoOutput" className="block py-2 hover:text-magenta mx-4 border-b">প্রকল্পের আউটপুট</Link>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </li>
                                                <li>
                                                      <div
                                                            onMouseEnter={e => mouseHoverHandler(e, "block")}
                                                            onMouseLeave={e => mouseHoverHandler(e, "")}
                                                            className="inline-block relative">

                                                            <button
                                                                  className="text-semiblack focus:outline-none font-medium lg:text-18
                                                                  text-center inline-flex items-center">
                                                                  ভূমিসেবা

                                                                  <svg className="ml-2" width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1.875 5.2125L2.26219 4.6875L12.7566 4.6875L13.125 5.19375L7.84969 10.3125H7.07437L1.875 5.2125Z" fill="#1E433D" />
                                                                  </svg>
                                                            </button>

                                                            <div className="w-60 z-50 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                                                                  <ul className="py-2 text-semiblack pb-3 flex flex-col space-y-2" aria-labelledby="dropdownHoverButton1">
                                                                        <li>
                                                                              <Link href="/" className="block py-2 hover:text-magenta mx-4 border-b">নামজারি
                                                                                    সেবা</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="/" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি উন্নয়ন কর সেবা</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="/" className="block py-2 hover:text-magenta mx-4 border-b">খাস জমি বন্দোবস্ত
                                                                                    সেবা</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="/" className="block py-2 hover:text-magenta mx-4 border-b">অরপিত সম্পত্তি
                                                                                    ব্যবস্তাপনা সেবা</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="/" className="block py-2 hover:text-magenta mx-4 border-b">সায়রাত মহাল
                                                                                    ব্যাবস্তাপনা সেবা</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="/VumiList" className="block py-2 hover:text-magenta mx-4 border-b">অন্যান্য
                                                                                    ভূমি
                                                                                    সেবা</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="/VumiList" className="block py-2 text-magenta text-center text-xs">আরো
                                                                                    সেবা</Link>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>

                                                </li>
                                                <li><Link className="text-semiblack font-medium hover:text-magenta" href="/VumisebaForm">ভূমিসেবা
                                                      ফর্ম</Link></li>
                                                <li>
                                                      <div
                                                            onMouseEnter={e => mouseHoverHandler(e, "block")}
                                                            onMouseLeave={e => mouseHoverHandler(e, "")}
                                                            className="inline-block relative">

                                                            <button
                                                                  className="text-semiblack focus:outline-none font-medium lg:text-18
                                                                  text-center inline-flex items-center">
                                                                  ডিজিটাল গার্ড ফাইল

                                                                  <svg className="ml-2" width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1.875 5.2125L2.26219 4.6875L12.7566 4.6875L13.125 5.19375L7.84969 10.3125H7.07437L1.875 5.2125Z" fill="#1E433D" />
                                                                  </svg>
                                                            </button>

                                                            <div className="w-60 z-50 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                                                                  <ul className="py-2 text-semiblack pb-3 flex flex-col space-y-2" aria-labelledby="dropdownHoverButton1">
                                                                        <li>
                                                                              <Link href={"/Ainobidhi"} className="block py-2 hover:text-magenta mx-4 border-b">আইন ও
                                                                                    বিধি</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href={"/Poripotro"} className="block py-2 hover:text-magenta mx-4 border-b">পরিপত্র
                                                                                    প্রজ্ঞাপন</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="/Nitimala" className="block py-2 hover:text-magenta mx-4 border-b">নীতিমালা</Link>
                                                                        </li>
                                                                        <li>
                                                                              <Link href="/Manual" className="block py-2 hover:text-magenta mx-4 border-b">ম্যানুয়াল</Link>
                                                                        </li>
                                                                  </ul>
                                                            </div>
                                                      </div>
                                                </li>
                                          </ul>
                                    </div>

                                    <div className="flex fixed right-0 -top-3">
                                          <div className="hidden lg:block">
                                                <img src="/images/left_nav_img.svg" alt="images" />
                                          </div>
                                          <div className="hidden lg:flex flex-col space-y-3 p-4 bg-[#198754] rounded-b-lg ">
                                                <Link href="/VumiList" className="flex items-center justify-center space-x-3 bg-red-700 border border-slate-50 h-[40px] rounded-full p-3">
                                                      <span className="text-18 text-slate-50">
                                                            <FontAwesomeIcon icon={faUsers} />
                                                      </span>
                                                      <span className="text-14 text-slate-50">নাগরিক সেবা কর্ণার</span>
                                                </Link>
                                                <Link href="https://office.land.gov.bd/dashboard/login" target="_blank" className="flex items-center justify-center space-x-3 bg-white border border-primary h-[40px] rounded-full">
                                                      <span className="text-secondary text-18 mr-2">
                                                            <FontAwesomeIcon icon={faUserTie} />
                                                      </span>
                                                      <span className="text-14 text-secondary">প্রশাসনিক লগইন</span>
                                                </Link>
                                          </div>
                                          <div className="hidden lg:block">
                                                <img src="/images/right_nav_img.svg" alt="images" />
                                          </div>
                                    </div>
                              </div>
                        </div>


                        {/* mobile menu start */}
                        <div className="px-2 pb-1 flex justify-between lg:hidden">

                              <button onClick={e => mobileMenuHandel(e, !mobileMenu)} className="outline-none mobile-menu-button text-2xl text-primary font-bold">
                                    <FontAwesomeIcon icon={faBars} />
                              </button>

                              {/* login */}
                              <div className="flex justify-center items-center space-x-2">
                                    <Link href="https://office.land.gov.bd/dashboard/login" className="flex items-center justify-center space-x-3 border border-primary h-[35px] rounded-md px-2">
                                          <span className="text-primary text-18">
                                                <FontAwesomeIcon icon={faUserTie} />
                                          </span>
                                          <span className="text-12 text-primary">প্রশাসনিক লগইন</span>
                                    </Link>
                                    <Link href="/VumiList" className="flex items-center justify-center space-x-3 bg-primary h-[35px] rounded-md px-2">
                                          <span className="text-slate-50 text-18">
                                                <FontAwesomeIcon icon={faUsers} />
                                          </span>
                                          <span className="text-12 text-slate-50">নাগরিক কর্ণার</span>
                                    </Link>
                              </div>
                        </div>
                        <div className={cn("lg:hidden mobile-menu z-50 mt-8", mobileMenu ? '' : 'hidden')}>
                              <ul className="flex flex-col text-center space-y-5 pb-5 z-50">
                                    <li><Link className="text-semiblack font-medium hover:text-magenta" href="/">হোম</Link></li>
                                    <li>
                                          <div
                                                onMouseEnter={e => mouseHoverHandler(e, "block")}
                                                onMouseLeave={e => mouseHoverHandler(e, "")}
                                                className="inline-block relative">

                                                <button
                                                      className="text-semiblack focus:outline-none font-medium lg:text-18
                                                                  text-center inline-flex items-center">
                                                      মন্ত্রণালয়/ বিভাগ

                                                      <svg className="ml-2" width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.875 5.2125L2.26219 4.6875L12.7566 4.6875L13.125 5.19375L7.84969 10.3125H7.07437L1.875 5.2125Z" fill="#1E433D" />
                                                      </svg>
                                                </button>


                                                <div className="w-60 z-50 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                                                      <ul className="py-2 text-semiblack pb-3 flex flex-col space-y-2" aria-labelledby="dropdownHoverButton1">
                                                            <li>
                                                                  <Link href="https://minland.gov.bd/" target="_blank" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি মন্ত্রণালয়</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="http://www.lrb.gov.bd/" target="_blank" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি সংস্কার বোর্ড</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="http://lab.gov.bd/" target="_blank" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি আপিল বোর্ড</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="http://www.dlrs.gov.bd/" target="_blank" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি রেকর্ড ও জরিপ
                                                                        অধিদপ্তর</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="http://www.latc.gov.bd/" target="_blank" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি প্রশাসন ও প্রশিক্ষণ
                                                                        কেন্দ্র</Link>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </li>
                                    <li>
                                          <div
                                                onMouseEnter={e => mouseHoverHandler(e, "block")}
                                                onMouseLeave={e => mouseHoverHandler(e, "")}
                                                className="inline-block relative">

                                                <button
                                                      className="text-semiblack focus:outline-none font-medium lg:text-18
                                                                  text-center inline-flex items-center">
                                                      প্রকল্প সম্পর্কিত

                                                      <svg className="ml-2" width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.875 5.2125L2.26219 4.6875L12.7566 4.6875L13.125 5.19375L7.84969 10.3125H7.07437L1.875 5.2125Z" fill="#1E433D" />
                                                      </svg>
                                                </button>


                                                <div className="w-60 z-50 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                                                      <ul className="py-2 text-semiblack pb-3 flex flex-col space-y-2" aria-labelledby="dropdownHoverButton1">
                                                            <li>
                                                                  <Link href="/ProkolpoSongkhap" className="block py-2 hover:text-magenta mx-4 border-b">প্রকল্প সারসংক্ষেপ</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/UddashoLokkho" className="block py-2 hover:text-magenta mx-4 border-b">উদ্দেশ্যে ও লক্ষ্য</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/NagorikSubidha" className="block py-2 hover:text-magenta mx-4 border-b">নাগরিকের সুবিধা</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/ProklpoOutput" className="block py-2 hover:text-magenta mx-4 border-b">প্রকল্পের আউটপুট</Link>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </li>
                                    <li>
                                          <div
                                                onMouseEnter={e => mouseHoverHandler(e, "block")}
                                                onMouseLeave={e => mouseHoverHandler(e, "")}
                                                className="inline-block relative">

                                                <button
                                                      className="text-semiblack focus:outline-none font-medium lg:text-18
                                                                  text-center inline-flex items-center">
                                                      ভূমিসেবা

                                                      <svg className="ml-2" width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.875 5.2125L2.26219 4.6875L12.7566 4.6875L13.125 5.19375L7.84969 10.3125H7.07437L1.875 5.2125Z" fill="#1E433D" />
                                                      </svg>
                                                </button>

                                                <div className="w-60 z-50 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                                                      <ul className="py-2 text-semiblack pb-3 flex flex-col space-y-2" aria-labelledby="dropdownHoverButton1">
                                                            <li>
                                                                  <Link href="/" className="block py-2 hover:text-magenta mx-4 border-b">নামজারি
                                                                        সেবা</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/" className="block py-2 hover:text-magenta mx-4 border-b">ভূমি উন্নয়ন কর সেবা</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/" className="block py-2 hover:text-magenta mx-4 border-b">খাস জমি বন্দোবস্ত
                                                                        সেবা</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/" className="block py-2 hover:text-magenta mx-4 border-b">অরপিত সম্পত্তি
                                                                        ব্যবস্তাপনা সেবা</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/" className="block py-2 hover:text-magenta mx-4 border-b">সায়রাত মহাল
                                                                        ব্যাবস্তাপনা সেবা</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/VumiList" className="block py-2 hover:text-magenta mx-4 border-b">অন্যান্য
                                                                        ভূমি
                                                                        সেবা</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/VumiList" className="block py-2 text-magenta text-center text-xs">আরো
                                                                        সেবা</Link>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>

                                    </li>
                                    <li><Link className="text-semiblack font-medium hover:text-magenta" href="/VumisebaForm">ভূমিসেবা
                                          ফর্ম</Link></li>
                                    <li>
                                          <div
                                                onMouseEnter={e => mouseHoverHandler(e, "block")}
                                                onMouseLeave={e => mouseHoverHandler(e, "")}
                                                className="inline-block relative">

                                                <button
                                                      className="text-semiblack focus:outline-none font-medium lg:text-18
                                                                  text-center inline-flex items-center">
                                                      ডিজিটাল গার্ড ফাইল

                                                      <svg className="ml-2" width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.875 5.2125L2.26219 4.6875L12.7566 4.6875L13.125 5.19375L7.84969 10.3125H7.07437L1.875 5.2125Z" fill="#1E433D" />
                                                      </svg>
                                                </button>

                                                <div className="w-60 z-50 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow">
                                                      <ul className="py-2 text-semiblack pb-3 flex flex-col space-y-2" aria-labelledby="dropdownHoverButton1">
                                                            <li>
                                                                  <Link href="/Ainobidhi" className="block py-2 hover:text-magenta mx-4 border-b">আইন ও
                                                                        বিধি</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/Poripotro" className="block py-2 hover:text-magenta mx-4 border-b">পরিপত্র
                                                                        প্রজ্ঞাপন</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/Nitimala" className="block py-2 hover:text-magenta mx-4 border-b">নীতিমালা</Link>
                                                            </li>
                                                            <li>
                                                                  <Link href="/Manual" className="block py-2 hover:text-magenta mx-4 border-b">ম্যানুয়াল</Link>
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                    </li>
                              </ul>
                        </div>

                        {isShowSearch && <div className="" id="hidden_search2">
                              <div className="flex justify-center items-center lg:ml-[20rem] pb-3 pt-5 lg:pb-0 lg:pt-2">
                                    <form className="w-[80%] lg:w-[45%]" action="#">
                                          <div className="w-full flex border border-gray-300 bg-slate-50 drop-shadow-lg h-[40px] rounded-md">
                                                <div className="flex items-center w-[70%] bg-slate-50 pl-4 rounded-md">
                                                      <img className="w-[15px] h-[15px]" src="/images/magnifying_glass.svg" alt="images" />
                                                      <input className="placeholder:text-15 lg:placeholder:text-12 w-full border-none focus:ring-0 p-0 px-3 rounded-l-md" type="text" placeholder="অনুসন্ধান করুন" />
                                                </div>
                                                <button className="bg-primary w-[30%] text-slate-50 text-15 lg:text-12 rounded-r-md" type="submit">অনুসন্ধান</button>
                                          </div>
                                    </form>
                              </div>
                        </div>}

                  </nav >
            </div >
      );
}


"use client"
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserTie, faUsers } from "@fortawesome/free-solid-svg-icons";
import { cn } from '@/lib/utils';
import Link from 'next/link';


export default function Footer() {
      const [mobileMenu, setMobileMenu] = useState<boolean>(false)

      const mouseHoverHandler = (event: React.MouseEvent<HTMLDivElement>, type: string) => {
            const box: HTMLDivElement = event.currentTarget;
            box.children[1].style.display = type;
      };

      const mobileMenuHandel = (event: React.MouseEvent<HTMLButtonElement>, showHide: boolean) => {
            setMobileMenu(showHide)
      }

      return (<div>
            <div className="bg-primary h-[31px]"></div>
            <div className="bg-lightgreen">
                  <div className="lg:container lg:mx-auto flex flex-col lg:flex-row space-y-7 lg:space-y-0 justify-center lg:justify-normal pt-12 pb-2 px-5">
                        <div className="flex justify-around lg:justify-evenly lg:w-[40%]">
                              <div className="lg:flex lg:flex-col lg:space-y-2">
                                    <h3 className="text-14 lg:text-20 font-medium text-primary pb-2 lg:pb-0">গুরুত্বপূর্ণ লিঙ্ক</h3>
                                    <ul className="lg:flex lg:flex-col lg:space-y-2">
                                          <li className="flex items-center"><img src="/images/triangleright.svg" alt="images" /><a href="https://bangladesh.gov.bd/index.php" target="_blank" className="text-12 lg:text-16 font-medium">বাংলাদেশ জাতীয় তথ্য বাতায়ন</a></li>
                                          <li className="flex items-center"><img src="/images/triangleright.svg" alt="images" /><a href="https://minland.gov.bd/" target="_blank" className="text-12 lg:text-16 font-medium">ভূমি
                                                মন্ত্রণালয়</a></li>
                                          <li className="flex items-center"><img src="/images/triangleright.svg" alt="images" /><a href="http://www.pressinform.gov.bd/" target="_blank" className="text-12 lg:text-16 font-medium">তথ্য অধিদফতর (পিআইডি)</a></li>
                                          <li className="flex items-center"><img src="/images/triangleright.svg" alt="images" /><a href="https://www.grs.gov.bd/" target="_blank" className="text-12 lg:text-16 font-medium">অভিযোগ
                                                প্রতিকার ব্যবস্থা</a></li>
                                    </ul>
                              </div>
                              <div className="pt-8 lg:pt-10">
                                    <ul className="lg:flex lg:flex-col lg:space-y-2">
                                          <li className="flex items-center"><img src="/images/triangleright.svg" alt="images" /><Link href="/Nitimala" className="text-12 lg:text-16 font-medium">নীতিমালা</Link></li>
                                          <li className="flex items-center"><img src="/images/triangleright.svg" alt="images" /><Link href="/Faq" className="text-12 lg:text-16 font-medium">সাধারণ জিজ্ঞাসা</Link></li>
                                          <li className="flex items-center"><img src="/images/triangleright.svg" alt="images" /><Link href="/Contact" className="text-12 lg:text-16 font-medium">যোগাযোগ করুন</Link></li>
                                    </ul>
                              </div>
                        </div>
                        <div className="flex flex-col space-y-4 lg:w-[60%]">
                              <div className="flex justify-around lg:justify-around">
                                    <div className="flex flex-col lg:items-center space-y-1 lg:space-y-0">
                                          <h3 className="text-14 lg:text-20 text-semiblack font-medium">পরিকল্পনা ও বাস্তবায়নে</h3>
                                          <a href="http://lmap.minland.gov.bd/" target="_blank" className="w-[80%] lg:w-full"><img src="/images/ভূমি ব্যবস্থাপনা অটোমেশন প্রকল্প.svg" alt="images" /></a>
                                    </div>
                                    <div className="flex flex-col space-y-3 lg:items-center">
                                          <h3 className="text-15 lg:text-20 text-semiblack font-medium">সামাজিক যোগাযোগ</h3>
                                          <div className="flex space-x-3 lg:space-x-5 pl-2 lg:pl-0">
                                                <a href="https://www.facebook.com/MinlandGovBd">
                                                      <img className="w-[18px] h-[18px] lg:w-[34px] lg:h-[30px]" src="/images/Facebook.svg" alt="images" />
                                                </a>
                                                <a href="https://twitter.com/">
                                                      <img className="w-[18px] h-[18px] lg:w-[34px] lg:h-[30px]" src="/images/Twitter.svg" alt="images" />
                                                </a>
                                                <a href="https://www.instagram.com/">
                                                      <img className="w-[18px] h-[18px] lg:w-[34px] lg:h-[30px]" src="/images/instagram.svg" alt="images" />
                                                </a>
                                                <a href="https://www.youtube.com/@minland-gov-bd/videos">
                                                      <img className="w-[18px] h-[18px] lg:w-[34px] lg:h-[30px]" src="/images/Youtube.svg" alt="images" />
                                                </a>
                                          </div>
                                    </div>
                              </div>
                              <div className="flex flex-col space-y-2 lg:space-y-3 bg-slate-50 lg:bg-transparent">
                                    <h3 className="text-center lg:text-right text-14 lg:text-20">কারিগরি সহায়তায়</h3>
                                    <div className="flex justify-end items-center space-x-2 bg-cover w-full" style={{ backgroundImage: "url('/images/logo_back.svg')" }}>
                                          <div className="w-[21%] flex items-center justify-center mr-3"><a target="_blank" href="https://mysoftheaven.com/"><img className="w-[70%]" src="/images/mysoft_heaven_logo.png" alt="images" /></a></div>
                                          <div className="h-[21px] border-l border-primary" />
                                          <div className="w-[21%]"><a className="flex items-center justify-center" target="_blank" href="https://www.ba-systems.com/"><img className="w-[60%]" src="/images/logo-ba.webp" alt="images" /></a></div>
                                          <div className="h-[21px] border-l border-primary" />
                                          <div className="w-[21%]"><a className="flex items-center justify-center" target="_blank" href="http://www.olivineltd.com/"><img className="w-[40%]" src="/images/olvin_logo.jpg" alt="images" /></a></div>
                                          <div className="h-[21px] border-l border-primary" />
                                          <div className="w-[21%] ml-2"><a className="flex items-center justify-center" target="_blank" href="http://parkwaytec.com/"><img className="w-[60%]" src="/images/parkway_logo.png" alt="images" /></a></div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>


      );
}


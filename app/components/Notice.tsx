"use client"
import { cn } from "@/lib/utils";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const Notice = () => {

      const [isShow, setIsShow] = useState<boolean>(false)

      return (
            <div className="hidden absolute z-30 md:flex top-0 bottom-6 w-full overflow-hidden">
                  <div className={cn("w-[21%]", isShow ? '' : 'hidden')} id="notice2">
                        <div className="bg-primary flex items-center justify-center space-x-3">
                              <img src="/images/notice_icon.svg" alt="image" />
                              <p className="font-medium text-20 text-slate-50">নোটিশ</p>
                        </div>
                        <div className="p-3 bg-slate-50 overflow-y-scroll no-scrollbar h-full flex flex-col space-y-3 ">
                              <div className="flex justify-center space-x-5 border-b pb-8">
                                    <span className="text-primary"><i className="fa-solid fa-play" /></span>
                                    <p className="text-15 leading-5">মাননীয় প্রধানমন্ত্রী শেখ হাসিনা  জাতীয় ভূমি সম্মেলন এবং ভূমি মন্ত্রণালয়ের ৭টি উদ্যোগ উদ্বোধন করবেন।</p>
                              </div>
                              <div className="flex justify-center space-x-5 border-b pb-8">
                                    <span className="text-primary"><i className="fa-solid fa-play" /></span>
                                    <p className="text-15 leading-5">মাননীয় প্রধানমন্ত্রী শেখ হাসিনা  জাতীয় ভূমি সম্মেলন এবং ভূমি মন্ত্রণালয়ের ৭টি উদ্যোগ উদ্বোধন করবেন।</p>
                              </div>
                              <div className="flex justify-center space-x-5 border-b pb-8">
                                    <span className="text-primary"><i className="fa-solid fa-play" /></span>
                                    <p className="text-15 leading-5">মাননীয় প্রধানমন্ত্রী শেখ হাসিনা  জাতীয় ভূমি সম্মেলন এবং ভূমি মন্ত্রণালয়ের ৭টি উদ্যোগ উদ্বোধন করবেন।</p>
                              </div>
                              <div className="flex justify-center space-x-5 border-b pb-8">
                                    <span className="text-primary"><i className="fa-solid fa-play" /></span>
                                    <p className="text-15 leading-5">মাননীয় প্রধানমন্ত্রী শেখ হাসিনা  জাতীয় ভূমি সম্মেলন এবং ভূমি মন্ত্রণালয়ের ৭টি উদ্যোগ উদ্বোধন করবেন।</p>
                              </div>
                              <div className="flex justify-center space-x-5 border-b pb-8">
                                    <span className="text-primary"><i className="fa-solid fa-play" /></span>
                                    <p className="text-15 leading-5">মাননীয় প্রধানমন্ত্রী শেখ হাসিনা  জাতীয় ভূমি সম্মেলন এবং ভূমি মন্ত্রণালয়ের ৭টি উদ্যোগ উদ্বোধন করবেন।</p>
                              </div>
                              <div className="flex justify-center space-x-5 border-b pb-8">
                                    <span className="text-primary"><i className="fa-solid fa-play" /></span>
                                    <p className="text-15 leading-5">মাননীয় প্রধানমন্ত্রী শেখ হাসিনা  জাতীয় ভূমি সম্মেলন এবং ভূমি মন্ত্রণালয়ের ৭টি উদ্যোগ উদ্বোধন করবেন।</p>
                              </div>
                              <div className="flex justify-center space-x-5 border-b pb-8">
                                    <span className="text-primary"><i className="fa-solid fa-play" /></span>
                                    <p className="text-15 leading-5">মাননীয় প্রধানমন্ত্রী শেখ হাসিনা  জাতীয় ভূমি সম্মেলন এবং ভূমি মন্ত্রণালয়ের ৭টি উদ্যোগ উদ্বোধন করবেন।</p>
                              </div>
                              <div className="flex justify-center space-x-5 border-b pb-8">
                                    <span className="text-primary"><i className="fa-solid fa-play" /></span>
                                    <p className="text-15 leading-5">মাননীয় প্রধানমন্ত্রী শেখ হাসিনা  জাতীয় ভূমি সম্মেলন এবং ভূমি মন্ত্রণালয়ের ৭টি উদ্যোগ উদ্বোধন করবেন।</p>
                              </div>
                              <div className="flex justify-center space-x-5 border-b pb-8">
                                    <span className="text-primary"><i className="fa-solid fa-play" /></span>
                                    <p className="text-15 leading-5">মাননীয় প্রধানমন্ত্রী শেখ হাসিনা  জাতীয় ভূমি সম্মেলন এবং ভূমি মন্ত্রণালয়ের ৭টি উদ্যোগ উদ্বোধন করবেন।</p>
                              </div>
                              <div className="flex justify-center space-x-5 border-b pb-8">
                                    <a href="notice.php" className="font-semibold text-12 text-primary px-5 py-1">সব গুলো</a>
                              </div>
                        </div>
                        <div>
                              <a href="notice.php">সব গুলো</a>
                        </div>
                  </div>
                  
                  <button onClick={e => setIsShow(!isShow)} className="bg-slate-50 flex flex-col justify-center items-center h-full w-[3%] drop-shadow-lg" id="notice1">
                        <span className="text-primary font-bold" id="angle1">
                              <FontAwesomeIcon icon={isShow ? faAngleLeft : faAngleRight} />
                        </span>
                  </button>
            </div>

      )
}

export default Notice;
import MultiCarousel from "@/app/components/Carousel/MultiCarousel";

const VumiList = () => {
      return (
            <div>
                  <section className="bg-gradient-to-t from-white to-green-100 bg-cover w-full h-[110px] md:h-[135px]">
                        <div className="flex justify-center">
                              <h3 className="text-deepgreen text-24 md:text-32 pt-14">এক ঠিকানায় সরকারি ভূমিসেবা</h3>
                        </div>
                  </section>


                  <div>
                        <div className="flex justify-center">
                              <form className="md:w-[50%] " action="#">
                                    <div className="w-full flex border border-gray-300 bg-slate-50 drop-shadow-lg h-[60px] rounded-md">
                                          <div className="flex items-center w-[70%] bg-slate-50 pl-4 rounded-md">
                                                <img src="/images/magnifying_glass.svg" alt="images" />
                                                <input className="placeholder:text-15 md:placeholder:text-20 w-full border-none focus:ring-0 px-3 rounded-l-md" type="text" placeholder="অনুসন্ধান করুন" />
                                          </div>
                                          <button className="bg-primary w-[30%] text-slate-50 text-15 md:text-20 rounded-r-md" type="submit">অনুসন্ধান</button>
                                    </div>
                              </form>
                        </div>
                        <section className="px-2 md:px-12">
                              <div className="flex flex-wrap justify-center">
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/image_29.png" alt="images" />
                                                            <h3 className="text-15 md:text-20">ই-নামজারি</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">ই-নামজারি</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">কোন কারণে জমি হস্তান্তর হলে খতিয়ানে পুরোনো মালিকের নাম বাদ দিয়ে নতুন মালিকের নাম প্রতিস্থাপন করানোকে নামজারি বা মিউটেশন বলে। বাংলাদেশে ১৯৫০ সালের রাষ্ট্রীয় অধিগ্রহণ ও প্রজাসত্ত্ব আইন অনুযায়ী এর কার্যক্রম পরিচালিত হয়</p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=0">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="https://mutation.land.gov.bd/" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/vumi_unnoyon_kor.png" alt="images" />
                                                            <h3 className="text-15 md:text-20">ভূমি উন্নয়ন কর</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">ভূমি উন্নয়ন কর</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">অনলাইনে ভূমিকর প্রদান করতে ভূমির মালিককে প্রথমে জাতীয় পরিচয়পত্র, মুঠোফোন নম্বরসহ অন্যান্য তথ্য প্রদান করে নিবন্ধিত হতে হবে। একবার নিবন্ধিত হলে ওই ব্যক্তিকে ভবিষ্যতে আর নিবন্ধন করতে হবে না।</p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=1">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="https://ldtax.gov.bd/" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/ar_s_khotian.png" alt="images" />
                                                            <h3 className="text-15 md:text-20">আর এস খতিয়ান</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">আর এস খতিয়ান</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">এস আর খতিয়ান প্রাপ্ত করার জন্য আপনার একটি খতিয়ান আবেদন ফর্ম প্রাপ্ত করে নিতে হবে। ফর্মটি সঠিকভাবে পূরণ করতে হবে। আপনাকে আপনার জমি সংক্রান্ত বিস্তারিত তথ্য প্রদান করতে হবে, যেমন জমির পরিমান, অবস্থান, মালিক ইত্যাদি</p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=2">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="https://www.eporcha.gov.bd/" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/vumi_record_map.png" alt="images" />
                                                            <h3 className="text-15 md:text-20">মৌজা ম্যাপ</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">মৌজা ম্যাপ</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">মৌজা হচ্ছে রাজস্ব আদায়ের সর্বনিম্ন একক-এলাকা। মুঘল আমলে কোন পরগনা বা রাজস্ব-জেলার রাজস্ব আদায়ের একক হিসেবে শব্দটি ব্যাপকভাবে ব্যবহার&nbsp;করা&nbsp;হতো</p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=3">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="http://www.dlrs.gov.bd/site/page/767754cd-5340-4356-851f-210c944f5ba8/%E0%A6%AE%E0%A7%8C%E0%A6%9C%E0%A6%BE-%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AA-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AA%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/vumi-logo.png" alt="images" />
                                                            <h3 className="text-15 md:text-20">মার্ট ভূমি নকশা</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">মার্ট ভূমি নকশা</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">কত নম্বর দাগে আছে এই জমি এবং কোন মৌজায় খতিয়ান নম্বর কত আপনারা এখান থেকে সহজেই ডাউনলোড করে দেখতে পারবেন। আপনাকে প্রথমে অনলাইনে আবেদনের জন্য রেজিষ্ট্রেশন করতে হবে এই ওয়েবসাইট থেকে http://dtax.gov.bd/ ওয়েবসাইটে প্রবেশ করে নাগরিক কর্ণার এ ক্লিক করে রেজিষ্ট্রেশন করতে হবে।</p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=4">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="http://map.land.gov.bd/" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/vumi_rajosso_mamla.png" alt="images" />
                                                            <h3 className="text-15 md:text-20">ভূমি রাজস্ব মামলা</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">ভূমি রাজস্ব মামলা</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">ভূমি ব্যবস্থাপনার অভিলক্ষ্যকে সামনে রেখে একটি প্রযুক্তি নির্ভর আধুনিক ও টেকসই ভূমি রাজস্ব বিষয়ক বিচারিক ব্যবস্থা গড়ে তোলার লক্ষ্যেই অনলাইন শুনানি ব্যবস্থা স্থাপন করা হয়েছে। এর ফলে ঘরে বসেই ভূমি মামলার শুনানিতে অংশ নিতে পারবেন দেশের নাগরিকরা।</p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=5">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="https://case.gov.bd/" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/digital_land_record.png" alt="images" />
                                                            <h3 className="text-15 md:text-20">ডিজিটাল ল্যান্ড রেকর্ড</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">ডিজিটাল ল্যান্ড রেকর্ড</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">ভূমি ব্যবস্থাপনার অভিলক্ষ্যকে সামনে রেখে একটি প্রযুক্তি নির্ভর আধুনিক ও টেকসই ভূমি রাজস্ব বিষয়ক বিচারিক ব্যবস্থা গড়ে তোলার লক্ষ্যেই অনলাইন শুনানি ব্যবস্থা স্থাপন করা হয়েছে। এর ফলে ঘরে বসেই ভূমি মামলার শুনানিতে অংশ নিতে পারবেন দেশের নাগরিকরা।</p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=6">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href=" http://www.dlrs.gov.bd/" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/vumi_registration.png" alt="images" />
                                                            <h3 className="text-15 md:text-20">ভূমি রেজিস্ট্রেশন</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">ভূমি রেজিস্ট্রেশন</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">ভূমি ব্যবস্থাপনার অভিলক্ষ্যকে সামনে রেখে একটি প্রযুক্তি নির্ভর আধুনিক ও টেকসই ভূমি রাজস্ব বিষয়ক বিচারিক ব্যবস্থা গড়ে তোলার লক্ষ্যেই অনলাইন শুনানি ব্যবস্থা স্থাপন করা হয়েছে। এর ফলে ঘরে বসেই ভূমি মামলার শুনানিতে অংশ নিতে পারবেন দেশের নাগরিকরা।</p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=7">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="https://minland.gov.bd/site/page/771bf6f4-83d4-4005-a5cc-b60f28cb176b/nolink/%E0%A6%AD%E0%A7%82%E0%A6%AE%E0%A6%BF-%E0%A6%B0%E0%A7%87%E0%A6%9C%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B6%E0%A6%A8-%E0%A6%85%E0%A6%AB%E0%A6%BF%E0%A6%B8https://minland.gov.bd/site/page/771bf6f4-83d4-4005-a5cc-b60f28cb176b/nolink/%E0%A6%AD%E0%A7%82%E0%A6%AE%E0%A6%BF-%E0%A6%B0%E0%A7%87%E0%A6%9C%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B6%E0%A6%A8-%E0%A6%85%E0%A6%AB%E0%A6%BF%E0%A6%B8" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/p1.jpg" alt="images" />
                                                            <h3 className="text-15 md:text-20">জমি অধিগ্রহণ সম্পর্কিত</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">জমি অধিগ্রহণ সম্পর্কিত</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">ভূমি অধিগ্রহণ এমন একটি প্রক্রিয়া যার মাধ্যমে সরকার (রাজ্য বা ইউনিয়ন) অবকাঠামোগত উন্নয়ন, নগরায়ণ বা শিল্পায়নের উদ্দেশ্যে ব্যক্তিগত জমি অধিগ্রহণ করতে পারে। বিনিময়ে, সরকার বাজার মূল্য অনুসারে জমির মালিককে উপযুক্ত ক্ষতিপূরণ প্রদান করবে এবং ক্ষতিগ্রস্থ ভূমি মালিকদের পুনর্বাসন ও পুনর্বাসনের জন্য দায়ী হবে।</p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=8">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="https://minland.gov.bd/site/page/771bf6f4-83d4-4005-a5cc-b60f28cb176b/nolink/%E0%A6%AD%E0%A7%82%E0%A6%AE%E0%A6%BF-%E0%A6%B0%E0%A7%87%E0%A6%9C%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B6%E0%A6%A8-%E0%A6%85%E0%A6%AB%E0%A6%BF%E0%A6%B8https://minland.gov.bd/site/page/771bf6f4-83d4-4005-a5cc-b60f28cb176b/nolink/%E0%A6%AD%E0%A7%82%E0%A6%AE%E0%A6%BF-%E0%A6%B0%E0%A7%87%E0%A6%9C%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B6%E0%A6%A8-%E0%A6%85%E0%A6%AB%E0%A6%BF%E0%A6%B8" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/govt_logo.png" alt="images" />
                                                            <h3 className="text-15 md:text-20">লিজ সম্পত্তি</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">লিজ সম্পত্তি</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">সড়ক ও মহাসড়কের পার্শ্বের মালিকানাধীন সরকারি অব্যবহৃত জমি স্বল্প ও দীর্ঘমেয়াদে ব্যক্তি বা সামাজিক প্রতিষ্ঠানের আবেদনের প্রেক্ষিতে লিজ প্রদান করা হয়।ভূমি সহকারী কর্মকর্তা সরজমিনে তদন্ত ও রেকর্ডপত্র যাচাই অন্তে প্রতিবেদন দাখিল করেন। উপজেলা ভূমি অফিসের কানুনগোর মতামত গ্রহণের পর সহকারী কমিশনার (ভূমি) কর্তৃক পরীক্ষান্তে মতামতসহ প্রস্তাব উপজেলা নির্বাহী অফিসার বরাবর প্রেরণ। উপজেলা নির্বাহী অফিসার প্রাপ্ত প্রস্তাব পরীক্ষান্তে মতামতসহ অতিরিক্ত জেলা প্রশাসক (রাজস্ব) বরাবর প্রেরণ করেন। অতিরিক্ত জেলা প্রশাসক (রাজস্ব) যাচাই করে জেলা প্রশাসকের নিকট উপস্থাপন করেন। জেলা প্রশাসক অনুমোদন করে সহকারী কমিশনার (ভূমি) বরাবর প্রেরণ করেন। অতঃপর নির্ধারিত হারে লিজমানি আদায়পূর্বক সরজমিনে লিজগ্রহীতাকে জমি বুঝিয়ে দেওয়া হয়।</p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=9">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="#" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/govt_logo.png" alt="images" />
                                                            <h3 className="text-15 md:text-20">অনলাইন শুনানি</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">অনলাইন শুনানি</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">
                                                                  নিজের মামলার তথ্য প্রদান এবং শুনানির জন্য নির্দিষ্ট ফরম পূরণ করে মামলা সম্পন্ন করতে।
                                                                  অনলাইন শুনানির মাধ্যমে নিম্নলিখিত কয়েকটি পদ্ধতি ব্যবহার করা হয়:
                                                                  অ্যাপ্লিকেশন ফরম পূরণ: প্রথমে মামলার অ্যাপ্লিকেশন ফরম পূরণ করতে হবে। এই ফরমে মামলার বিষয়, প্রতিবেদনকারী ও বিবাদীর তথ্য, মামলার পরিচালকের তথ্য, শুনানির অবধি ইত্যাদি তথ্য প্রদান করতে হবে।
                                                                  সংশ্লিষ্ট কাগজপত্র সংযোজন: অ্যাপ্লিকেশন ফরমের সাথে নিজের মামলার সংশ্লিষ্ট কাগজপত্র সংযুক্ত করতে হবে, যেমন প্রমাণপত্র, দলিল, সংশ্লিষ্ট প্রমাণপত্র ইত্যাদি।
                                                                  সম্পদ তথ্য প্রদান: মামলা শুনানির জন্য সম্পদ তথ্য প্রদান করতে হবে। এটি মামলার সম্পদের মানি কর, সম্পত্তির বিবরণ, অবস্থান ইত্যাদি তথ্য অন্তর্ভুক্ত করে।
                                                                  পেমেন্ট প্রদান: শুনানি সম্পন্ন করতে হলে সঠিক ফি পরিশোধ করতে হবে। অনলাইন পেমেন্ট গেটওয়ে বা অন্যান্য পেমেন্ট প্রক্রিয়াগুলি ব্যবহার করে পেমেন্ট করতে হবে।
                                                                  মামলার পর্যালোচনা এবং সমাধান: সরকারি অফিস বা ন্যায়িক প্রতিষ্ঠান অনলাইন শুনানি সম্পন্ন করার পর মামলাটি পর্যালোচনা করে এবং সমাধান করে। প্রয়োজনে সাক্ষাত্কার অনুষ্ঠানে অংশ নেওয়া হতে পারে।
                                                            </p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=10">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="http://oh.lams.gov.bd/" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="group h-[36.66vh]  w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                          <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                                <div className="absolute inset-0 flex justify-center items-center">
                                                      <div className="flex flex-col space-y-3 justify-center items-center">
                                                            <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="/images/govt_logo.png" alt="images" />
                                                            <h3 className="text-15 md:text-20">ভূমি তথ্য ব্যাংক</h3>
                                                      </div>
                                                </div>
                                                <div className="absolute inset-0 h-full w-full rounded-lg bg-primary px-3 text-center text-slate-900 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                                                      <div className="flex min-h-full w-full flex-col items-center justify-center space-y-2">
                                                            <div className="flex flex-col md:flex-row items-center justify-center space-x-3">
                                                                  <h3 className="font-bold md:text-20 text-slate-50">ভূমি তথ্য ব্যাংক</h3>
                                                            </div>
                                                            <p className="text-14 h-[85px] w-full overflow-hidden text-slate-50">
                                                                  ভূমি তথ্য ব্যাংক হচ্ছে বাংলাদেশে জমি বা জায়গা সংক্রান্ত সমস্যার জটিলতা অবসান ঘটাতে সব ভূমি মালিকের তথ্য নিয়ে ভূমি তথ্য ব্যাংক চালু হয়েছে।
                                                                  এই ব্যাংকে দেশের সকল ভূমি মালিকদের তথ্য সংরক্ষিত থাকবে। ফলে জমি নিয়ে জালিয়াতি, দুর্নীতি কিংবা বিভিন্ন রকম হয়রানির মত অপকর্ম বন্ধ হয়ে যাবে। কেননা এই ব্যাংক থেকে যে কেউ ভূমি তথ্য জেনে নিতে পারবে। ফলে জালিয়াতির কোন সুযোগ থাকবে না।
                                                                  যে কোন নাগরিক দেশের যে কোন স্থান থেকে তার জমি সংক্রান্ত তথ্য যাচাই বা সংগ্রহ করতে পারবে। আপনি এখন ভূমি অফিসে না গিয়েও ভূমি সংক্রান্ত সকল সেবা অনলাইনের মাধ্যমে ঘরে বসেই পেতে পারেন।
                                                            </p>
                                                            <div className="pt-3 flex items-center space-x-3">
                                                                  <a className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=11">বিস্তারিত</a>
                                                                  <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="http://lidb.lams.gov.bd/" target="_blank">ওয়েবসাইট</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </section>
                  </div>


                  <section className="py-12">
                        <div className="border-2 border-b-4 p-5 bg-slate-50 drop-shadow-xl">
                              <div className="flex justify-center items-center">
                                    <h3 className="text-24 leading-8 py-8 text-secondary">ভূমি সেবা অ্যাপ ও সফটওয়্যার</h3>
                              </div>
                              <div className="pb-7 md:px-32">
                                    <div className="main-content relative ">
                                          <MultiCarousel />
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      )
}

export default VumiList;
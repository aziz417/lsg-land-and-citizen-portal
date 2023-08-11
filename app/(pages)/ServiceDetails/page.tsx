const ServiceDetails = () => {
      return (
            <div>
                  <div className="flex pt-12 md:pt-16 mb-3">
                        <div className="md:w-[75%]">
                              <div className="pl-8 pr-6 md:pl-16">
                                    <h3 className="text-24 md:text-36 text-secondary font-medium">ভূমি রাজস্ব মামলা</h3>
                              </div>
                              <div className="mt-2 pl-[35px] md:pl-[67px]">
                                    <hr className="bg-deepgreen h-[3px] w-[60%]" />
                              </div>
                              <div className="flex items-center space-x-3 mt-4 pl-8 pr-6 md:pl-16">
                                    <i className="fa-solid fa-book-open-reader text-24 text-deepgreen" />
                                    <p className="text-24 text-secondary font-medium">সেবা প্রদান পদ্ধতি</p>
                              </div>
                              <div className="mt-2 pl-8 pr-6 md:pl-16">
                                    <p className="text-15 md:text-18 font-medium leading-6">ভূমি রাজস্ব মামলা ম্যানেজমেন্ট সিস্টেম হলো একটি অনলাইন পোর্টাল যা ভূমি মন্ত্রণালয়ের একটি মামলা ব্যবস্থাপনা সিষ্টেম, এটি দেশের ৬১টি জেলায় চালু করা হয়েছে।ভূমি রাজস্ব মামলা ম্যানেজমেন্ট সিস্টেমে ভূমি সম্পর্কিত সকল  মামলার কাযর্ক্রম পরিচালিত হয়ে থাকে। তথাকথিত নিয়ম অনুসারে মন্ত্রণালয় থেকে শুরু করে উপজেলা অফিস পর্যন্ত বিভিন্ন ভূমি অফিস কত্রিক দেওয়ানী ও রাজস্ব মামলা সমূহ ম্যনুয়ালি সংরক্ষন করা হত। নথী সমূহ সংরক্ষিত হত হার্ড কপি আকারে যার ফলে সঠিক ভাবে রক্ষণাবেক্ষণ করা কঠিন ছিল যার ফলে নাগরিক ভোগান্তির শিকার হত, দায়িত্বরত কর্মকর্তা গণ সঠিক ভাবে মামলা পর্যবেক্ষণ এ ব্যহত হতেন। এই সকল নির্ভরতার ফলে মামলা নিষ্পত্তির সম্ভাবনা দিন দিন কমে আসছে। এই সকল সমস্যার সমাধান কে উপলক্ষ্য করে ভূমি মন্ত্রনালয়ের নির্দেশনা অনুশারে চালু করা হয় ভূমি রাজস্ব মামলা ম্যানেজমেন্ট সিস্টেম। এই সিস্টেমটির মাধ্যমে মামলা দ্রুত নিষ্পত্তি হবে, বাড়বে সচ্ছতা । সাধারণ নাগরিক ক্যলেন্ডারের মাধ্যমে জানতে পারবে পরবর্তী হেয়ারিঙ্গের তারিখ।</p>
                              </div>
                        </div>
                        <div className="px-4 py-7 pb-52 border border-deepgreen rounded-xl h-[210px] hidden md:block mr-12 w-[20%]">
                              <div className="flex justify-center">
                                    <img src="/images/vumi_rajosso_mamla.png" className="w-[4vw] h-auto" alt="images" />
                              </div>
                              <div className="my-4">
                                    <a href="https://case.gov.bd/" target="_blank" className="flex items-center justify-center space-x-3 px-6 py-2 rounded-md border border-deepgreen hover:bg-red-600 bg-primary" rel="noreferrer noopener">
                                          <i className="fa-solid fa-handshake-angle text-white text-24" />
                                          <p className="text-white text-20 font-medium">সেবা নিন</p>
                                    </a>
                              </div>
                              <div className="my-2">
                                    <a href target="_blank" className="flex items-center justify-center space-x-10 px-6 py-2 rounded-md border border-deepgreen hover:bg-red-600 bg-primary" rel="noreferrer noopener">
                                          <i className="fa-solid fa-mobile-screen-button text-white text-24" />
                                          <p className="text-white text-20 font-medium">অ্যাপ</p>
                                    </a>
                              </div>
                        </div>
                  </div>
                  <div className="container mx-auto my-3 px-8">
                        <div className="border border-[#7ECBA1] my-6 p-4 md:p-9 rounded-xl">
                              <div className="flex items-center space-x-3">
                                    <i className="fa-solid fa-book-open-reader text-24 text-deepgreen" />
                                    <p className="text-18 md:text-20 text-secondary font-semibold">প্রয়োজনীয় কাগজপত্র</p>
                              </div>
                              <div className="mt-2">
                                    <p className="pb-2">জাতীয় পরিচয়পত্র</p>{/* this */}
                                    <p className="pb-2" />{/* this */}
                              </div>
                        </div>
                        <div className="border border-[#7ECBA1] my-6 p-4 md:p-9 rounded-xl">
                              <div className="flex items-center space-x-3">
                                    <i className="fa-solid fa-book-open-reader text-24 text-deepgreen" />
                                    <p className="text-18 md:text-20 text-secondary font-semibold">সেবা প্রদানে প্রয়োজনীয় লিংক</p>
                              </div>
                              <div className="mt-2">
                                    <div className="pl-10 flex flex-col space-y-4">
                                          {/* this */}
                                          <a href="www.case.gov.bd" target="_blank" className="flex space-x-3 hover:text-primary">
                                                <p>www.case.gov.bd</p>
                                          </a>
                                          <a href="www.case.gov.bd" target="_blank" className="flex space-x-3 hover:text-primary">
                                                <p>www.case.gov.bd</p>
                                          </a>
                                          <a href="www.case.gov.bd" target="_blank" className="flex space-x-3 hover:text-primary">
                                                <p>www.case.gov.bd</p>
                                          </a>
                                          <a href="www.case.gov.bd" target="_blank" className="flex space-x-3 hover:text-primary">
                                                <p>www.case.gov.bd</p>
                                          </a>
                                    </div>
                              </div>
                        </div>
                       
                  </div>
                  <section className="px-2 md:px-12">
                        <div className="flex flex-wrap justify-center">
                              <div className="group h-[28vh] lg:h-[35vh]  w-[80%] md:w-[17%] [perspective:1000px] m-4">
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
                              <div className="group h-[28vh] lg:h-[35vh]  w-[80%] md:w-[17%] [perspective:1000px] m-4">
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
                              <div className="group h-[28vh] lg:h-[35vh]  w-[80%] md:w-[17%] [perspective:1000px] m-4">
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
                              <div className="group h-[28vh] lg:h-[35vh]  w-[80%] md:w-[17%] [perspective:1000px] m-4">
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
                              <div className="group h-[28vh] lg:h-[35vh]  w-[80%] md:w-[17%] [perspective:1000px] m-4">
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
                        </div>
                  </section>
                  <section className="py-12">
                        <div className="p-5 bg-slate-50 drop-shadow-xl">
                              <div className="flex justify-center items-center">
                                    <h3 className="text-24 leading-8 text-secondary">ভূমিসেবা অ্যাপ ও সফটওয়্যার</h3>
                              </div>
                              <div className="pb-7 md:px-16">
                                    {/* owl carosol 2 */}
                                    <div className="main-content2 relative ">
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>

      )
}

export default ServiceDetails;
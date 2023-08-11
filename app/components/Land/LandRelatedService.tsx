import Link from "next/link";
import LinkBtn from "../Buttons/LinkBtn";
import Title from "../Title";

const LandRelatedService = () => {
      return (
            <div>
                  <div className="flex justify-center items-center pt-4 pb-5 md:pt-14 md:pb-12">
                        <Title title="ভূমি সংক্রান্ত সেবা" cls="text-5xl text-primary" />
                  </div>

                  <section className="px-2 md:px-12">
                        <div className="flex flex-wrap justify-center">
                              <div className="group h-[25.66vh] lg:h-[35.66vh] w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                    <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                          <div className="absolute inset-0 flex justify-center items-center">
                                                <div className="flex flex-col space-y-3 justify-center items-center">
                                                      <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="./images/image_29.png" alt="images" />
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
                                                            <Link className="text-primary bg-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="service.php?id=0">বিস্তারিত</Link>
                                                            <a className="text-slate-50 border border-slate-50 p-1 md:px-3 md:py-1 rounded-md text-14" href="https://mutation.land.gov.bd/" target="_blank">ওয়েবসাইট</a>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="group h-[25.66vh] lg:h-[35.66vh] w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                    <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                          <div className="absolute inset-0 flex justify-center items-center">
                                                <div className="flex flex-col space-y-3 justify-center items-center">
                                                      <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="./images/vumi_unnoyon_kor.png" alt="images" />
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
                              <div className="group h-[25.66vh] lg:h-[35.66vh] w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                    <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                          <div className="absolute inset-0 flex justify-center items-center">
                                                <div className="flex flex-col space-y-3 justify-center items-center">
                                                      <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="./images/ar_s_khotian.png" alt="images" />
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
                              <div className="group h-[25.66vh] lg:h-[35.66vh] w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                    <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                          <div className="absolute inset-0 flex justify-center items-center">
                                                <div className="flex flex-col space-y-3 justify-center items-center">
                                                      <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="./images/vumi_record_map.png" alt="images" />
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
                              <div className="group h-[25.66vh] lg:h-[35.66vh] w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                    <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                          <div className="absolute inset-0 flex justify-center items-center">
                                                <div className="flex flex-col space-y-3 justify-center items-center">
                                                      <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="./images/vumi-logo.png" alt="images" />
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
                              <div className="group h-[25.66vh] lg:h-[35.66vh] w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                    <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                          <div className="absolute inset-0 flex justify-center items-center">
                                                <div className="flex flex-col space-y-3 justify-center items-center">
                                                      <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="./images/vumi_rajosso_mamla.png" alt="images" />
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
                              <div className="group h-[25.66vh] lg:h-[35.66vh] w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                    <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                          <div className="absolute inset-0 flex justify-center items-center">
                                                <div className="flex flex-col space-y-3 justify-center items-center">
                                                      <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="./images/digital_land_record.png" alt="images" />
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
                              <div className="group h-[25.66vh] lg:h-[35.66vh] w-[80%] md:w-[22%] [perspective:1000px] m-4">
                                    <div className="relative h-full w-full rounded-lg shadow-lg transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] active:[transform:rotateY(180deg)] border border-primary hover:border-red-400">
                                          <div className="absolute inset-0 flex justify-center items-center">
                                                <div className="flex flex-col space-y-3 justify-center items-center">
                                                      <img className="shadow-black/40 w-[25%] lg:w-[50%] rounded-xl" src="./images/vumi_registration.png" alt="images" />
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
                        </div>
                  </section>

                  <div className="flex justify-center items-center pt-6 pb-8 md:pt-10 md:pb-16">
                        <LinkBtn href="#" title="আরও সেবা" cls="" />
                  </div>
            </div>

      )
}

export default LandRelatedService;
import LinkBtn from "../Buttons/LinkBtn";
import Title from "../Title";

const LandOfficeInfo = () => {
      return (
            <div>
                  <div className="bg-primary h-[31px]"></div>
                  <section className="bg-lightgreen">
                        <div>
                              <div className="flex justify-center items-center py-5 md:py-12">
                                    <Title title="বাংলাদেশে ভূমি অফিসের তথ্য" cls="font-medium leading-7 text-24 md:text-32 text-secondary" />
                              </div>
                              <div className="px-5 md:px-20 flex flex-wrap justify-center md:justify-around">
                                    <div className="w-[33%] md:w-[15%] bg-slate-50 flex flex-col justify-center items-center py-5 md:py-8 rounded-md drop-shadow-xl m-2">
                                          <h3 className="font-bold text-secondary text-20 md:text-40">২৫১</h3>
                                          <p className="font-medium text-gray1 text-14 md:text-16">মন্ত্রণালয়</p>
                                    </div>
                                    <div className="w-[33%] md:w-[15%] bg-slate-50 flex flex-col justify-center items-center py-5 md:py-8 rounded-md drop-shadow-xl m-2">
                                          <h3 className="font-bold text-secondary text-20 md:text-40">২৫১</h3>
                                          <p className="font-medium text-gray1 text-14 md:text-16">দপ্তরখানা</p>
                                    </div>
                                    <div className="w-[33%] md:w-[15%] bg-slate-50 flex flex-col justify-center items-center py-5 md:py-8 rounded-md drop-shadow-xl m-2">
                                          <h3 className="font-bold text-secondary text-20 md:text-40">২১</h3>
                                          <p className="font-medium text-gray1 text-14 md:text-16">বিভাগীয়</p>
                                    </div>
                                    <div className="w-[33%] md:w-[15%] bg-slate-50 flex flex-col justify-center items-center py-5 md:py-8 rounded-md drop-shadow-xl m-2">
                                          <h3 className="font-bold text-secondary text-20 md:text-40">৪১</h3>
                                          <p className="font-medium text-gray1 text-14 md:text-16">জেলা</p>
                                    </div>
                                    <div className="w-[33%] md:w-[15%] bg-slate-50 flex flex-col justify-center items-center py-5 md:py-8 rounded-md drop-shadow-xl m-2">
                                          <h3 className="font-bold text-secondary text-20 md:text-40">৪৯৫</h3>
                                          <p className="font-medium text-gray1 text-14 md:text-16">উপজেলা</p>
                                    </div>
                                    <div className="w-[33%] md:w-[15%] bg-slate-50 flex flex-col justify-center items-center py-5 md:py-8 rounded-md drop-shadow-xl m-2">
                                          <h3 className="font-bold text-secondary text-20 md:text-40">৬৫৪১</h3>
                                          <p className="font-medium text-gray1 text-14 md:text-16">ইউনিয়ন</p>
                                    </div>
                              </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row px-5 md:px-20 md:pt-12">
                              <div className="max-w-3xl pt-12 md:pt-0">
                                    <img src="/images/bangladesh_district.png" alt="images" />
                              </div>
                              <div>
                                    <div className="flex flex-col items-center py-5 md:pt-8 space-y-3 md:space-y-5">
                                          <h3 className="font-medium text-20 md:text-24 leading-5">তথ্যচিত্র (ভূমি সংক্রান্ত সেবা আবেদন)</h3>
                                          <p className="font-medium text-14 md:text-16 leading-5">সমগ্র বাংলাদেশের বিগত ৩০ দিনের</p>
                                    </div>
                                    <div className="flex flex-wrap justify-center h-[300px] overflow-y-scroll no-scrollbar">
                                          <div className="bg-slate-50 rounded-md drop-shadow-lg w-[90%] m-1">
                                                <div className="flex items-center py-5 px-7">
                                                      <div className="flex items-center space-x-4 w-[60%]">
                                                            <img src="/images/green_circle.svg" alt="images" />
                                                            <h3 className="font-medium text-16 md:text-24">ঢাকা</h3>
                                                      </div>
                                                      <p className="font-medium text-15 md:text-20">৩,০৬,৯১৭</p>
                                                </div>
                                          </div>
                                          <div className="bg-slate-50 rounded-md drop-shadow-lg w-[90%] m-1">
                                                <div className="flex items-center py-5 px-7">
                                                      <div className="flex items-center space-x-4 w-[60%]">
                                                            <img src="/images/green_circle.svg" alt="images" />
                                                            <h3 className="font-medium text-16 md:text-24">সিলেট</h3>
                                                      </div>
                                                      <p className="font-medium text-15 md:text-20">৩,০৬,৯১৭</p>
                                                </div>
                                          </div>
                                          <div className="bg-slate-50 rounded-md drop-shadow-lg w-[90%] m-1">
                                                <div className="flex items-center py-5 px-7">
                                                      <div className="flex items-center space-x-4 w-[60%]">
                                                            <img src="/images/green_circle.svg" alt="images" />
                                                            <h3 className="font-medium text-16 md:text-24">রাজশাহী</h3>
                                                      </div>
                                                      <p className="font-medium text-15 md:text-20">৩,০৬,৯১৭</p>
                                                </div>
                                          </div>
                                          <div className="bg-slate-50 rounded-md drop-shadow-lg w-[90%] m-1">
                                                <div className="flex items-center py-5 px-7">
                                                      <div className="flex items-center space-x-4 w-[60%]">
                                                            <img src="/images/green_circle.svg" alt="images" />
                                                            <h3 className="font-medium text-16 md:text-24">ময়মনসিংহ</h3>
                                                      </div>
                                                      <p className="font-medium text-15 md:text-20">৩,০৬,৯১৭</p>
                                                </div>
                                          </div>
                                          <div className="bg-slate-50 rounded-md drop-shadow-lg w-[90%] m-1">
                                                <div className="flex items-center py-5 px-7">
                                                      <div className="flex items-center space-x-4 w-[60%]">
                                                            <img src="/images/green_circle.svg" alt="images" />
                                                            <h3 className="font-medium text-16 md:text-24">চট্টগ্রাম</h3>
                                                      </div>
                                                      <p className="font-medium text-15 md:text-20">৩,০৬,৯১৭</p>
                                                </div>
                                          </div>
                                          <div className="bg-slate-50 rounded-md drop-shadow-lg w-[90%] m-1">
                                                <div className="flex items-center py-5 px-7">
                                                      <div className="flex items-center space-x-4 w-[60%]">
                                                            <img src="/images/green_circle.svg" alt="images" />
                                                            <h3 className="font-medium text-16 md:text-24">রংপুর</h3>
                                                      </div>
                                                      <p className="font-medium text-15 md:text-20">৩,০৬,৯১৭</p>
                                                </div>
                                          </div>
                                          <div className="bg-slate-50 rounded-md drop-shadow-lg w-[90%] m-1">
                                                <div className="flex items-center py-5 px-7">
                                                      <div className="flex items-center space-x-4 w-[60%]">
                                                            <img src="/images/green_circle.svg" alt="images" />
                                                            <h3 className="font-medium text-16 md:text-24">বরিশাল</h3>
                                                      </div>
                                                      <p className="font-medium text-15 md:text-20">৩,০৬,৯১৭</p>
                                                </div>
                                          </div>
                                          <div className="bg-slate-50 rounded-md drop-shadow-lg w-[90%] m-1">
                                                <div className="flex items-center py-5 px-7">
                                                      <div className="flex items-center space-x-4 w-[60%]">
                                                            <img src="/images/green_circle.svg" alt="images" />
                                                            <h3 className="font-medium text-16 md:text-24">খুলনা</h3>
                                                      </div>
                                                      <p className="font-medium text-15 md:text-20">৩,০৬,৯১৭</p>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <img className="md:-mt-24" src="/images/Sithi_soudho_1.png" alt="images" />
                  </section>
                  <section className="bg-primary flex py-10 justify-center">
                        <div className="w-[80%] flex flex-col md:flex-row items-center space-y-5 md:space-y-0 md:justify-around">
                              <div className="flex space-x-5 items-center">
                                    <img className="w-[50px] h-[50px] md:w-[65px] md:h-[65px]" src="/images/FaGlobeAmericas.svg" alt />
                                    <div className="flex flex-col justify-center items-center">
                                          <h3 className="text-slate-50 font-medium text-16 md:text-24">মোট ভিজিটর</h3>
                                          <h3 className="text-slate-50 font-semibold text-20 md:text-32">৪৩৬৫৮৭</h3>
                                    </div>
                              </div>
                              <div className="flex space-x-5 items-center">
                                    <img className="w-[50px] h-[50px] md:w-[65px] md:h-[65px]" src="/images/FaUsers.svg" alt />
                                    <div className="flex flex-col justify-center items-center">
                                          <h3 className="text-slate-50 font-medium text-16 md:text-24">মোট সেবা গ্রহিতা</h3>
                                          <h3 className="text-slate-50 font-semibold text-20 md:text-32">৬৫৮৭</h3>
                                    </div>
                              </div>
                              <div className="flex space-x-5 items-center">
                                    <img className="w-[50px] h-[50px] md:w-[65px] md:h-[65px]" src="/images/FaIdCardAlt.svg" alt />
                                    <div className="flex flex-col justify-center items-center">
                                          <h3 className="text-slate-50 font-medium text-16 md:text-24">আজকের সেবা গ্রহীত</h3>
                                          <h3 className="text-slate-50 font-semibold text-20 md:text-32">৪৩৬৭</h3>
                                    </div>
                              </div>
                        </div>
                  </section>

            </div>

      )
}

export default LandOfficeInfo;
import LinkBtn from "../Buttons/LinkBtn";
import MultiCarousel from "../Carousel/MultiCarousel";
import Title from "../Title";

const LandRelatedInfo = () => {
      return (
            <section className="py-10 md:pt-16 md:pb-20">
                  <div className="border-2 border-b-4 p-5 bg-slate-50 drop-shadow-xl">
                        <div className="flex justify-center items-center pb-1 md:pb-12">
                              <h3 className="text-24 leading-8 text-secondary">ভূমি সংক্রান্ত তথ্য যাচাই করন</h3>
                        </div>
                        <div className="pb-7 md:px-16">
                              <MultiCarousel />

                              {/* owl carosol 1 */}
                              {/* <div className="main-content relative ">
                                    <div id="owl-demo" className="owl-carousel owl-theme px-12 md:px-20 pt-6">
                                          <div className="item bg-slate-50 border rounded-md group">
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
                                          <div className="item bg-slate-50 border rounded-md group">
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
                                          <div className="item bg-slate-50 border rounded-md group">
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
                                          <div className="item bg-slate-50 border rounded-md group">
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
                                    </div>
                                    <div className="owl-theme">
                                          <div className="owl-controls">
                                                <div className="custom-nav owl-nav" />
                                          </div>
                                    </div>
                              </div> */}

                        </div>
                  </div>
            </section>


      )
}

export default LandRelatedInfo;
import AccrodianCustomItem from "@/app/components/AccrodianCustomItem";

const Faq = () => {

      const faqs = [
            {
                  question: "রেজিস্ট্রেশন ব্যতীত সেবার আবেদন করা যাবে কি না?",
                  answer: "ভূমি সেবার আবেদন করতে হলে মোবাইল নম্বর ব্যবহার করে রেজিস্ট্রেশন করতে হবে। রেজিস্ট্রেশনের সময় প্রোফাইলে যেসকল তথ্য প্রদান করা হবে পরবর্তীতে সেবার আবেদন ফরমে সেইসব তথ্য পুনরায় দেওয়ার প্রয়োজন হবে না।"
            },
      ]
      return (
            <div>
                  <section className="px-5 lg:px-16 py-6 lg:py-5">
                        <div className="flex justify-center items-center space-x-3 pb-3 lg:pb-2">
                              <span className="text-20 lg:text-32 text-secondary"><i className="fa-solid fa-circle-question" /></span>
                              <h3 className="text-secondary text-20 lg:text-32">জিজ্ঞাসিত প্রশ্নাবলী</h3>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:space-x-6 my-7">
                              <div className="lg:w-[70%] border border-primary rounded-md px-2 lg:px-8 py-2 mb-5 lg:mb-0">
                                    <div className="flex justify-between items-center">
                                          <div className="w-[65%] lg:w-[75%]">
                                                <div className="flex items-center pl-2 lg:pl-6">
                                                      <i className="fa-solid fa-magnifying-glass text-primary" />
                                                      <div>
                                                            <input type="text" className="w-[68%] lg:w-full border-none focus:border-none focus:ring-0 placeholder:text-14" placeholder="অনুসন্ধান করুন" />
                                                      </div>
                                                </div>
                                                <hr className="w-[75%] lg:w-full" />
                                          </div>
                                          <div>
                                                <p className="text-primary text-14">মোট প্রশ্ন ৮৬২ টি </p>
                                          </div>
                                    </div>
                                    <div className="mt-5">

                                          {faqs.map((faq, index) => (
                                                <AccrodianCustomItem key={index} {...faq} />
                                          ))}

                                          <div className="mt-4 pt-3">
                                                <div className="flex justify-center lg:justify-end space-x-3 lg:space-x-8 items-center">
                                                      <div className="flex items-center space-x-2">
                                                            <p className="text-12 text-deepgreen">সর্বমোট পাতা </p>
                                                            <li className="list-none">
                                                                  <button id="dropdownHoverButtonPagenationList" data-dropdown-toggle="dropdownHoverPagenate" data-dropdown-trigger="hover" className="focus:outline-none font-medium  text-center inline-flex items-center text-14 text-deepgreen" type="button"> 10 <svg className="ml-2" width={20} height={20} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M1.875 5.2125L2.26219 4.6875L12.7566 4.6875L13.125 5.19375L7.84969 10.3125H7.07437L1.875 5.2125Z" fill="#1E433D" /></svg></button>
                                                                  {/* Dropdown menu */}
                                                                  <div id="dropdownHoverPagenate" className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow" data-popper-placement="top" style={{ position: 'absolute', inset: 'auto auto 0px 0px', margin: 0, transform: 'translate3d(614.667px, 396px, 0px)' }} data-popper-reference-hidden data-popper-escaped>
                                                                        <ul className="py-2 text-semiblack text-sm pb-3 flex flex-col space-y-2" aria-labelledby="dropdownHoverButtonPagenationList">
                                                                              <li>
                                                                                    <a href="#" className="block  hover:text-magenta mx-3">০২</a>
                                                                              </li>
                                                                              <li>
                                                                                    <a href="#" className="block  hover:text-magenta mx-3">০৩</a>
                                                                              </li>
                                                                              <li>
                                                                                    <a href="#" className="block  hover:text-magenta mx-3">০৪</a>
                                                                              </li>
                                                                              <li>
                                                                                    <a href="#" className="block  hover:text-magenta mx-3">০৫</a>
                                                                              </li>
                                                                        </ul>
                                                                  </div>
                                                            </li>
                                                      </div>
                                                      <div>
                                                            <p className="text-12 text-deepgreen">পৃষ্ঠা নং- ১-৫</p>
                                                      </div>
                                                      <div className="flex items-center space-x-2">
                                                            <img src="/images/FaCaretUpDuboleLeft.svg" alt="images" className="cursor-pointer" />
                                                            <img src="/images/FaCaretUpLeft.svg" alt="images" className="cursor-pointer" />
                                                            <img src="/images/FaCaretUpRight.svg" alt="images" className="cursor-pointer" />
                                                            <img src="/images/FaCaretUpDuboleRight.svg" alt="images" className="cursor-pointer" />
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                              <div className="lg:w-[30%] mb-5 lg:mb-0">
                                    <div>
                                          <div className="flex justify-center">
                                                <div className="border border-primary bg-white  rounded-md w-full">
                                                      <div className="bg-[#890000] rounded-t py-4">
                                                            <p className="text-white text-center text-18">আপনার কোন জিজ্ঞাসা রয়েছে?</p>
                                                      </div>
                                                      <div className="px-4 py-3">
                                                            <form>
                                                                  <div className="mb-3">
                                                                        <fieldset className="pl-3 border border-primary rounded">
                                                                              <legend className="px-2 text-primary text-12">আপনার নাম *
                                                                              </legend>
                                                                              <div className="flex items-center">
                                                                                    <input type="text" className="w-[90%] border-none focus:border-none focus:ring-0 placeholder:text-15" placeholder="আপনার নাম" />
                                                                              </div>
                                                                        </fieldset>
                                                                  </div>
                                                                  <div className="mb-3">
                                                                        <fieldset className="pl-3 border border-primary rounded">
                                                                              <legend className="px-2 text-primary text-12">মোবাইল নম্বর **
                                                                              </legend>
                                                                              <div className="flex items-center">
                                                                                    <input type="text" className="w-[90%] border-none focus:border-none focus:ring-0 placeholder:text-15" placeholder="মোবাইল নম্বর " />
                                                                                    <i className="fa-solid fa-phone text-18 text-primary float-right" />
                                                                              </div>
                                                                        </fieldset>
                                                                  </div>
                                                                  <div>
                                                                        <fieldset className="pl-3 border border-primary rounded">
                                                                              <legend className="px-2 text-primary text-12">আপনার জিজ্ঞাসা *
                                                                              </legend>
                                                                              <div className="flex items-center">
                                                                                    <textarea className="border-none focus:border-none focus:ring-0 placeholder:text-15" cols={34} rows={4} defaultValue={""} />
                                                                              </div>
                                                                        </fieldset>
                                                                  </div>
                                                                  <div className="flex justify-center my-3">
                                                                        <button className="flex space-x-3 items-center bg-secondary px-5 py-2 rounded-md">
                                                                              <i className="fa-solid fa-circle-question text-white text-20" />
                                                                              <p className="text-15 text-white">প্রদান করুন</p>
                                                                        </button>
                                                                  </div>
                                                            </form>
                                                      </div>
                                                </div>
                                          </div>
                                          <div>
                                                <img src="/images/faq_img.png" alt="images" />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>

            </div>
      )
}

export default Faq;
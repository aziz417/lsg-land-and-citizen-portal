import AccrodianCustomItem from "./AccrodianCustomItem";

const Faq = () => {

      const faqs = [
            {
                  question: "রেজিস্ট্রেশন ব্যতীত সেবার আবেদন করা যাবে কি না?",
                  answer: "ভূমি সেবার আবেদন করতে হলে মোবাইল নম্বর ব্যবহার করে রেজিস্ট্রেশন করতে হবে। রেজিস্ট্রেশনের সময় প্রোফাইলে যেসকল তথ্য প্রদান করা হবে পরবর্তীতে সেবার আবেদন ফরমে সেইসব তথ্য পুনরায় দেওয়ার প্রয়োজন হবে না।"
            },
      ]

      return <section className="px-5 md:px-20">
            <div className="flex justify-center items-center">
                  <h3 className="font-medium text-24 md:text-32 text-secondary">সচরাচর জিজ্ঞাসা</h3>
            </div>
            <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row-reverse md:justify-center md:items-center">
                  <div className="flex justify-center items-center md:w-[50%]">
                        {/* img */}
                        <img className="w-[60%]" loading="lazy" src="/images/OBJECTS.png" alt="images" />
                  </div>
                  <div className="md:w-[50%]">
                        {faqs.map((faq, index) => (
                              <AccrodianCustomItem key={index} {...faq} />
                        ))}
                        {/* accordions */}
                        {/* <div id="accordion-collapse" data-accordion="collapse" className="flex flex-col space-y-2 h-[240px] overflow-y-scroll no-scrollbar">
                              <div>
                                    <h2 id="accordion-collapse-heading-1">
                                          <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left rounded-md bg-lightgreen focus:drop-shadow-lg text-gray-500 dark:text-gray-400" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                                <span className="font-medium text-14 md:text-20">রেজিস্ট্রেশন ব্যতীত সেবার আবেদন করা যাবে কি না?</span>
                                                <span className="text-primary font-black text-20 md:text-26"><i className="fa-sharp fa-solid fa-plus" /></span>
                                          </button>
                                    </h2>
                                    <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
                                          <div className="p-5 border border-gray-200">
                                                <p className="text-14 md:text-20 leading-5 md:leading-7">ভূমি সেবার আবেদন করতে হলে মোবাইল নম্বর ব্যবহার করে রেজিস্ট্রেশন করতে হবে। রেজিস্ট্রেশনের সময় প্রোফাইলে যেসকল তথ্য প্রদান করা হবে পরবর্তীতে সেবার আবেদন ফরমে সেইসব তথ্য পুনরায় দেওয়ার প্রয়োজন হবে না।</p>
                                          </div>
                                    </div>
                              </div>
                              <div>
                                    <h2 id="accordion-collapse-heading-2">
                                          <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left rounded-md bg-lightgreen focus:drop-shadow-lg text-gray-500 dark:text-gray-400" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                                                <span className="font-medium text-14 md:text-20">ই-নামজারি আবেদন যাচাই কিভাবে করতে হয় ?</span>
                                                <span className="text-primary font-black text-20 md:text-26"><i className="fa-sharp fa-solid fa-plus" /></span>
                                          </button>
                                    </h2>
                                    <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
                                          <div className="p-5 border border-gray-200">
                                                <p className="text-14 md:text-20 leading-5 md:leading-7">বাংলাদেশে সবচেয়ে তে যে সমস্যাটি মানুষের মধ্যে বিরাজ করে তা হচ্ছে জমিজমা নিয়ে । তাই সরকার বর্তমানে ভূমি সেবাকে স্মার্ট ভূমি সেবা হিসেবে ঘোষণা করেছে । এই লক্ষ্যে সারাদেশে বিভিন্ন কার্যক্রম অনলাইনে সম্পুর্ন করতেছে, তারই ধারাবাহিকতায় আপনি যখন স্বপ্নের একখণ্ড জমি কিনবেন সাথে সাথে আপনি তা মিউটেশন বা নামজারি অথবা খারিজ যে নামে বলি না কেন তা সম্পূর্ণ করে ফেলবেন । কারন নামজারি ছাড়া একটি ভূমির অস্তিত্ব বিহীন।</p>
                                          </div>
                                    </div>
                              </div>
                              <div>
                                    <h2 id="accordion-collapse-heading-3">
                                          <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left rounded-md bg-lightgreen focus:drop-shadow-lg text-gray-500 dark:text-gray-400" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                                <span className="font-medium text-14 md:text-20">খতিয়ান বা পর্চা আবেদন যাচাই কিভাবে করতে হয় ?</span>
                                                <span className="text-primary font-black text-20 md:text-26"><i className="fa-sharp fa-solid fa-plus" /></span>
                                          </button>
                                    </h2>
                                    <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
                                          <div className="p-5 border border-gray-200">
                                                <p className="text-14 md:text-20 leading-5 md:leading-7">আপনি ল্যান্ড রেকর্ড ও ভূমি সংক্রান্ত সেবা প্রদানকারী ওয়েবসাইট land.gov.bd এর ই-নামজারি পেজ থেকে আবেদন করে তা এক্ষত্রে পরিক্ষা করতে পারেন। আবেদনের ট্র্যাকিং অপশন থেকে আপনি আবেদন নম্বর এবং জাতীয় পরিচয়পত্র নম্বর দিয়ে আবেদনের অবস্থা&nbsp;জানতে&nbsp;পারবেন</p>
                                          </div>
                                    </div>
                              </div>
                        </div> */}
                        <div className="flex justify-center items-center pt-5">
                              <a className="font-medium text-14 md:text-16 text-slate-50 bg-secondary px-5 py-0.5 md:py-1 md:px-7 rounded-md" href="#">আরও </a>
                        </div>
                  </div>
            </div>
      </section>

}

export default Faq;
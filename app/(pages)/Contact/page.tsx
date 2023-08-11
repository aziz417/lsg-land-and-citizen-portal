
import Link from "next/link";
const Contact = () => {
      return (
            <div>
                  <section className="container mx-auto px-2 lg:px-14 py-5 lg:py-12">
                        <div className="flex items-center justify-around">
                              <h3 className="font-bold text-20 lg:text-32 leading-[31px] text-primary">যোগাযোগ</h3>
                              <div className="flex justify-center items-center">
                                    <img src="/images/contact_1.png" className="w-[30%]" alt="images" />
                              </div>
                        </div>
                        <div className="flex flex-col-reverse lg:flex-row items-center justify-around">
                              <div className="flex flex-col space-y-5">
                                    {/* cards */}
                                    <div className="flex space-x-5 items-center">
                                          <div className="bg-primary text-slate-50 flex justify-center items-center w-[65px] h-[65px] text-20 lg:text-24 rounded-md">
                                                {/* icon */}
                                                <i className="fa-solid fa-user-tie" />
                                          </div>
                                          <div className="flex flex-col">
                                                <h3 className="text-primary text-20 lg:text-24">কর্মকর্তাবৃন্দের তালিকা</h3>
                                                <div className="flex justify-center items-center">
                                                      <a href="#" className="bg-yellow-500 text-slate-50 px-2 py-1 rounded-md border border-primary hover:bg-primary">তালিকা</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="flex space-x-5 items-center">
                                          <div className="bg-primary text-slate-50 flex justify-center items-center w-[65px] h-[65px] text-20 lg:text-24 rounded-md">
                                                {/* icon */}
                                                <i className="fa-solid fa-house" />
                                          </div>
                                          <div className="flex flex-col">
                                                <h3 className="text-primary text-20 lg:text-24">যোগাযোগ:</h3>
                                                <p className="whitespace-pre-wrap text-14 lg:text-16 leading-5 font-medium text-gray1">ভুমি মন্ত্রণালয়
                                                      ভবন - ৪, ফ্লোর - ৩ বাংলাদেশ সচিবালয়
                                                      ঢাকা-১০০০বাংলাদেশ</p>
                                          </div>
                                    </div>
                                    <div className="flex space-x-5 items-center">
                                          <div className="bg-primary text-slate-50 flex justify-center items-center w-[65px] h-[65px] text-20 lg:text-24 rounded-md">
                                                {/* icon */}
                                                <i className="fa-solid fa-window-restore" />
                                          </div>
                                          <div className="flex flex-col">
                                                <h3 className="text-primary text-20 lg:text-24">ফ্যাক্স:</h3>
                                                <p className="whitespace-pre-wrap text-14 lg:text-16 leading-5 font-medium text-gray1">প্রশাসন শাখা:  ৯৫৪০৮৮৩
                                                      সচিবের দপ্তর: ৯৫৭৭৩৪৪
                                                </p>
                                          </div>
                                    </div>
                                    <div className="flex space-x-5 items-center">
                                          <div className="bg-primary text-slate-50 flex justify-center items-center w-[65px] h-[65px] text-20 lg:text-24 rounded-md">
                                                {/* icon */}
                                                <i className="fa-regular fa-envelope" />
                                          </div>
                                          <div className="flex flex-col">
                                                <h3 className="text-primary text-20 lg:text-24">ইমেইল:</h3>
                                                <p className="whitespace-pre-wrap text-14 lg:text-16 leading-5 font-medium text-gray1">minister@minland.gov.bd
                                                      mailto:secretary@minland.gov.bd</p>
                                          </div>
                                    </div>
                              </div>
                              <div className="pb-5 lg:pb-0">
                                    {/* map */}
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29216.430991970825!2d90.37364064355046!3d23.74545818508649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sbangladesh%20sochibaloy!5e0!3m2!1sen!2sbd!4v1685874438787!5m2!1sen!2sbd" className="w-full lg:w-[600px]" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                              </div>
                        </div>
                  </section>
            </div>



      )
}

export default Contact;
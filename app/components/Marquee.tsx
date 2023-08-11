import Marquee from "react-fast-marquee";
const MarqueeNotice = () => {
      return <div className="border pt-7 lg:pt-0">
            <div className="flex items-center md:pl-12 py-2">
                  <p className="text-15 lg:text-20 font-medium w-[20%] md:w-[7%] border-r text-notice">নোটিশ</p>
                  <Marquee
                        className="text-15 lg:text-20"
                        speed={30}
                        delay={1}
                        pauseOnHover={true}
                  >
                        {"   "+`
                                    নাগরিক www.ldtax.gov.bd এ ভিজিট করে অনলাইনে নিবন্ধন এবং ভূমি উন্নয়ন কর প্রদান করতে পারবেন। তাছাড়া এনআইডি নম্বর, জন্ম তারিখ ও খতিয়ানের তথ্য প্রদান করে যে কোনও ইউনিয়ন ডিজিটাল সেন্টারের মাধ্যমে নিবন্ধন ও ভূমি উন্নয়ন কর প্রদান করার সুবিধা চালু করা হয়েছে।
                        `+ "   "}
                  </Marquee>
            </div>
      </div>
}
export default MarqueeNotice;
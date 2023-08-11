import MultiCarousel from "../components/Carousel/MultiCarousel";
import Slider from "../components/Carousel/Slider";
import Faq from "../components/Faq";
import HowWorkIt from "../components/HowWorkIt";
import LandOfficeInfo from "../components/Land/LandOfficeInfo";
import LandRelatedInfo from "../components/Land/LandRelatedInfo";
import LandRelatedService from "../components/Land/LandRelatedService";
import MarqueeNotice from "../components/Marquee";
import Notice from "../components/Notice";
import Title from "../components/Title";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Slider />
        <Notice />
      </div>
      <MarqueeNotice />
      <LandRelatedService />
      <LandRelatedInfo />
      <HowWorkIt />
      <LandOfficeInfo />
      <div>
        <section className="py-12">
          <div className="p-5 bg-slate-50 drop-shadow-xl">
            <div className="flex justify-center items-center">
              <Title title="ভূমিসেবা অ্যাপ ও সফটওয়্যার" cls="text-24 leading-8 text-secondary py-8" />
            </div>
            <div className="pb-7 md:px-16">
              {/* owl carosol 2 */}
              <MultiCarousel />
            </div>
          </div>
        </section>
      </div>
      <Faq />

      <div>
        <section className="backgroundImagegf3 bg-cover w-full md:h-[446px] my-6">
          <div className="container mx-auto px-4 md:px-16 pt-6">
            <div className="md:flex">
              <div className="hidden md:block w-[24%] mt-20">
                <p className="text-white text-32 font-semibold">এক ক্লিক এ ভূমি সংক্রান্ত প্রয়োজনীয় ওয়েবসাইট</p>
              </div>
              <div className="md:ml-24 bg-white rounded drop-shadow-md md:drop-shadow-none pb-5 md:pb-0">
                <div className="bg-[#A634A8] rounded py-5 px-8 md:px-16 text-center">
                  <p className="text-white text-20 font-semibold">ভূমি সংক্রান্ত সেবা ওয়েবসাইট</p>
                </div>
                <div className="pl-8 ">
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_purple.svg" alt="images" />
                    <a href="https://mutation.land.gov.bd/" className="font-semibold">ই-নামজারি আবেদন</a>
                  </div>
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_purple.svg" alt="images" />
                    <a href="https://ldtax.gov.bd/" className="font-semibold">ভূমি উন্নয়ন কর সফটওয়্যার</a>
                  </div>
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_purple.svg" alt="images" />
                    <a href="https://www.eporcha.gov.bd/" className="font-semibold">আর.এস খতিয়ান</a>
                  </div>
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_purple.svg" alt="images" />
                    <a href="http://www.lrb.gov.bd/" className="font-semibold">এলআইএমএস সফটওয়্যার</a>
                  </div>
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_purple.svg" alt="images" />
                    <a href="#" className="font-semibold">হোল্ডিং ট্যাকিং সফটওয়্যার</a>
                  </div>
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_purple.svg" alt="images" />
                    <a href="#" className="font-semibold">এম.আই.এস সফটওয়্যার</a>
                  </div>
                </div>
              </div>
              <div className="mt-24 z-10 -ml-3 hidden md:block">
                <img src="/images/Frame_6072.svg" alt="images" />
              </div>
              <div className="md:mt-24 z-10 md:-ml-3 block md:hidden relative -mt-3 pl-9 md:pl-0">
                <img src="/images/Frame_6072_vertical.svg" alt="images" />
              </div>
              <div className=" bg-white rounded -mt-3 md:mt-0 md:-ml-4 drop-shadow-md md:drop-shadow-none pb-5 md:pb-0 mb-4 md:mb-0">
                <div className="bg-[#3C8AAA] rounded py-5 px-8 md:px-16 text-center">
                  <p className="text-white text-20 font-semibold">তথ্য অধিকার</p>
                </div>
                <div className="px-8 ">
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_deepBlue.svg" alt="images" />
                    <a href="#" className="font-semibold">তথ্য প্রদানকারী কর্মকর্তা</a>
                  </div>
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_deepBlue.svg" alt="images" />
                    <a href="#" className="font-semibold">তথ্য প্রকাশ নীতিমালা-২০১৫</a>
                  </div>
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_deepBlue.svg" alt="images" />
                    <a href="#" className="font-semibold">তথ্য অধিকার আইন</a>
                  </div>
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_deepBlue.svg" alt="images" />
                    <a href="#" className="font-semibold">তথ্য প্রাপ্তির আবেদন ফরম</a>
                  </div>
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_deepBlue.svg" alt="images" />
                    <a href="#" className="font-semibold">তথ্য প্রাপ্তির আপিল ফরম</a>
                  </div>
                  <div className="flex space-x-4 items-center my-4 md:my-6">
                    <img src="/images/Subtract_deepBlue.svg" alt="images" />
                    <a href="#" className="font-semibold">তথ্য প্রাপ্তির অভিযোগ ফরম</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto">
          <div className="my-8 text-center">
            <h3 className="text-primary text-20 md:text-32 font-semibold">অনুষ্ঠান এবং উৎসব এর চিত্র</h3>
          </div>
          <div className="md:flex justify-center px-4 md:px-0 ">
            <div className="m-3 md:w-[30%]">
              <div className="function_gallery_img hidden" style={{ display: 'block' }}>
                <img src="/images/carousel_4492.png" alt="images" />
              </div>
              <div className="mt-2 function_gallery_img hidden" style={{ display: 'block' }}>
                <img src="/images/carousel_4493.png" alt="images" />
              </div>
            </div>
            <div className="m-3 md:w-[30%]">
              <div className="function_gallery_img hidden" style={{ display: 'block' }}>
                <img src="/images/carousel_4494.png" alt="images" />
              </div>
            </div>
            <div className="m-3 md:w-[30%]">
              <div className="function_gallery_img hidden" style={{ display: 'block' }}>
                <img src="/images/carousel_4495.png" alt="images" />
              </div>
              <div className="mt-2 function_gallery_img hidden" style={{ display: 'block' }}>
                <img src="/images/carousel_4496.png" alt="images" />
              </div>
            </div>
          </div>
          <div className="md:flex justify-center px-4 md:px-0 ">
            <div className="m-3 md:w-[30%]">
              <div className="function_gallery_img hidden">
                <img src="/images/carousel_4492.png" alt="images" />
              </div>
              <div className="mt-2 function_gallery_img hidden">
                <img src="/images/carousel_4493.png" alt="images" />
              </div>
            </div>
            <div className="m-3 md:w-[30%]">
              <div className="function_gallery_img hidden">
                <img src="/images/carousel_4494.png" alt="images" />
              </div>
            </div>
            <div className="m-3 md:w-[30%]">
              <div className="function_gallery_img hidden">
                <img src="/images/carousel_4495.png" alt="images" />
              </div>
              <div className="mt-2 function_gallery_img hidden">
                <img src="/images/carousel_4496.png" alt="images" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-5 ">
            <a className="text-slate-50 bg-primary font-medium text-14 md:text-16 px-3 md:px-12 py-1 rounded-md load_more">আরও</a>
          </div>
        </section>
        <section className="py-12 md:px-20 flex flex-col space-y-12">
          <div className="flex justify-center items-center">
            <h3 className="text-24 md:text-32 text-secondary">ভূমি সংক্রান্ত ভিডিও লিঙ্কসমূহ</h3>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center space-y-5 md:space-y-0 md:space-x-5">
            <div className="md:w-[33%] flex flex-col space-y-5">
              {/* <iframe class="w-full h-[210px] rounded-md" src="https://www.youtube.com/embed/xcJtL7QggTI" title="Sony 4K Demo: Another World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
              <iframe className="w-full h-[210px] rounded-md" src="https://www.youtube.com/embed/2-2uiGh5PAw" title="পহেলা বৈশাখের পর থেকে অনলাইনে শতভাগ ভূমি উন্নয়ন কর নেয়া হবে: প্রধানমন্ত্রী | News | Ekattor TV" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              <p>ভূমি উন্নয়ন কর</p>
            </div>
            <div className="md:w-[33%] flex flex-col space-y-5">
              {/* <iframe class="w-full h-[210px] rounded-md" src="https://www.youtube.com/embed/xcJtL7QggTI" title="Sony 4K Demo: Another World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
              <iframe className="w-full h-[210px] rounded-md" src="https://www.youtube.com/embed/xD3gmx3i8ag" title="নতুন ভূমি আইন পাস ২০২৩,Publish#land law 2023# Land gov minister  information 2023" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              <p>নতুন ভূমি আইন পাস</p>
            </div>
            <div className="md:w-[33%] flex flex-col space-y-5">
              {/* <iframe class="w-full h-[210px] rounded-md" src="https://www.youtube.com/embed/xcJtL7QggTI" title="Sony 4K Demo: Another World" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
              <iframe className="w-full h-[210px] rounded-md" src="https://www.youtube.com/embed/YTrLR-ykUuo" title="শিগগিরই ডিজিটালাইজেশন হচ্ছে সব ভূমিসেবা: প্রধানমন্ত্রী | PM | Digital | Land Service" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              <p>ডিজিটালাইজেশন হচ্ছে সব ভূমিসেবা: প্রধানমন্ত্রী</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a className="font-medium text-14 md:text-16 text-slate-50 bg-primary px-7 py-1 rounded-md" href="#">আরও</a>
          </div>
        </section>
        <section className="px-5 md:px-20 flex flex-col items-center space-y-5 md:space-y-7">
          <div className="flex justify-center items-center">
            <h3 className="font-medium text-24 md:text-32 text-secondary">সাম্প্রতিক আপডেট</h3>
          </div>
          <div className="w-[80%] md:w-full flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-16">
            <div className="border rounded-md w-full md:w-[30%]">
              <img className="rounded-md w-full h-[200px]" src="/images/pm-770x450.jpg" alt="images" />
              <div className="p-3 md:pb-5 flex flex-col space-y-5">
                <div className="flex items-center space-x-2">
                  <img className="w-[18px]" src="/images/watch.svg" alt="images" />
                  <p className="text-14">03 Mar 2018</p>
                </div>
                <p className="font-medium text-12 md:text-14 leading-5 md:leading-6">পহেলা বৈশাখ থেকে ভূমি উন্নয়ন কর অনলাইনে: প্রধানমন্ত্রী</p>
                <a className="text-14 text-primary" href="https://ekattor.tv/news/article?article_id=41905" target="_blank">সম্পূর্ণ পড়ুন <span className="pl-1"><i className="fa-solid fa-arrow-right" /></span></a>
              </div>
            </div>
            <div className="border rounded-md w-full md:w-[30%]">
              <img className="rounded-md w-full h-[200px]" src="/images/pm2.jpg" alt="images" />
              <div className="p-3 md:pb-5 flex flex-col space-y-5">
                <div className="flex items-center space-x-2">
                  <img className="w-[18px]" src="/images/watch.svg" alt="images" />
                  <p className="text-14">03 Mar 2018</p>
                </div>
                <p className="font-medium text-12 md:text-14 leading-5 md:leading-6">পহেলা বৈশাখ থেকে শতভাগ ভূমি উন্নয়ন কর অনলাইনে</p>
                <a className="text-14 text-primary" href="https://www.dailysokalersomoy.com/news/67872" target="_blank">সম্পূর্ণ পড়ুন <span className="pl-1"><i className="fa-solid fa-arrow-right" /></span></a>
              </div>
            </div>
            <div className="border rounded-md w-full md:w-[30%]">
              <img className="rounded-md w-full h-[200px]" src="/images/pm3.jpeg" alt="images" />
              <div className="p-3 md:pb-5 flex flex-col space-y-5">
                <div className="flex items-center space-x-2">
                  <img className="w-[18px]" src="/images/watch.svg" alt="images" />
                  <p className="text-14">03 Mar 2018</p>
                </div>
                <p className="font-medium text-12 md:text-14 leading-5 md:leading-6">অনলাইনে ভূমি উন্নয়ন কর পরিশোধের যুগে প্রবেশ করছে দেশ</p>
                <a className="text-14 text-primary" href="https://bangla.dhakatribune.com/bangladesh/2023/04/13/1681396852212" target="_blank">সম্পূর্ণ পড়ুন <span className="pl-1"><i className="fa-solid fa-arrow-right" /></span></a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <a className="font-medium text-14 md:text-16 text-slate-50 bg-primary px-7 py-1 rounded-md" href="#">আরও</a>
          </div>
        </section>
        <img className="w-full" src="/images/dhaka_line.svg" alt="images" />
      </div>

    </div>
  )
}

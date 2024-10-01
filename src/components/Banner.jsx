import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    arrows: false,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
   <section className='bg-[#fff]  h-[645px] '>
     <div className="max-w-container mx-auto">
      <Slider {...settings}>
        <div className="bg-back-img bg-cover bg-no-repeat bg-center pt-[167px] pb-[182px]">
          <h2 className='pb-[33px] font-DM font-bold text-[44px] sm:text-[49px] leading-[64px] pl-[64px] sm:pl-[120px]'>Final Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[16px] pb-[49px] pl-[120px]'>Up to <b className='font-DM font-bold text-[28px] sm:text-[40px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[71px] sm:ms-[120px] py-[16px] px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
        <div className="bg-back-img bg-cover bg-no-repeat bg-center pt-[167px] pb-[182px]">
          <h2 className='pb-[33px] font-DM font-bold text-[49px] leading-[64px] pl-[120px]'>Final Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[16px] pb-[49px] pl-[120px]'>Up to <b className='font-DM font-bold text-[40px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[16px] px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
        <div className="bg-back-img bg-cover bg-no-repeat bg-center pt-[167px] pb-[182px]">
          <h2 className='pb-[33px] font-DM font-bold text-[49px] leading-[64px] pl-[120px]'>Final Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[16px] pb-[49px] pl-[120px]'>Up to <b className='font-DM font-bold text-[40px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[16px] px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
        <div className="bg-back-img bg-cover bg-no-repeat bg-center pt-[167px] pb-[182px]">
          <h2 className='pb-[33px] font-DM font-bold text-[49px] leading-[64px] pl-[120px]'>Final Offer</h2>
          <p className='font-DM text-[#6D6D6D] text-[16px] pb-[49px] pl-[120px]'>Up to <b className='font-DM font-bold text-[40px] text-[#262626]'>50%</b> sale for all furniture items!</p>
          <button>
            <a href="#" className='ms-[120px] py-[16px] px-[58px] border-2 border-black hover:bg-black hover:text-white duration-300'>Shop Now</a>
          </button>
        </div>
      </Slider>
    </div>
   </section>
  )
}

export default Banner
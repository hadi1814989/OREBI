import React from 'react'
import Slider from "react-slick";
import arr1 from "../assets/arrimg1.png"
import { FaHeart } from "react-icons/fa";
import 'animate.css';
import { FaCartShopping } from "react-icons/fa6";
import { DiGitCompare } from "react-icons/di";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='w-[40px] h-[40px] rounded-full bg-white shadow-sm flex items-center justify-center absolute right-[4rem] bottom-[52%] translateY-[-50%]'>
      <HiArrowLongRight />
       </div>
  );
}

function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div onClick={onClick} className='w-[40px] h-[40px] rounded-full bg-white shadow-sm flex items-center justify-center absolute left-[1rem] top-[40%] z-10 translateY-[-50%] '>
      <HiArrowLongLeft />
      </div>
  );
}

const Arrivals = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  
  return (
   <section id='arrivals'>
    <div className="max-w-container mx-auto hidden lg:block">
    <Slider {...settings}>
        <div className=' relative group '>
        <img className='w-[90%]' src={arr1} alt="" />
  <div className="absolute left-0 bottom-[70px] bg-white shadow-md w-[90%] h-0 group-hover:h-[40%] text-right pr-20 transition-all duration-300">
    <div className=" absolute right-[10%] bottom-[79%] hidden group-hover:block">
       <FaHeart /> 
    </div>
    <div className=" absolute right-[10%] bottom-[57%] hidden group-hover:block">
       <DiGitCompare /> 
    </div>
    <div className=" absolute right-[10%] bottom-[34%] hidden group-hover:block">
       <FaCartShopping /> 
    </div>
    <p className='hidden group-hover:block pt-5 animate__fadeInDown'>Add to Wish List</p>
    <p className='py-[21px] hidden group-hover:block animate__fadeInDown'>Compare</p>
    <h2 className='hidden group-hover:block animate__fadeInDown'>Add to Cart</h2>
  </div>
          <div className=" absolute left-3 top-5">
            <a href="#" className='font-DM font-bold text-[14px] text-black py-[8px] px-[30px] border-2 border-black hover:bg-black  hover:text-white duration-300'>New</a>
          </div>
          <div className=" relative">
            <h4 className='pb-[15px] font-bold font-DM text-[20px]'>Basic Crew Neck Tee</h4>
            <p className='text-[#767676] font-DM text-[16px] font-normal'>Black</p>
            <div className=" absolute right-10 top-2 text-[#767676] font-DM font-normal">
                <span>$44.00</span>
            </div>
          </div>
        </div>
        <div className=' relative group '>
        <img className='w-[90%]' src={arr1} alt="" />
  <div className="absolute left-0 bottom-[70px] bg-white shadow-md w-[90%] h-0 group-hover:h-[40%] text-right pr-20 transition-all duration-300">
    <div className=" absolute right-[10%] bottom-[79%] hidden group-hover:block">
       <FaHeart /> 
    </div>
    <div className=" absolute right-[10%] bottom-[57%] hidden group-hover:block">
       <DiGitCompare /> 
    </div>
    <div className=" absolute right-[10%] bottom-[34%] hidden group-hover:block">
       <FaCartShopping /> 
    </div>
    <p className='hidden group-hover:block pt-5 animate__fadeInDown'>Add to Wish List</p>
    <p className='py-[21px] hidden group-hover:block animate__fadeInDown'>Compare</p>
    <h2 className='hidden group-hover:block animate__fadeInDown'>Add to Cart</h2>
  </div>
          <div className=" absolute left-3 top-5">
            <a href="#" className='font-DM font-bold text-[14px] text-black py-[8px] px-[30px] border-2 border-black hover:bg-black  hover:text-white duration-300'>New</a>
          </div>
          <div className=" relative">
            <h4 className='pb-[15px] font-bold font-DM text-[20px]'>Basic Crew Neck Tee</h4>
            <p className='text-[#767676] font-DM text-[16px] font-normal'>Black</p>
            <div className=" absolute right-10 top-2 text-[#767676] font-DM font-normal">
                <span>$44.00</span>
            </div>
          </div>
        </div>
        <div className=' relative group '>
        <img className='w-[90%]' src={arr1} alt="" />
  <div className="absolute left-0 bottom-[70px] bg-white shadow-md w-[90%] h-0 group-hover:h-[40%] text-right pr-20 transition-all duration-300">
    <div className=" absolute right-[10%]  bottom-[79%] hidden group-hover:block">
       <FaHeart /> 
    </div>
    <div className=" absolute right-[10%] bottom-[57%] hidden group-hover:block">
       <DiGitCompare /> 
    </div>
    <div className=" absolute right-[10%] bottom-[34%] hidden group-hover:block">
       <FaCartShopping /> 
    </div>
    <p className='hidden group-hover:block pt-5 animate__fadeInDown'>Add to Wish List</p>
    <p className='py-[21px] hidden group-hover:block animate__fadeInDown'>Compare</p>
    <h2 className='hidden group-hover:block animate__fadeInDown'>Add to Cart</h2>
  </div>
          <div className=" absolute left-3 top-5">
            <a href="#" className='font-DM font-bold text-[14px] text-black py-[8px] px-[30px] border-2 border-black hover:bg-black  hover:text-white duration-300'>New</a>
          </div>
          <div className=" relative">
            <h4 className='pb-[15px] font-bold font-DM text-[20px]'>Basic Crew Neck Tee</h4>
            <p className='text-[#767676] font-DM text-[16px] font-normal'>Black</p>
            <div className=" absolute right-10 top-2 text-[#767676] font-DM font-normal">
                <span>$44.00</span>
            </div>
          </div>
        </div>
        <div className=' relative group '>
        <img className='w-[90%]' src={arr1} alt="" />
  <div className="absolute left-0 bottom-[70px] bg-white shadow-md w-[90%] h-0 group-hover:h-[40%] text-right pr-20 transition-all duration-300">
    <div className=" absolute right-[10%] bottom-[79%] hidden group-hover:block">
       <FaHeart /> 
    </div>
    <div className=" absolute right-[10%] bottom-[57%] hidden group-hover:block">
       <DiGitCompare /> 
    </div>
    <div className=" absolute right-[10%] bottom-[34%] hidden group-hover:block">
       <FaCartShopping /> 
    </div>
    <p className='hidden group-hover:block pt-5 animate__fadeInDown'>Add to Wish List</p>
    <p className='py-[21px] hidden group-hover:block animate__fadeInDown'>Compare</p>
    <h2 className='hidden group-hover:block animate__fadeInDown'>Add to Cart</h2>
  </div>
          <div className=" absolute left-3 top-5">
            <a href="#" className='font-DM font-bold text-[14px] text-black py-[8px] px-[30px] border-2 border-black hover:bg-black  hover:text-white duration-300'>New</a>
          </div>
          <div className=" relative">
            <h4 className='pb-[15px] font-bold font-DM text-[20px]'>Basic Crew Neck Tee</h4>
            <p className='text-[#767676] font-DM text-[16px] font-normal'>Black</p>
            <div className=" absolute right-10 top-2 text-[#767676] font-DM font-normal">
                <span>$44.00</span>
            </div>
          </div>
        </div>
        <div className=' relative group '>
        <img className='w-[90%]' src={arr1} alt="" />
  <div className="absolute left-0 bottom-[70px] bg-white shadow-md w-[90%] h-0 group-hover:h-[40%] text-right pr-20 transition-all duration-300">
    <div className=" absolute right-[10%]  bottom-[79%] hidden group-hover:block">
       <FaHeart /> 
    </div>
    <div className=" absolute right-[10%] bottom-[57%] hidden group-hover:block">
       <DiGitCompare /> 
    </div>
    <div className=" absolute right-[10%] bottom-[34%] hidden group-hover:block">
       <FaCartShopping /> 
    </div>
    <p className='hidden group-hover:block pt-5 animate__fadeInDown'>Add to Wish List</p>
    <p className='py-[21px] hidden group-hover:block animate__fadeInDown'>Compare</p>
    <h2 className='hidden group-hover:block animate__fadeInDown'>Add to Cart</h2>
  </div>
          <div className=" absolute left-3 top-5">
            <a href="#" className='font-DM font-bold text-[14px] text-black py-[8px] px-[30px] border-2 border-black hover:bg-black  hover:text-white duration-300'>New</a>
          </div>
          <div className=" relative">
            <h4 className='pb-[15px] font-bold font-DM text-[20px]'>Basic Crew Neck Tee</h4>
            <p className='text-[#767676] font-DM text-[16px] font-normal'>Black</p>
            <div className=" absolute right-10 top-2 text-[#767676] font-DM font-normal">
                <span>$44.00</span>
            </div>
          </div>
        </div>
        <div className=' relative group '>
        <img className='w-[90%]' src={arr1} alt="" />
  <div className="absolute left-0 bottom-[70px] bg-white shadow-md w-[90%] h-0 group-hover:h-[40%] text-right pr-20 transition-all duration-300">
    <div className=" absolute right-[10%]  bottom-[79%] hidden group-hover:block">
       <FaHeart /> 
    </div>
    <div className=" absolute right-[10%] bottom-[57%] hidden group-hover:block">
       <DiGitCompare /> 
    </div>
    <div className=" absolute right-[10%] bottom-[34%] hidden group-hover:block">
       <FaCartShopping /> 
    </div>
    <p className='hidden group-hover:block pt-5 animate__fadeInDown'>Add to Wish List</p>
    <p className='py-[21px] hidden group-hover:block animate__fadeInDown'>Compare</p>
    <h2 className='hidden group-hover:block animate__fadeInDown'>Add to Cart</h2>
  </div>
          <div className=" absolute left-3 top-5">
            <a href="#" className='font-DM font-bold text-[14px] text-black py-[8px] px-[30px] border-2 border-black hover:bg-black  hover:text-white duration-300'>New</a>
          </div>
          <div className=" relative">
            <h4 className='pb-[15px] font-bold font-DM text-[20px]'>Basic Crew Neck Tee</h4>
            <p className='text-[#767676] font-DM text-[16px] font-normal'>Black</p>
            <div className=" absolute right-10 top-2 text-[#767676] font-DM font-normal">
                <span>$44.00</span>
            </div>
          </div>
        </div>
        <div className=' relative group '>
        <img className='w-[90%]' src={arr1} alt="" />
  <div className="absolute left-0 bottom-[70px] bg-white shadow-md w-[90%] h-0 group-hover:h-[40%] text-right pr-20 transition-all duration-300">
    <div className=" absolute right-[10%] bottom-[79%] hidden group-hover:block">
       <FaHeart /> 
    </div>
    <div className=" absolute right-[10%] bottom-[57%] hidden group-hover:block">
       <DiGitCompare /> 
    </div>
    <div className=" absolute right-[10%] bottom-[34%] hidden group-hover:block">
       <FaCartShopping /> 
    </div>
    <p className='hidden group-hover:block pt-5 animate__fadeInDown'>Add to Wish List</p>
    <p className='py-[21px] hidden group-hover:block animate__fadeInDown'>Compare</p>
    <h2 className='hidden group-hover:block animate__fadeInDown'>Add to Cart</h2>
  </div>
          <div className=" absolute left-3 top-5">
            <a href="#" className='font-DM font-bold text-[14px] text-black py-[8px] px-[30px] border-2 border-black hover:bg-black  hover:text-white duration-300'>New</a>
          </div>
          <div className=" relative">
            <h4 className='pb-[15px] font-bold font-DM text-[20px]'>Basic Crew Neck Tee</h4>
            <p className='text-[#767676] font-DM text-[16px] font-normal'>Black</p>
            <div className=" absolute right-10 top-2 text-[#767676] font-DM font-normal">
                <span>$44.00</span>
            </div>
          </div>
        </div>
        <div className=' relative group '>
        <img className='w-[90%]' src={arr1} alt="" />
  <div className="absolute left-0 bottom-[70px] bg-white shadow-md w-[90%] h-0 group-hover:h-[40%] text-right pr-20 transition-all duration-300">
    <div className=" absolute right-[10%] bottom-[79%] hidden group-hover:block">
       <FaHeart /> 
    </div>
    <div className=" absolute right-[10%] bottom-[57%] hidden group-hover:block">
       <DiGitCompare /> 
    </div>
    <div className=" absolute right-[10%] bottom-[34%] hidden group-hover:block">
       <FaCartShopping /> 
    </div>
    <p className='hidden group-hover:block pt-5 animate__fadeInDown'><a href="#">Add to Wish List</a></p>
    <p className='py-[21px] hidden group-hover:block animate__fadeInDown'><a href="#">Compare</a></p>
    <h2 className='hidden group-hover:block animate__fadeInDown'><a href="">Add to Cart</a></h2>
  </div>
          <div className=" absolute left-3 top-5">
            <a href="#" className='font-DM font-bold text-[14px] text-black py-[8px] px-[30px] border-2 border-black hover:bg-black  hover:text-white duration-300'>New</a>
          </div>
          <div className=" relative">
            <h4 className='pb-[15px] font-bold font-DM text-[20px]'>Basic Crew Neck Tee</h4>
            <p className='text-[#767676] font-DM text-[16px] font-normal'>Black</p>
            <div className=" absolute right-10 top-2 text-[#767676] font-DM font-normal">
                <span>$44.00</span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
   </section>
  )
}

export default Arrivals
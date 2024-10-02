import React from 'react'
import best1 from "../assets/best-img1.png"
import best2 from "../assets/best-img2.png"
import best3 from "../assets/best-img3.png"
import best4 from "../assets/best-img4.png"
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { DiGitCompare } from "react-icons/di";


const BestSeller = () => {
  return (
   <section className='mb-[130px] mt-[118px]'>
    <div className="max-w-container mx-auto">
    <h2 className='font-DM text-[39px] font-bold pb-[48px]'>Our Bestsellers</h2> 
   <div className="flex">
   <div className=' relative group '>
        <img className='w-[90%]' src={best1} alt="" />
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
        <img className='w-[90%]' src={best2} alt="" />
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
        <img className='w-[90%]' src={best3} alt="" />
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
        <img className='w-[90%]' src={best4} alt="" />
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
   </div>
    </div>
   </section>
  )
}

export default BestSeller
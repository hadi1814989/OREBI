import React, { useState } from 'react'
import Container from "./Container"
import logo from "../assets/main-logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Header = () => {
  let [show , setShow]= useState(false)
  let dropDown = ()=>{
    setShow(!show)
  }
  return (
<>
<div className="max-w-container mx-auto flex items-center my-[32px] px-3">
  <div className="w-[40%]">
    <img className='w-[106px] h-[25px]' src={logo} alt="" />
  </div>
  <div className="w-[50%] hidden lg:block">
   <ul className='flex gap-x-[40px]'>
    <li className='text-[#979797] font-normal text-[14px] font-DM hover:text-[#000] duration-300'>Home</li>
    <li className='text-[#979797] font-normal text-[14px] font-DM hover:text-[#000] duration-300'>Shop</li>
    <li className='text-[#979797] font-normal text-[14px] font-DM hover:text-[#000] duration-300'>About</li>
    <li className='text-[#979797] font-normal text-[14px] font-DM hover:text-[#000] duration-300'>Contact</li>
    <li className='text-[#979797] font-normal text-[14px] font-DM hover:text-[#000] duration-300'>Journal</li>
   </ul>
  </div>
  <div  className="w-[10%] ms-auto lg:hidden" onClick={()=>dropDown(show)} >
    { show == true ?  <ImCross className='text-[20px]' />: <FaBars className='text-[25px]' />}
   </div>
   {/* <div  className={`absolute left-[50%] transform transition-all duration-500 ease-in-out ${show ? 'top-[60px] opacity-100 translate-y-0' : 'top-[10%] opacity-0 -translate-y-4 pointer-events-none'}`}>
    <ul className=' gap-x-[40px] absolute left-[45%] top-[10%] text-center'>
    <li className='text-[#979797] font-normal text-[14px] font-DM hover:text-[#000] hover:font-bold duration-300'>Home</li>
    <li className='text-[#979797] font-normal text-[14px] font-DM hover:text-[#000] hover:font-bold duration-300'>Shop</li>
    <li className='text-[#979797] font-normal text-[14px] font-DM hover:text-[#000] hover:font-bold duration-300'>About</li>
    <li className='text-[#979797] font-normal text-[14px] font-DM hover:text-[#000] hover:font-bold duration-300'>Contact</li>
    <li className='text-[#979797] font-normal text-[14px] font-DM hover:text-[#000] hover:font-bold duration-300'>Journal</li>
   </ul>
    </div> */}
    <div className={`absolute left-[30%] transform transition-all duration-500 ease-in-out z-[999] bg-white w-[50%] py-5 shadow-md ${show ? 'top-[60px] opacity-100 translate-y-0' : 'top-[10%] opacity-0 -translate-y-4 pointer-events-none'}`}>
          <ul className={`flex flex-col items-center gap-[10px]`}>
            {['Home', 'Shop', 'About', 'Contact', 'Journal'].map((item, index) => (
              <li key={index} className={`text-[#979797] font-normal text-[14px] font-DM hover:text-[#000] duration-500 transition-transform transform ${show ? 'translate-y-0 opacity-100 delay-[${index * 50}ms]' : 'translate-y-4 opacity-0'}`} style={{ transitionDelay: `${index * 50}ms` }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
</div>
</>

  )
}

export default Header
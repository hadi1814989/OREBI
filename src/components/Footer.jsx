import React from 'react'
import footerImg from "../assets/footer-img.png"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
  <section className='bg-[#F5F5F3] pt-[55px] pb-[59px] hidden lg:block'>
    <div className="max-w-container mx-auto">
        <div className="flex flex-wrap">
            <div className="w-[15%]">
              <ul>
                <li className='text-[16px] font-DM font-bold text-[#262626] pb-[15px]'>menu</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Home</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Shop</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>About</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Contact</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Journal</li>
              </ul>
            </div>
            <div className="w-[15%]">
              <ul>
                <li className='text-[16px] font-DM font-bold text-[#262626] pb-[15px]'>shop</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Category1</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Category2</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Category3</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Category4</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Category5</li>
              </ul>
            </div>
            <div className="w-[15%]">
              <ul>
                <li className='text-[16px] font-DM font-bold text-[#262626] pb-[15px]'>Help</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Privacy Policy</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Terms & Conditions</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Special E-shop</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Shipping</li>
                <li className='text-[#6D6D6D] font-DM font-normal text-[14px] pb-2'>Secure Payments</li>
              </ul>
            </div>
            <div className="w-[20%]">
              <h3 className='text-[16px] font-DM font-bold text-[#262626]'>(052) 611-5711</h3>
              <h3 className='text-[16px] font-DM font-bold text-[#262626] pb-[15px]'>company@domain.com</h3>
              <p className='text-[#6D6D6D] font-DM font-normal text-[14px]'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className="w-[35%]">
              <img className='ps-[130px]' src={footerImg} alt="" />
            </div>
            <div className=" w-full flex justify-between pt-[65px]">
              <div className="flex gap-3">
                <div className=""><FaFacebookF/></div>
                <div className=""><FaLinkedinIn/></div>
                <div className=""><IoLogoInstagram/></div>
              </div>
              <div className="">
                <p className='text-[#6D6D6D] font-DM font-normal text-[14px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
              </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Footer
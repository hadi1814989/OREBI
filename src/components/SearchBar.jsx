import React, { useState } from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoMdArrowDropup } from "react-icons/io";
import 'animate.css';
import cart from "../assets/cart-img.png"
import { RxCross2 } from "react-icons/rx";


const SearchBar = () => {
    let [show, setShow]=useState(false)
    let [show1, setShow1]=useState(false)
    let [isAnimating, setIsAnimating] = useState(false);
    let dropMenu = ()=>{
        setShow(!show)
    }
    let dropMenu1 = () => {
      if (!show1) {
        setShow1(!show1)
        setShow1(true);
        setIsAnimating(true);
        // Remove animation class after animation ends
        setTimeout(() => setIsAnimating(false), 2000); // Match this with animation duration
      } else {
        setShow1(false);
      }
    };
  return (
  <section className='border-t-2 border-t-[#979797] border-b-2 border-b-[#979797] py-[25px] bg-[#F5F5F3]'>
    <div className="max-w-container mx-auto flex px-3">
       <div className=" lg:flex hidden lg:w-full">
       <div className="w-[33%] flex gap-2 items-center">
         <HiMiniBars3BottomLeft />
        <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-gray-900   ">
        Shop by Category
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#979797] data-[focus]:bg-gray-100 data-[focus]:text-gray-900 hover:"
            >
             Accesories
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#979797] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Furniture
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#979797] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Electronics
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#979797] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Clothes
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#979797] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Bags
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#979797] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Home appliances
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
        </div>
        <div className="w-[40%] relative">
            <input type="text" placeholder='Search Products' className='w-full bg-white border-0 py-[16px] pl-[21px] outline-none ' />
            <div className=" absolute right-[5%] top-[50%] translate-y-[-50%]">
             <IoSearchSharp />
            </div>
        </div>
        <div className="w-[26%] flex gap-x-9 items-center justify-end">
            <div className="flex gap-1 z-[99]">
            <div className="">   <IoPersonSharp /></div>
            <div className=" relative" onClick={dropMenu}> 
                {show == true ? <IoMdArrowDropup /> :<RiArrowDownSFill /> }
                 <div className=" absolute left-[-157px] top-5 bg-white shadow-md text-[#979797] w-[200px] text-center " 
                 style={{ display: show ? 'block' : 'none' }}>
              <div className="">
              <ul>
                <li className=' hover:bg-black hover:text-white py-[15px]'>My Account</li>
                <li className=' hover:bg-black hover:text-white py-[15px]'>Log Out</li>
               </ul>
              </div>
            </div>
            </div>
            </div>
           
            <div className="relative z-[777]" onClick={dropMenu1}>
              <FaCartShopping />
            <div
              className={`absolute right-[30%] ${
                isAnimating ? 'animate__animated animate__backInLeft' : ''
              } ${show1 ? 'block' : 'hidden'}`}
            //  style={{ display: show1 ? 'block' : 'none' }}
             >
              <div className="">
                <div className="flex bg-[rgba(233,230,230,0.9)] py-4 w-[360px] px-5">
                  <div className=""><img src={cart} alt="" /></div>
                <div className="">
                <div className="flex  font-DM font-bold text-[14px] ml-3"><h3>Black Smart Watch</h3></div>
                <div className="flex font-DM font-bold text-[14px] ml-3"><h3>$44.00</h3></div>
                </div>
                <div className=" ms-auto text-[20px]">
                 <RxCross2 />
                </div>
                </div>
                <div className="bg-white py-4 px-5">
                  <h5 className='text-[rgba(166,162,162,0.9)]'>Subtotal:<span className='text-black font-bold'> $44.00</span></h5>
                 <div className="flex my-5">
                 <button className='px-[40px] py-[16px] text-[10px] border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300'>View Cart</button>
                 <button className='px-[40px] py-[16px] text-[10px] border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300'>Checkout</button>
                 </div>
                </div>
              </div>
             </div>
            </div>
        </div>
       </div>
        <div className=" flex flex-wrap lg:hidden w-full justify-between">
        <div className="w-[50%] flex gap-2 items-center">
         <HiMiniBars3BottomLeft />
         <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-gray-900   ">
        Shop by Category
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-black shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#979797] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Account settings
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#979797] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Support
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-[#979797] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              License
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-[#979797] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                Sign out
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
        </div>
        <div className="w-[50%] flex gap-x-6 items-center justify-end">
        <div className="flex gap-1 z-[99]">
            <div className="">   <IoPersonSharp /></div>
            <div className=" relative" onClick={dropMenu}> 
                {show == true ? <IoMdArrowDropup /> :<RiArrowDownSFill /> }
                 <div className=" absolute left-[-157px] top-5 bg-white shadow-md text-[#979797] w-[200px] text-center " 
                 style={{ display: show ? 'block' : 'none' }}>
              <div className="">
              <ul>
                <li className=' hover:bg-black hover:text-white py-[15px]'>My Account</li>
                <li className=' hover:bg-black hover:text-white py-[15px]'>Log Out</li>
               </ul>
              </div>
            </div>
            </div>
            </div>
            <div className="relative z-[777]" onClick={dropMenu1}>
              <FaCartShopping />
            <div
              className={`absolute right-[30%] ${
                isAnimating ? 'animate__animated animate__backInLeft' : ''
              } ${show1 ? 'block' : 'hidden'}`}
            //  style={{ display: show1 ? 'block' : 'none' }}
             >
              <div className="">
                <div className="flex bg-[rgba(233,230,230,0.9)] py-4 w-[360px] px-5">
                  <div className=""><img src={cart} alt="" /></div>
                <div className="">
                <div className="flex  font-DM font-bold text-[14px] ml-3"><h3>Black Smart Watch</h3></div>
                <div className="flex font-DM font-bold text-[14px] ml-3"><h3>$44.00</h3></div>
                </div>
                <div className=" ms-auto text-[20px]">
                 <RxCross2 />
                </div>
                </div>
                <div className="bg-white py-4 px-5">
                  <h5 className='text-[rgba(166,162,162,0.9)]'>Subtotal:<span className='text-black font-bold'> $44.00</span></h5>
                 <div className="flex my-5">
                 <button className='px-[40px] py-[16px] text-[10px] border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300'>View Cart</button>
                 <button className='px-[40px] py-[16px] text-[10px] border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300'>Checkout</button>
                 </div>
                </div>
              </div>
             </div>
            </div>
        </div>
        <div className="w-[100%] relative mx-10 mt-5">
            <input type="text" placeholder='Search Products' className='w-[95%]  bg-white border-0 py-[16px] pl-[21px] outline-none ' />
            <div className=" absolute right-[7%] top-[50%] translate-y-[-50%]">
             <IoSearchSharp />
            </div>
        </div>
        </div>
      
    </div>
  </section>
  )
}

export default SearchBar
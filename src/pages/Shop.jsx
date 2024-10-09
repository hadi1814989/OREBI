import React, { useState, useContext } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { ApiData } from '../components/Contextapi';
import { Link } from 'react-router-dom';
import Arrivals from '../components/Arrivals'

const Shop = () => {
  let {info , loading} = useContext(ApiData)
  let [show , setShow] = useState(false)
  let [show1 , setShow1] = useState(false)
  let [show2 , setShow2] = useState(false)
  let [show3 , setShow3] = useState(false)
  return (
<section className='pt-[138px] pb-[126px] hidden lg:block'>
  <div className="max-w-container mx-auto">
    <h2 className='font-DM font-bold text-[49px] text-[#262626]'>Products</h2>
   <div className=" items relative pb-[130px]">
   <span className='font-DM font-normal text-[12px] text-[#767676] pe-[14px]'>Home</span>
    <span className='font-DM font-normal text-[16px] text-[#767676]  absolute left-[2.2%] top-2'> <MdKeyboardArrowRight />  </span>
    <span className='font-DM font-normal text-[12px] text-[#767676]' >  Products</span>
   </div>
    <div className="flex flex-wrap">
      <div className="w-1/5">
        <div className="">
        <div onClick={()=> setShow(!show)}  className="flex flex-wrap  justify-between items-center pe-10 pb-[35px]">
        <h2  className="font-DM font-bold text-[20px] ">Shop by Category</h2>
        { show ? <FaMinus/> : <FaPlus/>}
        </div>
          {show && (
          <ul>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] '>Category1</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Category2</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Category3</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Category4</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Category5</li>
          </ul>
          )}
          </div>
        <div className="">
        <div onClick={()=> setShow1(!show1)}  className="flex flex-wrap  justify-between items-center pe-10 py-[35px]">
        <h2  className="font-DM font-bold text-[20px] ">Shop by Color</h2>
        { show1 ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
        </div>
          {show1 && (
          <ul>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] '>Color1</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Color2</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Color3</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Color4</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Color5</li>
          </ul>
          )}
          </div>
        <div className="">
        <div onClick={()=> setShow2(!show2)}  className="flex flex-wrap  justify-between items-center pe-10 py-[35px]">
        <h2  className="font-DM font-bold text-[20px] ">Shop by Brand</h2>
        { show2 ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
        </div>
          {show2 && (
          <ul>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] '>Brand1</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Brand2</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Brand3</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Brand4</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>Brand5</li>
          </ul>
          )}
          </div>
        <div className="">
        <div onClick={()=> setShow3(!show3)}  className="flex flex-wrap  justify-between items-center pe-10 py-[35px]">
        <h2  className="font-DM font-bold text-[20px] ">Shop by Price</h2>
        { show3 ? <IoMdArrowDropup/> : <IoMdArrowDropdown/>}
        </div>
          {show3 && (
          <ul>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] '>$0.00 - $9.99</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$10.00 - $19.99</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$20.00 - $29.99</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$30.00 - $39.99</li>
            <li className='text-[#767676] text-[16px] font-DM font-normal pb-[19px] border-b-2 border-b-[#F0F0F0] pt-[20px]'>$40.00 - $69.99</li>
          </ul>
          )}
          </div>
      </div>
      <div className="w-4/5">
      <div className="flex flex-wrap justify-end">
        <div className="">
          <label className='text-[#767676] pe-5' htmlFor="">Sort By :</label>
          <select className='w-[200px] py-1 border-[#F0F0F0] border-2 rounded text-[#767676] me-10 ' name="" id="">
            <option value="">Featured</option>
            <option value="">Featured</option>
            <option value="">Featured</option>
            <option value="">Featured</option>
            <option value="">Featured</option>
          </select>
        </div>
        <div className="">
          <label className='text-[#767676] pe-5' htmlFor="">Show :</label>
          <select className='w-[100px] py-1 border-[#F0F0F0] border-2 rounded text-[#767676] ' name="" id="">
            <option value="">36</option>
            <option value="">35</option>
            <option value="">34</option>
            <option value="">33</option>
            <option value="">32</option>
          </select>
        </div>
      
      </div>
     <div className="flex flex-wrap">
     <div className="w-[32%]">
      {loading ? ( <h2 className='text-[40px] font-DM text-center'>loading.....</h2>) :
       ( <div className=''>
        {info.map((item) => (
        <Link to='/shop' ><Arrivals item={item}/></Link>

    ))}
       </div>
  )}
  
      </div>
     <div className="w-[32%]">
      {loading ? ( <h2 className='text-[40px] font-DM text-center'>loading.....</h2>) :
       ( <div className=''>
        {info.map((item) => (
        <Link to='/shop' ><Arrivals item={item}/></Link>

    ))}
       </div>
  )}
  
      </div>
     <div className="w-[32%]">
      {loading ? ( <h2 className='text-[40px] font-DM text-center'>loading.....</h2>) :
       ( <div className=''>
        {info.map((item) => (
        <Link to='/shop' ><Arrivals item={item}/></Link>

    ))}
       </div>
  )}
  
      </div>
     </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Shop
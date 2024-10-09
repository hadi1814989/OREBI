import React, { useContext } from 'react'
import Arrivals from './Arrivals'
import { ApiData } from './Contextapi';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { HiArrowLongLeft } from "react-icons/hi2";
import { HiArrowLongRight } from "react-icons/hi2";


function SampleNextArrow({ onClick }) {
 
  
   
    return (
      <div onClick={onClick} className='w-[40px] h-[40px] rounded-full bg-white shadow-sm flex items-center justify-center absolute right-[4rem] bottom-[52%] translateY-[-50%]'>
        <HiArrowLongRight />
         </div>
    );
  }
  
  function SamplePrevArrow({  onClick }) {
   
    return (
      <div onClick={onClick} className='w-[40px] h-[40px] rounded-full bg-white shadow-sm flex items-center justify-center absolute left-[1rem] top-[40%] z-10 translateY-[-50%] '>
        <HiArrowLongLeft />
        </div>
    );
  }
  const NewArrivals = () => {
    let {info, loading} = useContext(ApiData)
    // console.log(loading);
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow onClick={() => alert('Next Arrow Clicked')} />,  
        prevArrow: <SamplePrevArrow onClick={() => alert('Prev Arrow Clicked')} />,
      };
  return (
  <section>
    <div className="max-w-container mx-auto hidden lg:block">
    <h2 className='font-DM text-[39px] font-bold pb-[48px]'>New Arrivals</h2>
    {loading ? ( <h2 className='text-[40px] font-DM text-center'>loading.....</h2>) :
       ( <Slider {...settings}> 
        {info.map((item) => (
            <Link to='/shop' ><Arrivals item={item}/></Link>

        ))}
       
       </Slider>
       )}
   </div>
  </section>
  )
}

export default NewArrivals
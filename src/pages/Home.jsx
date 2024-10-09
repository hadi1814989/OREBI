import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Ads from '../components/Ads'
import Arrivals from '../components/Arrivals'
import BestSeller from '../components/BestSeller'
import Ads2 from '../components/Ads2'
import SpecialOffer from '../components/SpecialOffer'
import NewArrivals from '../components/NewArrivals'

const Home = () => {
  return (
   <>
   {/* <Header /> */}
   
   <Banner />
   <Ads />
   {/* <Arrivals /> */}
   <NewArrivals />
   <BestSeller />
   <Ads2 />
   <SpecialOffer />
   </>
  )
}

export default Home
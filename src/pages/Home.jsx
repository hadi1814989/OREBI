import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Banner from '../components/Banner'
import Ads from '../components/Ads'
import Arrivals from '../components/Arrivals'
import BestSeller from '../components/BestSeller'
import Ads2 from '../components/Ads2'
import SpecialOffer from '../components/SpecialOffer'

const Home = () => {
  return (
   <>
   <Header />
   <SearchBar />
   <Banner />
   <Ads />
   <Arrivals />
   <BestSeller />
   <Ads2 />
   <SpecialOffer />
   </>
  )
}

export default Home
import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Banner from '../components/Banner'
import Ads from '../components/Ads'
import Arrivals from '../components/Arrivals'

const Home = () => {
  return (
   <>
   <Header />
   <SearchBar />
   <Banner />
   <Ads />
   <Arrivals />
   </>
  )
}

export default Home
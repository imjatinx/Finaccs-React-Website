import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import ServicesSection from '../Components/ServicesSection'
import Footer from '../Components/Footer'
import Topnavbar from '../Components/Topnavbar'
import OrderProcess from '../Components/OrderProcess'

export default function Home() {
  return (
    <>
    <Topnavbar/>
    <Navbar/>
    <Header/>
    <ServicesSection/>
    <OrderProcess/>
    <Footer/>
    </>
  )
}

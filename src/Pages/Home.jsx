import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import ServicesSection from '../Components/ServicesSection'
import Footer from '../Components/Footer'
import Topnavbar from '../Components/Topnavbar'

export default function Home() {
  return (
    <>
    <Topnavbar/>
    <Navbar/>
    <Header/>
    <ServicesSection/>
    <Footer/>
    </>
  )
}

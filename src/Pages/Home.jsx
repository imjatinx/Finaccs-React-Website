import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import EnquiryForm from '../Components/EnquiryForm'
import ServicesSection from '../Components/ServicesSection'
// import Footer from '../Components/Footer'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <EnquiryForm/>
    <ServicesSection/>
    {/* <Footer/> */}
    </>
  )
}

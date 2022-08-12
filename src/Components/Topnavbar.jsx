import React from 'react'
import { IoMdCall } from 'react-icons/io';
// import { AiFillMail } from 'react-icons/ai';
// import { MdFacebook } from 'react-icons/md';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { AiFillInstagram } from 'react-icons/ai';
// import { AiFillTwitterCircle } from 'react-icons/ai';

export default function Topnavbar() {
  return (
    <div className='bg-primary py-1 d-lg-flex d-md-flex d-none justify-content-center text-white'>
      <span>Talk to our Consultant : Give a missed call </span>
      <span className='d-flex align-items-center'><IoMdCall className='ml-2' style={{fontSize: "20px", color:"black"}}/><a className='text-decoration-none text-white' href="tel:8954946430">+91 895 494 6430</a></span>
    </div>
  )
}

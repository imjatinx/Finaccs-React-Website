import React from 'react'
import FCSLogo from "../assets/Finaccs Logo.svg";
import '../Styling/Navbar.css'
import '../Styling/Util.css'
// import { IoMdCall } from 'react-icons/io';
// import { AiFillMail } from 'react-icons/ai';
// import { MdFacebook } from 'react-icons/md';
// import { AiFillLinkedin } from 'react-icons/ai';
// import { AiFillInstagram } from 'react-icons/ai';
// import { AiFillTwitterCircle } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';


export default function Navbar() {
  return (
    <>
      <nav className="container-fluid position-absolute myNavbar">
        <div className='row'>

          {/* Logo div starts here */}
          <div className='col-xl-3 col-lg-4 col-md-3 col-sm-9 col-9 toggleHandle'>
            <a href="/#">
              <img src={FCSLogo} alt="" className='logo' />
            </a>
          </div>
          {/* Logo div ends here */}

          {/* TOGGLE BUTTON STARTS */}
          <input type="checkbox" id="check" />
          <label htmlFor="check" className='hamburger col-sm-3 col-3'>
            <GiHamburgerMenu style={{ fontSize: "30px", color: "black" }} />
          </label>
          {/* TOGGLE BUTTON ENDS */}

          {/* This is the div to be Toggle starts */}
          <div className="col-xl-9 col-lg-8 col-md-9 menuBar">
            <ul className='menu'>
              <a href="/#" className='active'>
                <li>HOME</li>
              </a>
              <a href="/#">
                <li>SERVICES</li>
              </a>
              <a href="/#">
                <li>PROJECTS</li>
              </a>
              <a href="/#">
                <li>ABOUT US</li>
              </a>
            </ul>
            <div className='d-flex justify-content-center align-items-center'>
              <button className='btn btn-primary '>CONTACT US</button>
            </div>
          </div>
          {/* This is the div to be Toggle starts */}
        </div>
      </nav>
    </>
  )
}

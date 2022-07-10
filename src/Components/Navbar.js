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
      <nav className="container-fluid px-5 position-absolute">
        <div className='myNavbar'>
          <div className='d-flex align-items-center'>
            <a href="/#">
              <img src={FCSLogo} alt="" className='logo' />
            </a>

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

            {/* TOGGLE BUTTON STARTS */}

            <input type="checkbox" id="check" />
            <label htmlFor="#" className='hamburger'>
              <GiHamburgerMenu style={{fontSize: "30px", color: "white"}}/>
            </label>
            
            {/* TOGGLE BUTTON ENDS */}

          </div>
          <div className="contact-us">
            <button className='btn btn-primary '>CONTACT US</button>
          </div>
        </div>
      </nav>


    </>
  )
}

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
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function Navbar() {

  return (
    <>
      <nav className="container-fluid position-relative myNavbar">
        <div className='row'>

          {/* Logo div starts here */}
          <div className='col-xl-3 col-lg-4 col-md-3 col-sm-9 col-9 toggleHandle'>
            <NavLink to="/">
              <img src={FCSLogo} alt="" className='logo' />
            </NavLink>
          </div>
          {/* Logo div ends here */}

          {/* TOGGLE BUTTON STARTS */}
          <input type="checkbox" id="check" />
          <label htmlFor="check" className='hamburger col-sm-3 col-3' >
            <GiHamburgerMenu id='hamIcon' style={{ fontSize: "30px" }} />
          </label>
          {/* TOGGLE BUTTON ENDS */}

          {/* This is the div to be Toggle starts */}
          <div className="col-xl-9 col-lg-8 col-md-9 menuBar">
            <ul className='menu'>
              <NavLink exact to="/" className='menuItems' >
                <li>HOME</li>
              </NavLink>
              <NavLink exact to="/services" className='menuItems'>
                <li>SERVICES</li>
              </NavLink>
              <NavLink exact to="/projects" className='menuItems'>
                <li>PROJECTS</li>
              </NavLink>
              <NavLink exact to="/about_us" className='menuItems'>
                <li>ABOUT US</li>
              </NavLink>
            </ul>
            <div className='d-flex justify-content-center align-items-center'>
              <button className='btn btn-primary contact_btn'>CONTACT US</button>
            </div>
          </div>
          {/* This is the div to be Toggle starts */}
        </div>
      </nav>
    </>
  )
}

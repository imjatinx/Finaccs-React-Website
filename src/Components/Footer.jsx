import React from 'react'
import '../Styling/Footer.css'
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FaRegCopyright } from 'react-icons/fa';
import Logo from '../assets/Finaccs Logo.svg'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="row footer_section container-fluid">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 logo_section">
            <img src={Logo} alt="" />
            <h5>About Us</h5>
            <p>Where excellence lives, Finaccs delivers clients worldwide and serve in all the business solution and domain.</p>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 quick_link">
            <h6>QUICK LINKS</h6>
            <ul className='list-unstyled'>
              <Link to='#' className='text-decoration-none'><li>Audit Planning</li></Link>
              <Link to='#' className='text-decoration-none'><li>Tax Planning</li></Link>
              <Link to='#' className='text-decoration-none'><li>Financial Planning</li></Link>
              <Link to='#' className='text-decoration-none'><li>Tax Registration</li></Link>
            </ul>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 quick_link">
            <h6>CONTACT US</h6>
            <ul className='list-unstyled'>
              <Link to='#' className='text-decoration-none'><li>Request a CallBack</li></Link>
              <Link to='#' className='text-decoration-none'><li>Send a message</li></Link>
            </ul>
            <div className="social_link">
              <BsFacebook className='mx-3 fb' /> <BsTwitter className='mx-3 twt' /> <BsLinkedin className='mx-3 linked' /> <BsInstagram className='mx-3 insta' />
            </div>
          </div>

          {/* <div className="col-lg-3 col-md-3 contact_us">
            <h6>GET IN TOUCH</h6>
            <form action="" className="subscribe">
              <input type="email" name="" id="" required />
              <button className='btn btn-primary' type="submit">Subscribe</button>
            </form>
          </div> */}
        </div>
        <hr />
        <div className="copyright">
          <FaRegCopyright className='mr-2' />
          <p>FCS 2022 | All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

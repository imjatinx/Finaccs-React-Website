import React from 'react'
// Stylesheets
import "../Styling/Animation.css"
import "../Styling/Header.css"
// Images
// import Hero_image from '../assets/man_sitting_on_the_table.svg';
// import Hero_image from '../assets/Hero_img.svg';
// Icons
import { AiOutlineArrowRight, AiOutlineLine } from 'react-icons/ai';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';


export default function Header() {
    return (
        <header className='hero_section area'>
            <div className='hero_text_section'>
                <div className="hero_text_1 mb-lg-5 mb-md-4 mb-3">
                    <h1>BEST FINANCIAL <br /> SOLUTIONS</h1>
                    <p><AiOutlineLine />For Your Business</p>
                </div>
                <div className="hero_text_2">
                    <p>Finaccs provides quality financial advisory</p>
                    <p>services to businesses all over the World.</p>
                </div>
                <button className='btn btn-primary exploreBtn'>Explore<AiOutlineArrowRight className='exploreIcon' /></button>
                <div className="left_right_Icons">
                    <BsArrowLeftCircle className='leftIcon mr-3' /><BsArrowRightCircle className='rightIcon ml-3' />
                </div>
            </div>
            <div className="hero_image_section">
                {/* <img src={Hero_image} alt="HeroImage" /> */}
            </div>

            {/* <div class="area" > */}
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            {/* </div > */}

        </header>
    )
}

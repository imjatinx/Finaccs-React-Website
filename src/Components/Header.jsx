import React from 'react'
// Stylesheets
import "../Styling/Header.css"
// Images
import Hero_image from '../assets/man_sitting_on_the_table.svg';
// Icons
import { AiOutlineArrowRight, AiOutlineLine } from 'react-icons/ai';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';


export default function Header() {
    return (
        <header className='hero_section'>
            <div className='hero_text_section'>
                <div className="hero_text_1 mb-5">
                    <h1>BEST FINANCIAL <br/> SOLUTIONS</h1>
                    <p><AiOutlineLine />For Your Business</p>
                </div>
                <div className="hero_text_2">
                    <p>Finaccs provides quality financial advisory</p>
                    <p>services to businesses all over the World.</p>
                </div>
                <button className='btn btn-primary btn-sm exploreBtn'>Explore<AiOutlineArrowRight className='exploreIcon' /></button>
                <div className="left_right_Icons">
                    <BsArrowLeftCircle className='leftIcon mr-3' /><BsArrowRightCircle className='rightIcon ml-3' />
                </div>
            </div>
            <div className="hero_image_section">
                {/* <h1>Image Loading...</h1> */}
                <img src={Hero_image} alt="HeroImage" />
            </div>


            {/* <div className="area" >
                <ul className="circles">
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
            </div > */}


        </header>
    )
}

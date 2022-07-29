import React from 'react'
// Stylesheets
import "../Styling/Header.css"
// Images
import Hero_image from '../assets/Hero_image_3.png';
import Typewriter from 'typewriter-effect';
// Icons
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';


export default function Header() {
    return (
        <header className='hero_section'>
            <div className='hero_text_section'>
                <div className="hero_text_1 mb-lg-5 mb-md-4 mb-3">
                    <h1 className='d-flex'>
                        <span>
                            WE PROVIDE&nbsp;
                        </span>
                        <span className='text-primary'>
                            <Typewriter
                                options={{
                                    strings: ['PROFESSIONAL', 'VALUABLE', 'RELIABLE', 'BETTER'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h1>
                    <h1>
                        <span>
                            BUSINESS SOLUTIONS
                        </span>
                    </h1>
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
                <img className='' src={Hero_image} alt="HeroImage" />
            </div>
        </header>
    )
}

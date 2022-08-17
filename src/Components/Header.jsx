import React from 'react'
// Stylesheets
import "../Styling/Header.css"
// Images
import Hero_image from '../assets/Hero_image_4.png';
import Typewriter from 'typewriter-effect';
// Icons
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Header() {

    return (
        <header>
            <div className="container-fluid hero_section">
                <div className="row align-items-center">
                    <div className='hero_text_section col-12 col-md-6'>
                        <div className="hero_text_1 mb-lg-5 mb-md-4 mb-3">
                            <h1>
                                <span>
                                    WE MAKE BUSINESS&nbsp;
                                </span>
                                <span>
                                    <Typewriter
                                        options={{
                                            strings: ['PROFESSIONAL', 'VALUABLE', 'RELIABLE', 'BETTER'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                            </h1>
                        </div>
                        <div className="hero_text_2">
                            <p>Finaccs provides quality financial advisory services to businesses all over the World. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere.</p>
                        </div>
                        <div>
                            <button className='btnlg'>Read More<AiOutlineArrowRight className='exploreIcon' /></button>
                            <button className='btnlg ml-3'>Explore<AiOutlineArrowRight className='exploreIcon' /></button>
                        </div>
                    </div>
                    <div className="hero_image_section col-12 col-md-6">
                        <img className='' src={Hero_image} alt="HeroImage" />
                    </div>
                </div>
            </div>
        </header>
    )
}
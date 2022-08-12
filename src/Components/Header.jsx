import React from 'react'
// Stylesheets
import "../Styling/Header.css"
// Images
import Hero_image from '../assets/Hero_image_3.png';
import Typewriter from 'typewriter-effect';
// Icons
// import { AiOutlineArrowRight } from 'react-icons/ai';
// import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';


export default function Header() {
    return (
        <header className='hero_Section'>
            <div className="container">
                <div className="row">
                    <div className='col-6 mx-auto'>
                        <div className="">
                            <h1 className=''>
                                <span>
                                    WE PROVIDE&nbsp;
                                </span>
                                {/* <span className='text-black'> */}
                                    <Typewriter
                                        options={{
                                            strings: ['PROFESSIONAL', 'VALUABLE', 'RELIABLE', 'BETTER'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                {/* </span> */}
                            </h1>
                            <h1 className=''>
                                <span>
                                    BUSINESS SOLUTIONS
                                </span>
                            </h1>
                        </div>
                        <div className="">
                            <p>Finaccs provides quality financial advisory services to businesses all over the World.</p>
                        </div>
                        <div className=''>
                            <button className='btn btn-primary'>
                                Read More
                            </button>
                            <button className=' btn btn-primary ml-3'>
                                Get Started!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

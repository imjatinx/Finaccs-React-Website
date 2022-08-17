import React from 'react'
import '../Styling/ServicesSection.css'
import Registration from '../assets/registration.jfif'
import Tax from '../assets/tax.jfif'
import Audit from '../assets/audit.jfif'
import planning from '../assets/planning.jfif'
import EnquiryForm from '../Components/EnquiryForm'
import { Link } from 'react-router-dom'

export default function ServicesSection() {
    return (
        <div className='services row mx-auto py-3'>
            <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2 Service_section">
                <div className="heading d-flex align-items-center justify-content-between">
                    <h4>What We Offer</h4>
                    <Link to='/services'><button className='btnsm'>View All</button></Link>
                </div>
                <div className="Service_item">
                    <div className="item">
                        <img src={Registration} alt="" />
                        <div className="title_bar">
                            <h6>Tax Registration</h6>
                            <p>Get the Registration in simple steps</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={Tax} alt="" />
                        <div className="title_bar">
                            <h6>Tax Filing</h6>
                            <p>Lorem ipsum dolor sit amet consectetur</p>
                        </div>
                    </div>
                </div>
                <div className="Service_item">
                    <div className="item">
                        <img src={Audit} alt="" />
                        <div className="title_bar">
                            <h6>Audit Filing</h6>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={planning} alt="" />
                        <div className="title_bar">
                            <h6>Financial Planning</h6>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 order-lg-2 order-md-1 order-1 form_div">
                <EnquiryForm />
            </div>
        </div>
    )
}

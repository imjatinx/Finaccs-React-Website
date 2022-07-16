import React from 'react'
import '../Styling/ServicesSection.css'
// import Service from '../assets/Service.jpg'
import EnquiryForm from '../Components/EnquiryForm'

export default function ServicesSection() {
    return (
        <div className='row mx-auto py-3'>
            <div className="col-lg-6 col-md-12 col-12 order-lg-1 order-md-2 order-2 Service_section">
                <div className="heading d-flex align-items-center justify-content-between">
                    <h4>What We Offer</h4>
                    <button className='btn btn-primary'>View All</button>
                </div>
                <div className="Service_item">
                    <div className="item">
                        <div className="title_bar">
                            <h6>GST Registration</h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title_bar">
                            <h6>Tax Filing</h6>
                        </div>
                    </div>
                </div>
                <div className="Service_item">
                    <div className="item">
                        <div className="title_bar">
                            <h6>Audit Filing</h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title_bar">
                            <h6>Financial Planning</h6>
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

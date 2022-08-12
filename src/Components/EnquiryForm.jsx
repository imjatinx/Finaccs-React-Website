import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/EnquiryForm.css'

export default function EnquiryForm() {
  return (
    <div className='row appointment_form'>
      <form className='col-lg-12 col-md-6 col-sm-6 col-xs-12'>
        <h4>Make an appointment</h4>
        <div className="mb-2">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="name"
            className="form-control"
            required
            autocomplete="off" />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            required
            autocomplete="off" />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-2">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="phone"
            className="form-control"
            required
            autocomplete="off" />
        </div>
        <button type="submit" className="btn btn-primary">SEND REQUEST</button>
        <hr style={{ border: "1px solid black" }} />
      </form>
      <div className='col-lg-12 col-md-6 col-sm-6 col-xs-12 presentation'>
        <h4>Company Presentation</h4>
        <p className='text-muted'>Check this to know more about us </p>
        <Link className='download_link' to='#'>Download & Watch</Link>
      </div>
    </div>
  )
}

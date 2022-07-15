import React from 'react'
import '../Styling/EnquiryForm.css'

export default function EnquiryForm() {
  return (
    <div className='appointment_form'>
      <h4>Make an appointment</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="name" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="phone" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">SEND REQUEST</button>
      </form>
      <hr style={{border: "1px solid black"}}/>
    </div>
  )
}

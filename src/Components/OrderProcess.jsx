import React from 'react'
import '../Styling/OrderProcess.css'
import {BiChat} from 'react-icons/bi'
import {TbTruckDelivery} from 'react-icons/tb'
import {VscServerProcess} from 'react-icons/vsc'
import {GrDocumentTxt} from 'react-icons/gr'

export default function OrderProcess() {
  return (
    <section>
        <div className="container-fluid order_section">
            <div className="row justify-content-center mx-auto">
                <div className="order_blue col-lg-3 col-md-3 col-sm-6 mb-2 col-12">
                    <div className="order_item">
                        <div className="icon"><BiChat/></div>
                        <div className="content text-center font-weight-bold">Get Assistence on Call</div>
                        <p>
                            Missed Call on : +91 (8954)-946-630 and our experts will assist you on soon
                        </p>
                    </div>
                </div>
                <div className="order_white col-lg-3 col-md-3 col-sm-6 mb-2 col-12">
                    <div className="order_item">
                        <div className="icon"><GrDocumentTxt/></div>
                        <div className="content text-center font-weight-bold">Send documents</div>
                        <p>
                            Send documents via any mode like E-mails or via Post.
                        </p>
                    </div>
                </div>
                <div className="order_blue col-lg-3 col-md-3 col-sm-6 mb-2 col-12">
                    <div className="order_item">
                        <div className="icon"><VscServerProcess/></div>
                        <div className="content text-center font-weight-bold">Process</div>
                        <p>
                            Begin to work on documents and Process the requirement.
                        </p>
                    </div>
                </div>
                <div className="order_white col-lg-3 col-md-3 col-sm-6 mb-2 col-12">
                    <div className="order_item">
                        <div className="icon"><TbTruckDelivery/></div>
                        <div className="content text-center font-weight-bold">Work delivered</div>
                        <p>
                            Delivered the work and requirements on time without any discrepency.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

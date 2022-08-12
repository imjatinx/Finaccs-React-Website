import React from 'react'
import '../Styling/OrderProcess.css'
import { RiCustomerService2Fill } from 'react-icons/ri';

export default function OrderProcess() {
    return (
        <section className='process_section'>
            <div className="container-fluid h-100 w-100">
                <div className="row order_card">
                    <div className="col-3 order_card_items mx-auto bg-white">
                        <div className='border border-dark text-center icons'>
                            <span>
                                <RiCustomerService2Fill />
                            </span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque quae odio maiores, accusantium neque!</p>
                    </div>
                    <div className="col-3 order_card_items mx-auto bg-white">
                        <div className='border border-dark'>
                            <img src="" alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum doloremque quae odio maiores, accusantium neque!</p>
                    </div>
                    <div className="col-3 order_card_items mx-auto bg-white">
                        <div className='border border-dark'>
                            <img src="" alt="" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sit eum itaque saepe, facilis autem?</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

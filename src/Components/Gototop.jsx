import React from 'react'
import { GoTriangleUp } from 'react-icons/go'

export default function Gototop() {
    return (
        <div className='position-fixed bottom-0 end-0'>
            <a href="#top">
                <div className='bg-black px-3 py-2 mb-3 mr-2 text-white' style={{ cursor: 'pointer', zIndex: "99999999", border: "1px solid white"}}>
                    <GoTriangleUp style={{ fontSize: '25px' }} />
                </div>
            </a>
        </div>
    )
}
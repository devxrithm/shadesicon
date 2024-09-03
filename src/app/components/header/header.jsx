import React from 'react'
import Image from "next/image";
import Searchbox from '../searchBox/searchbox';
import Navbar from '../navbar/navbar';

const header = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div className="mt-[10rem]">
                <h1 className='text-[6vw] leading-none	 text-center  font-bold text-gray-700'>
                    Supercharge Your UI <br />
                    with React-Ready
                    <span className='text-orange-400'>Icons</span>
                </h1>
                <h2 className="text-2xl text-center mt-[2rem] font-semibold  text-gray-600">
                    Enhance Your User Interface with High-Quality,<br /> Easy-to-Use React Icons.
                </h2>
            </div>
            <div className="mt-5">
                <Searchbox />
            </div>
        </div>
    )
}

export default header
"use client"

import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [popup, setPopup] = useState()
    const [clicked, setclicked] = useState(true)

    const popMenuHandler = () => {
        setPopup(!popup)
        setclicked(!clicked)
    }
    const ClosePopMenuHandler = () => {
        setPopup(false)
        setclicked(!clicked)
    }


    return (
        <>

            <nav className="flex gap-16 lg:gap-5 items-center mt-5 justify-around">
                <div className='flex gap-5 justify-start items-center'>
                    <Image
                        src="https://www.aceternity.com/_next/image?url=%2Flogo.png&w=128&q=75"
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />
                    <span>ShadesIcon</span>
                </div>
                <ul className='flex gap-5 max-sm:hidden'>
                    <Link href="/">  <li>Home</li></Link>
                    <Link href="/outline"> <li>Icons</li></Link>
                    <li>Animated Icons</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>

                <button className='lg:hidden' onClick={popMenuHandler}>
                    {
                        clicked ? <IoMenu size="2em" /> : <RxCross2 size="2em" />
                    }

                </button>

                <button className='hidden lg:block border p-2 rounded ' >
                    Explore Icons
                </button>

            </nav>
            <hr className='mt-5 mx-5' />
            <div className={popup ? "" : "hidden"}>
                <ul className='flex gap-3 flex-col items-center py-5' onClick={ClosePopMenuHandler}>
                    <Link href="/">  <li className='bg-gray-100 w-80 text-center py-3 rounded-md font-semibold'>Home</li></Link>
                    <Link href="/outline"> <li className='bg-gray-100 w-80 text-center py-3 rounded-md font-semibold'>Icons</li></Link>
                    <li className='bg-gray-100 w-80 text-center py-3 rounded-md font-semibold'>Animated Icons</li>
                    <li className='bg-gray-100 w-80 text-center py-3 rounded-md font-semibold'>Contact</li>
                    <li className='bg-gray-100 w-80 text-center py-3 rounded-md font-semibold'>Blog</li>
                </ul>
            </div>

        </>
    )
}

export default Navbar

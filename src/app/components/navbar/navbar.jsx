
import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { IoMenu } from "react-icons/io5";


const navbar = () => {


    return (
        <>

            <nav className="flex gap-5 items-center	mt-5 justify-around">
                <div className='flex gap-5 justify-start items-center'>
                    <Image
                        src="https://www.aceternity.com/_next/image?url=%2Flogo.png&w=128&q=75"
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />
                    <span>ShadesIcon</span>
                </div>
                <ul className='flex gap-5 max-sm:hidden '>
                    <Link href="/">  <li>Home</li></Link>
                    <Link href="/outline"> <li>Icons</li></Link>
                    <li>Animated Icons</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>

                <button className='lg:hidden' >
                    <IoMenu size="1.5em" />
                </button>

                <button className='hidden lg:block border p-2 rounded ' >
                    Explore Icons
                </button>

            </nav>
            <hr className='mt-5 mx-5' />
        </>
    )
}

export default navbar
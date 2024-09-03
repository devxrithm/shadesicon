import React from 'react'
import Image from "next/image";
const navbar = () => {
    return (
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
            <ul className='flex gap-5 max-sm:hidden'>
                <li>Home</li>
                <li>Icons</li>
                <li>Animated Icons</li>
                <li>Contact</li>
                <li>Blog</li>
            </ul>
            <button className='border-2 border-black px-5	'>Start</button>
        </nav>
    )
}

export default navbar
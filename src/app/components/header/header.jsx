"use client"
import React, { useState } from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { LuCopyCheck } from "react-icons/lu";
import Image from 'next/image';

const Header = () => {
  const [copy, setCopy] = useState(false)

  const clickHandler = () => {

    navigator.clipboard.writeText("npm i shadesicon")
      .then(() => {
        console.log("copy Successfull")
      }), (err) => {
        console.log("error")
      }
    setCopy(true)
    setTimeout(() => {
      setCopy(false)
    }, 1000)

  }


  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-[url('/bg.svg')] bg-cover bg-center h-[29rem] lg:h-[30rem] pt-4 bg-purple-50">

        <div className="pt-[8rem] opacity-100 flex flex-col items-center justify-center text-center ">


          <h1 className='text-[5vmax] max-w-[60rem] text-wrap leading-none font-bold drop-shadow-2xl'>
            Supercharge Your UI With Ready To Use&nbsp;
            <span className='text-orange-500 drop-shadow-2xl'>Icons</span>
          </h1>

          <h2 className="text-lg text-wrap mt-[1rem] max-w-[40rem] font-medium text-gray-800 drop-shadow-2xl">
            Enhance Your User Interface with High-Quality, Easy-to-Use React Icons.
          </h2>

          <button onClick={clickHandler}>
            <p className='text-base hover:cursor-pointer drop-shadow-xl rounded-md bg-black font-mono text-gray-200 font-semibold mt-5 border px-6 py-2 flex items-center gap-5' >$ npm install shadesicon
              {
                copy ? <LuCopyCheck /> : <IoCopyOutline />
              }
            </p>
          </button>

        </div>

      </div>

      <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'><hr className='drop-shadow-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' />
      </div>

      <div className="bg-[url('/sec-bg.png')] bg-cover bg-center h-[39rem]  bg-gray-100 flex items-center">
        <div className="relative right-48 flex">
          <Image
            src="/icons.png"
            width={500}
            height={500}
            alt='bg'
          />

        </div>
        <Image
          src="/use-cases.png"
          width={600}
          height={600}
          alt='bg2'
        />
      </div>
    </div>
  )
}

export default header

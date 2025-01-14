"use client"

import React, { useState } from 'react'
import data from "../utils/datas.json"
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from 'next/image';
import Link from 'next/link';
import Suggestion from '../../components/suggestion/suggestion';


const Query = ({ params }) => {
  const [CopySuccess, setCopySuccess] = useState()

  const id = params.query;

  const fileData = data.find((currEle) => {
    if (currEle.slug == id) {
      return currEle
    }
  })

  const downloadRemoteImage = async () => {
    const response = await fetch(`/icons/essetional/${fileData.slug}.svg`); // Remote image URL
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${fileData.name}.svg`; // File name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fileData.syntax); // Copy SVG code to the clipboard
      setCopySuccess('SVG copied to clipboard!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
      console.error('Failed to copy: ', err);
    }
  };


  return (
    <>

      <div className="shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] bg-white lg:flex items-center justify-center mt-[3rem] lg:mx-80 flex-col lg:flex-row
       lg:p-10 p-5 rounded-lg gap-10 mx-5 ">
        <div className='flex items-center flex-col '>
          <div className='border rounded-lg flex justify-center lg:w-40 w-52 h-52 lg:h-40'>
            <Image
              src={fileData.profileimages}
              width={60}
              height={60}
              alt="icons"
            />
          </div>
          <h2 className="text-xl font-bold mt-2 text-center">{fileData.name}</h2>
        </div>

        <div className="p-0">
          <h1 className='text-lg font-bold hidden lg:block'>{fileData.name} Free Icon</h1>

          {/* <SyntaxHighlighter language="html" style={vs2015} className="rounded-md mt-3 w-[100%]">
            {fileData.syntax}
          </SyntaxHighlighter> */}



          <div className="flex gap-3 flex-wrap items-center mt-5 justify-center lg:justify-normal">

            <div className='border border-black shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] text-black font-bold  py-3 lg:w-[11rem] lg:px-11 w-72 rounded-md text-center cursor-pointer hover:scale-95 bg-slate-100'>
              <p>Copy JSX</p>
            </div>

            <button onClick={copyToClipboard}> <div className='border border-black shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] text-black font-bold lg:w-44 w-32 py-3 rounded-md text-center hover:scale-95'>
              <p>Copy SVG</p>
            </div>
            </button>

            <button onClick={downloadRemoteImage}>
              <div className='border-5 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] bg-[#000000] text-white font-semibold lg:w-44 w-36 py-3 rounded-md hover:scale-95'><p>Download SVG</p></div>
            </button>

          </div>
          <hr className='mt-3' />

          {/* <p className='text-gray-600 text-sm mt-2'>Explore more icon from ShadesIcon ↗</p> */}

          {/* <hr className='mt-4' /> */}


          {/* <hr /> */}
          <div className='mt-3 '>
            <div className="flex items-center justify-around">
              <div className='hidden lg:block'>
                <Image
                  src="https://www.aceternity.com/_next/image?url=%2Flogo.png&w=128&q=75"
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
              </div>
              <div className='text-gray-700 font-semibold'>
                <h2>ShadesIcon</h2>
                <p className='text-sm text-wrap '>Explore 1000 + Icons For Free</p>
              </div>
              <Link href="#">
                <div className='border border-black rounded-lg w-24 text-center py-1'>
                  Follow ↗
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Suggestion />
    </>
  )
}

export default Query


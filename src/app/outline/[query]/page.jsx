"use client"

import React from 'react'
import data from "../utils/datas.json"
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from 'next/image';
import Link from 'next/link';
import Suggestion from '../../components/suggestion/suggestion';


const page = ({ params }) => {

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
      await navigator.clipboard.writeText(svgCode); // Copy SVG code to the clipboard
      setCopySuccess('SVG copied to clipboard!');
    } catch (err) {
      setCopySuccess('Failed to copy!');
      console.error('Failed to copy: ', err);
    }
  };


  return (
    <>

      <div className="shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] bg-white flex items-center justify-center mt-[3rem] border mx-64 p-10 rounded-lg gap-12">
        <div className='w-80'>
          <div className='border rounded-lg flex justify-center p-11'>
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
          <h1 className='text-lg font-bold'>{fileData.name} Free Icon</h1>

          <SyntaxHighlighter language="html" style={vs2015} className="rounded-md mt-3 w-[100%]">
            {fileData.syntax}
          </SyntaxHighlighter>


          <div className='flex flex-wrap gap-3 mb-2 mt-3'>
            <div className='border border-black shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] text-black font-semibold px-20 py-2 rounded-md'><p>Copy SVG</p></div>

            <button onClick={downloadRemoteImage}>
              <div className= 'border-5 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] bg-[#000000] text-white font-semibold px-16 py-3 rounded-md hover:scale-95'><p>Download SVG</p></div>
            </button>

          </div>
          <hr className='mt-3' />
          <p className='text-gray-600 text-sm mt-2'>Explore more icon from ShadesIcon ↗</p>

          <hr className='mt-4' />
          <div className='mt-3 mb-3'>
            <div className="flex gap-5">
              <Image
                src="https://www.aceternity.com/_next/image?url=%2Flogo.png&w=128&q=75"
                alt="Picture of the author"
                width={50}
                height={50}
              />
              <div className='text-gray-700 font-semibold'>
                <h2>ShadesIcon</h2>
                <p className='text-sm'>Explore 1000 + Icons For Free</p>
              </div>
              <div className='border px-6 py-3 rounded-lg ml-16'>
                <Link href="#">
                  Follow ↗
                </Link>
              </div>
            </div>
          </div>
          <hr />


        </div>
      </div>
      <Suggestion />
    </>
  )
}

export default page
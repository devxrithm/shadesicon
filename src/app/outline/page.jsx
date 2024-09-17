"use client"
import { useState } from 'react'
import data from "./utils/datas.json";
import Image from 'next/image';
import Link from 'next/link'
import Searchbox from '../components/searchBox/searchbox';

const page = () => {

  const [search, setSearch] = useState('');
  return (
    <>

      <div className="h-full mt-10 ">

        <div className="w-[100%] sticky top-0 z-5">
          <Searchbox
            func={(e) => setSearch(e.target.value)}
          />
        </div>

        <hr className='mt-[1rem]' />

        <div className="flex gap-3 mx-[5.5rem] mt-5">
          <div className="border px-10 py-1 text-sm rounded-2xl text-gray-500  font-medium  flex items-center">
            <span className='text-orange-500 text-2xl '>✾</span> &nbsp; OUTLINE
          </div>
          <div className="border px-10 py-1 rounded-2xl text-sm text-gray-500 font-medium flex items-center	">
            <span className='text-green-500 text-2xl'>♜</span> &nbsp; MINI
          </div>
          <div className="border px-10 py-1 rounded-2xl text-sm text-gray-500 font-medium flex items-center">
            <span className='text-pink-600 text-2xl'>♕</span> &nbsp;  GRADIENT
          </div>
          <div className="border px-10 py-1 rounded-2xl text-sm text-gray-500 font-medium flex items-center">
            <span className='text-teal-400  text-2xl'>♚</span> &nbsp;  LOGO
          </div>
          <div className="border px-10 py-1 rounded-2xl text-sm text-gray-500 font-medium flex items-center">
            <span className='text-red-500 text-2xl'>♣</span> &nbsp;  FLAG
          </div>
          <div className="border px-10 py-1 rounded-2xl text-sm text-gray-500 font-medium flex items-center">
            <span className='text-rose-600 text-2xl'>♔</span> &nbsp;  ANIMATED
          </div>
        </div>


        <div className="grid-box mx-[5rem] my-10 grid grid-cols-[repeat(8,1fr)] gap-4 S">
          {data.filter((res) => {
            return search.toLowerCase() === '' ? res : res.name.toLowerCase().includes(search.toLowerCase());
          }).map((res, index) => (
            <Link href={`/icons/${res.slug}`}>
              <div key={index} className="flex flex-col justify-center items-center">
                <div className="w-[85%] flex items-center justify-center h-[7.5rem] shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px] rounded-md" >
                  <Image
                    src={res.profileimages}
                    width={25}
                    height={25}
                    alt="icons"
                  />
                </div>
                <p className='mt-2'>{res.name}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </>
  )
}

export default page
"use client"
// import { useState} from 'react'
import data from "../../outline/utils/datas.json";
import Image from 'next/image';
import Link from 'next/link'
// import Searchbox from '../components/searchBox/searchbox';
// import Filter from "../components/filter/page"




const suggestion = () => {
  return (
    <>

      <div className="h-full mt-10 ">

        <hr className='mt-[1rem] mx-3' />

        <h1 className="lg:ml-16 ml-5 mt-5 text-lg text-gray-700">Explore More Icon From ShadesIcons</h1>

        <div className="lg:mx-4 my-10 flex flex-wrap gap-3 lg:gap-6 min-h-60 items-center justify-center">
          {data.map((res, index) => (
            <Link href={`/outline/${res.slug}`} key={index}>
              <div  className="flex flex-col justify-center items-center">
                <div className="w-28 flex items-center justify-center h-[7.5rem] shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px] rounded-md" >
                  <Image
                    src={res.profileimages}
                    width={24}
                    height={24}
                    alt="icons"
                  />
                </div>
                <p className='mt-2 text-sm'>{res.name}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </>
  )
}

export default suggestion
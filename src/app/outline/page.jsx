"use client"
import { useState} from 'react'
import data from "./utils/datas.json";
import Image from 'next/image';
import Link from 'next/link'
import Searchbox from '../components/searchBox/searchbox';
import Filter from "../components/filter/page"




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

        <div className="flex gap-3 px-3 lg:px-[5rem] py-4 justify-between items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          <div className='flex gap-3'>
            <Filter
              primaryname="OUTLINE"
              style="text-sm text-gray-500 border flex items-center px-3 py-2 rounded-lg"
            />
            <Filter
              primaryname="MINI"
              style="text-sm text-gray-500 border flex items-center px-4 py-2 rounded-lg"
            />
            <Filter
              logo="♕"
              primaryname="GRADIENT"
              style="text-sm text-gray-500 border flex items-center px-3 py-2 rounded-lg"
            />
          </div>
          <p className='text-gray-500 text-sm'>Size 24X24</p>
        </div>


        <div className="ml-[1rem] lg:ml-[5rem] my-10 flex flex-wrap gap-3 lg:gap-6 min-h-60">
          {data.filter((res) => {
            return search.toLowerCase() === '' ? res : res.name.toLowerCase().includes(search.toLowerCase());
          }).map((res, index) => (
            <Link href={`/outline/${res.slug}`} key={index}>
              <div key={index} className="flex flex-col justify-center items-center">
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

export default page

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

        <div className="flex gap-3 mx-[5.5rem] mt-5 justify-between items-center">
          <div className='flex gap-3'>
            <Filter
              logo="✾"
              primaryname="OUTLINE"
              style="text-xl text-orange-500"
            />
            <Filter
              logo="♜"
              primaryname="MINI"
              style="text-xl text-green-500"
            />
            <Filter
              logo="♕"
              primaryname="GRADIENT"
              style="text-xl text-pink-600"
            />
          </div>
          <p className='text-gray-500'>Size 24X24</p>
        </div>


        <div className="grid-box mx-[5rem] my-10 grid grid-cols-[repeat(8,1fr)] gap-4 S">
          {data.filter((res) => {
            return search.toLowerCase() === '' ? res : res.name.toLowerCase().includes(search.toLowerCase());
          }).map((res, index) => (
            <Link href={`/outline/${res.slug}`}>
              <div key={index} className="flex flex-col justify-center items-center">
                <div className="w-[85%] flex items-center justify-center h-[7.5rem] shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px] rounded-md" >
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
"use client"
import { useState } from 'react'
import data from "./utils/datas.json";
import Image from 'next/image';
import "./box.css"
import Filter from '../components/filter/filter';
import Searchbox from '../components/searchBox/searchbox';

const page = () => {

  const [search, setSearch] = useState('');
  return (
    <>
      <div className="large-model">
        <div className="filter">
          <p>filter</p><i class="fa-solid fa-filter"></i>
          <hr />
          <div className="grid grid-cols-2 gap-2 mt-5 justify-center">
          <p className='border w-[7rem] p-1 flex items-center justify-center rounded border-slate-300 hover:border-indigo-300 '>
            <span className='text-green-400 font-extrabold text-2xl'>•</span>
            &nbsp;Animated 
          </p>
          <p className='border w-[8rem] p-1 flex items-center justify-center rounded border-slate-300 hover:border-indigo-300 '>
            <span className='text-blue-600 font-extrabold text-2xl'>•</span>
            &nbsp;Color Icons
          </p>
          <p className='border w-[10rem] p-1 flex items-center justify-center rounded border-slate-300 hover:border-indigo-300 '>
            <span className='text-indigo-500 font-extrabold text-2xl'>•</span>
            &nbsp;Gradient Icons
          </p>
          <p className='border w-[5rem] p-1 flex items-center justify-center rounded border-slate-300 hover:border-indigo-300 ml-10 '>
            <span className='text-orange-400 font-extrabold text-2xl'>•</span>
            &nbsp;Outline 
          </p>
          </div>
        </div>
        <div className="main-conatiner">
          <Searchbox
            func={(e) => setSearch(e.target.value)}
          />
          <hr className='mt-5' />
          <div className="grid-box">
            {data.filter((res) => {
              return search.toLowerCase() === '' ? res : res.name.toLowerCase().includes(search);
            }).map((res, index) => (
              <div key={index} className="main-icon-box">
                <div className="icon-box" >
                  <Image
                    src={res.profileimages}
                    width={30}
                    height={30}
                    alt="icons"
                  />
                </div>
                <p>{res.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default page
"use client"
import { useState } from 'react'
import data from "./utils/datas.json";
import Image from 'next/image';
import "./box.css"
import Link from 'next/link'
import Searchbox from '../components/searchBox/searchbox';
import Filter from "../components/filter/page"

const page = () => {

  const [search, setSearch] = useState('');
  return (
    <>
      <div className="large-model">
        <div className="filter">
          <Filter />
        </div>

        <div className="main-conatiner">
          <div className="w-[100%] sticky top-0 bg-white pt-10 z-50">
            <Searchbox
              func={(e) => setSearch(e.target.value)}
            />
          </div>

          <hr className='mt-[1rem]' />

          <div className="grid-box">
            {data.filter((res) => {
              return search.toLowerCase() === '' ? res : res.name.toLowerCase().includes(search.toLowerCase());
            }).map((res, index) => (
              <Link href={`/icons/${res.slug}`}>
                <div key={index} className="main-icon-box">
                  <div className="icon-box" >
                    <Image
                      src={res.profileimages}
                      width={30}
                      height={30}
                      alt="icons"
                    />
                  </div>
                  <p className='mt-2'>{res.name}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div >
    </>
  )
}

export default page
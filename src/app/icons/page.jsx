import React from 'react'
import data from "./utils/datas.json";
import Image from 'next/image';
import "./box.css"
import Filter from '../components/filter/filter';
import Searchbox from '../components/searchBox/searchbox';
const page = () => {
  return (
    <>
      <div className="large-model">
        <div className="filter">
          <p>filter</p>
          <hr />
          <button type="submit">Submit</button>
          <p>filter</p>
          <p>filter</p>
          <p>filter</p>
          <p>filter</p>
        </div>
        <div className="main-conatiner">
          <Searchbox />
          <hr className='mt-5' />
          <div className="grid-box">
            {data.map((res, index) => (
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
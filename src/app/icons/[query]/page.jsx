"use client"

import React from 'react'
// import { useParams, usePathname } from 'next/navigation';
import data from "../utils/datas.json"

const page = ({ params }) => {

  const id = params.query;

  const fileData = data.find((currEle, index, arr) => {
    if (currEle.slug == id) {
      return currEle
    }
  })

  return (
    <>
      <div>{fileData.name}</div>
      <div>{fileData.syntax}</div>
    </>
  )
}

export default page
"use client"

import React from 'react'
import { useParams, usePathname } from 'next/navigation';
import data from "../utils/datas.json"

const page = () => {
  const { id } = useParams();
  const pathname = usePathname();
  // console.log(id.query);

  const post = data.filter((post, index) => post.id === id ? post[index] : "n");
  // console.log(post)

  const variable = post.find((val, index) => {
    console.log(val.id === id)
  })

  console.log(variable)
  //   const getId = params.query[0]
  //   console.log(pathname);
  // const val = data.map((curr,index)=>{
  //   return curr.id === getId
  // })

  // if(val){
  //   console.log("found",val.name)
  // }else{
  //   console.log("error")
  // }
  return (
    <div>page</div>
  )
}

export default page
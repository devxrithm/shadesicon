"use client"

import React from 'react'
import data from "../utils/datas.json"
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Image from 'next/image';

const page = ({ params }) => {

  const id = params.query;

  const fileData = data.find((currEle, index, arr) => {
    if (currEle.slug == id) {
      return currEle
    }
  })
  const handleButtonClick = () => {
    alert("Button Clicked!");
  };
  return (
    <>

      <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm mx-auto">
        <Image
          src={fileData.profileimages}
          width={100}
          height={100}
          alt="icons"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{fileData.name}</h2>
          <SyntaxHighlighter language="html" style={vs2015}>
            {fileData.syntax}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  )
}

export default page
import React from 'react'
import Link from 'next/link';

const page = ({ primaryname, logo, style }) => {
    return (
        <>
            <div className="border px-10 py-1 text-sm rounded-2xl text-gray-500  font-medium  flex items-center">
                <span className={style}>{logo}</span> &nbsp; {primaryname}
            </div>

        </>
    )
}

export default page
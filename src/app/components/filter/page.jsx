import React from 'react'
import Link from 'next/link';

const page = ({ primaryname,style}) => {
    return (
        <>
            <div className={style}>
            {primaryname}
            </div>

        </>
    )
}

export default page
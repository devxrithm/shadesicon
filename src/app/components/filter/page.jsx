import React from 'react'
import Link from 'next/link';

const page = () => {
    return (
        <>
            <div className=' p-5 rounded w-[80%] bg-slate'>
                <p><span className='text-xl text-orange-500'>» </span>&nbsp;Filter</p>
                <hr />
                <div className="grid grid-cols-2 gap-2 mt-5 justify-center">
                    <Link href="/animated-icons"> <p className='border w-[7rem] p-1 flex items-center justify-center rounded border-slate-300 hover:border-indigo-300 '>
                        <span className='text-green-400 font-extrabold text-2xl'>•</span>
                        &nbsp;Animated
                    </p>
                    </Link>
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
        </>
    )
}

export default page
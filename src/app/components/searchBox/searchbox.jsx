import React from 'react'

const searchbox = ({func}) => {
    return (

        <form >
            <label className="sr-only">Search</label>
            <div className="shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] ">
            <input onChange={func} className='w-[100%] h-16 px-10 focus:border-transparent focus:outline-none' type="text" placeholder='Search Icons' />
          </div>
           
        </form>

    )
}

export default searchbox
import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { AiFillDelete } from 'react-icons/ai'

const Todos = ({ text, updateMode, deleteTodo }) => {
    return (
        <div className=' mobile:flex laptop:flex laptop:justify-between laptop:items-center mobile:justify-between mobile:items-center
        flex bg-pure-greys-100 justify-between py-2 px-3 my-6  mobile:my-4 tablet:my-8 items-center border rounded-md '>
            <div className=' text-xl text-richblack-800'>{text}</div>
            <div className='flex  gap-3'>
                <BiEdit onClick={updateMode} className=' text-xl text-caribbeangreen-400' />
                <AiFillDelete onClick={deleteTodo} className='text-xl text-pink-700' />
            </div>
        </div>
    )
}

export default Todos
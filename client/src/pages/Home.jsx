import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function Home() {
  return (
    <div className="overflow-hidden absolute">
      <img src="/bg.jpg" alt="" className='w-screen h-screen object-cover'/>
      <Link to='/users' className="absolute top-6 right-8">
            <button className="btn btn-outline border-black text-black py-0 shadow-lg flex items-center">
              <span className="text-xl">ENTER</span>
              <MdOutlineKeyboardDoubleArrowRight  className="size-10 animate" />
            </button>
      </Link>
    </div>
  )
}

export default Home

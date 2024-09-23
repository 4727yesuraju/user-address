import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function Home() {
  return (
      <Link to='/users' className="absolute top-6 right-8">
            <button className="btn btn-outline btn-accent  text-white py-0 shadow-lg flex items-center">
              <span className="text-xl">ENTER</span>
              <MdOutlineKeyboardDoubleArrowRight  className="size-8 animate" />
            </button>
      </Link>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='w-[100%] h-[100vh] flex  justify-center items-center'>

    <div className='flex flex-row gap-5 p-16 bg-gray-200'>
    <button class="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
    <div class="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
    <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
    <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
    <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
    <Link to={"/login"} class="z-10">Login</Link>
    </button>

    <button class="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-64 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
    <div class="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
    <div class="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
    <div class="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
    <div class="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
    <Link to={"/singin"} class="z-10">Singin</Link>
    </button>

    </div>

    </div>
    
    </>
  )
}

export default Home
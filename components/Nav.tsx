"use client";
import React, { useState } from 'react';

const Nav = () => {
    const [na,usena]=useState(false);
  return (
    <div className='px-5 bg-gray-500 py-4 flex justify-between flex-col md:flex-row border'>
        <div className="title p-4 text-4xl text-white flex justify-between uppercase">
            <h1 className='text-center head'>Hamza </h1>
            <span className='sm:hidden' onClick={()=>{usena(!na)}}>
                {na ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}

                
</span>
        </div>
        <div className={`nav p-4 bg-gray-400 md:bg-transparent md:block ${na ? 'block':'hidden'}`}>
            <ul className='text-center md:flex md:justify-between md:gap-4 uppercase text-white'>
                <li><a href="" className='hov'>Home</a></li>
                <li><a href="" className='hov'>About</a></li>
                <li><a href="" className='hov'>Services</a></li>
                <li><a href="" className='hov'>Project</a></li>
                <li><a href="" className='hov'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Nav
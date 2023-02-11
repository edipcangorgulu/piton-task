import React from 'react'
import logo from '../assets/Logo.svg'
import ıcon from '../assets/Icon.svg'
import heart from '../assets/HEART.svg'
import ıcon2 from '../assets/Icon2.svg'

const Header = () => {
    return (
        <>
            <div className='flex justify-center mt-10'>
                <img src={logo} className="flex justify-start w-40 h-10 mt-90" />
                <div className="flex items-center w-full h-10  rounded-lg focus-within:shadow-lg bg-gray-100 overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        className="h-full w-full  outline-none text-xs text-gray-700 bg-gray-100 pr-2"
                        type="text"
                        placeholder="Search" />
                </div>
                <div className='flex justify-end w-40 space-x-4 p-2'>
                    <img className='bg-gray-200' src={ıcon} />
                    <img className='bg-gray-200' src={heart} />
                    <img className='bg-gray-200' src={ıcon2} />
                </div>

            </div>

        </>
    )
}

export default Header

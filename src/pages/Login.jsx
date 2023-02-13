import React from 'react'
import img from '../assets/Picture.svg'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className=''>
            <div className='absolute lg:w-2/5 md:w-1/2 w-2/3'>
                <img className='' src={img} />
            </div>
            <div className="h-screen bg-white flex justify-end items-center mr-60">
                <div className="lg:w-2/5 md:w-1/2 w-2/3">
                    <Link to="/home">
                        <img src={logo} className="absolute ml-60 mt-8 " />
                    </Link>
                    <form className="bg-white p-10   min-w-full">
                        <h3 className="flex justify-start text-gray-600 font-bold font-sans mt-10" >Welcome back!</h3>
                        <h1 className="text-2xl mb-6 text-gray-600 font-bold font-sans">Login to your account</h1>
                        <div className='mt-14'>
                            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="email">E-mail</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" placeholder="john@mail.com" />
                        </div>
                        <div className='mt-7'>
                            <label className="text-gray-800 font-semibold block my-3 text-md" htmlFor="password">Password</label>
                            <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" placeholder="*******" />
                            <input type="checkbox" />
                            <span className='text-blue-800 ml-3'>Remember Me</span>
                        </div>
                        <button type="submit" className="w-full mt-40 mb-3 bg-orange-500 rounded-lg px-4 py-2 text-lg text-white  font-semibold font-sans">Login</button>
                        <button type="submit" className="w-full  bg-white rounded-lg px-4 py-2 text-lg text-blue-800 border-2 border-blue-800  font-semibold font-sans">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

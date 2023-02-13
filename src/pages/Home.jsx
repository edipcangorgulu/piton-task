import React from 'react'
import Header from '../components/Header'
import Banner from '../assets/Banner.png'
import BestSellers from '../components/BestSeller';


const Home = () => {

    return (
        <div className='m-20 '>
            <Header />
            <div className='flex justify-center'>
                <img className='relative mt-20 mb-20 w-full ml-10 mr-10' src={Banner} alt="" />
                <h1 className=' text-7xl absolute mt-56 mr-90 left-32 text-orange-300'>25% discount <br />
                    <span className='text-white'>all Paulo Coelho <br /> books!</span></h1>
            </div>
            <div className='m-10 m '>
                <BestSellers />
                <h1 className='text-2xl mt-10'>Classics</h1>
            </div>
        </div>
    )
}

export default Home

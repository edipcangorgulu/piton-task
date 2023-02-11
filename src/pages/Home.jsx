import React from 'react'
import Header from '../components/Header'
import axios from 'axios';
import data1 from '../veri.json'
import { useEffect, useState } from 'react';
import Banner from '../assets/Banner.png'
import BestSellers from '../components/BestSeller';




const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://assign-api.piton.com.tr/api/rest/products/1")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const dataArray = Object.values(data)
    console.log(dataArray)

    return (
        <div>
            <Header />
            <div className='flex justify-center'>
                <img className='relative mt-20 mb-20 w-full ml-10 mr-10' src={Banner} alt="" />
                <h1 className=' text-7xl absolute mt-56 mr-96 left-11 text-orange-300'>25% discount <br />
                    <span className='text-white'>all Paulo Coelho <br /> books!</span></h1>
            </div>
            <BestSellers />
            <h1 className='text-2xl mt-10'>Classics</h1>
        </div>
    )
}

export default Home

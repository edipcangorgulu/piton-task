import React from 'react'
import axios from 'axios';
import data1 from '../veri.json'
import { useEffect, useState } from 'react';


const BestSeller = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const bookData = async () => {
            await axios.get("https://assign-api.piton.com.tr/api/rest/products/1")
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error(error);
                })
        }
        bookData()
    }, []);

    const dataArray = Object.values(data)

    return (
        <div className=''>
            <div className='grid grid-cols-2 gap-4' >
                <h1 className='text-2xl col-start-1'>Best Seller</h1>
                <h2 className='col-end-5 col-span-2 text-orange-600' >View All</h2>
            </div>
            {dataArray.map((item) => (
                <ul className='grid grid-cols-6 gap-3 ' key={item}>
                    <li className='bg-gray-100'>
                        <img src={item[0].cover} alt={item[0].name} />
                        {item[0].author} <br />
                        {item[0].price}$
                    </li>
                    <li className='bg-gray-100'>
                        <img src={item[1].cover} alt={item[1].name} />
                        {item[1].author} <br />
                        {item[1].price}$
                    </li>
                    <li className='bg-gray-100'>
                        <img src={item[2].cover} alt={item[2].name} />
                        {item[2].author} <br />
                        {item[2].price}$
                    </li>
                    <li className='bg-gray-100'>
                        <img src={item[3].cover} alt={item[3].name} />
                        {item[3].author} <br />
                        {item[3].price}$
                    </li>
                    <li className='bg-gray-100'>
                        <img src={item[4].cover} alt={item[4].name} />
                        {item[4].author} <br />
                        {item[4].price}$
                    </li>
                    <li className='bg-gray-100'>
                        <img src={item[5].cover} alt={item[5].name} />
                        {item[5].author} <br />
                        {item[5].price}$
                    </li>
                </ul>
            ))}
        </div>
    )
}

export default BestSeller

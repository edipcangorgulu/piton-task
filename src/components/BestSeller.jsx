import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';


const BestSeller = () => {
    const [data, setData] = useState([])
    const [coverImage, setCoverImage] = useState([]);
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
    console.log(dataArray);
    useEffect(() => {
        const ımgData = async () => {
            try {
                const response = await axios.post(
                    "https://assign-api.piton.com.tr/api/rest/cover_image",
                    {
                        fileName: "tutunamayanlar.png",
                    }
                );
                setCoverImage(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        ımgData();
    }, []);

    const dune = "https://s3.piton.com.tr/assignment/dune.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230211T201020Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=33f5a4c5b32423b3469311a92f9a268c9e04c5b7db9edb2f440e5e3ce9fe2418";
    const george = "https://s3.piton.com.tr/assignment/1984.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230211T203200Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=740178efcb64dd7041d480010ac2adabcb88d2dc706ac737d0638f8f1c50fd5c";
    const ikigai = "https://s3.piton.com.tr/assignment/ikigai.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230211T203311Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=70bee5a1e138f719cb5c950c8158bff8b0429910f8d7a0454cc0f76c260dd2fc";
    const cavdar = "https://s3.piton.com.tr/assignment/cavdar-tarlasinda-cocuklar.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230211T203424Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=e0de330c2a5ef0e34c18b9003d96583a192e8d948e933110cd18c0e1c73f1893";
    const kürk = "https://s3.piton.com.tr/assignment/kurk-mantolu-madonna.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230211T203658Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=d3e780e9d97ce2b1ef8c3c587352c3e3c2abd9fe06c81c721e50b13d73ebadb5";
    const tutunamayanlar = "https://s3.piton.com.tr/assignment/tutunamayanlar.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230211T203817Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=af1f0d504cbe686006fe5de27bc4c8e7414192b052e1836e55a7314a23905a9b";
    const bookCovers = [dune, george, ikigai, cavdar, kürk, tutunamayanlar];

    return (
        <div className="">
          <div className="grid grid-cols-2 gap-4">
            <h1 className="text-2xl col-start-1">Best Seller</h1>
            <a href="bookdetail">
              <h2 className="col-end-5 col-span-2 text-orange-600">View All</h2>
            </a>
          </div>
          {dataArray.map((item, id) => (
            <ul key={id} className="grid grid-cols-6 gap-3">
              {item.map((book, index) => (
                <li className="bg-gray-100" key={book.name + index}>
                  <img src={bookCovers[index]} alt={book.name} />
                  {book.author} <br />
                  {book.price}$
                </li>
              ))}
            </ul>
          ))}
        </div>
      );
}

export default BestSeller

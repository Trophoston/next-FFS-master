"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { setapiid } from '../utils.js';


export default function VegPrice() {

  const {price_transfer } = setapiid();

  const [vegData, setVegData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [progress, setProgress] = useState(0); // State to manage progress value

  const now = new Date();
  const year = now.getFullYear(); // 2024
  const month = now.getMonth() + 1; // Months are zero-indexed (0-11), so add 1 for the correct month (1-12)
  const day = now.getDate(); // Day of the month (1-31)
  const date = now.getDay();

  
  
  //   console.log(api_pak);

  const api_pak = price_transfer;


  var api_url = "";

  if (date == 0) {//avoid holiday
    api_url = `&from_date=${year}-${month}-${day - 3}&to_date=${year}-${month}-${day - 2}`;
  }
  else if (date == 6) {
    api_url = `&from_date=${year}-${month}-${day - 2}&to_date=${year}-${month}-${day - 1}`;
  }
  else {
    api_url = `&from_date=${year}-${month}-${day - 1}&to_date=${year}-${month}-${day}`;
  }

  useEffect(() => {
    // Fetch data
    async function fetchData() {
      setProgress(0); // Initialize progress
      const totalRequests = api_pak.length;
      let completedRequests = 0;

      try {
        const responses = await Promise.all(
          api_pak.map(async id => {
            try {
              const response = await fetch("https://dataapi.moc.go.th/gis-product-prices?product_id=" + id + api_url);
              console.log("debug url api : https://dataapi.moc.go.th/gis-product-prices?product_id=" + id + api_url);
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              completedRequests += 1;
              setProgress(Math.floor((completedRequests / totalRequests) * 100)); // Update progress
              return data;
            } catch (error) {
              console.error(`Failed to fetch data for product ID: ${id}`, error);
              completedRequests += 1; // Still update progress even if one request fails
              setProgress(Math.floor((completedRequests / totalRequests) * 100)); // Update progress
              return null; // Return null for failed requests to be filtered out later
            }
          })
        );

        // Filter out any null values from failed fetch requests
        const validResponses = responses.filter(response => response !== null);

        function findColor(p, past_p) {
          if (p > past_p) {
            return "text-red-600 hp alc";
          } else if (p < past_p) {
            return "text-green-500 hp alc";
          } else {
            return "text-sky-400 hp alc";
          }
        }

        const data = validResponses.map(response => {
          const priceList = response.price_list || [];
          const currentPrice = priceList[0]?.price_max || 0;
          const pastPrice = priceList[1]?.price_max || priceList[0]?.price_max;

          return {
            id: response.product_id,
            name: response.product_name,
            price: currentPrice,
            past_price: pastPrice,
            gtag: response.group_name,
            unit: response.unit || "บาท/หน่วย",
            color: findColor(currentPrice, pastPrice),
          };
        });

        setVegData(data);
        setLoading(false);
        setProgress(100); // Set progress to 100% after loading is complete
      } catch (error) {
        setError(error);
        setLoading(false);

        Swal.fire({
          title: 'Error!',
          text: 'Cannot get data',
          icon: 'error',
        });
      }
    }

    fetchData();
  }, [api_url]);


  if (loading) {//loading page
    return (
      <div className='flex flex-col justify-center items-center '>
        <p className='text-center text-4xl pb-14 text-[#2A5B3E] font-extrabold drop-shadow-lg'>กำลังโหลดข้อมูล</p>
        <div className="radial-progress " style={{ "--value": progress, "--size": "12vw", "--thickness": "1.5vw", "color": "#2A5B3E", "font-size": "3vw" }} role="progressbar">
          {progress}%
        </div>
      </div>
    );
  }
  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  const displayedData = showAll ? vegData : vegData.slice(0, 10);//read more

  var count_id = 0;

  return (
    <div>
      <p className='text-4xl my-5 text-[#2A5B3E] font-extrabold drop-shadow-lg'>สินค้านำเข้า</p>

      <div className="bg-white rounded-xl p-2">

        <table className="table text-xs sm:text-lg table-fixed text-[#2A5B3E]">
          <thead className='text-xs sm:text-lg text-[#2A5B3E] border-b-4 border-[#759D78] '>
            <tr>
              <th className='hp alc w-8 sm:w-20'>ลำดับ</th>
              <th className='hp alc'>รายชื่อสินค้า</th>
              <th className='hp alc'>ราคาปัจจุบัน</th>
              <th className='hp alc'>ความเปลี่ยนแปลง</th>
              <th className='hp ale'>หมวดหมู่</th>
            </tr>
          </thead>
          <tbody>
            {displayedData
              .filter(item => item && item.id) // Filter out items that are null or do not have an id
              .map(item => {
                // Calculate and round the difference to 2 decimal places
                const priceDifference = ((item.past_price - item.price).toFixed(2));
                count_id ++;
                return (
                  <tr key={item.id} className='hover:bg-gray-200'>
                    <td className='hp alc'>{count_id}</td>
                    <td className='hp alc'>{item.name}</td>
                    <td className='hp alc'>{item.price} {item.unit}</td>
                    <td className={item.color}>{priceDifference} {item.unit}</td>
                    <td className='hp alc'>{item.gtag}</td>
                  </tr>
                );
              })}
          </tbody>


        </table>
        <div onClick={() => setShowAll(!showAll)}
          className="text-center font-normal text-lg border-transparent hover:border-transparent bg-[#759D78] text-white rounded px-4 py-2 hover:bg-[#2A5B3E]">
          {showAll ? "แสดงน้อยลง" : "แสดงเพิ่มเติม"}
        </div>

      </div>
    </div>
  );
}

"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function VegPrice() {
  const [vegData, setVegData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const now = new Date();
  const year = now.getFullYear(); // 2024
  const month = now.getMonth() + 1; // Months are zero-indexed (0-11), so add 1 for the correct month (1-12)
  const day = now.getDate(); // Day of the month (1-31)

  const slide_ctag = {
    ผลไม้:{
      name: "ผลไม้",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13001&from_date=2018-01-01&to_date=2018-01-05",
      img: "/fruit.jpg",
    },
    สินค้าสด:{
      name: "สินค้าสด",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13002&from_date=2018-01-01&to_date=2018-01-05",
      img: "/meat.jpg",
    },
    ปลาและอาหารทะเล:{
      name: "ปลาและอาหารทะเล",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13003&from_date=2018-01-01&to_date=2018-01-05",
      img: "/fish.jpg",
    },
    ดอกไม้:{
      name: "ดอกไม้",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13004&from_date=2018-01-01&to_date=2018-01-05",
      img: "/flower.jpg",
    },
    ข้าว:{
      name: "ข้าว",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13005&from_date=2018-01-01&to_date=2018-01-05",
      img: "/rice.jpg",
    },
    ผัก:{
      name: "ผัก",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13006&from_date=2018-01-01&to_date=2018-01-05",
      img: "/pak.jpg",
    },
    อาหารแห้ง:{
      name: "อาหารแห้ง",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13007&from_date=2018-01-01&to_date=2018-01-05",
      img: "/spice.jpg",
    },
    ผลิตภัณฑ์แปรรูป:{
      name: "ผลิตภัณฑ์แปรรูป",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13008&from_date=2018-01-01&to_date=2018-01-05",
      img: "/tranform.png",
    },
  };



  const api_pak = [
    "P13001",
    "P13002",
    "P13003",
    "P13004",
    "P13005",
    "P13006",
    "P13007",
    "P13008",
    "P13009",
    "P13010",
    "P13011",
    "P13012",
    "P13013",
  ];

  const api_url = `&from_date=${year}-${month}-${day-3}&to_date=${year}-${month}-${day-2}`;

  useEffect(() => {
    async function getVegData() {
      try {
        const responses = await Promise.all(api_pak.map(id =>
          axios.get("https://dataapi.moc.go.th/gis-product-prices?product_id=" + id + api_url)
        ));

        const data = responses.map(response => ({
          id: response.data.product_id,
          name: response.data.product_name,
          price: Math.ceil(response.data.price_max_avg),
          gtag: response.data.group_name,
          unit: response.data.unit,
          maxp: response.data.price_list[0].price_max,//today max price
          min
        }));


        setVegData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    getVegData();
  }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div className='lg:ms-60 lg:me-14   "' >
      <div className='flex flex-col items-center'>
        <p className='text-center text-6xl text-[#2A5B3E] font-extrabold drop-shadow-lg ' >ราคาสินค้ารายวัน</p>

        <input type="text" placeholder="ค้นหารายการสินค้า" className="input text-xl text-black rounded-lg border-gray  bg-white placeholder:text-gray h-11 w-auto m-9 sm:w-2/3 " />

      </div>

      <div className=''>
        <p className=' text-5xl mb-5 text-[#2A5B3E] font-extrabold drop-shadow-lg ' >หมวดหมู่</p>
        <div className="overflow-x-scroll flex space-x-4 pb-2 my-3 h-48 sm:h-auto scrollbar-thin scrollbar-thumb-rounded bg-transparent">
        
          {Object.keys(slide_ctag).map(key => (
            <a href={slide_ctag[key].url} className="card bg-[#759D78] flex-none w-48 sm:w-72 hover:bg-[#659178] blhv">
              <figure>
                <img src={"/vegprice"+slide_ctag[key].img} draggable="false" alt={`${slide_ctag[key].name} icon`} className="w-full h-44 object-cover" />
              </figure>
              <div  className="card-body p-4">
                <p className="text-center text-3xl text-white font-bold">{slide_ctag[key].name} </p>
              </div>
            </a>
          ))}
        </div>
      </div>


      <div className="bg-white rounded-xl p-2">
        <table className="table text-xs sm:text-lg text-[#2A5B3E]">
          <thead className='text-xs sm:text-lg  text-[#2A5B3E] border-b-4 border-[#759D78]'>
            <tr className=''>
              <th className='hp'>รายชื่อสินค้า</th>
              <th className='hp'>ราคาปัจจุบัน</th>
              <th className='hp'>ความเปลี่ยนแปลง</th>
              <th className='hp'>หมวดหมู่</th>
            </tr>
          </thead>
          <tbody>
            {vegData.map(item => (
              <tr key={item.id}>
                <td className='hp'>{item.name}</td>
                <td className='hp text-[#bb0000]'>{item.price}{item.unit}</td>
                <td className='hp text-[#00bb00]'>+{Math.floor(Math.random() * 10) + 1}{item.unit}</td>
                <td>{item.gtag}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>notes:เพิ่มระบบseemore + sorting(jqury) + pricewithyesterday + </p>
      </div>
    </div>
  );
}

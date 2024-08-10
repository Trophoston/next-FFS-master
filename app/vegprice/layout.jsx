"use client";
import Header from '../components/header'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

export function setapiid() {
  const price_veg = [];
  for (let i = 13001; i <= 13092; i++) {
    price_veg.push(`p${i}`);
  }

  const price_fruit = [];
  for (let i = 14001; i <= 14046; i++) {
    price_fruit.push(`p${i}`);
  }
  for (let i = 14001; i <= 14036; i++) {
    price_fruit.push(`w${i}`);
  }

  const price_nut = [];
  for (let i = 16001; i <= 16028; i++) {
    price_nut.push(`p${i}`);
  }

  const price_rice = [];
  for (let i = 11001; i <= 11059; i++) {
    price_rice.push(`r${i}`);
  }
  for (let i = 12001; i <= 12010; i++) {
    price_rice.push(`r${i}`);
  }

  const price_raw = [];
  for (let i = 11001; i <= 11062; i++) {
    price_raw.push(`w${i}`);
  }

  const price_sea = [];
  for (let i = 12001; i <= 12021; i++) {
    price_sea.push(`w${i}`);
  }

  const price_garlic = [];
  for (let i = 15001; i <= 15050; i++) {
    price_garlic.push(`w${i}`);
  }

  const price_transfer = [];
  for (let i = 16001; i <= 16044; i++) {
    price_transfer.push(`w${i}`);
  }
  for (let i = 17001; i <= 17015; i++) {
    price_transfer.push(`w${i}`);
  }

  const price_palm = [];
  for (let i = 18001; i <= 18106; i++) {
    price_palm.push(`w${i}`);
  }

  return {
    price_veg,
    price_fruit,
    price_nut,
    price_rice,
    price_raw,
    price_sea,
    price_garlic,
    price_transfer,
    price_palm,
  };
}


export default function RootLayout({ children }) {

  const slide_ctag = {
    ผัก: {
      name: "ผัก",
      url: "/vegprice",
      img: "/pak.jpg",
    },
    ผลไม้: {
      name: "ผลไม้",
      url: "/vegprice/fruit",
      img: "/fruit.jpg",
    },
    ถั่ว: {
      name: "พืชน้ำมันและน้ำมันพืช",
      url: "/vegprice/nut",
      img: "/flower.jpg",
    },
    สินค้าสด: {
      name: "สินค้าสด",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13002&from_date=2018-01-01&to_date=2018-01-05",
      img: "/meat.jpg",
    },
    ปลาและอาหารทะเล: {
      name: "ปลาและอาหารทะเล",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13003&from_date=2018-01-01&to_date=2018-01-05",
      img: "/fish.jpg",
    },
    ข้าว: {
      name: "ข้าว",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13005&from_date=2018-01-01&to_date=2018-01-05",
      img: "/rice.jpg",
    },
    อาหารแห้ง: {
      name: "อาหารแห้ง",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13007&from_date=2018-01-01&to_date=2018-01-05",
      img: "/spice.jpg",
    },
    ผลิตภัณฑ์แปรรูป: {
      name: "ผลิตภัณฑ์แปรรูป",
      url: "https://dataapi.moc.go.th/gis-product-prices?product_id=P13008&from_date=2018-01-01&to_date=2018-01-05",
      img: "/tranform.png",
    },
  };

  return (
    <div className='lg:ms-60 lg:me-14'>
        <div className='flex flex-col items-center'>
        <p className='text-center text-6xl text-[#2A5B3E] font-extrabold drop-shadow-lg'>ราคาสินค้ารายวัน</p>
        <input type="text" placeholder="ค้นหารายการสินค้า" className="input text-xl text-black rounded-lg border-gray bg-white placeholder:text-gray h-11 w-auto m-9 sm:w-2/3" />
      </div>

      <div>
        <p className='text-5xl mb-5 text-[#2A5B3E] font-extrabold drop-shadow-lg'>หมวดหมู่</p>
        <div className="overflow-x-scroll flex space-x-4 pb-2 my-3 h-48 sm:h-auto scrollbar-thin scrollbar-thumb-rounded bg-transparent">
          {Object.keys(slide_ctag).map(key => (
            <a key={key} href={slide_ctag[key].url} className="card bg-[#759D78] flex-none w-48 sm:w-72 hover:bg-[#659178] blhv">
              <figure>
                <img src={"/vegprice" + slide_ctag[key].img} draggable="false" alt={`${slide_ctag[key].name} icon`} className="w-full h-44 object-cover" />
              </figure>
              <div className="card-body p-4">
                <p className="text-center text-3xl text-white font-bold">{slide_ctag[key].name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className='mt-20'>
        {children}
      </div>
    </div>
  );
}

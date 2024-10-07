"use client";
import Header from '../components/header';
import React from 'react';

// Import setapiid if needed
// import { setapiid } from '../utils'; // Uncomment if you need to use setapiid in this file

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
    ข้าว: {
      name: "ข้าว",
      url: "/vegprice/rice",
      img: "/rice.jpg",
    },
    สินค้าสด: {
      name: "สินค้าสด",
      url: "/vegprice/raw",
      img: "/meat.jpg",
    },
    อาหารแห้ง: {
      name: "พืชอาหาร",
      url: "/vegprice/garlic",
      img: "/spice.jpg",
    },
    ทะเล: {
      name: "สินค้าทะเล",
      url: "/vegprice/sea",
      img: "/fish.jpg",
    },
    ผลิตภัณฑ์แปรรูป: {
      name: "สินค้านำเข้า",
      url: "/vegprice/transform",
      img: "/tranform.webp",
    },
  };

  return (
    <div className="lg:ms-60 lg:me-14">
      <div className="flex flex-col items-center mb-14">
        <p className="text-center text-6xl text-[#2A5B3E] font-extrabold drop-shadow-lg">
          ราคาสินค้ารายวัน
        </p>
      </div>

      <div>
        <p className="text-5xl mb-5 text-[#2A5B3E] font-extrabold drop-shadow-lg">
          หมวดหมู่
        </p>
        <div className="overflow-x-scroll flex space-x-4 pb-2 my-3 h-48 sm:h-auto scrollbar-thin scrollbar-thumb-rounded bg-transparent">
          {Object.keys(slide_ctag).map((key) => (
            <a
              key={key}
              href={slide_ctag[key].url}
              className="card bg-[#759D78] flex-none w-48 sm:w-72 hover:bg-[#659178] blhv"
            >
              <figure>
                <img
                  src={"/vegprice" + slide_ctag[key].img}
                  draggable="false"
                  alt={`${slide_ctag[key].name} icon`}
                  className="w-full h-44 object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <p className="text-center text-3xl text-white font-bold">
                  {slide_ctag[key].name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-20">{children}</div>
      <p className="mt-8">
        *ระบบนี้จะไม่ทำงานในวันหยุดและหลังวันหยุดนักขัตฤกษ์1วัน หากพบเจอปัญหาหรือมีข้อสงสัยโปรดแจ้งแอดมิน <br/>
        *ข้อมูลนี้อ้างอิงจาก<a href="https://data.moc.go.th/">กระทรวงพาณิชย์</a>
      </p>
    </div>
  );
}

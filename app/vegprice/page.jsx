"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function VegPrice() {
  const [vegData, setVegData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    async function getVegData() {
      try {
        const responses = await Promise.all(api_pak.map(id => 
          axios.get(`https://dataapi.moc.go.th/gis-product-prices?product_id=${id}&from_date=2018-01-01&to_date=2018-01-05`)
        ));
        
        const data = responses.map(response => ({
          id: response.data.product_id,
          name: response.data.product_name,
          price: Math.ceil(response.data.price_max_avg), 
          gtag: response.data.group_name,
          unit: response.data.unit,
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>     
      <div class="lg:ms-60 lg:me-14   bg-white rounded-xl ">
      <table  class="table text-lg text-[#2A5B3E]">
          <thead className='text-lg text-[#2A5B3E] border-b-4 border-[#759D78]'>
            <tr>
              <th >รายชื่อสินค้า</th>
              <th >ราคาปัจจุบัน</th>
              <th >ความเปลี่ยนแปลง</th>
              <th >หมวดหมู่</th>
              <th><FontAwesomeIcon icon={faFilter} style={{ width: "20px", height: "20px" }}  /></th>
            </tr>
          </thead>
          <tbody>
          {vegData.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td className='text-[#bb0000]'>{item.price}{item.unit}</td>
          <td className='text-[#00bb00]'>+{Math.floor(Math.random() * 10) + 1}{item.unit}</td>
          <td>{item.gtag}</td>
        </tr>
      ))}
          </tbody>
        </table>
        <p>notes:เพิ่มระบบseemore + sorting(jqury) + pricewithyesterday + </p>
    </div>
    </>
  );
}

'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';




const Banner = () => {

  const path = usePathname();

  var sauce = "";
  var classy = "block";


  if (path == "/") {
    sauce = "/banner/main.png";
  }
  else if (path == "/fertul") {
    sauce = "/banner/fertul.png";
  }
  else if (path == "/vegprice") {
    sauce = "/banner/price.png";
  }
  else if (path == "/terrian") {
    sauce = "/banner/main.png";
  }
  else if (path == "/weather") {
    sauce = "/banner/weather.png";
  }
  else if (path == "/kwamru"){
    sauce = "/banner/main.png";
  }
  else {
    classy = "hidden";
  }


  


  return (
    <>
      <div className='banner'>
        <Image draggable="false" src={sauce} width={1861} height={396} className={classy} />
      </div>
    </>
  )
}
export default Banner
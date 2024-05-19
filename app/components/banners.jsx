'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMountainSun, faMoneyBillWheat, faJarWheat, faCloudSunRain, faBars } from "@fortawesome/free-solid-svg-icons";




const Banner = () => {

  const path = usePathname();


  if (path == "/") {
  }
  else if (path == "/fertul") {
  }
  else if (path == "/vegprice") {
  }
  else if (path == "/terrian") {
  }
  else if (path == "/weather") {
  }
  else {
    
  }


  


  return (
    <>
    </>
  )
}
export default Banner
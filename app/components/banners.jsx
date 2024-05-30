'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';




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
      <div>
        <Image src="/image.jpg" alt="Picture of the author" width={50} height={50} className="rounded-full" />
      </div>
    </>
  )
}
export default Banner
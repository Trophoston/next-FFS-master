'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMountainSun, faMoneyBillWheat, faJarWheat, faCloudSunRain, faGraduationCap, faBars } from "@fortawesome/free-solid-svg-icons";


// var path = useRouter() 



var house, JarWheat, MoneyBillWheat, MountainSun, CloudSunRain;


const Slidebar = () => {
    const path = usePathname();

    const nonactive = "px-2 py-5 text-white hover:bg-[#1a3f2e] hover:text-white text-2xl ";

    JarWheat = MoneyBillWheat = MountainSun = CloudSunRain = house = nonactive;

    useEffect(() => {
      const toggleButton = document.querySelector('.toggless');
      const slidetex = document.querySelector('.slidetex');
      toggleButton.onclick = function () {
          this.classList.toggle('active');
          slidetex.classList.toggle('active');
        };

    }, []);

    return (
        <>


            <div className="relative slidebar">
                <div className="fixed">
                <ul className="min-h-full bg-[#2a5b3e] text-base-content grid-rows-1" style={{height:"100vh"}}>
            <li  className="px-2 py-3 text-white bg-[#1a4d2e] toggless "><label className="btn btn-square btn-ghost  text-white">
                        <FontAwesomeIcon   icon={faBars} style={{ width: "40px", height: "40px" }} /> 
                  </label></li>
                <li className={house}><Link href={"/"} ><FontAwesomeIcon icon={faHouse} style={{ width: "40px", height: "40px" }} /> <p className='slidetex'>หน้าแรก</p></Link></li>
            <li className={JarWheat}><Link href={"/fertul"} ><FontAwesomeIcon icon={faJarWheat} style={{ width: "40px", height: "40px" }} /><p  className='slidetex'>การคำนวนปุ๋ย</p></Link></li>
            <li className={MoneyBillWheat}><Link href={"/vegprice"} ><FontAwesomeIcon icon={faMoneyBillWheat} style={{ width: "40px", height: "40px" }} /> <p  className='slidetex'>วิเคราห์ภูมิศาสตร์</p></Link></li>
            <li className={MountainSun}><Link href={"/terrian"} ><FontAwesomeIcon icon={faMountainSun} style={{ width: "40px", height: "40px" }} /><p  className='slidetex'>วิเคราะห์สภาพอากาศ</p></Link></li>
            <li className={CloudSunRain}><Link href={"/weather"} ><FontAwesomeIcon icon={faCloudSunRain} style={{ width: "40px", height: "40px" }} /> <p  className='slidetex'>ราคาพืชผล</p></Link></li>
            <li className={CloudSunRain}><Link href={"/weather"} ><FontAwesomeIcon icon={faGraduationCap} style={{ width: "40px", height: "40px" }} /> <p  className='slidetex'>ผลงานนักเรียน</p></Link></li>
                  </ul>
                </div>
            </div>
        </>
    )
}
export default Slidebar


{/* <div className="relative slidebar">
        <div className="drawer drawer-open ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                

            </div>
            <div className="drawer-side">
                
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className=" w-20 min-h-full bg-base-200 text-base-content">
                <li>
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost"onClick={console.log("hello")} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
                </li>
            <li className={house}><Link href={"/"} ><FontAwesomeIcon icon={faHouse} style={{ width: "40px", height: "40px" }} /></Link></li>
            <li className={JarWheat}><Link href={"/fertul"} ><FontAwesomeIcon icon={faJarWheat} style={{ width: "40px", height: "40px" }} /></Link></li>
            <li className={MoneyBillWheat}><Link href={"/vegprice"} ><FontAwesomeIcon icon={faMoneyBillWheat} style={{ width: "40px", height: "40px" }} /></Link></li>
            <li className={MountainSun}><Link href={"/terrian"} ><FontAwesomeIcon icon={faMountainSun} style={{ width: "40px", height: "40px" }} /></Link></li>
            <li className={CloudSunRain}><Link href={"/weather"} ><FontAwesomeIcon icon={faCloudSunRain} style={{ width: "40px", height: "40px" }} /></Link></li>
                </ul>

            </div>
        </div>
    </div> */}
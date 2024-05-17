'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMountainSun, faMoneyBillWheat, faJarWheat, faCloudSunRain, faGraduationCap, faBars } from "@fortawesome/free-solid-svg-icons";

const Slidebar = () => {
    const path = usePathname();

    const links = "text-white text-2xl flex column justify-center items-center gap-2";

    const nonactive = "px-2 py-5 text-white  bg-[#2a5b3e] hover:bg-[#1a3f2e] hover:text-white text-2xl flex column ";

    let house, JarWheat, MoneyBillWheat, MountainSun, CloudSunRain;

    JarWheat = MoneyBillWheat = MountainSun = CloudSunRain = house = nonactive;

    useEffect(() => {
        const toggleButton = document.querySelector('.toggless');
        toggleButton.onclick = function () {
            this.classList.toggle('active');
            document.querySelectorAll('.slidetex').forEach(slidetex => {
                slidetex.classList.toggle('active');
            });
        };
    }, []);

    return (
        <>
            <div className="relative slidebar">
                <div className="fixed">
                    <ul className="min-h-full text-base-content grid-rows-1 " style={{height:"100vh"}}>
                        <li className="px-2 py-3 text-white transparent toggless">
                            <label className="btn btn-square btn-ghost text-white">
                                <FontAwesomeIcon icon={faBars} style={{ width: "40px", height: "40px" }} />
                            </label>
                        </li>
                        <li className={house}>
                            <Link href={"/"} className={links} >
                                <FontAwesomeIcon icon={faHouse} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>หน้าแรก</p>
                            </Link>
                        </li>
                        <li className={JarWheat}>
                            <Link href={"/fertul"} className={links}>
                                <FontAwesomeIcon icon={faJarWheat} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>การคำนวนปุ๋ย</p>
                            </Link>
                        </li>
                        <li className={MoneyBillWheat}>
                            <Link href={"/vegprice"} className={links}>
                                <FontAwesomeIcon icon={faMoneyBillWheat} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>วิเคราห์ภูมิศาสตร์</p>
                            </Link>
                        </li>
                        <li className={MountainSun}>
                            <Link href={"/terrian"} className={links}>
                                <FontAwesomeIcon icon={faMountainSun} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>วิเคราะห์สภาพอากาศ</p>
                            </Link>
                        </li>
                        <li className={CloudSunRain}>
                            <Link href={"/weather"} className={links}>
                                <FontAwesomeIcon icon={faCloudSunRain} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>ราคาพืชผล</p>
                            </Link>
                        </li>
                        <li className={CloudSunRain}>
                            <Link href={"/weather"} className={links}>
                                <FontAwesomeIcon icon={faGraduationCap} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>ผลงานนักเรียน</p>
                            </Link>
                        </li>
                        <li className=' bg-[#2a5b3e] ' style={{height:"100vh"}}>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Slidebar;


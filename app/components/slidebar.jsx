'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMountainSun, faMoneyBillWheat, faJarWheat, faCloudSunRain, faGraduationCap, faBars } from "@fortawesome/free-solid-svg-icons";

const Slidebar = () => {
    const path = usePathname();
    const links = "text-white text-2xl flex items-center "; // Adjusted to align items horizontally
    const nonactive = "px-3.5 py-5  text-white bg-[#2a5b3e] hover:bg-[#1a3f2e] hover:text-white text-2xl flex "; // Adjusted to align items horizontally
    let house, JarWheat, MoneyBillWheat, MountainSun, CloudSunRain;
    JarWheat = MoneyBillWheat = MountainSun = CloudSunRain = house = nonactive;

    useEffect(() => {
        const toggleButton = document.querySelector('.toggless');
        const slideTexts = document.querySelectorAll('.slidetex');

        const handleToggle = () => {
            const isActive = toggleButton.classList.toggle('active');

            slideTexts.forEach(slidetex => {
                if (isActive) {
                    slidetex.style.display = 'inline-block';
                    const fullWidth = slidetex.scrollWidth + 'px';
                    slidetex.style.width = fullWidth;
                    slidetex.style.opacity = '1';
                    slidetex.classList.add('active');
                } else {
                    slidetex.style.width = slidetex.scrollWidth + 'px'; // Set to full width to start collapse
                    window.requestAnimationFrame(() => {
                        slidetex.style.width = '0';
                        slidetex.style.opacity = '0'; // Fade out
                    });
                   
                }
            });
        };

        toggleButton.addEventListener('click', handleToggle);
        return () => toggleButton.removeEventListener('click', handleToggle);
    }, []);

    return (
        <>
            <div className="relative slidebar">
                <div className="fixed" >
                {/* px-2  pt-2.5 pb-1 */}
                    <div className="px-2  pt-2.5 pb-1 lg:py-3 text-white transparent toggless" >  
                    <label className="btn btn-square btn-ghost text-white">
                                <FontAwesomeIcon icon={faBars} style={{ width: "40px", height: "40px" }} />
                            </label>
                    </div>
                        


                    <ul className="min-h-full text-base-content grid-rows-1 bg-[#2a5b3e] flex-col " style={{ height: "100vh" }} > 

                        
                        <Link href={"/"} className={house}>
                            <li className={links}>
                                <FontAwesomeIcon icon={faHouse} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>หน้าแรก</p>
                            </li>
                        </Link>

                        <Link href={"/vegprice"} className={MoneyBillWheat}>
                            <li className={links}>
                                <FontAwesomeIcon icon={faMoneyBillWheat} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>วิเคราห์ภูมิศาสตร์</p>
                            </li>
                        </Link>

                        <Link href={"/terrian"} className={MountainSun}>
                            <li className={links}>
                                <FontAwesomeIcon icon={faMountainSun} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>วิเคราะห์สภาพอากาศ</p>
                            </li>
                        </Link>

                        <Link href={"/weather"} className={CloudSunRain}>
                            <li className={links}>
                                <FontAwesomeIcon icon={faCloudSunRain} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>ราคาพืชผล</p>
                            </li>
                        </Link>

                        <Link href={"/fertul"} className={JarWheat}>
                            <li className={links}>
                                <FontAwesomeIcon icon={faJarWheat} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>การคำนวนปุ๋ย</p>
                            </li>
                        </Link>

                        <Link href={"/weaather"} className={CloudSunRain}>
                            <li className={links}>
                                <FontAwesomeIcon icon={faGraduationCap} style={{ width: "40px", height: "40px" }} />
                                <p className='slidetex'>ผลงานนักเรียน</p>
                            </li>
                        </Link>
                        
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Slidebar;

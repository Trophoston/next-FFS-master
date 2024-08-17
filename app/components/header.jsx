'use client';
import { usePathname } from 'next/navigation';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMountainSun,
  faMoneyBillWheat,
  faJarWheat,
  faCloudSunRain,
  faMagnifyingGlass,
  faBell,
  faNewspaper,
  faPlantWilt,
  faBagShopping,
  faShop,
  faChevronDown,
  faGear,
  faChalkboardUser,
  faQuestion,
  faArrowRightFromBracket,

} from "@fortawesome/free-solid-svg-icons";
import Slidebar from './slidebar';
import Image from 'next/image';
import { icon } from '@fortawesome/fontawesome-svg-core';


// var path = useRouter() 


var house, JarWheat, MoneyBillWheat, MountainSun, CloudSunRain;


const Header = () => {

  const api_sherch = "https://us-central1-ffs-thailand.cloudfunctions.net/api/search-student-reward/%E0%B8%9F%E0%B8%AB%E0%B8%81%E0%B9%84";

  const path = usePathname();

  const active = "border-b-4 border-gray-100 text-white flex-auto px-3 pt-1 pb-1 text-2xl ";

  const nonactive = "text-gray-400 px-3 pt-1 mb-1 rounded-md hover:bg-[#1a3f2e]  hover:text-white text-2xl  border-b-4 border-[#1a4d2e]";

  // console.log(path)

  if (path == "/") {
    house = active;
    JarWheat = MoneyBillWheat = MountainSun = CloudSunRain = nonactive;
  }
  else if (path == "/fertul") {
    JarWheat = active;
    house = MoneyBillWheat = MountainSun = CloudSunRain = nonactive;
  }
  else if (path == "/vegprice") {
    MoneyBillWheat = active;
    house = JarWheat = MountainSun = CloudSunRain = nonactive;
  }
  else if (path.startsWith("/vegprice/")) {
    MoneyBillWheat = active;
    house = JarWheat = MountainSun = CloudSunRain = nonactive;
  }

  else if (path == "/terrian") {
    MountainSun = active;
    house = JarWheat = MoneyBillWheat = CloudSunRain = nonactive;
  }
  else if (path == "/weather") {
    CloudSunRain = active;
    house = JarWheat = MoneyBillWheat = MountainSun = nonactive;
  }
  else {

    CloudSunRain = house = JarWheat = MoneyBillWheat = MountainSun = nonactive;
  }


  const notificationDropdownRef = useRef(null);
  const avatarDropdownRef = useRef(null);

  useEffect(() => {
    // Function to handle click outside the dropdowns
    const handleClickOutside = (event) => {
      if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
        notificationDropdownRef.current.removeAttribute('open');
      }
      if (avatarDropdownRef.current && !avatarDropdownRef.current.contains(event.target)) {
        avatarDropdownRef.current.removeAttribute('open');
      }
    };

    // Add event listener for clicks on the document
    document.addEventListener('click', handleClickOutside, true);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const notiapi = {
    user1: {
      name: 'ระบบ',
      event: 'เว็บไซต์พร้อมใช้งานแล้ว',
      icon: '/image.jpg'
    },
    // user2: {
    //   name: 'Nai thasadon',
    //   event: 'ส่งข้อความถึงคุณ',
    //   icon: '/image.jpg'
    // },
    // user3: {
    //   name: 'Nice mind conector',
    //   event: 'ส่งข้อความถึงคุณ',
    //   icon: '/image.jpg'
    // },
    // user4: {
    //   name: 'ระบบ',
    //   event: 'แก้ไขระบบคำนวนปุ๋ยเสร็จสิ้น',
    //   icon: '/image.jpg'
    // },
    // user5: {
    //   name: 'Ms.Siriwan',
    //   event: 'ส่งข้อความถึงคุณ',
    //   icon: '/image.jpg'
    // },

  }

  const user = {
    name: 'นาย ใจงาม',
    icon: '/user.png'
  }


  return (
    <nav className='relative'>
      <div className="fixed py-0  navbar bg-[#1a4d2e] shadow-lg">
        <div className="navbar-start ">


          {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><link>Item 1</li>
            <li><link>Item 3</li>
            <li><link>Item 3</li>
            <li>
              <link>Parent
              <ul className="p-2">
                <li><link>Submenu 1</li>
                <li><link>Submenu 2</li>
              </ul>
            </li>
          </ul>
        </div> */}
          <a href='/' className=" text-xl tracking-wide uppercase flex gap-1 items-center" style={{ padding: " 0  0 0 60px" }}> <Image src="/logo.jpg" draggable="false" className='rounded-full w-[50px] h-[50px]' width={200} height={200} alt="Picture of the author" /><p className='p-0 m-0 hidden md:block text-white'>FFS-Thailand</p> </a>

        </div>

        <div className="navbar-center hidden lg:flex align-bottom ">
          <ul className="flex gap-7 pb-0 pt-3  ">
            <Link href={"/"} ><li className={house}><FontAwesomeIcon icon={faHouse} style={{ width: "45px", height: "45px" }} /></li></Link>
            <Link href={"/fertul"} ><li className={JarWheat}><FontAwesomeIcon icon={faJarWheat} style={{ width: "45px", height: "45px" }} /></li></Link>
            <Link href={"/terrian"} ><li className={MountainSun}><FontAwesomeIcon icon={faMountainSun} style={{ width: "45px", height: "45px" }} /></li></Link>
            <Link href={"/weather"} ><li className={CloudSunRain}><FontAwesomeIcon icon={faCloudSunRain} style={{ width: "45px", height: "45px" }} /></li></Link>
            <Link href={"/vegprice"} ><li className={MoneyBillWheat}><FontAwesomeIcon icon={faMoneyBillWheat} style={{ width: "45px", height: "45px" }} /></li></Link>
            {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><link>Submenu 1</li>
                <li><link>Submenu 2</li>
              </ul>
            </details>
          </li> */}
          </ul>
        </div>

        <div className="navbar-end ">

          <div className="dropdown dropdown-bottom dropdown-start sm:dropdown-end">
            <form  className="form-control relative ">
              <input type="text" placeholder="ค้นหา" className="input text-lg text-white rounded-2xl border-[#4F6F52]  bg-[#759D78] placeholder:text-white h-10 w-24 sm:w-auto " />
              <button type="submit" className='absolute end-3.5 top-2.5 m-0 p-0'><FontAwesomeIcon icon={faMagnifyingGlass} className=' text-white' /></button>
              <div></div>
              <ul tabIndex={0} className="dropdown-content rounded-lg z-[1] menu mt-1 p-1 shadow bg-[#A8C7AB] text-white rounded-box w-52">
                <li><a className='hover:bg-[#759D78] text-lg p-2' ><FontAwesomeIcon style={{ width: "30px", height: "30px" }} icon={faNewspaper} />ข่าวล่าสุด</a></li>

                <li><a className='hover:bg-[#759D78] text-lg p-2' ><FontAwesomeIcon style={{ width: "30px", height: "30px" }} icon={faPlantWilt} />วิธีปลูกพืช</a></li>

                <li><a className='hover:bg-[#759D78] text-lg p-2' ><FontAwesomeIcon style={{ width: "30px", height: "30px" }} icon={faBagShopping} />ผลิตภัณฑ์แปรรูป</a></li>

                <li><a className='hover:bg-[#759D78] text-lg p-2' ><FontAwesomeIcon style={{ width: "30px", height: "30px" }} icon={faShop} />สินค้าในชุมชน</a></li>
              </ul>
            </form>
          </div>

          <details ref={notificationDropdownRef} className="dropdown dropdown-end">
            <summary
              tabIndex="0"
              role="button"
              className="m-1 btn w-12 bg-transparent border-transparent hover:border-transparent hover:bg-transparent"
            >
              <div className="w-10 rounded-full indicator">
                <span className="badge badge-xs badge-error indicator-item"></span>
                <FontAwesomeIcon
                  icon={faBell}
                  style={{ width: '28px', height: '28px' }}
                  className="btn-ghost transition-all duration-200 btn-circle rounded-full text-white p-1 bg-[#759D78]"
                />
              </div>
            </summary>
            <ul
              tabIndex="0"
              className="mt-3 z-[1] shadow p-2  menu-sm dropdown-content  bg-[#4F6F52] rounded-box h-80 overflow-y-scroll w-52 sm:w-96 text-white hidescrlb" //class name i delete "menu"
            >
              <li className='text-xl text-center ' id='notihead' >
                การแจ้งเตือน
              </li>
              <div className="divider p-0 my-1 bg-white h-px"></div>
              {Object.keys(notiapi).map(key => (
                <li key={key} className='p-0 flex flex-row items-center '>
                  <img src={notiapi[key].icon} draggable="false" alt={`${notiapi[key].name} icon`} width={60} height={60} className="p-0 mx-1 my-3 rounded-full" />
                  <p className=' sm:text-lg text-md ps-2 m-0 '><b className=''>{notiapi[key].name} </b>{notiapi[key].event}</p>
                </li>
              ))}

              <div className="divider p-0 my-1 bg-white h-px"></div>
              <li className='text-center '>
                สิ้นสุดการแจ้งเตือน
                <a href="#notihead" className=' px-1 py-0 m-1 btn btn-ghost  text-[#dddddd] '>
                  กลับสู่ด้านบน
                </a>
              </li>
            </ul>
          </details>


          {/* Second Dropdown */}
          <details ref={avatarDropdownRef} className="dropdown dropdown-end">
            <summary className="m-1 btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image src={user.icon}  draggable="false" alt="Picture of the author" width={50} height={50} className="rounded-full" />
              </div>
              <FontAwesomeIcon className='absolute end-0 bottom-0 rounded-full border-2 text-white border-[#4F6F52] bg-[#4F6F52] ' icon={faChevronDown} />
            </summary>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2  shadow  menu-sm dropdown-content rounded-box w-64 bg-[#4F6F52] "
            >
              <li>
                <a href='/login' className=" justify-start flex flex-col hover:bg-[#39603D] pb-1 pt-1 px-2 m-0 shadow-xl">
                  <div className='flex flex-row  items-center justify-start p-0 pb-1 m-0 '>
                    <Image src={user.icon} draggable="false" alt="Picture of the author" width={50} height={50} className="rounded-full me-1.5 p-0" />
                    <p className='text-white text-xl p-0 m-0' >{user.name}</p>
                  </div>
                  <div className="divider my-1 bg-[#354537] h-px border-1 p-0 m-0"></div>
                </a>
              </li>

              <li>
                <a href='goorle.com' className=" justify-start flex flex-row hover:bg-[#39603D] pb-1 pt-1 px-2 m-0 ">
                  <FontAwesomeIcon icon={faGear} className='text-white rounded-full p-2 bg-[#1A4D2E]' style={{ width: "25px", height: "25px" }} />
                  <p className='p-0 px-2 m-0 text-lg text-white content-center '>การตั้งค่า</p>
                </a>
              </li>

              <li>
                <a href='/kwamru' className=" justify-start flex flex-row hover:bg-[#39603D] pb-1 pt-1 px-2 m-0 ">
                  <FontAwesomeIcon icon={faChalkboardUser} className='text-white rounded-full p-2 bg-[#1A4D2E]' style={{ width: "25px", height: "25px" }} />
                  <p className='p-0 px-2 m-0 text-lg text-white content-center '>ให้ความรู้</p>
                </a>
              </li>

              <li>
                <a href='goorle.com' className=" justify-start flex flex-row hover:bg-[#39603D] pb-1 pt-1 px-2 m-0 ">
                  <FontAwesomeIcon icon={faQuestion} className='text-white rounded-full p-2 bg-[#1A4D2E]' style={{ width: "25px", height: "25px" }} />
                  <p className='p-0 px-2 m-0 text-lg text-white content-center '>ความช่วยเหลือ</p>
                </a>
              </li>

              <li>
                <a href='goorle.com' className=" justify-start flex flex-row hover:bg-[#39603D] pb-1 pt-1 px-2 m-0 ">
                  <FontAwesomeIcon icon={faArrowRightFromBracket} className='text-white rounded-full p-2 bg-[#1A4D2E]' style={{ width: "25px", height: "25px" }} />
                  <p className='p-0 px-2 m-0 text-lg text-white content-center '>ออกจากระบบ</p>
                </a>
              </li>

            </ul>
          </details>

        </div>
      </div>

      <Slidebar />

    </nav>

  )
}
export default Header
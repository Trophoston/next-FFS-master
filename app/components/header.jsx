'use client';
import { usePathname } from 'next/navigation';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMountainSun, faMoneyBillWheat, faJarWheat, faCloudSunRain, faMagnifyingGlass, faBell, faNewspaper, faPlantWilt, faBagShopping, faShop } from "@fortawesome/free-solid-svg-icons";
import Slidebar from './slidebar';
import Image from 'next/image';


// var path = useRouter() 



var house, JarWheat, MoneyBillWheat, MountainSun, CloudSunRain;


const Header = () => {



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
      name: 'Tk os',
      event: 'สร้างโพสใหม่',
      icon: '/image.jpg'
    },
    user2: {
      name: 'Nai thasadon',
      event: 'ส่งข้อความถึงคุณ',
      icon: '/image.jpg'
    },
    user3: {
      name: 'Nice mind conector',
      event: 'ส่งข้อความถึงคุณ',
      icon: '/image.jpg'
    },
    user4: {
      name: 'ระบบ',
      event: 'แก้ไขระบบคำนวนปุ๋ยเสร็จสิ้น',
      icon: '/image.jpg'
    },
    user5: {
      name: 'Ms.Siriwan',
      event: 'ส่งข้อความถึงคุณ',
      icon: '/image.jpg'
    },


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
          <a href='#' className=" text-xl uppercase flex gap-1 items-center" style={{ padding: " 0  0 0 60px" }}> <Image src="/logo.jpg" className='rounded-full' width={50} height={50} alt="Picture of the author" /><p className='p-0 m-0 hidden md:block'>FFS-Thailand</p> </a>

        </div>
        
        <div className="navbar-center hidden lg:flex align-bottom ">
          <ul className="flex gap-7 pb-0 pt-3  ">
            <li className={house}><Link href={"/"} ><FontAwesomeIcon icon={faHouse} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={JarWheat}><Link href={"/fertul"} ><FontAwesomeIcon icon={faJarWheat} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={MountainSun}><Link href={"/terrian"} ><FontAwesomeIcon icon={faMountainSun} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={CloudSunRain}><Link href={"/weather"} ><FontAwesomeIcon icon={faCloudSunRain} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={MoneyBillWheat}><Link href={"/vegprice"} ><FontAwesomeIcon icon={faMoneyBillWheat} style={{ width: "45px", height: "45px" }} /></Link></li>
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
            <div className="form-control relative ">
              <input type="text" placeholder="ค้นหา" className="input text-lg text-white rounded-2xl border-[#4F6F52]  bg-[#759D78] placeholder:text-white h-10 w-24 sm:w-auto " />
              <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute end-3.5 top-3 text-white' />
              <div></div>
              <ul tabIndex={0} className="dropdown-content rounded-lg z-[1] menu mt-1 p-1 shadow bg-[#A8C7AB] text-white rounded-box w-52">
                <li><a className='hover:bg-[#759D78] text-lg p-2' ><FontAwesomeIcon style={{ width: "30px", height: "30px" }} icon={faNewspaper} />ข่าวล่าสุด</a></li>

                <li><a className='hover:bg-[#759D78] text-lg p-2' ><FontAwesomeIcon style={{ width: "30px", height: "30px" }} icon={faPlantWilt} />วิธีปลูกพืช</a></li>

                <li><a className='hover:bg-[#759D78] text-lg p-2' ><FontAwesomeIcon style={{ width: "30px", height: "30px" }} icon={faBagShopping} />ผลิตภัณฑ์แปรรูป</a></li>

                <li><a className='hover:bg-[#759D78] text-lg p-2' ><FontAwesomeIcon style={{ width: "30px", height: "30px" }} icon={faShop} />สินค้าในชุมชน</a></li>
              </ul>
            </div>
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
                        <img src={notiapi[key].icon} alt={`${notiapi[key].name} icon`} width={60} height={60}  className="p-0 mx-1 my-3 rounded-full"/>
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
                <Image src="/image.jpg" alt="Picture of the author" width={50} height={50} className="rounded-full" />
              </div>
            </summary>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </details>


        </div>
      </div>

      <Slidebar />

    </nav>

  )
}
export default Header
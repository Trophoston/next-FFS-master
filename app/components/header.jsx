'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMountainSun, faMoneyBillWheat, faJarWheat, faCloudSunRain, faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import Slidebar from './slidebar';


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





  return (
    <nav className='relative'>
      <div className="fixed py-0  navbar bg-[#1a4d2e] shadow-lg">
        <div className="navbar-start ">


          {/* <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
            <li><a>Item 3</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
          </ul>
        </div> */}
          <a href='#' className=" text-xl uppercase mx-5" style={{ padding: " 0  0 0 64px" }}><img src=''></img>FFS-Thailand</a>

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
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li> */}
          </ul>
        </div>

        <div className="navbar-end ">

          <div className="dropdown dropdown-bottom dropdown-end">
            <div className="form-control relative ">
              <input type="text" placeholder="ค้นหา" className="input text-lg text-white rounded-2xl border-[#4F6F52]  bg-[#759D78] placeholder:text-white h-10 w-24 md:w-auto " />
              <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute end-3.5 top-3 text-white' />
              <div></div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>




          <details className="dropdown dropdown-end">
            <summary tabindex="0" role="button" className="m-1 btn w-12 bg-transparent border-transparent hover:border-transparent  hover:bg-transparent ">
              <div className="w-10 rounded-full indicator">
                <span className="badge badge-xs badge-error indicator-item"></span>
                <FontAwesomeIcon icon={faBell} style={{ width: "28px", height: "28px" }} className='btn-ghost transition-all duration-200 btn-circle rounded-full text-white p-1 bg-[#759D78]' />
              </div>
            </summary>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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

          <details className="dropdown dropdown-end">
            <summary className="m-1 btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </summary>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
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
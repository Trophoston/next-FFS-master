'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMountainSun, faMoneyBillWheat, faJarWheat, faCloudSunRain } from "@fortawesome/free-solid-svg-icons";


// var path = useRouter() 



var house, JarWheat, MoneyBillWheat, MountainSun, CloudSunRain;


const Header = () => {
  const path = usePathname();

  const active = "border-b-4 border-gray-100 text-white flex-auto px-3 pt-1 pb-1 ";

  const nonactive = "text-gray-400 px-3 pt-1 mb-1 rounded-md hover:bg-[#1a3f2e]  hover:text-white";

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
  }

  return (
    <nav className='relative'>
      <div className="fixed py-0 navbar bg-[#1a4d2e] shadow-xl ">
        <div className="navbar-start ">

        <div className=" ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              <div className="">
                <div className="flex-none">
                  <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="drawer-side">
              <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-80 min-h-full bg-base-200">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
              </ul>
            </div>
          </div>


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
          <a href='#' className="text-xl uppercase mx-5">FFS-Thailand{usePathname()}</a>
        </div>
        <div className="navbar-center hidden lg:flex align-bottom ">
          <ul className="flex gap-7 pb-0 pt-3  ">
            <li className={house}><Link href={"/"} ><FontAwesomeIcon icon={faHouse} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={JarWheat}><Link href={"/fertul"} ><FontAwesomeIcon icon={faJarWheat} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={MoneyBillWheat}><Link href={"/vegprice"} ><FontAwesomeIcon icon={faMoneyBillWheat} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={MountainSun}><Link href={"/terrian"} ><FontAwesomeIcon icon={faMountainSun} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={CloudSunRain}><Link href={"/weather"} ><FontAwesomeIcon icon={faCloudSunRain} style={{ width: "45px", height: "45px" }} /></Link></li>
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
        <div className="navbar-end">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header
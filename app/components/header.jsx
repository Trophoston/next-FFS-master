'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMountainSun, faMoneyBillWheat, faJarWheat, faCloudSunRain } from "@fortawesome/free-solid-svg-icons";


// var path = useRouter() 



var house,JarWheat,MoneyBillWheat,MountainSun,CloudSunRain;


const Header = () => {
  const path = usePathname();

  console.log(path)

  if(path == "/"){
    house = "border-b-4 border-gray-300";
  }
  else if(path == "/fertul"){
    JarWheat = "border-b-4 border-gray-300";
  }
  else if(path == "/vegprice"){
    MoneyBillWheat = "border-b-4 border-gray-300"
  }
  else if(path == "/terrian"){
    MountainSun = "border-b-4 border-gray-300"
  }
  else if(path == "/weather"){
    CloudSunRain = "border-b-4 border-gray-300"
  }
  else{
  }

  return (
    <nav className='relative'>
    <div className="fixed py-0 navbar bg-base-100 shadow-xl ">
      <div className="navbar-start">
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
        <ul className="menu menu-horizontal gap-1">
          <li className={house}><Link href={"/"} ><FontAwesomeIcon icon={faHouse} style={{ width: "40px", height: "40px" }} /></Link></li>
          <li className={JarWheat}><Link href={"/fertul"} ><FontAwesomeIcon icon={faJarWheat} style={{ width: "40px", height: "40px" }} /></Link></li>
          <li className={MoneyBillWheat}><Link href={"home/fertul"} ><FontAwesomeIcon icon={faMoneyBillWheat} style={{ width: "40px", height: "40px" }} /></Link></li>          
          <li className={MountainSun}><Link href={"home/fertul"} ><FontAwesomeIcon icon={faMountainSun} style={{ width: "40px", height: "40px" }} /></Link></li>
          <li className={CloudSunRain}><Link href={"home/fertul"} ><FontAwesomeIcon icon={faCloudSunRain} style={{ width: "40px", height: "40px" }} /></Link></li>
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
        <a className="btn">Button</a>
      </div>
    </div>
  </nav>
)
}
export default Header
'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMountainSun, faMoneyBillWheat, faJarWheat, faCloudSunRain } from "@fortawesome/free-solid-svg-icons";


// var path = useRouter() 



var house, JarWheat, MoneyBillWheat, MountainSun, CloudSunRain;


const Slidebar = () => {
    const path = usePathname();

    const active = "border-b-4 border-gray-100 text-white flex-auto px-3 pt-1 pb-1 ";

    const nonactive = "text-gray-400 px-3 pt-1 mb-1 rounded-md hover:bg-[#1a3f2e]  hover:text-white";


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
        <>
             <div className="relative slidebar">
        <div className="drawer drawer-open fixed">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                

            </div>
            <div className="drawer-side">
                
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className=" w-20 min-h-full bg-base-200 text-base-content">
                {/* <li>
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost"onClick={console.log("hello")} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current" ><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  </label>
                </li> */}
            <li className={house}><Link href={"/"} ><FontAwesomeIcon icon={faHouse} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={JarWheat}><Link href={"/fertul"} ><FontAwesomeIcon icon={faJarWheat} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={MoneyBillWheat}><Link href={"/vegprice"} ><FontAwesomeIcon icon={faMoneyBillWheat} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={MountainSun}><Link href={"/terrian"} ><FontAwesomeIcon icon={faMountainSun} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={CloudSunRain}><Link href={"/weather"} ><FontAwesomeIcon icon={faCloudSunRain} style={{ width: "45px", height: "45px" }} /></Link></li>
                </ul>

            </div>
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
            <li className={house}><Link href={"/"} ><FontAwesomeIcon icon={faHouse} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={JarWheat}><Link href={"/fertul"} ><FontAwesomeIcon icon={faJarWheat} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={MoneyBillWheat}><Link href={"/vegprice"} ><FontAwesomeIcon icon={faMoneyBillWheat} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={MountainSun}><Link href={"/terrian"} ><FontAwesomeIcon icon={faMountainSun} style={{ width: "45px", height: "45px" }} /></Link></li>
            <li className={CloudSunRain}><Link href={"/weather"} ><FontAwesomeIcon icon={faCloudSunRain} style={{ width: "45px", height: "45px" }} /></Link></li>
                </ul>

            </div>
        </div>
    </div> */}
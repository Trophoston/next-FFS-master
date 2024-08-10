import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import Header from '../components/header'

export default function Kwamru() {

  return (
    <div className="">
      <div className="flex items-center justify-center" >
        <div action="" className="bg-[#4f6f52] p-4 pb-16 mx-1 sm:mx-2 rounded-xl w-full flex flex-col items-center justify-center gap-2 shadow-xl" >
          <p className="text-center  text-white text-[45px] p-0 mb-2 ">ให้ความรู้เพิ่มเติม</p>
          <div className="flex flex-row flex-wrap gap-10 justify-evenly w-full">

            <div className=" flex flex-col md:w-[640px] w-full">
              <iframe className="inline-block rounded-lg w-full" height="315" src="https://www.youtube.com/embed/Mb2sTps1OEs?si=LmNLnEqorfxR0K3q&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <a href="https://page.line.me/707avpuv" className="text-white flex flex-row items-center justify-center gap-1 text-lg sm:text-2xl bg-[#759d78] hover:bg-[#648f67] duration-300 h-16 mt-2 rounded-lg p-1">
                <svg style={{ width: "50px", height: "50px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z" /></svg>
                แอดไลน์น้องดินดี!
              </a>
            </div>

            <div className=" flex flex-col ">
              <Image  width={560} height={100} draggable="false" src="/dindoc.png" className="w-full h-full rounded-lg" />
              <a href="https://page.line.me/707avpuv" className="text-white flex flex-row items-center justify-center gap-1 text-lg sm:text-2xl bg-[#759d78] hover:bg-[#648f67] duration-300 h-16 mt-2 rounded-lg p-1">
              <svg style={{ width: "40px", height: "40px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              ดาวน์โหลดแอปพลิเคชันหมอดิน
              </a>
            </div>

            {/* 
          
          https://www.youtube.com/watch?v=Mb2sTps1OEs
          https://play.google.com/store/apps/details?id=com.ldd.appeservice&hl=th&pli=1 
          */}
          </div>


        </div>
      </div>
    </div>
  );
}

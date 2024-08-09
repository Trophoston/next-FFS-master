import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

import Header from '../components/header'

export default function Kwamru() {

  return (
   <div className="">
    <div className="flex items-center justify-center" >
      <div action="" className="bg-[#4f6f52] p-4 rounded-xl w-full flex flex-col items-center justify-center gap-2 shadow-xl" >
        <p className="text-center  text-white text-[45px] p-0 mb-2 ">ให้ความรู้เพิ่มเติม</p>
        <div className="flex flex-row">
          <div className="relative">
          <iframe className="inline-block" width="560" height="315" src="https://www.youtube.com/embed/Mb2sTps1OEs?si=LmNLnEqorfxR0K3q&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        
      </div>
    </div>
   </div>
  );
}

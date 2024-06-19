import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";


export default function wheather() {
  return (
   <>
    <p className='text-center text-5xl text-[#2A5B3E] font-extrabold drop-shadow-lg'>แผนที่สภาพอากาศ</p>
    <div className="rounded-2 overflow-hidden flex flex-col justify-center items-center ">
    <iframe className="w-full lg:w-5/6 p-2 h-dvh" src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=km/h&zoom=11&overlay=wind&product=ecmwf&level=surface&lat=18.733&lon=98.988&detailLat=18.791&detailLon=98.988&detail=true" frameborder="0"></iframe>
    </div>
  </>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

export default function terrian() {
  return (
    <>
    <p className='text-center text-5xl pb-2 text-[#2A5B3E] font-extrabold drop-shadow-lg'>แผนที่ภูมิศาสตร์</p>
    <div className="rounded-2 overflow-hidden flex flex-col justify-center items-center ">
    <iframe className="w-full lg:w-5/6 p-2 h-[85vh]"frameborder="0"  marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=297&amp;hl=en&amp;q=%20thailand+()&amp;t=k&amp;z=6&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  </>
  );
}

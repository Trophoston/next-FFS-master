import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

import Header from '../components/header'

export default function Home() {

  return (
   <div className="mt-[-154px] ">
    <div className="flex items-center justify-center h-dvh" >
      <form action="" className="bg-[#4f6f52] p-4 rounded-xl w-full sm:w-[400px] flex flex-col items-center justify-center gap-2 shadow-xl" >
        <p className="text-center  text-white text-[45px] p-0 mb-2 ">สมัครสมาชิก</p>
        <div className="flex flex-col ">
          <label htmlFor="user_f" className="text-white" >ชื่อผู้ใช้</label>
          <input type="text" placeholder="" name="" id="user_f" className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="pass_f" className="text-white" >รหัสผ่าน</label>
          <input type="text" placeholder="" name="" id="pass_f" className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl" />
          <a href="#" className="text-end text-white p-1 text-sm">ลืมรหัสผ่าน?</a>
        </div>

        <div className="flex items-center">
          <button type="submit"className="p-2 hover:bg-[#6b906e] duration-300 bg-[#759d78] rounded-lg text-white text-xl p-2 px-6 mt-1 me-3">ยืนยัน</button>
          <a href="" className="text-white">สมัครสมาชิก</a>
        </div>
      </form>
    </div>
   </div>
  );
}

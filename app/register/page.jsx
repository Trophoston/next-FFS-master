import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

import Header from '../components/header'

export default function Register() {

  return (
   <div className="">
    <div className="flex items-center justify-center mt-24" >
      <form action="" className="bg-[#4f6f52] p-4 rounded-xl w-full sm:w-[400px] flex flex-col items-center justify-center gap-2 shadow-xl" >
        <p className="text-center  text-white text-[45px] p-0 mb-2 ">สมัครสมาชิก</p>
        <div className="flex flex-col ">
          <label htmlFor="user_f" className="text-white" >ชื่อผู้ใช้</label>
          <input required type="text" placeholder="" name="" id="user_f" className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="pass_f" className="text-white" >อีเมล</label>
          <input required type="text" placeholder="" name="" id="pass_f" className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="pass_f" className="text-white" >เบอร์โทรศัพท์</label>
          <input required type="text" placeholder="" name="" id="pass_f" className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="pass_f" className="text-white" >รหัสผ่าน</label>
          <input required type="password" placeholder="" name="" id="pass_f" className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl" />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="pass_f" className="text-white" >ยืนยันรหัสผ่าน</label>
          <input required type="password" placeholder="" name="" id="pass_f" className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl" />
        </div>

        <div className="flex items-center">
          <button type="submit"className="p-2 hover:bg-[#6b906e] duration-300 bg-[#759d78] rounded-lg text-white text-xl p-2 px-6 mt-1 me-3">ยืนยัน</button>
          <a href="/login" className="text-white">เข้าสู่ระบบ</a>
        </div>
      </form>
    </div>
   </div>
  );
}

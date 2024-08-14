import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

import Header from './components/header'

export default function Home() {
  return (
    <>
      <div className="lg:ps-60 lg:pe-14 p-4 ">
        <p className="text-5xl my-9 font-bold drop-shadow-lg text-[#2A5B3E]" >ยินดีต้อนรับสู่ FFS-Thailand</p>
        <div className="bg-[#4F6F52] w-auto h-fit rounded-t-lg p-5 overflow-hidden relative">
          {/* <marquee behavior="" direction="" className="absolute top-0 bg-white end-0 p-1">เว็บไซต์นี้จัดทำโดย</marquee> */}
          <p className="text-white text-4xl">เว็บนี้มีอะไร?</p>
          <p className="text-white text-md pt-2">
            เว็บไวต์นี้จัดขึ้นเพื่อให้ความรู้แล่ส่งเสริมการศึกษาทางการเกษตร
            Quis adipisicing qui cupidatat consectetur. Amet dolor in esse reprehenderit elit nulla incididunt ea ex irure non veniam. Eu sint tempor aliquip id enim culpa qui duis ipsum consequat ipsum. Enim in aute non excepteur exercitation minim est est do sint qui anim. Cupidatat mollit anim reprehenderit consequat nostrud magna duis adipisicing sit mollit eiusmod veniam anim incididunt. In enim fugiat eu ullamco commodo excepteur labore laborum eiusmod reprehenderit deserunt veniam. Aliqua ad deserunt magna minim.

            Sit sit elit excepteur aliquip nulla nulla qui. Enim consequat aliquip laborum pariatur qui anim aute veniam commodo minim sunt. Consequat dolor esse qui mollit dolore.

            Fugiat anim non mollit officia. Excepteur ipsum deserunt amet quis eu. Ut anim mollit nostrud adipisicing nulla proident eiusmod nulla. Proident deserunt consectetur in deserunt minim nisi eu enim nulla sint do qui.
          </p>




        </div>

        <div className="flex flex-col flex-wrap bg-[#759D78] w-auto h-fit rounded-b-lg p-5 gap-4">
          <p className="text-white text-5xl my-2">เข้าชมส่วนต่างๆของเว็บไซต์</p>

          <div className="flex flex-row flex-wrap min-h-[500px] rounded-lg bg-[#9dc5a0] p-3 ">

            <div className="w-full lg:w-1/2 overflow-hidden ">
              <Image draggable="false" src="/web_feture/ferther.png" width="1000" height="1000" className="object-cover w-100 rounded-md" />
            </div>

            <div className="h-full w-full lg:w-1/2 overflow-hidden ps-4 flex-wrap mt-2">
              <p className="text-4xl text-white">ระบบคำนวนสูตรปุ๋ย</p>
              <p className="text-xl text-white pt-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ระบบสำหรับการคำนวนสูตรปุ๋ยด้วยเว็บไซต์ที่สามารถใช้ได้อย่างสดวกสบายเพียงแค่กรอกค่าธาตุที่ต้องการ อัตตราการใช้ปุ๋ยและแม่ปุ๋ยจากนั้นระบบจะทำการคำนวนปุ๋ยให้ทันที</p>
              <Link href={"/fertul"} className="btn mt-5">เข้าชมเลย!</Link>
            </div>

          </div>

          


        </div>

        

      </div>


    </>
  );
}

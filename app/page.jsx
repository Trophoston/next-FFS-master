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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; เว็บไซต์ที่ช่วยเหลือเกษตรกรในเรื่องการคำนวณปุ๋ย คำนวณภูมิศาสตร์ และสภาพภูมิอากาศ รวมถึงให้ข้อมูลตารางราคาพืชผลรายวัน เป็นแหล่งข้อมูลอันทรงคุณค่า ที่เชื่อมโยงระหว่างความรู้ทางวิทยาศาสตร์กับภูมิปัญญาท้องถิ่น เพื่อให้เกษตรกรสามารถตัดสินใจในการเพาะปลูกได้อย่างมีประสิทธิภาพและยั่งยืน

เว็บไซต์นี้ไม่เพียงแต่เป็นเครื่องมือที่ช่วยคำนวณสัดส่วนของปุ๋ยที่เหมาะสมกับพืชแต่ละชนิดเท่านั้น แต่ยังคำนึงถึงสภาพภูมิศาสตร์และสภาพภูมิอากาศในพื้นที่ต่าง ๆ ซึ่งเป็นปัจจัยสำคัญที่ส่งผลต่อการเจริญเติบโตของพืช การใช้ข้อมูลเหล่านี้จะช่วยให้เกษตรกรสามารถวางแผนการเพาะปลูกได้อย่างถูกต้อง ลดการใช้ทรัพยากรอย่างสิ้นเปลือง และเพิ่มผลผลิตได้อย่างสูงสุด

นอกจากนี้ เว็บไซต์ยังมีการอัปเดตข้อมูลราคาพืชผลรายวันอย่างต่อเนื่อง ทำให้เกษตรกรสามารถติดตามความเคลื่อนไหวของตลาด และปรับกลยุทธ์การขายได้อย่างเหมาะสม เปรียบเสมือนกับการมีที่ปรึกษาส่วนตัวที่คอยดูแลและชี้แนะตลอดเวลา

ด้วยการนำเทคโนโลยีมาใช้ในทางการเกษตรผ่านเว็บไซต์นี้ เกษตรกรสามารถเสริมสร้างศักยภาพในการผลิตพืชผล และสร้างความมั่นคงทางเศรษฐกิจให้กับชุมชนในระยะยาว
          </p>




        </div>

        <div className="flex flex-col flex-wrap bg-[#759D78] w-auto h-fit rounded-b-lg p-5 gap-4">
          <p className="text-white text-5xl my-2 drop-shadow-lg">เข้าชมส่วนต่างๆของเว็บไซต์</p>

          <div className="flex flex-row flex-wrap  rounded-lg bg-[#9dc5a0] p-3 ">

            <div className="w-full xl:w-1/2 overflow-hidden ">
              <Image draggable="false" src="/web_feture/ferther.png" width="1000" height="1000" className="object-cover w-100 rounded-md" />
            </div>

            <div className="h-full w-full xl:w-1/2 overflow-hidden ps-4 flex-wrap mt-2">
              <p className="text-4xl text-white drop-shadow-lg">ระบบคำนวนสูตรปุ๋ย</p>
              <p className="text-xl text-white pt-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ระบบสำหรับการคำนวนสูตรปุ๋ยด้วยเว็บไซต์ที่สามารถใช้ได้อย่างสะดวกสบายเพียงแค่กรอกค่าธาตุที่ต้องการ อัตราการใช้ปุ๋ยและแม่ปุ๋ยจากนั้นระบบจะทำการคำนวนปุ๋ยให้ทันที</p>
              <Link href={"/fertul"} className="btn mt-5">เข้าชมเลย!</Link>
            </div>

          </div>

          <div className="flex flex-row-reverse flex-wrap  rounded-lg bg-[#9dc5a0] p-3 ">

            <div className="w-full xl:w-1/2 overflow-hidden ps-4 ">
              <Image draggable="false" src="/web_feture/terrian.png" width="1000" height="1000" className="object-cover w-100 rounded-md" />
            </div>

            <div className="h-full w-full xl:w-1/2 overflow-hidden  flex-wrap mt-2">
              <p className="text-4xl text-white drop-shadow-lg">แผนที่ภูมิศาสตร์</p>
              <p className="text-xl text-white pt-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; แผนที่ภูมิศาสตร์สำหรับการวิเคราห์ภูมิศาสตร์ในพื้นที่ของตน  <br />ใช้สำหรับการวิเคราะห์พืชและผลผลิตที่ต้องการจะปลูกหรือพืชที่ปลูกได้ดีในสภาพภูมิศาสตร์ที่แตกต่างกันออกไป</p>
              <Link href={"/terrian"} className="btn mt-5 end-0">เข้าชมเลย!</Link>
            </div>

          </div>

          <div className="flex flex-row flex-wrap  rounded-lg bg-[#9dc5a0] p-3 ">

            <div className="w-full xl:w-1/2 overflow-hidden ">
              <Image draggable="false" src="/web_feture/wether.png" width="1000" height="1000" className="object-cover w-100 rounded-md" />
            </div>

            <div className="h-full w-full xl:w-1/2 overflow-hidden ps-4 flex-wrap mt-2">
              <p className="text-4xl text-white drop-shadow-lg">แผนที่สภาพอากาศ</p>
              <p className="text-xl text-white pt-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; แผนที่สำหรับการวิเคราห์สภาพอากาศ หน้าต่างแสดงข้อมูลสำคัญที่มีผลต่อการเพาะปลูก เกษตรกรสามารถติดตามการเปลี่ยนแปลงของอุณหภูมิ ความชื้น ปริมาณน้ำฝน และสภาพลมฟ้าอากาศในพื้นที่ของตนอย่างละเอียดและแม่นยำ การคาดการณ์เหล่านี้ช่วยให้เกษตรกรสามารถวางแผนการทำงานล่วงหน้า ไม่ว่าจะเป็นการเลือกช่วงเวลาที่เหมาะสมสำหรับการหว่านเมล็ด การใส่ปุ๋ย หรือการเก็บเกี่ยว </p>
              <Link href={"/weather"} className="btn mt-5">เข้าชมเลย!</Link>
            </div>

          </div>

          <div className="flex flex-row-reverse flex-wrap  rounded-lg bg-[#9dc5a0] p-3 ">

            <div className="w-full xl:w-1/2 overflow-hidden ps-4 ">
              <Image draggable="false" src="/web_feture/priceveg.png" width="1000" height="1000" className="object-cover w-100 rounded-md" />
            </div>

            <div className="h-full w-full xl:w-1/2 overflow-hidden flex-wrap mt-2">
              <p className="text-4xl text-white drop-shadow-lg">ราคาสินค้ารายวัน</p>
              <p className="text-xl text-white pt-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ระบบแสดงรายการราคาสินค้าทางการเกษตรรายวันที่ระบุถึง รายการสินค้าในหมวดหมู่ต่างๆ ชื่อสินค้า ราคาสินค้า ความปลี่ยนแปลงของสินค้าโดยมีมากถึง 6 หมวหมู่ ได้แก่ ผลไม้ ผักสด สินค้าสด น้ำมันพืชและพืชน้ำมัน ข้าว เครื่องเทศ สินค้านำเข้า</p>
              <Link href={"/vegprice"} className="btn mt-5 end-0">เข้าชมเลย!</Link>
            </div>

          </div>

          <div className="flex flex-row flex-wrap  rounded-lg bg-[#9dc5a0] p-3 ">

            <div className="w-full xl:w-1/2 overflow-hidden ">
              <Image draggable="false" src="/web_feture/kwanru.png" width="1000" height="1000" className="object-cover w-100 rounded-md" />
            </div>

            <div className="h-full w-full xl:w-1/2 overflow-hidden ps-4 flex-wrap mt-2">
              <p className="text-4xl text-white drop-shadow-lg">ให้ความรู้เกี่ยวกับการเกษตร</p>
              <p className="text-xl text-white pt-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; แผนที่สำหรับการวิเคราห์สภาพอากาศเพื่อนำไปวิเคราห์และตัดสินใจในการ </p>
              <Link href={"/kwamru"} className="btn mt-5">เข้าชมเลย!</Link>
            </div>

          </div>

          <div className="flex flex-row-reverse flex-wrap  rounded-lg bg-[#9dc5a0] p-3 ">

            <div className="w-full xl:w-1/2 overflow-hidden ps-4 ">
              <Image draggable="false" src="/web_feture/reward.png" width="1000" height="1000" className="object-cover w-100 rounded-md" />
            </div>

            <div className="h-full w-full xl:w-1/2 overflow-hidden flex-wrap mt-2">
              <p className="text-4xl text-white drop-shadow-lg">ผลงานนักเรียน</p>
              <p className="text-xl text-white pt-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; พื้นที่ในการแสดงผลงานของนักเรียนที่มีความสนใจในด้านการเกษตรและวิทยาศาสตร์ โครงการทดลอง หรือแนวคิดใหม่ๆ ในการพัฒนาการเกษตร ซึ่งสามารถเป็นแรงบันดาลใจให้กับทั้งเกษตรกรและผู้ที่สนใจในเรื่องนี้</p>
              <Link href={"/student_reward"} className="btn mt-5 end-0">เข้าชมเลย!</Link>
            </div>

          </div>

          


        </div>

        

      </div>


    </>
  );
}

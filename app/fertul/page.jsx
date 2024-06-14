'use client';
import { useEffect, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

export default function Fertul() {

  var [out, setOut] = useState('');


  const [n_value, set_n_value] = useState(0); 
  const [po_value, set_po_value] = useState(0); 
  const [ko_value, set_ko_value] = useState(0); 
  const [kg_value, set_kg_value] = useState(0); 

  
  const [kr_value, set_kr_value] = useState(0); 
  const [gt_value, set_gt_value] = useState(0); 

  const reset_value = () => {
    set_n_value(0);
    set_po_value(0);
    set_ko_value(0);
    set_kg_value(0);
    set_kr_value(0);
    set_gt_value(0);

    
  }

  const [n_m_value, set_n_m_value] = useState('46-0-0');
  const [po_m_value, set_po_m_value] = useState('18-46-0');
  const [ko_m_value, set_ko_m_value] = useState('0-0-60');


  function mompuical(momtype,suite_n,suite_p,suite_k,mass) {

    var n=0,p=0,k=0,n2=0;

    if(momtype == '46-0-0') {
      n = 46;
    }
    else if(momtype == '21-0-0') {
      n = 21;
    }
    else if(momtype == '0-46-0') {
      p = 46;
    }
    else if(momtype == '0-20-0') {
      p = 20;
    }
    else if(momtype == '0-0-60') {
      k = 60;
    }
    else if(momtype == '0-0-50') {
      k = 50;
    }
    else if(momtype == '18-46-0') {
      p = 46;
      n2 = 18;
    }

    mop = (n * mass) / 100;

  }


  

  const calculateFertful = () => { 

    const n_cal = parseInt(n_value, 10);
    const po_cal = parseInt(po_value, 10);
    const ko_cal = parseInt(ko_value, 10);
    const kg_cal = parseInt(kg_value, 10);
    const kr_cal = parseInt(kr_value, 10);
    const gt_cal = parseInt(gt_value, 10);
 


    const filler = momtype();



    setOut(filler + " กรัม");
    // setOut("N: " + n_cal + " P: " + po_cal + " K: " + ko_cal + " Kg: " + kg_cal + " Kr: " + kr_cal + " Gt: " + gt_cal + " N: " + n_m_value + " P: " + po_m_value + " K: " + ko_m_value)

    console.log(
      "N: ", n_cal, 
      "P: ", po_cal, 
      "K: ", ko_cal, 
      "Kg: ", kg_cal, 
      "Kr: ", kr_cal, 
      "Gt: ", gt_cal
    );

    console.log(
      "N: ", n_m_value, 
      "P: ", po_m_value, 
      "K: ", ko_m_value
    );


    
    
    

  };


  return (
    <>
      <div className="lg:ps-60 lg:pe-14 p-4 ">
        <p className="text-6xl my-9 font-bold drop-shadow-lg text-[#2A5B3E]" >โปรแกรมคำนวณปุ๋ยผสม</p>
        <form action="">
          <div className="bg-[#4F6F52] w-auto h-fit rounded-t-lg p-5 lg:p-10 overflow-hidden">

            <div className="flex flex-wrap">
              <p className="tracking-wide text-4xl font-semibold drop-shadow-lg text-white lg:mb-0 mb-3 me-5 self-center" >สูตรปุ๋ย</p>
              <div className="items-center flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">N</p>
                  <input type="number"  onChange={(e) => set_n_value(e.target.value)}  min="0" placeholder="กรอกค่าไนโตรเจน" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78]  p-1 fertulinp" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">P₂O₅</p>
                  <input type="number" onChange={(e) => set_po_value(e.target.value)}  min="0" placeholder="กรอกค่าฟอสฟอรัส" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78]  p-1 fertulinp" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">K₂O</p>
                  <input type="number" onChange={(e) => set_ko_value(e.target.value)}  min="0" placeholder="กรอกค่าโพแทสเซียม" className="px-2 text-black md:w-72  w-48 sm:w-auto  text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78]  p-1 fertulinp" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">น้ำหนักปุ๋ย(Kg)</p>
                  <input type="number" onChange={(e) => set_kg_value(e.target.value)}  min="0" placeholder="กรอกกิโลกรัม" className="px-2 text-black md:w-72  w-48 sm:w-auto  text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78]  p-1 fertulinp" />
                </div>


              </div>
            </div>

            <div className="flex flex-wrap mt-24">
              <p className="tracking-wide text-4xl font-semibold drop-shadow-lg text-white lg:mb-7 mb-7 lg:me-5   self-center" >อัตราการใช้ปุ๋ย</p>
              <div className="items-center flex flex-wrap  gap-6">
                
                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">กิโลกรัม/ ไร่</p>
                  <input type="number" onChange={(e) => set_kr_value(e.target.value)}  min="0" placeholder="กรอกกิโลกรัม/ ไร่" className="px-2 text-black md:w-72  w-48 sm:w-auto  text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78]  p-1 fertulinp" />
                </div>

                <p className="tracking-wide text-2xl font-semibold drop-shadow-lg text-white self-end items-center" >หรือ</p>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">กรัม/ ต้น</p>
                  <input type="number" onChange={(e) => set_gt_value(e.target.value)}  min="0" placeholder="กรัม/ ต้น" className="px-2 text-black md:w-72  w-48 sm:w-auto  text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78]  p-1 fertulinp" />
                </div>



              </div>
            </div>



          </div>

          <div className="flex flex-wrap bg-[#759D78] w-auto h-fit rounded-b-lg p-5 lg:p-10">
            <div className="items-center flex flex-wrap  gap-8">

              <div className="flex flex-row gap-2">
                <p className="text-xl sm:text-3xl font-bold text-center text-white pb-2">แม่ปุ๋ย N</p>

                <select className="md:w-64 w-auto text-black text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78]  p-1  h-10 "
                onChange={(e) => set_n_m_value(e.target.value)}>
                  <option className="rounded-md" value="46-0-0"> 46-0-0</option>
                  <option className="rounded-md" value="21-0-0" >21-0-0</option>
                </select>
              </div>

              <div className="flex flex-row gap-2">
                <p className="text-xl sm:text-3xl font-bold text-center text-white pb-2">แม่ปุ๋ย P₂O₅</p>

                <select className="md:w-64 w-auto text-black text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78]  p-1  h-10 " 
                onChange={(e) => set_po_m_value(e.target.value)} >
                  <option className="rounded-md" value="18-46-0"  >18-46-0</option>
                  <option className="rounded-md" value="0-46-0" >0-46-0</option>
                  <option className="rounded-md" value="0-20-0"  >0-20-0</option>
                </select>
              </div>

              <div className="flex flex-row gap-2">
                <p className="text-xl sm:text-3xl font-bold text-center text-white pb-2">แม่ปุ๋ย K₂O</p>

                <select className="md:w-64 w-auto text-black text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78]  p-1  h-10 "
                onChange={(e) => set_ko_m_value(e.target.value)}>
                  <option className="rounded-md" value="0-0-60" >0-0-60</option>
                  <option className="rounded-md" value="0-0-50" >0-0-50</option>
                </select>
              </div>




            </div>
          </div>

          <div className=" h-fit mt-10 me-5 flex justify-end gap-5 flex-wrap">
            <input type="reset" value="ล้างข้อมูล" className="text-white font-normal border-[#758D78] hover:border-[#4F5F52] border-2 btn hover:bg-[#4F5F52] bg-[#758D78]  item-center m-0 text-2xl"
            onClick={reset_value} />
            <input type='button' value="คำนวน" className="text-white font-normal hover:border-[#759D78] border-[#4F6F52] border-2 btn bg-[#4F6F52] hover:bg-[#759D78]  item-center m-0 text-2xl" 
            onClick={calculateFertful} />
          </div>

          

        </form>
      </div>

      <div>{out && (
            <div>
              <p>{out}</p>
            </div>
          )}</div>
    </>
  );
}


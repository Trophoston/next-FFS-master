'use client';
import { useState } from 'react';

export default function Fertul() {
  const [out, setOut] = useState('');

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
    setOut('');
  };

  const [n_m_value, set_n_m_value] = useState('46-0-0');
  const [po_m_value, set_po_m_value] = useState('18-46-0');
  const [ko_m_value, set_ko_m_value] = useState('0-0-60');

  function calculateFertful() {
    const n_cal = parseInt(n_value, 10);
    const po_cal = parseInt(po_value, 10);
    const ko_cal = parseInt(ko_value, 10);
    const kg_cal = parseInt(kg_value, 10);

    const getFertAmount = (value, fertRatio) => (value * kg_cal) / fertRatio;

    const n_ratio = parseInt(n_m_value.split('-')[0], 10);
    const po_ratio = parseInt(po_m_value.split('-')[1], 10);
    const ko_ratio = parseInt(ko_m_value.split('-')[2], 10);

    const n_amount = getFertAmount(n_cal, n_ratio);
    const po_amount = getFertAmount(po_cal, po_ratio);
    const ko_amount = getFertAmount(ko_cal, ko_ratio);

    const total_fertilizer = n_amount + po_amount + ko_amount;

    setOut(`ต้องใช้ปุ๋ยรวมทั้งหมด: ${total_fertilizer.toFixed(2)} กรัม \n
      แม่ปุ๋ย N (${n_m_value}): ${n_amount.toFixed(2)} กรัม \n
      แม่ปุ๋ย P₂O₅ (${po_m_value}): ${po_amount.toFixed(2)} กรัม \n
      แม่ปุ๋ย K₂O (${ko_m_value}): ${ko_amount.toFixed(2)} กรัม`);
  }

  return (
    <>
      <div className="lg:ps-60 lg:pe-14 p-4 ">
        <p className="text-6xl my-9 font-bold drop-shadow-lg text-[#2A5B3E]">โปรแกรมคำนวณปุ๋ยผสม</p>
        <form action="">
          <div className="bg-[#4F6F52] w-auto h-fit rounded-t-lg p-5 lg:p-10 overflow-hidden">

            <div className="flex flex-wrap">
              <p className="tracking-wide text-4xl font-semibold drop-shadow-lg text-white lg:mb-0 mb-3 me-5 self-center">สูตรปุ๋ย</p>
              <div className="items-center flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">N</p>
                  <input type="number" onChange={(e) => set_n_value(e.target.value)} min="0" placeholder="กรอกค่าไนโตรเจน" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">P₂O₅</p>
                  <input type="number" onChange={(e) => set_po_value(e.target.value)} min="0" placeholder="กรอกค่าฟอสฟอรัส" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">K₂O</p>
                  <input type="number" onChange={(e) => set_ko_value(e.target.value)} min="0" placeholder="กรอกค่าโพแทสเซียม" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">น้ำหนักปุ๋ย(Kg)</p>
                  <input type="number" onChange={(e) => set_kg_value(e.target.value)} min="0" placeholder="กรอกกิโลกรัม" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mt-24">
              <p className="tracking-wide text-4xl font-semibold drop-shadow-lg text-white lg:mb-7 mb-7 lg:me-5 self-center">อัตราการใช้ปุ๋ย</p>
              <div className="items-center flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">กิโลกรัม/ ไร่</p>
                  <input type="number" onChange={(e) => set_kr_value(e.target.value)} min="0" placeholder="กรอกกิโลกรัม/ ไร่" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>

                <p className="tracking-wide text-2xl font-semibold drop-shadow-lg text-white self-end items-center">หรือ</p>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">กรัม/ ต้น</p>
                  <input type="number" onChange={(e) => set_gt_value(e.target.value)} min="0" placeholder="กรัม/ ต้น" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap bg-[#759D78] w-auto h-fit rounded-b-lg p-5 lg:p-10">
            <div className="items-center flex flex-wrap gap-8">
              <div className="flex flex-row gap-2">
                <p className="text-xl sm:text-3xl font-bold text-center text-white pb-2">แม่ปุ๋ย N</p>
                <select className="md:w-64 w-auto text-black text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 h-10"
                  onChange={(e) => set_n_m_value(e.target.value)}>
                  <option className="rounded-md" value="46-0-0">46-0-0</option>
                  <option className="rounded-md" value="21-0-0">21-0-0</option>
                </select>
              </div>

              <div className="flex flex-row gap-2">
                <p className="text-xl sm:text-3xl font-bold text-center text-white pb-2">แม่ปุ๋ย P₂O₅</p>
                <select className="md:w-64 w-auto text-black text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 h-10"
                  onChange={(e) => set_po_m_value(e.target.value)}>
                  <option className="rounded-md" value="18-46-0">18-46-0</option>
                  <option className="rounded-md" value="0-52-34">0-52-34</option>
                </select>
              </div>

              <div className="flex flex-row gap-2">
                <p className="text-xl sm:text-3xl font-bold text-center text-white pb-2">แม่ปุ๋ย K₂O</p>
                <select className="md:w-64 w-auto text-black text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 h-10"
                  onChange={(e) => set_ko_m_value(e.target.value)}>
                  <option className="rounded-md" value="0-0-60">0-0-60</option>
                  <option className="rounded-md" value="0-0-50">0-0-50</option>
                </select>
              </div>
            </div>
          </div>
        </form>

        <div className="flex justify-center mt-10 gap-10">
        <button onClick={calculateFertful} className="w-36 h-14 rounded-md text-3xl font-bold text-white drop-shadow-lg bg-[#2A5B3E] hover:bg-[#3e7c57]">
          คำนวณ
        </button>
        <button onClick={reset_value} className="w-36 h-14 rounded-md text-3xl font-bold text-white drop-shadow-lg bg-[#ae4444] hover:bg-[#d75454] ">
          รีเซต
        </button>
      </div>

      <div className="text-center m-10 bg-[#2A5B3E] p-10 text-3xl font-bold text-white rounded-xl">
        <p>{out}</p>
      </div>
      
      </div>

      
    </>
  );
}

'use client';
import { useState } from 'react';

export default function Fertul() {
  const [out, setOut] = useState('');

  const [n_value, set_n_value] = useState('');
  const [po_value, set_po_value] = useState('');
  const [ko_value, set_ko_value] = useState('');
  const [kg_value, set_kg_value] = useState('');
  const [desired_weight, set_desired_weight] = useState('');

  const [kr_value, set_kr_value] = useState('');
  const [gt_value, set_gt_value] = useState('');

  // State variables for mother fertilizers
  const [n_m_value, set_n_m_value] = useState('46-0-0');
  const [po_m_value, set_po_m_value] = useState('18-46-0');
  const [ko_m_value, set_ko_m_value] = useState('0-0-60');

  const reset_value = () => {
    set_n_value('');
    set_po_value('');
    set_ko_value('');
    set_kg_value('');
    set_desired_weight('');
    set_kr_value('');
    set_gt_value('');
    setOut('');
    set_n_m_value('46-0-0'); // Reset to default value
    set_po_m_value('18-46-0'); // Reset to default value
    set_ko_m_value('0-0-60'); // Reset to default value
  };

  function calculateFertful() {
    const n_cal = parseFloat(n_value) || 0;
    const po_cal = parseFloat(po_value) || 0;
    const ko_cal = parseFloat(ko_value) || 0;
    const kg_cal = parseFloat(kg_value) || 0;

    const getFertAmount = (value, fertRatio) => (value * kg_cal) / fertRatio;

    var n_ratio = parseInt(n_m_value.split('-')[0], 10);

    // if(po_m_value=="18-46-0"){
    //   n_ratio = n_ratio - parseInt(po_m_value.split('-')[0], 10);
    //   console.log(n_ratio)
    // }

    
    const po_ratio = parseInt(po_m_value.split('-')[1], 10);
    const ko_ratio = parseInt(ko_m_value.split('-')[2], 10);

    const n_amount = getFertAmount(n_cal, n_ratio);
    const po_amount = getFertAmount(po_cal, po_ratio);
    const ko_amount = getFertAmount(ko_cal, ko_ratio);

    const total_fertilizer = n_amount + po_amount + ko_amount;

    const fertRatePerRai = kr_value ? (total_fertilizer * kr_value / 1000).toFixed(2) : 'ไม่ได้ระบุ';
    const fertRatePerPlant = gt_value ? (total_fertilizer * gt_value).toFixed(2) : 'ไม่ได้ระบุ';

    setOut(`ต้องใช้ปุ๋ยรวมทั้งหมด: ${total_fertilizer.toFixed(2)} กรัม \n
      แม่ปุ๋ย N (${n_m_value}): ${n_amount.toFixed(2)} กรัม \n
      แม่ปุ๋ย P₂O₅ (${po_m_value}): ${po_amount.toFixed(2)} กรัม \n
      แม่ปุ๋ย K₂O (${ko_m_value}): ${ko_amount.toFixed(2)} กรัม \n\n
      อัตราการใช้ปุ๋ยต่อไร่: ${fertRatePerRai} กิโลกรัม/ไร่ \n
      อัตราการใช้ปุ๋ยต่อต้น: ${fertRatePerPlant} กรัม/ต้น`);
}




  //  \n  น้ำหนักปุ๋ยที่ต้องการ: ${desired_weight} กิโลกรัม

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
                  <input type="number" value={n_value} onChange={(e) => set_n_value(e.target.value)} placeholder="กรอกค่าไนโตรเจน" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">P₂O₅</p>
                  <input type="number" value={po_value} onChange={(e) => set_po_value(e.target.value)} placeholder="กรอกค่าฟอสฟอรัส" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">K₂O</p>
                  <input type="number" value={ko_value} onChange={(e) => set_ko_value(e.target.value)} placeholder="กรอกค่าโพแทสเซียม" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">น้ำหนักปุ๋ย(Kg)</p>
                  <input type="number" value={kg_value} onChange={(e) => set_kg_value(e.target.value)} placeholder="กรอกกิโลกรัม" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>

                {/* New input field for desired weight */}
                {/* <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">น้ำหนักปุ๋ยที่ต้องการ (Kg)</p>
                  <input type="number" value={desired_weight} onChange={(e) => set_desired_weight(e.target.value)} placeholder="กรอกน้ำหนักปุ๋ยที่ต้องการ" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div> */}
              </div>
            </div>

            <div className="flex flex-wrap my-10">
              <p className="tracking-wide text-4xl font-semibold drop-shadow-lg text-white lg:mb-7 mb-7 lg:me-5 self-center">อัตราการใช้ปุ๋ย</p>
              <div className="items-center flex flex-wrap gap-6">
                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">กิโลกรัม/ ไร่</p>
                  <input type="number" value={kr_value} onChange={(e) => set_kr_value(parseFloat(e.target.value) || 0)} min="0" placeholder="กรอกกิโลกรัม/ ไร่" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>

                <div>
                  <p className="text-3xl font-bold text-center text-white pb-2">กิโลกรัม/ ต้น</p>
                  <input type="number" value={gt_value} onChange={(e) => set_gt_value(parseFloat(e.target.value) || 0)} min="0" placeholder="กรอกกิโลกรัม/ ต้น" className="px-2 text-black md:w-72 w-48 sm:w-auto text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 fertulinp" />
                </div>
              </div>
            </div>

            {/* Dropdowns for mother fertilizers with provided Tailwind styles */}
            <div className="flex flex-wrap  w-auto h-fit rounded-b-lg p-5 lg:p-10">
              <div className="items-center flex flex-wrap gap-8">
                <div className="flex flex-row gap-2">
                  <p className="text-xl sm:text-3xl font-bold text-center text-white pb-2">แม่ปุ๋ย N</p>
                  <select className="md:w-64 w-auto text-black text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 h-10"
                    value={n_m_value}
                    onChange={(e) => set_n_m_value(e.target.value)}>
                    <option className="rounded-md" value="46-0-0">46-0-0</option>
                    <option className="rounded-md" value="21-0-0">21-0-0</option>
                  </select>
                </div>

                <div className="flex flex-row gap-2">
                  <p className="text-xl sm:text-3xl font-bold text-center text-white pb-2">แม่ปุ๋ย P₂O₅</p>
                  <select className="md:w-64 w-auto text-black text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 h-10"
                    value={po_m_value}
                    onChange={(e) => set_po_m_value(e.target.value)}>
                    <option className="rounded-md" value="18-46-0">18-46-0</option>
                    <option className="rounded-md" value="0-46-0">0-46-0</option>
                    <option className="rounded-md" value="0-20-0">0-20-0</option>
                  </select>
                </div>

                <div className="flex flex-row gap-2">
                  <p className="text-xl sm:text-3xl font-bold text-center text-white pb-2">แม่ปุ๋ย K₂O</p>
                  <select className="md:w-64 w-auto text-black text-lg bg-[#F5EFE6] border-[#F5EFE6] rounded-md focus:outline outline-2 outline-[#759D78] p-1 h-10"
                    value={ko_m_value}
                    onChange={(e) => set_ko_m_value(e.target.value)}>
                    <option className="rounded-md" value="0-0-60">0-0-60</option>
                    <option className="rounded-md" value="0-0-50">0-0-50</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-5">
              <button type="button" onClick={calculateFertful} className="bg-[#5EBA8B] hover:bg-[#4B9A69] px-3 py-2 rounded-md text-white text-xl">
                คำนวณ
              </button>
              <button type="button" onClick={reset_value} className="bg-[#E77C7C] hover:bg-[#C24C4C] px-3 py-2 rounded-md text-white text-xl">
                รีเซ็ต
              </button>
            </div>
          </div>

          <div className="lg:mt-12 mt-5 bg-[#F5EFE6] text-black p-5 rounded-md shadow-md">
            <h2 className="text-4xl font-bold mb-3">ผลลัพธ์</h2>
            <pre className="whitespace-pre-wrap">{out}</pre>
          </div>
        </form>
      </div>
    </>
  );
}

'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";

import Header from '../components/header';

export default function Login() {

  const axios = require('axios');

  const callApi = async (username) => {
    try {
      const res = await axios.get(`https://us-central1-ffs-thailand.cloudfunctions.net/api/get-user/${username}`);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => setPassword(e.target.value);

  function onHandle(e) {
    e.preventDefault();
    callApi(username);
    //ไปหาทางดึง username จาก array
  }

  return (
    <div className="mt-[-154px]">
      <div className="flex items-center justify-center h-dvh">
        <form action="" className="bg-[#4f6f52] p-4 rounded-xl w-full sm:w-[400px] flex flex-col items-center justify-center gap-2 shadow-xl" >
          <p className="text-center text-white text-[45px] p-0 mb-2">Login</p>
          <div className="flex flex-col">
            <label htmlFor="user_f" className="text-white">ชื่อผู้ใช้</label>
            <input
              required
              type="text"
              id="user_f"
              className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl"
              onChange={onChangeUsername}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pass_f" className="text-white">รหัสผ่าน</label>
            <input
              required
              type="password"
              id="pass_f"
              className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl"
              onChange={onChangePassword}
            />
            <a href="#" className="text-end text-white p-1 text-sm">ลืมรหัสผ่าน?</a>
          </div>

          <div className="flex items-center">
            <button
              type="submit"
              className="p-2 hover:bg-[#6b906e] duration-300 bg-[#759d78] rounded-lg text-white text-xl p-2 px-6 mt-1 me-3"
              onClick={onHandle}
            >
              ยืนยัน
            </button>
            <a href="/register" className="text-white">สมัครสมาชิก</a>
          </div>
        </form>
      </div>
    </div>
  );
}

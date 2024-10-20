'use client';

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/header';
import Swal from 'sweetalert2';

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('https://api-bgtfootqna-as.a.run.app/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "Success!",
          text: "Login Successful!",
          icon: "success"
        });

        // Redirect to the home page or dashboard
        window.location.href = '/login';
      } else {
        Swal.fire({
          title: "Error!",
          text: "Username or Password is incorrect!",
          icon: "error"
        });
      }
    } catch (error) {
      aSwal.fire({
        title: "Error!",
        text: "Error registering user. Please try again later.",
        icon: "error"
      });
    }
  };

  return (
   <div className="">
    <div className="flex items-center justify-center mt-24">
      <form 
        onSubmit={handleSubmit}
        className="bg-[#4f6f52] p-4 rounded-xl w-full sm:w-[400px] flex flex-col items-center justify-center gap-2 shadow-xl"
      >
        <p className="text-center text-white text-[45px] p-0 mb-2">สมัครสมาชิก</p>

        <div className="flex flex-col">
          <label htmlFor="username" className="text-white">ชื่อผู้ใช้</label>
          <input
            required
            type="text"
            id="username"
            className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-white">อีเมล</label>
          <input
            required
            type="email"
            id="email"
            className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-white">รหัสผ่าน</label>
          <input
            required
            type="password"
            id="password"
            className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="text-white">ยืนยันรหัสผ่าน</label>
          <input
            required
            type="password"
            id="confirmPassword"
            className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center">
          <button
            type="submit"
            className="p-2 hover:bg-[#6b906e] duration-300 bg-[#759d78] rounded-lg text-white text-xl p-2 px-6 mt-1 me-3"
          >
            ยืนยัน
          </button>
          <a href="/login" className="text-white">เข้าสู่ระบบ</a>
        </div>
      </form>
    </div>
   </div>
  );
}

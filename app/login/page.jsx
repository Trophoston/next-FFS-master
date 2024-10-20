'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const callApi = async (username, password) => {
    try {
      // Call your API using the correct URL
      const res = await axios.get(`https://api-bgtfootqna-as.a.run.app/get-user/${username}`);
      const data = res.data;

      console.log('Response from server:', data);

      // Compare the entered password with the one from the API response
      if (password === data.password) {
        // Store username and userId in cookies
        Cookies.set('username', username, { expires: 7 });  // Cookie expires in 7 days
        Cookies.set('userId', data.userId, { expires: 7 });

        Swal.fire({
          title: "Success!",
          text: "Login Successful!",
          icon: "success"
        });

        if(username == "adminuser_01"){
          window.location.href = '/admin_page';
        }else{
          window.location.href = '/';
        }

        // Redirect to the home page or dashboard
        
      } else {
        Swal.fire({
          title: "Error!",
          text: "Username or Password is incorrect!",
          icon: "error"
        });
      }
    } catch (error) {
      console.error('Error during API call:', error);

      Swal.fire({
        title: "Error!",
        text: "Username or Password is incorrect!",
        icon: "error"
      });
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    callApi(username, password);  // Validate username and password
  };

  return (
    <div className="flex items-center justify-center mt-24">
      <form
        className="bg-[#4f6f52] p-4 rounded-xl w-full sm:w-[400px] flex flex-col items-center justify-center gap-2 shadow-xl"
        onSubmit={onHandleSubmit}  // Handle form submit
      >
        <p className="text-center text-white text-[45px] mb-2">ลงชื่อเข้าใช้</p>
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
            type="submit"  // Submit the form
            className="p-2 hover:bg-[#6b906e] bg-[#759d78] rounded-lg text-white text-xl px-6 mt-1"
          >
            ยืนยัน
          </button>
          <a href="/register" className="text-white ml-4">สมัครสมาชิก</a>
        </div>
      </form>
    </div>
  );
}

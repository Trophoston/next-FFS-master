'use client';

import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; 
import Swal from 'sweetalert2';


export default function Register() {
  useEffect(() => {
    
    const adminUsername = Cookies.get('username'); // Assuming your cookie name is 'username'
    
    if (adminUsername !== 'adminuser_01') {
        // Redirect to the index page if the user is not admin        
        window.location.href = '/';
    }
});
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams(); // Use in client-side only
  const usernameParam = searchParams?.get('username'); // Safe-check `searchParams` 

  useEffect(() => {
    if (usernameParam) {
      fetchUserData(usernameParam);
    }
  }, [usernameParam]);

  const fetchUserData = async (username) => {
    try {
      const response = await fetch(`https://api-bgtfootqna-as.a.run.app/get-user/${username}`);
      if (!response.ok) {
        throw new Error('User not found or server error');
      }
      const data = await response.json();
      setUserData(data);  // Assuming the response contains {username, email, password}
      setLoading(false);
    } catch (error) {
      setError(error.toString());
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all required fields are filled
    if (!userData.username || !userData.email || !userData.password) {
      Swal.fire("Error!", "All fields must be filled!", "error");
      return;
    }

    try {
      const response = await fetch(`https://api-bgtfootqna-as.a.run.app/users/${userData.userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password // Ideally, the password should be hashed server-side
        })
      });


      if (response.ok) {
        Swal.fire("Success!", "User data updated successfully!", "success");
        
        window.location.href = '/admin_page';
      } else {
        const errorData = await response.json();
        Swal.fire("Error!", `Error updating user: ${errorData.message}`, "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Error updating user. Please try again later.", "error");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    Swal.fire({
      title: "Error!",
      text: error,
      icon: "error"
    });
    return <p>Error: {error} {usernameParam}</p>;
  }

  return (
    <div className="">
      <div className="flex items-center justify-center mt-24">
        <form 
          onSubmit={handleSubmit}
          className="bg-[#4f6f52] p-4 rounded-xl w-full sm:w-[400px] flex flex-col items-center justify-center gap-2 shadow-xl"
        >
          <p className="text-center text-white text-[45px] p-0 mb-2">แก้ไขข้อมูล</p>

          <div className="flex flex-col">
            <label htmlFor="username" className="text-white">ชื่อผู้ใช้</label>
            <input
              required
              type="text"
              id="username"
              className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl"
              value={userData.username}
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
              value={userData.email}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-white">รหัสผ่าน</label>
            <input
              required
              type="text"
              id="password"
              className="bg-[#e8dfca] border-4 rounded-lg p-1 text-xl"
              value={userData.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-rows items-center gap-6">
            <button
              type="submit"
              className="p-2 hover:bg-[#6b906e] duration-300 bg-[#759d78] rounded-lg text-white text-xl p-2 px-6"
            >
              ยืนยัน
            </button>
            <a href="/admin_page" className="p-2 hover:bg-[#6b906e] duration-300 border-2 block border-[#759d78] rounded-lg text-white text-xl p-2 px-6 ">ยกเลิก</a>
          </div>
        </form>
      </div>
    </div>
  );
}

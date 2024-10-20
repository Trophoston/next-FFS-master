'use client';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'; // Import SweetAlert
import Cookies from 'js-cookie';
import Header from '../components/header';


export default function Admin() {
  const [usersData, setUsersData] = useState([]);
  const [rewardData, setRewardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    
const adminUsername = Cookies.get('username'); // Assuming your cookie name is 'username'

if (adminUsername !== 'adminuser_01') {
    // Redirect to the index page if the user is not admin        
    window.location.href = '/';
}

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api-bgtfootqna-as.a.run.app/users'); // API URL
        if (!response.ok) {
          throw new Error('Failed to fetch users data');
        }
        const data = await response.json();
        setUsersData(Object.values(data));
        setLoading(false);
      } catch (error) {
        setError(error.toString());
        setLoading(false);
      }
    };

    const fetchReward = async () => {
      try {
        const response = await fetch('https://api-bgtfootqna-as.a.run.app/student_reward/getAll'); // API URL
        if (!response.ok) {
          throw new Error('Failed to fetch reward data');
        }
        const data = await response.json();
        setRewardData(Object.values(data));
        setLoading(false);
      } catch (error) {
        setError(error.toString());
        setLoading(false);
      }
    };

    fetchUsers();
    fetchReward();
  }, []);

  // Function to delete a user
  const deleteUser = async (userId) => {
    const confirmation = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (confirmation.isConfirmed) {
      try {
        const response = await fetch(`https://api-bgtfootqna-as.a.run.app/users/${userId}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete user');
        }

        await Swal.fire(
          'Deleted!',
          'User has been deleted.',
          'success'
        );

        window.location.reload();

        // Refresh user data
        const updatedUsers = usersData.filter(user => user.id !== userId);
        setUsersData(updatedUsers);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: error.message,
        });
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="flex sm:flex-row flex-col justify-evenly text-white">
        <div className="bg-[#0ad] w-auto m-2 md:w-5/12 p-4 rounded-lg flex items-center">
          <FontAwesomeIcon icon={faUser} style={{ width: "80px", height: "80px" }} />
          <p className="ps-3 text-7xl">{usersData.length-1}</p>
          <p className="ps-2 text-lg">ผู้ใช้งาน</p>
        </div>

        <div className="bg-[#ffc107] w-auto m-2 md:w-5/12 p-4 rounded-lg flex items-center">
          <FontAwesomeIcon icon={faTrophy} style={{ width: "80px", height: "80px" }} />
          <p className="ps-3 text-7xl">{rewardData.length}</p>
          <p className="ps-2 text-lg">ผลงานนักเรียน</p>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col justify-evenly text-white">
        <div className="bg-[#f59453] w-auto m-2 md:w-5/12 p-4 rounded-lg flex flex-col">
          <p className='text-4xl'>Admin account</p>
          <p className=''>username : adminuser_01<br/>password : ad1234_99</p>
        </div>

        <div className=" w-auto m-1 md:w-5/12 p-1  flex justify-evenly items-center">
          <a href="admin_page/add_reward" className='bg-[#ff5252] p-2 rounded-lg'>แก้ไขผลงานนักเรียน</a>
          <a href="/student_reward" className='bg-[#25c217] p-2 rounded-lg'>ดูผลงานนักเรียน</a>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <caption className="caption-top">
            ผู้ใช้งาน
          </caption>
          <thead>
            <tr className="border border-b-[#fff]">
              <th className="border border-slate-600">ID</th>
              <th className="border border-slate-600">ชื่อผู้ใช้</th>
              <th className="border border-slate-600">อีเมล</th>
              <th className="border border-slate-600">รหัสผ่าน</th>
              <th className="border border-slate-600">ระบบ</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {usersData.map((user) => {
              // Skip rendering if userId is 'e864ff39'
              if (user.userId === 'e864ff39') return null;

              return (
                <tr key={user.userId}>
                  <td className="border border-slate-600">{user.userId}</td>
                  <td className="border border-slate-600">{user.username}</td>
                  <td className="border border-slate-600">{user.email}</td>
                  <td className="border border-slate-600">{user.password}</td>
                  <td className="border border-slate-600">
                    <a href={`/admin_page/edituser?username=${user.username}`} className="bg-[#ffc107] rounded-lg p-1 m-1 block">
                      แก้ไข
                    </a>
                    <a
                      onClick={() => deleteUser(user.userId)}
                      className="bg-[#dc3545] rounded-lg p-1 m-1 block text-white "
                    >
                      ลบ
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

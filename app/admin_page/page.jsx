import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/header';

// Sample JSON data
const usersData = [
  {
    id: 1,
    username: "User168",
    email: "mew888@coco.phone",
    phone: "1112223334",
    password: "password1234",
    level: "member"
  },
  {
    id: 2,
    username: "User245",
    email: "john.doe@example.com",
    phone: "5554443332",
    password: "qwerty5678",
    level: "admin"
  },
  {
    id: 3,
    username: "User879",
    email: "jane.doe@example.com",
    phone: "4443332221",
    password: "zxcvb12345",
    level: "member"
  }
];

export default function Admin() {
  return (
    <>
      <div className="flex sm:flex-row flex-col justify-evenly text-white">
        <div className="bg-[#0ad] w-auto m-2 md:w-5/12   p-4 rounded-lg flex items-center ">
          <FontAwesomeIcon icon={faUser} style={{ width: "80px", height: "80px" }} />
          <p className="ps-3 text-7xl">56</p>
          <p className="ps-2 text-lg ">ผู้ใช้งาน</p>
        </div>

        <div className="bg-[#ffc107] w-auto m-2 md:w-5/12  p-4 rounded-lg flex items-center ">
          <FontAwesomeIcon icon={faTrophy} style={{ width: "80px", height: "80px" }} />
          <p className="ps-3 text-7xl">69</p>
          <p className="ps-2 text-lg ">ผลงานนักเรียน</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <caption className="caption-top">
            ผู้ใช้งาน
          </caption>
          <thead>
            <tr className="border border-b-[#fff]">
              <th className="border border-slate-600">ชื่อผู้ใช้</th>
              <th className="border border-slate-600">อีเมล</th>
              <th className="border border-slate-600">โทร</th>
              <th className="border border-slate-600">รหัสผ่าน</th>
              <th className="border border-slate-600">ระดับ</th>
              <th className="border border-slate-600">ระบบ</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {usersData.map((user, index) => (
              <tr key={index}>
                <td className="border border-slate-600">{user.username}</td>
                <td className="border border-slate-600">{user.email}</td>
                <td className="border border-slate-600">{user.phone}</td>
                <td className="border border-slate-600">{user.password}</td>
                <td className="border border-slate-600">{user.level}</td>
                <td className="border border-slate-600">
                  <a href={`/admin_page/edituser?id=${user.id}`} className="bg-[#ffc107] rounded-lg p-1 m-1 block">
                    แก้ไข
                  </a>
                  <a href={`/admin_page/?id=${user.id}`} className="bg-[#dc3545] rounded-lg p-1 m-1 block">
                    ลบ
                  </a>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </>
  );
}

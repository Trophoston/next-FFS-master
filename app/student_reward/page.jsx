'use client'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";


import Header from '../components/header';

const api = "https://us-central1-ffs-thailand.cloudfunctions.net/api/student_reward/getAll";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(api);
        console.log("API Response:", response.data); // Log the API response

        const data = response.data;

        // Convert the object into an array of project objects
        const projectsArray = Object.keys(data).map((key) => data[key]);

        setProjects(projectsArray);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message); // Set the error message
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show loading message while fetching data
  }

  if (error) {
    return <p>Error: {error}</p>; // Show error message if there was an error
  }

  return (
    <>
      <div className="lg:ps-60 lg:pe-14 p-4 ">
        <p className="text-5xl my-9 font-bold drop-shadow-lg text-[#2A5B3E]">ผลงานนักเรียน</p>

        <div className="flex flex-col flex-wrap bg-[#759D78] w-auto h-fit rounded-lg p-5 gap-4 relative">
          {projects.map((project) => (
            <div key={project.postID} className="flex flex-row flex-wrap rounded-lg bg-[#9dc5a0] p-3 overflow-hidden">
              <div className="w-full h-full xl:w-1/2 overflow-hidden">
                <img
                  draggable="false"
                  src={project.img_name} // Use the image URL from the project data
                  alt={project.title}
                  width="1000"
                  height="1000"
                  className="object-cover w-100  rounded-md"
                />
              </div>

              <div className="h-full w-full xl:w-1/2 overflow-hidden ps-4 flex flex-col mt-2">
                <p className="text-4xl mb-2 text-white">{project.title}</p>
                <p className="text-lg text-white pt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

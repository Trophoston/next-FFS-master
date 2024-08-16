'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/header';
import { storage } from '../../firebase.config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function Home() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Step 1: Upload the file to Firebase Cloud Storage and get the download URL
        let fileURL = '';
        if (file) {
            try {
                fileURL = await uploadFile(file);
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Error uploading file');
                return;
            }
        }

        // Create a JSON object
        const data = {
            title: title,
            description: description,
            img_name: fileURL // Add the image URL
        };

        try {
            // Send the JSON object to the backend
            const response = await axios.post("https://us-central1-ffs-thailand.cloudfunctions.net/api/student_reward/upload", data, {
                headers: {
                    "Content-Type": "application/json", // Set this header for JSON
                },
            });
            alert("Upload successful: " + response.data.postID);
        } catch (error) {
            if (error.response && error.response.data) {
                // Server provided more details about the error
                alert(`Error uploading reward: ${error.response.data}`);
                console.log(data);
                window.location.reload();
            } else {
                console.error("There was an error uploading the reward:", error);
                alert("Error uploading reward");
            }
        }
    };

    const uploadFile = async (file) => {
        const storageRef = ref(storage, `images/${file.name}`);
        try {
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            console.log('Uploaded file and got download URL:', downloadURL);
            return downloadURL;
        } catch (error) {
            console.error('Error uploading file:', error);
            throw error; // Re-throw error to handle it in handleSubmit
        }
    };


    const api = "https://us-central1-ffs-thailand.cloudfunctions.net/api/student_reward/getAll";

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

    const delapi = "https://us-central1-ffs-thailand.cloudfunctions.net/api/student_reward/delete/";

    function delapias(p_id) {
        const url = `${delapi}${p_id}`; // Construct the full URL with the ID
        console.log(url)
        axios.get(url)
            .then(response => {
                console.log('Item deleted successfully:', response.data);
                alert("Deleted Success");
                window.location.reload();
                // You can add code here to update the UI or perform other actions after deletion
            })
            .catch(error => {
                console.error('Error deleting item:', error);
                // Handle errors here
            });
    }

    return (
        <div className="lg:ps-60 lg:pe-14 p-4">
            <div className="flex flex-col flex-wrap bg-[#759D78] w-auto h-fit rounded-lg p-5 gap-4">
                <p className="text-white text-5xl my-2">เพิ่มผลงานนักเรียน</p>

                <form onSubmit={handleSubmit} className="mx-auto flex flex-col items-center w-full gap-2">
                    <div className="w-full flex justify-center">
                        <input
                            type="text"
                            placeholder="ชื่อผลงาน/งานที่ได้รับรางวัล"
                            className="input input-bordered w-full max-w-md"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="w-full flex justify-center">
                        <textarea
                            className="textarea textarea-bordered w-full max-w-md min-h-24"
                            placeholder="คำอธิบาย"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div className="w-full flex justify-center">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text text-white">อัพโหลดรูปภาพประกอบ</span>
                            </div>
                            <input
                                type="file"
                                className="file-input w-full max-w-md"
                                onChange={(e) => setFile(e.target.files[0])}
                                required
                            />
                        </label>
                    </div>

                    <div className="w-full max-w-md flex justify-end">
                        <button type="submit" className="btn bg-white mt-5">อัพโหลด</button>
                    </div>
                </form>


            </div>

            <div className="flex flex-col flex-wrap w-auto h-fit rounded-lg p-5 gap-8 relative">
                <p className="text-black text-5xl my-2">ลบผลงานนักเรียน</p>
                {projects.map((project) => (
                    <div key={project.postID} className="flex flex-row justify-between flex-wrap rounded-lg bg-[#9dc5a0] p-3">

                        <p className="text-4xl mb-2 text-white">{project.title}</p>

                        <button
                            type="button"
                            onClick={() => delapias(project.postID)}
                            className="btn bg-red-600 text-white">
                            ลบโพสต์
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
}

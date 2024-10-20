'use client';
import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../../components/header';
import { storage } from '../../../firebase.config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';

export default function Home() {

    useEffect(() => {
        // Check if the cookie exists and if it matches the admin username
      const adminUsername = Cookies.get('username'); // Assuming your cookie name is 'username'

      if (adminUsername !== 'adminuser_01') {
          // Redirect to the index page if the user is not admin        
          window.location.href = '/';
      }
  },);


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false); // To handle loading state
    const [error, setError] = useState(null); // To handle errors

    

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Step 1: Validate file type and size
        if (!file || !file.type.startsWith('image/')) {
            alert('Please upload a valid image file');
            setLoading(false);
            return;
        }

        if (file.size > 2 * 1024 * 1024) { // Limit file size to 2MB
            alert('File size exceeds the 2MB limit');
            setLoading(false);
            return;
        }

        // Step 2: Upload the file to Firebase Cloud Storage and get the download URL
        let fileURL = '';
        if (file) {
            try {
                fileURL = await uploadFile(file);
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Error uploading file');
                setLoading(false);
                return;
            }
        }

        // Create a JSON object to send to the API
        const data = {
            title: title,
            description: description,
            img_name: fileURL // Add the image URL
        };

        try {
            // Step 3: Send the JSON object to the backend
            const response = await axios.post("https://api-bgtfootqna-as.a.run.app/student_reward/upload", data, {
                headers: {
                    "Content-Type": "application/json", // Set this header for JSON
                },
            });
        
            // Show a success alert using SweetAlert2
            Swal.fire("Success!", "Upload successful: " + response.data.postID, "success");
        
            // Optionally, redirect instead of reloading the page
            // router.push('/some-path'); // Uncomment this if using Next.js or react-router
            // Alternatively, reload only if necessary
            window.location.reload();
        
        } catch (error) {
            // Check if the error is an Axios error and handle accordingly
            if (axios.isAxiosError(error)) {
                // Handle Axios-specific errors
                console.error("There was an error uploading the reward:", error.response?.data || error.message);
                Swal.fire("Error!", error.response?.data?.message || "Error uploading reward", "error");
            } else {
                // Handle non-Axios errors
                console.error("Unexpected error:", error);
                Swal.fire("Error!", "An unexpected error occurred", "error");
            }
        } finally {
            setLoading(false); // Stop loading regardless of success or error
        }
        
    };

    // Function to upload file to Firebase Storage
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

    // API to fetch all projects
    const api = "https://us-central1-ffs-thailand.cloudfunctions.net/api/student_reward/getAll";

    const [projects, setProjects] = useState([]);
    const [loadingProjects, setLoadingProjects] = useState(true); // Loading state for fetching projects
    const [errorProjects, setErrorProjects] = useState(null); // Error state for fetching projects

    // Fetching data from the API
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
                setErrorProjects(err.message); // Set the error message
            } finally {
                setLoadingProjects(false); // Stop loading
            }
        };

        fetchData();
    }, []);

    // API to delete a project
    const delapi = "https://us-central1-ffs-thailand.cloudfunctions.net/api/student_reward/delete/";

    function delapias(p_id) {
        const url = `${delapi}${p_id}`; // Construct the full URL with the ID
        console.log(url);
        axios.get(url)
            .then(response => {
                console.log('Item deleted successfully:', response.data);
                alert("Deleted Success");
                window.location.reload();
            })
            .catch(error => {
                console.error('Error deleting item:', error);
                alert("Error deleting item");
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
                        <button type="submit" className="btn bg-white mt-5" disabled={loading}>
                            {loading ? 'Uploading...' : 'อัพโหลด'}
                        </button>
                    </div>
                </form>

            </div>

            <div className="flex flex-col flex-wrap w-auto h-fit rounded-lg p-5 gap-8 relative">
                <p className="text-black text-5xl my-2">ลบผลงานนักเรียน</p>
                {loadingProjects ? (
                    <p>Loading projects...</p>
                ) : errorProjects ? (
                    <p>Error fetching projects: {errorProjects}</p>
                ) : (
                    projects.map((project) => (
                        <div key={project.postID} className="flex flex-col gap-2 justify-between flex-wrap rounded-lg bg-[#9dc5a0] p-3">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="flex flex-col gap-2">
                                    <p className="text-4xl mb-2 text-white">{project.title}</p>
                                    <p className=" mb-2 text-white ">{project.description}</p>
                                </div>
                                <img className="w-36 h-full rounded-lg" src={project.img_name} alt="" />
                            </div>
                            <button
                                type="button"
                                onClick={() => delapias(project.postID)}
                                className="btn btn-danger border border-red-600 text-red-600">
                                ลบโพสต์
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
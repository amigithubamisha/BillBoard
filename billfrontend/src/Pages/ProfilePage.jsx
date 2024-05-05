import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileIcon from '../assets/profile-icon.png';
import FooterSection from '../components/FooterSection';

const ProfilePage = () => {
    const [firstname, setFirstname] = useState(""); 
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/profile", {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt"),
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setFirstname(data.firstname);
            setLastname(data.lastname);
            setEmail(data.email);
          })
          .catch((err) => console.log(err));
      }, []);

    const updateProfile = () => {
        // Assuming you have a server endpoint to handle profile updates
        fetch("http://localhost:5000/updateProfile", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("jwt"),
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            password,
          }),
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            toast.error(data.error, {
              position: 'top-right',
              autoClose: 3000,
            });
          } else {
            toast.success('Profile updated successfully', {
              position: 'top-right',
              autoClose: 3000,
            });
          }
        })
        .catch((err) => console.log(err));
    };
    
    return (
        <>
            <div className="h-screen flex items-center justify-center bg-cover" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
                <div className="shadow-lg rounded-xl p-3 w-[500px] bg-slate-100 bg-opacity-50 flex flex-col gap-2">
                    <div className="text-center">
                        <img
                            src={ProfileIcon}
                            alt="User Profile Icon"
                            className="rounded-full w-28 h-20 mx-auto"
                        />
                    </div>
                    <h2 className="mt-2 text-center font-bold text-3xl text-[#00A9FF]">Profile Details</h2>
                    <form className="flex flex-col gap-2 mt-3 pl-3 pr-3">
                        <div>
                            <div className="flex flex-col">
                                <label className="ml-2 text-base font-medium" htmlFor="firstName">
                                    First Name:
                                </label>
                                <input
                                    className="p-2 rounded-lg border gap-2 bg-white"
                                    type="text"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                  
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <label className="ml-2 text-base font-medium" htmlFor="lastName">
                                    Last Name:
                                </label>
                                <input
                                    className="p-2 rounded-lg border gap-2 bg-white"
                                    type="text"
                                    value={lastname}
                                    onChange={(e) => setLastname(e.target.value)}
                                    
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <label className="ml-2 text-base font-medium" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    className="p-2 rounded-lg border gap-2 bg-white"
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    readOnly
                                   
                                />
                            </div>
                        </div>
                        <div>
                            {/* Add other input fields if needed */}
                        </div>
                        <button type="button" className="bg-[#00A9FF] text-white py-2 rounded-lg mt-3" onClick={() => { updateProfile() }}>
                            Update Profile
                        </button>
                    </form>
                </div>
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
            <FooterSection />
        </>
    );
};

export default ProfilePage;

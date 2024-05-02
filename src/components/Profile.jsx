import { useAppContext } from "../Context/AppContext";
import {  useState, useRef } from "react";
import { updateData, postData } from "../apiRequest/Services";

import ChangePassword from "./ChangePassword";

const Profile = () => {
  const { userData } = useAppContext();
  const fileInput = useRef(null);
  const [newImage, setNewImage] = useState(null);
  const doctorID = localStorage.getItem("doctorID");
  
  const handlePhotoChange = async (e) => {
    setNewImage(e.target.files[0])
    const formData = new FormData();
    formData.append("profilePicture", newImage);
    const response = await postData("doctors/uploadProfilePicture", formData, doctorID);
    console.log(response);
  };


  return (
    <div className="grow flex flex-col items-center justify-start py-12">
      <h1 className="italic font-bold text-5xl mb-6">Profile</h1>
      <div className="relative">
        {userData.avatar ? <img src={userData.avatar} className="size-[200px] rounded-full" /> : <div className="size-[200px] bg-primary rounded-full" />}{" "}
        <div onClick={() => fileInput.current.click()} className="bg-white absolute right-0 bottom-[20px] text-xl text-accent hover:text-primary duration-200 size-[35px] rounded-full flex items-center justify-center cursor-pointer">
          <i className="fa-solid fa-pen"></i>
        </div>
        <input className="hidden" type="file" ref={fileInput} onChange={(e) => handlePhotoChange(e)} />
      </div>
      <div>
        <div className="text-xl mt-6 text-left">
          <span className="font-semibold">Name:</span> <span className="capitalize">{userData.name}</span>
        </div>
        <div className="text-xl mt-6 text-left">
          <span className="font-semibold">Email:</span> <span className="">{userData.email}</span>
        </div>
        <div className="text-xl mt-6 mb-10 text-left">
          <span className="font-semibold">Courses:</span>{" "}
          <span>
            {userData.courses.map((item, index) => (
              <span key={index} className="">
                {item.courseName},
              </span>
            ))}
          </span>
        </div>
        <ChangePassword />
      </div>
    </div>
  );
};

export default Profile;

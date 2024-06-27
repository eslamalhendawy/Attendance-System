import { useAppContext } from "../Context/AppContext";

import ChangePassword from "./ChangePassword";
import ChangeAvatar from "./ChangeAvatar";

const Profile = () => {
  const { userData } = useAppContext();
  
  return (
    <div className="grow flex flex-col items-center justify-start py-12">
      <h1 className="italic font-bold text-5xl mb-6">Profile</h1>
      <div className="relative">
        {userData.avatar ? <img src={userData.avatar} className="size-[200px] rounded-full" /> : <div className="size-[200px] bg-primary rounded-full" />}{" "}
        <ChangeAvatar />
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
          <div className="flex flex-wrap justify-center gap-2">
            {userData.courses.map((item, index) => (
              <span key={index} className="">
                {item.courseName},
              </span>
            ))}
          </div>
        </div>
        <ChangePassword />
      </div>
    </div>
  );
};

export default Profile;

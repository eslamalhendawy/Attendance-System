import { useEffect, useState } from "react";
import { getData } from "../apiRequest/Services";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

const SideMenu = () => {
  const [loading, setLoading] = useState(true);
  const { userData, setUserData } = useAppContext();
  const doctorID = localStorage.getItem("doctorID");
  const navigate = useNavigate();

  useEffect(() => {
    const getDoctorData = async () => {
      const response = await getData("doctors/viewProfileForDoctors", doctorID);
      setUserData({ ...userData, name: response.data.doctor.name, email: response.data.doctor.email, role: "doctor", courses: response.data.doctor.courses, avatar: response.data.doctor.profilePicture });
      setLoading(false);
    };
    getDoctorData();
  }, []);

  const handleLogout = async () => {
    await getData("doctors/logout", doctorID);
    setUserData({ ...userData, loggedIn: false });
    navigate("/");
    localStorage.removeItem("doctorID");
  };

  return (
    <aside className="sideMenuHeight overflow-scroll no-scrollbar bg-primary sticky top-24 left-0 py-4 pl-4 px-8 rounded-lg flex flex-col gap-4 w-fit">
      <Link to="/profile" className="flex items-center gap-2">
        <div>{userData.avatar ? <img src={userData.avatar} className="size-[50px] rounded-full" /> : <div className="size-[50px] bg-accent rounded-full" />}</div>
        <h4 className="font-bold capitalize">{loading ? "Loading" : userData.name}</h4>
      </Link>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          {/* <span className="font-[600] text-lg mb-4 block">My Courses</span> */}
          <ul className="flex flex-col gap-4">
            <Link to="/">
              <li className="hover:bg-white duration-200 p-2 rounded-lg">Home</li>
            </Link>
            {loading ? (
              <li className="hover:bg-white duration-200 p-2 rounded-lg">Loading...</li>
            ) : (
              userData.courses.map((course, index) => (
                <Link key={index} to={`/course/${course._id}`}>
                  <li className="hover:bg-white duration-200 p-2 rounded-lg max-w-[180px] capitalize">{course.courseName}</li>
                </Link>
              ))
            )}
          </ul>
        </div>
        <button className="bg-white py-2 rounded-lg text-[#685BFF] hover:bg-[#685BFF] hover:text-white duration-200" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket mr-2"></i>Logout
        </button>
      </div>
    </aside>
  );
};

export default SideMenu;

import { Link } from "react-router-dom";
import { useAppContext } from "../Context/AppContext";

const SideMenu = () => {
  const { userData, setUserData } = useAppContext();
  const doctorLinks = [
    {
      name: "Computer Science",
      link: "/iasidnkasnmd1287162812sd",
    },
    {
      name: "Web Programming",
      link: "/iasidnkasnmd1287162812sd",
    },
    {
      name: "Information System",
      link: "/iasidnkasnmd1287162812sd",
    },
  ];

  const handleLogout = () => {
    setUserData({ ...userData, loggedIn: false });
    localStorage.removeItem("doctorID");
  };

  return (
    <aside className="sideMenuHeight bg-primary sticky top-4 left-0 py-4 pl-4 px-8 rounded-lg flex flex-col gap-4 w-fit">
      <div className="flex items-center gap-2">
        <div>
          <div className="size-[50px] bg-black rounded-full" />
        </div>
        <h4 className="font-bold">Doc Name</h4>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <span className="font-[600] text-lg mb-4 block">My Courses</span>
          <ul className="flex flex-col gap-4">
            {doctorLinks.map((link, index) => (
              <Link key={index} to={`/course/${link.link}`}>
                <li className="hover:bg-white duration-200 p-2 rounded-lg">{link.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <button className="bg-white py-2 rounded-lg text-[#685BFF]" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket mr-2"></i>Logout
        </button>
      </div>
    </aside>
  );
};

export default SideMenu;

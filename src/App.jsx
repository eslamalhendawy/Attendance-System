import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppContext } from "./Context/AppContext";
import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import ForgotPassword from "./components/ForgotPassword";
import OTP from "./components/OTP";
import ResetPassword from "./components/ResetPassword";
import SideMenu from "./components/SideMenu";
import Course from "./components/Course";
import Lecture from "./components/Lecture";

function App() {
  const loggedIn = Boolean(localStorage.getItem("doctorID"));
  const { userData, setUserData } = useAppContext();

  useEffect(() => {
    if (loggedIn) {
      setUserData({ ...userData, loggedIn: true });
    }
  }, []);

  return (
    <>
      <Router>
        <Header />
        <div className={loggedIn ? "flex gap-[40px] p-6 bg-[#EEF5FF]" : ""}>
          {userData.loggedIn && <SideMenu />}
          <Routes>
            <Route path="/" element={userData.loggedIn ? <HomePage /> : <Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/course/:id" element={<Course />} />
            <Route path="/lecture/:id" element={<Lecture />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer autoClose={2500} theme="dark" newestOnTop={true} />
    </>
  );
}

export default App;

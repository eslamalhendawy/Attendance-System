import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAppContext } from "./Context/AppContext";
import { useEffect } from "react";

import Header from "./components/Header";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const loggedIn = Boolean(localStorage.getItem("loggedIn"));
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
        <Routes>
          <Route path="/" element={loggedIn ? <HomePage /> : <Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

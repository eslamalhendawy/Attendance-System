import { useAppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

import image from "/assets/loginImage.png";

const Login = () => {
  const { userData, setUserData } = useAppContext();

  const handleLogin = () => {
    setUserData({ ...userData, loggedIn: true });
    localStorage.setItem("loggedIn", true);
    console.log(userData.loggedIn);
  }

  return (
    <section className="minHeight flex items-center justify-center px-6">
      <div className="container mx-auto bg-white py-6 px-6 md:py-0 md:px-0 rounded-xl md:flex gap-6 items-center loginShadow">
        <div className="hidden md:block md:basis-1/2">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col items-center md:basis-1/2">
          <h3 className="text-2xl xl:text-4xl text-center font-semibold mb-8 xl:mb-20">Sign In</h3>
          <div className="flex items-center gap-4 border-b border-black pb-2 px-2 mb-8 w-full md:w-[80%] xl:w-[60%]">
            <i className="fa-solid fa-user"></i>
            <input type="text" className="outline-none lg:text-lg" placeholder="Username"/>
          </div>
          <div className="flex items-center gap-4 border-b border-black pb-2 px-2 mb-8 w-full md:w-[80%] xl:w-[60%]">
            <i className="fa-solid fa-lock"></i>
            <input type="text" className="outline-none lg:text-lg" placeholder="Password"/>
          </div>
          <div className="flex items-center justify-between w-full md:w-[80%] xl:w-[60%] mb-6">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link to="/forgot-password" className="text-accent">Forgot Password ?</Link>
          </div>
          <button onClick={handleLogin} className="bg-accent hover:bg-primary duration-300 text-white py-3 px-12 rounded-xl text-xl block w-full md:w-[80%] xl:w-[60%]">Sign in</button>
        </div>
      </div>
    </section>
  );
};

export default Login;

import { useAppContext } from "../Context/AppContext";
import { Link } from "react-router-dom";

import bg from "/assets/background.png";
import image from "/assets/photo_2023-12-02_23-35-33.png";

const Login = () => {
  const { userData, setUserData } = useAppContext();
  return (
    <section className="minHeight flex items-center justify-center bg-cover px-6" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container mx-auto bg-white py-6 px-6 rounded-xl md:flex gap-6 items-center">
        <div className="hidden md:block md:basis-1/2">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col items-center md:basis-1/2">
          <h3 className="text-2xl text-center font-semibold mb-8">Sign In</h3>
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
              <input type="checkbox" />
              <span>Remmeber Me</span>
            </div>
            <Link to="/forgot-password">Forgot Password ?</Link>
          </div>
          <button className="bg-accent hover:bg-primary duration-200 text-white py-4 px-12 rounded-xl text-xl font-semibold">Log in</button>
        </div>
      </div>
    </section>
  );
};

export default Login;

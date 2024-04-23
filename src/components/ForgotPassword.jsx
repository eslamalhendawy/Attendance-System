import { Link } from "react-router-dom";

import image from "/assets/forgotPasswordImage.png";

const ForgotPassword = () => {
  return (
    <section className="minHeight flex items-center justify-center px-6">
      <div className="container mx-auto bg-white py-6 px-6 md:py-0 md:px-0 rounded-xl md:flex gap-6 items-center loginShadow">
        <div className="hidden md:block md:basis-1/2">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col items-center md:basis-1/2">
          <h3 className="text-2xl xl:text-4xl w-full md:w-[80%] xl:w-[60%] font-semibold mb-4 text-center">Forgot Password</h3>
          <p className="mb-8 xl:mb-20 w-full md:w-[80%] xl:w-[60%] text-center xl:text-lg text-[#606060]">Enter your E-mail to send a mail to re-assign a new password for your account.</p>
          <div className="flex items-center gap-4 border-b border-black pb-2 px-2 mb-8 w-full md:w-[80%] xl:w-[60%]">
            <i className="fa-solid fa-user"></i>
            <input type="text" className="outline-none lg:text-lg" placeholder="Email"/>
          </div>
          <div className="md:w-[80%] xl:w-[60%] mt-10">
            <Link to="/otp" className="text-center bg-accent hover:bg-primary duration-300 text-white py-3 px-12 rounded-xl text-xl block w-full">Send</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

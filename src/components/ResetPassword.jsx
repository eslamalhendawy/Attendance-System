import { Link } from "react-router-dom";

import image from "/assets/photo_2023-12-02_23-35-33.png";

const ResetPassword = () => {
  return (
    <section className="minHeight flex items-center justify-center px-6">
      <div className="container mx-auto bg-white py-6 px-6 rounded-xl md:flex gap-6 items-center">
        <div className="hidden md:block md:basis-1/2">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col items-center md:basis-1/2">
          <h3 className="text-2xl w-full md:w-[80%] xl:w-[60%] text-left font-semibold mb-4">Forgot Password</h3>
          <p className="mb-8 w-full md:w-[80%] xl:w-[60%]">Please, enter your new password.</p>
          <span className="w-full md:w-[80%] xl:w-[60%] mb-3 font-semibold">New Password</span>
          <input type="text" className=" mb-8 border outline-none lg:text-lg w-full md:w-[80%] xl:w-[60%] py-3 px-2  rounded-xl"  />
          <span className="w-full md:w-[80%] xl:w-[60%] mb-3 font-semibold">Confirm Password</span>
          <input type="text" className="border outline-none lg:text-lg w-full md:w-[80%] xl:w-[60%] py-3 px-2  rounded-xl" />
          <div className="md:w-[80%] xl:w-[60%] mt-10">
            <button className="bg-primary duration-200 text-black py-4 px-12 rounded-xl text-xl font-semibold">Finish</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResetPassword
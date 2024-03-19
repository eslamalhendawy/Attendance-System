import { useState } from "react";
import { Link } from "react-router-dom";

import image from "/assets/photo_2023-12-02_23-35-33.png";

function OTP() {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (e, i) => {
    setOtp([...otp.map((data, index) => (index === i ? e.target.value : data))]);
    if (e.target.value.length === 1 && i < 3) {
      e.target.nextElementSibling.focus();
    }
    if (e.target.value.length === 0 && i > 0) {
      e.target.previousElementSibling.focus();
    }
  };

  return (
    <section className="minHeight flex items-center justify-center px-6">
      <div className="container mx-auto bg-white py-6 px-6 rounded-xl md:flex gap-6 items-center">
        <div className="hidden md:block md:basis-1/2">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col items-center md:basis-1/2">
          <h3 className="text-2xl w-full md:w-[80%] xl:w-[60%] text-left font-semibold mb-4">Forgot Password</h3>
          <p className="mb-8 w-full md:w-[80%] xl:w-[60%]">Type the OTP you received on your e-mail to continue resetting your password.</p>
          <div className="w-full md:w-[80%] xl:w-[60%] flex items-center gap-[10px] mb-8">
            {otp.map((data, index) => (
              <input value={data} onChange={(e) => handleChange(e, index)} maxLength={1} className="w-[50px] p-2 text-center border-b-2 outline-none border-black text-xl text-black" key={index} type="password" />
            ))}
          </div>
          <div className="w-full md:w-[80%] xl:w-[60%]">
            <span className=" text-[#87C3E4] cursor-pointer border-b border-[#87C3E4]">Resend</span>
          </div>
          {/* <button onClick={() => console.log(otp.join(""))}>test</button> */}
          <div className="md:w-[80%] xl:w-[60%] mt-10">
            <Link to="/reset-password" className="bg-primary duration-200 text-black py-4 px-12 rounded-xl text-xl font-semibold">
              Next
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OTP;

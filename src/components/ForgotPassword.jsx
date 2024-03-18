import image from "/assets/photo_2023-12-02_23-35-33.png";

const ForgotPassword = () => {
  return (
    <section className="minHeight flex items-center justify-center px-6">
      <div className="container mx-auto bg-white py-6 px-6 rounded-xl md:flex gap-6 items-center">
        <div className="hidden md:block md:basis-1/2">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col items-center md:basis-1/2">
          <h3 className="text-2xl w-full md:w-[80%] xl:w-[60%] text-left font-semibold mb-4">Forgot Password</h3>
          <p className="mb-8 w-full md:w-[80%] xl:w-[60%]">Enter your E-mail to send a mail to re-assign a new password for your account.</p>
          <span className="w-full md:w-[80%] xl:w-[60%] mb-3">E-mail</span>
          <input type="text" className="border outline-none lg:text-lg w-full md:w-[80%] xl:w-[60%] py-3 px-2 mb-6 rounded-xl" placeholder="lorem@gmail.com" />
          <div className="md:w-[80%] xl:w-[60%]">
            <button className="bg-primary duration-200 text-black py-4 px-12 rounded-xl text-xl font-semibold">Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;

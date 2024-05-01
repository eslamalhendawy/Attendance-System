import image from "/assets/homePage.png";

const HomePage = () => {
  return (
    <div className="grow flex flex-col gap-4 items-center justify-center">
      <div>
       <img src={image} alt="" />
      </div>
      <p className="text-xl text-center font-semibold">Hello Doctor</p>
    </div>
  )
}

export default HomePage
import { useAppContext } from "../Context/AppContext";

import image from "/assets/homePage.png";

const HomePage = () => {
  const { userData } = useAppContext();

  return (
    <div className="grow flex flex-col gap-4 items-center justify-center">
      <div>
       <img src={image} alt="" />
      </div>
      <p className="text-xl text-center font-semibold capitalize">Hello Doctor {userData.name}</p>
    </div>
  )
}

export default HomePage
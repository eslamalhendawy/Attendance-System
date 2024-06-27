import { useAppContext } from "../Context/AppContext"

import ChangePassword from "./ChangePassword"
import ChangeAvatar from "./ChangeAvatar"

const Profile = () => {
    const { userData } = useAppContext()

    return (
        <div className="grow flex flex-col items-center justify-start py-12">
            <h1 className="italic font-bold text-5xl mb-6">Profile</h1>
            <div className="relative">
                {userData.avatar ? (
                    <img src={userData.avatar} className="size-[200px] rounded-full" />
                ) : (
                    <div className="size-[200px] bg-primary rounded-full" />
                )}{" "}
                <ChangeAvatar />
            </div>
            <div>
                <div className="text-xl mt-6 text-left w-[80%] mx-auto">
                    <span className="font-semibold">Name:</span> <span className="capitalize">{userData.name}</span>
                </div>
                <div className="text-xl mt-6 text-left w-[80%] mx-auto">
                    <span className="font-semibold">Email:</span> <span className="">{userData.email}</span>
                </div>
                <div className="text-xl mt-6 mb-10 text-left w-[80%] mx-auto">
                    <span className="font-semibold">Courses:</span>{" "}
                    <div className="flex flex-wrap gap-2">
                        <div className="flex flex-wrap gap-4 mb-8  mx-auto">
                            {userData.courses.map((course, index) => (
                                <div className="text-white bg-[#575AA2] py-2 px-4 rounded-lg capitalize" key={index}>
                                    {course.courseName}
                                </div>
                            ))}
                            {userData.courses.length === 0 && <p className="text-red-500 text-lg">No Courses Found</p>}
                        </div>
                    </div>
                </div>
                <ChangePassword />
            </div>
        </div>
    )
}

export default Profile

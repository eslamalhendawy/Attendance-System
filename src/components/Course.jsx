import { useState, useEffect } from "react";
import { getData } from "../apiRequest/Services";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Course = () => {
  const [loading, setLoading] = useState(true);
  const [courseData, setCourseData] = useState({});
  const doctorID = localStorage.getItem("doctorID");
  const { id } = useParams();
  useEffect(() => {
    const fetchDoctorData = async () => {
      const response = await getData(`courses/${id}`, doctorID);
      if (response.status === "success") {
        setCourseData(response.data.course);
        setLoading(false);
      }
    };
    fetchDoctorData();
  }, []);
  return <div className="grow">
    {loading ? (
      <h1>Loading...</h1>
    ) : (
      <div>
        <h1 className="capitalize font-bold text-2xl mb-6">{courseData.courseName}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
          {courseData.lectures.map((lecture, index) => (
            <div className="bg-white py-4 px-8 lectureCardShadow flex flex-col rounded-lg" key={index}>
              <h3 className="mb-8 text-xl font-bold">Lecture {lecture.lectureNumber}</h3>
              <Link to={`/lecture/${lecture.id}`} className="bg-accent hover:bg-primary duration-200 text-center py-3 rounded-lg text-white">View Lecture</Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link className="text-white bg-primary hover:bg-accent duration-200 py-2 px-12 rounded-lg font-semibold text-lg">View Course Attendance</Link>
        </div>
      </div>
    )}
  </div>;
};

export default Course;

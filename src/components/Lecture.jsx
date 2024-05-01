import { useState, useEffect } from "react";
import { getData } from "../apiRequest/Services";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Lecture = () => {
  const [loading, setLoading] = useState(true);
  const [lecture, setLecture] = useState({});
  const doctorID = localStorage.getItem("doctorID");
  const { id } = useParams();

  useEffect(() => {
    const fetchLectureData = async () => {
      const response = await getData(`courses/getCourseLectures/${id}`, doctorID);
      if (response.status === "success") {
        setLecture(response.data.lecture);
        setLoading(false);
      }
    };
    fetchLectureData();
  }, []);

  return (
    <div className="grow py-20">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 className="text-center font-bold text-3xl mb-4">Lecture {lecture.lectureNumber}</h1>
          <h2 className="text-center font-bold text-2xl mb-20">Title : {lecture.title}</h2>
          <div className="flex items-center justify-center gap-8">
            <button className="bg-accent hover:bg-primary duration-200 text-center py-3 px-6 rounded-lg text-white">View Attendance</button>
            <button className="bg-accent hover:bg-primary duration-200 text-center py-3 px-6 rounded-lg text-white">
              <i className="fa-solid fa-qrcode mr-2"></i>Take Attendance
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lecture;

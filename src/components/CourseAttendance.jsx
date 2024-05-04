import { useState, useEffect } from "react";
import { getData } from "../apiRequest/Services";
import { useParams } from "react-router-dom";
import { Table } from "antd";

const CourseAttendance = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState({});
  const [attendanceData, setAttendanceData] = useState([]);
  const [lectureColumns, setLectureColumns] = useState([]);
  const doctorID = localStorage.getItem("doctorID");
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    const fetchCourseData = async () => {
      const response = await getData(`courses/${id}`, doctorID);
      if (response.status === "success") {
        setCourseData(response.data.course);
        setLoading(false);
      }
    };

    fetchCourseData();
  }, []);

  useEffect(() => {
    const fetchCourseAttendance = async () => {
      const response = await getData(`doctors/viewCourseAttendance/${id}`, doctorID);
      if (response.success) {
        const tempSet = new Set();
        response.data.attendance.forEach((student) => {
          student.attendances.forEach((attendance) => {
            tempSet.add(attendance.lectureNumber);
          });
        });

        const lectureNumbers = [...tempSet].sort((a, b) => a - b);

        let temp = [...lectureNumbers].map((lectureNumber) => ({
          title: `Lec ${lectureNumber}`,
          dataIndex: `lecture${lectureNumber}`,
          key: `lecture${lectureNumber}`,
          render: (text, record) => (record[`lecture${lectureNumber}`] ? record[`lecture${lectureNumber}`] : "absent"),
        }));


        setLectureColumns(temp);

        const dataSource = response.data.attendance.map((student) => {
          const rowData = {
            key: student.studentName,
            studentName: student.studentName,
          };
          // Set attendance status for each lecture
          student.attendances.forEach((attendance) => {
            rowData[`lecture${attendance.lectureNumber}`] = attendance.status;
          });
          return rowData;
        });

        setAttendanceData(dataSource);
        setLoading2(false);
      }
    };

    fetchCourseAttendance();
  }, []);

  return (
    <div className="grow">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="capitalize font-bold text-2xl mb-6">{courseData.courseName}</h1>
          <p className="capitalize text-lg font-semibold mb-2">Doctor Name: {courseData.doctorId.name}</p>
          <p className="text-lg font-semibold mb-8">Doctor Email: {courseData.doctorId.email}</p>
        </>
      )}
      {loading2 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Table pagination={false} className="capitalize" columns={[{ title: "Name", dataIndex: "studentName", key: "studentName" }, ...lectureColumns]} dataSource={attendanceData} />
        </>
      )}
    </div>
  );
};

export default CourseAttendance;

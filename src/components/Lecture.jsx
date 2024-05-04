import { useState, useEffect } from "react";
import { getData } from "../apiRequest/Services";
import { useParams } from "react-router-dom";

import { Input, Table } from "antd";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import QrCode from "./QrCode";

const Lecture = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [lecture, setLecture] = useState({});
  const doctorID = localStorage.getItem("doctorID");
  const [hidden, setHidden] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [attendance, setAttendance] = useState([]);
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

  const fetchAttendance = async () => {
    setHidden(false);
    const response = await getData(`doctors/viewLectureAttendance/${id}`, doctorID);
    let temp = response.data.attendanceRecords.map((record) => {
      return { name: record.studentName, code: record.studentCode, status: record.status, key: record._id };
    });
    setAttendance(temp);
  };

  const editAttendance = async (record) => {
    toast.info("Updating...");
    let response = await getData(`doctors/changeStudentAttendance/${record.key}`, doctorID);
    if (response.status === "success") {
      fetchAttendance();
      toast.success("Updated successfully");
    }
  };

  return (
    <div className="grow py-20">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 className="text-center font-bold text-3xl mb-4">Lecture {lecture.lectureNumber}</h1>
          <h2 className="text-center font-bold text-2xl mb-20">Title : {lecture.title}</h2>
          <div className="flex items-center justify-center gap-8 mb-12">
            <button onClick={fetchAttendance} className="bg-accent hover:bg-primary duration-200 text-center py-3 px-6 rounded-lg text-white">
              View Attendance
            </button>
            <QrCode courseID={lecture.courseId} />
          </div>
          {!hidden && (
            <div>
              {loading2 ? (
                <p>Loading...</p>
              ) : (
                <>
                  <div className="flex justify-center mb-8">
                    <input onChange={(e) => setQuery(e.target.value)} className="w-[60%] p-2 outline-none border-2" type="text" placeholder="Search..." />
                  </div>
                  <Table className="capitalize" dataSource={attendance} pagination={false}>
                    <Table.Column
                      title="Name"
                      dataIndex="name"
                      key="name"
                      filteredValue={[query]}
                      onFilter={(value, record) => {
                        return record.name.toLowerCase().includes(value.toLowerCase());
                      }}
                    />
                    <Table.Column title="ID" dataIndex="code" key="code" />
                    <Table.Column title="Status" dataIndex="status" key="status" />
                    <Table.Column
                      title="Edit"
                      dataIndex="edit"
                      key="edit"
                      render={(_, record) => (
                        <div>
                          <i onClick={() => editAttendance(record)} className="fa-solid fa-pen cursor-pointer"></i>
                        </div>
                      )}
                    />
                  </Table>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Lecture;

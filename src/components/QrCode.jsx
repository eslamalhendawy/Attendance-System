import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getData, updateData } from "../apiRequest/Services"

import Modal from "@mui/material/Modal"

const QrCode = ({ courseID }) => {
    const [open, setOpen] = useState(false)
    const [qrCode, setQrCode] = useState(null)
    const [loading, setLoading] = useState(true)
    const doctorID = localStorage.getItem("doctorID")
    const { id } = useParams()

    const fetchQRCode = async () => {
        const response = await getData(`doctors/takeAttendance/${courseID}/${id}`, doctorID)
        console.log(response)
        setQrCode(response.data.qrCode)
        if (response.status === "success") {
            setLoading(false)
        }
    }

    const handleOpen = async () => {
        setOpen(true)
        fetchQRCode()
    }

    const handleClose = async () => {
        setOpen(false)
        const response = await updateData(`doctors/closeQr/${id}`, {}, doctorID)
        setQrCode(null)
        setLoading(true)
        console.log(response)
    }

    return (
        <>
            <button onClick={handleOpen} className="bg-accent hover:bg-primary duration-200 text-center py-3 px-6 rounded-lg text-white">
                <i className="fa-solid fa-qrcode mr-2"></i>Take Attendance
            </button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="w-screen h-screen flex items-center justify-center">
                    <div className="bg-white p-6 sm:p-12 shadow shadow-white rounded-xl w-[300px] sm:w-[450px]">
                        <div className="text-right mb-4">
                            <i
                                className="fa-solid fa-x text-xl text-[#d67a7a] hover:text-[#FF0000] duration-300 cursor-pointer"
                                onClick={handleClose}
                            ></i>
                        </div>
                        <h4 className="text-center mb-4 font-bold text-2xl">Your QR Code is ready</h4>
                        <p className="text-center text-lg text-[#606060] mb-6">scan the image below to preview your QR Code</p>
                        <div className="flex justify-center items-center">
                            {loading ? <p className="text-center text-xl">Loading...</p> : <img src={qrCode} />}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default QrCode

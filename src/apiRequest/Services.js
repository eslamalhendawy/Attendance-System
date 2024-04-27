import axios from "axios";
const baseURL = "https://smart-attendance-system-using-qr-code-1.onrender.com/api/v1/doctors";

export const postData = async (url, data) => {
  let response = [];
  await axios.post(`${baseURL}/${url}`, data)
    .then(res => {
      response = res.data;
    })
    .catch(err => {
      response = err;
    });
    return response;
}
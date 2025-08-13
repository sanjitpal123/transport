import axios from "axios";
const axiosInstace = axios.create({
  baseURL: "http://connect.transport-io.com/api",
});
export default axiosInstace;

import axios from "axios";
import axiosInstace from "./axiosInstance";

export const FetchBooking = async (token) => {
  try {
    console.log("token in fetch booking", token);
    const res = await axiosInstace.get("/get_booking", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

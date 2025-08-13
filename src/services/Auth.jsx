import axiosInstace from "./axiosInstance";
export const signIn = async (data) => {
  try {
    const res = await axiosInstace.post("/sign_in", data);
    console.log("responsive in service", res);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const SignInWithOtp = async (data) => {
  try {
    const res = await axiosInstace.post("/login_with_otp", data);
    console.log("responsive in signinwithotp ", res);
    return res.data;
  } catch (error) {
    throw error;
  }
};

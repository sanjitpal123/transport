import { useForm } from "react-hook-form";
import { AuthValidtion } from "../component/Validation/LoginValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS

import { use, useContext, useEffect, useState } from "react";
// import SignInWithOtp from "../services/Auth/SignInWithOtp";
import { signIn } from "../services/Auth";
import { GlobalStore } from "../component/GlobalStore";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../component/SubmitButton";
export default function Login() {
  const Navigate = useNavigate();
  const { setUser } = useContext(GlobalStore);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [isSucceed, setisSucceed] = useState(false);
  const [otp, setOtp] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AuthValidtion),
  });

  async function onsubmit(data) {
    setEmail(data.email);
    setPassword(data.password);
    try {
      console.log("data", data);

      const res = await signIn(data);
      console.log("res", res);
      if (res.status) {
        toast.success(res.message);
        if (res.user) {
          localStorage.setItem("user", JSON.stringify(res.user));
          setUser(res.user);
          Navigate("/");
        }

        // Redirect To dashboard
      } else {
        toast.error(res.error_message);
      }
      console.log("responsive in login page", res);
      //   setisSucceed(true);
    } catch (error) {
      console.log("error in login page", error);
    }
  }

  //   async function LoginWithOtp(e) {
  //     e.preventDefault();
  //     try {
  //       const res = await SignInWithOtp({ email, password, otp });
  //       console.log("responsive in login page of login with otp", res);
  //     } catch (error) {
  //       console.log("error while login with otp", error);
  //     }
  //   }

  return (
    <div className="flex items-center justify-center min-h-screen  p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Please login to your account
        </p>

        {/* Form */}

        <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
          {/* Email */}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              {...register("email")}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <p class="text-red-500 mt-1">{errors.email?.message}</p>
          </div>

          {/* Password */}

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              {...register("password")}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <p class="text-red-500 mt-1">{errors.password?.message}</p>
          </div>

          {/* Button */}
          <SubmitButton
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Login
          </SubmitButton>
        </form>
      </div>
    </div>
  );
}

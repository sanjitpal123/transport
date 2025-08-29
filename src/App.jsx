import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import { GlobalStore } from "./component/GlobalStore";
import Dashboard from "./pages/Dashboard";
import BookingPage from "./pages/Booking";
function App() {
  const { User } = useContext(GlobalStore);

  // getting whole object there is token and user both
  const wholeObject = JSON.parse(localStorage.getItem("user"));
  console.log("whole objectcxvx", wholeObject);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="/"
            element={wholeObject ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/booking"
            element={wholeObject ? <BookingPage /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;

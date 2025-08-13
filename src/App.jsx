import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";

import ContextProvider from "./component/GlobalStore";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ContextProvider>
  );
}

export default App;

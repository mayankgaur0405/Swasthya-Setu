import React, { useContext, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./Pages/Login";
import Room from "./Pages/Room";
import VideoCallHome from "./Pages/VideoCallHome";
import MyAppointments from "./Pages/MyAppointments.jsx";

const AppWrapper = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  const location = useLocation();

  const hideFooterRoutes = ["/my-appointment","/appointment","/about","/video-call", "/room"];

  const shouldHideFooter = hideFooterRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video-call" element={<VideoCallHome />} />
        <Route path="/room/:roomId" element={<Room />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
      </Routes>
      {!shouldHideFooter && <Footer />}
      <ToastContainer position="top-center" />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
};

export default App;

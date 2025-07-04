import React, { useEffect, useState, useContext } from "react";
import { Context } from "../main";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import "./MyAppointments.css";

const MyAppointments = () => {
  const { isAuthenticated } = useContext(Context);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/v1/appointment/my", {
          withCredentials: true,
        });
        setAppointments(data.appointments);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetch();
  }, []);

  if (!isAuthenticated) return <Navigate to="/login" />;

  const handleJoinCall = (roomId) => {
    navigate(`/room/${roomId}`);
  };

  return (
    <section className="page appointments-page">
      <h1>My Appointments</h1>
      <table className="appointments-table">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Date</th>
            <th>Department</th>
            <th>Status</th>
            <th>Join Call</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((app) => (
            <tr key={app._id}>
              <td>{`${app.doctor.firstName} ${app.doctor.lastName}`}</td>
              <td>{app.appointment_date.substring(0, 10)}</td>
              <td>{app.department}</td>
              <td>{app.status}</td>
              <td>
                {app.status === "Accepted" && app.roomId ? (
                  <button
                    onClick={() => handleJoinCall(app.roomId)}
                    className="join-call-btn"
                  >
                    Join Call
                  </button>
                ) : (
                  <span className="pending-msg">Not Available</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default MyAppointments;

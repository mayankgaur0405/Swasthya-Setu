import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <div style={{ marginTop: "80px" }}>
        <Hero
          title={"Schedule Your Appointment"}
          imageUrl={"/signin.png"}
        />
      </div>
      <AppointmentForm />
    </>
  );
};

export default Appointment;


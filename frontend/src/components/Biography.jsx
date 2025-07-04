import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="Who We Are" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Swasthya-Setu is a visionary healthcare initiative born out of the need to bridge the
            vast medical access gap between urban and rural India. Our mission is to make certified
            healthcare accessible to every household, especially in areas where people are
            vulnerable to unqualified medical practitioners.
          </p>
          <p>
            Founded in 2024, our team of passionate developers, designers, and health advocates is
            building Swasthya-Setu as a MERN stack solution — combining modern technology with
            empathy to solve real-world problems.
          </p>
          <p>
            From AI-powered symptom chat to video consultations with certified doctors, medication
            reminders, multilingual support, and emergency services, Swasthya-Setu aims to
            transform healthcare delivery in India’s underserved regions.
          </p>
          <p>
            We believe that healthcare is a right, not a luxury — and we're committed to turning
            this belief into a digital reality. One village, one home, one person at a time.
          </p>
          <p>
            Join us in our mission to bring “Har Ghar Hospital” to life and create a healthier,
            more connected India.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;

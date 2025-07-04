import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Swasthya Setu is a transformative healthcare platform focused on
            bridging the gap between rural communities and certified medical
            professionals. Through real-time video consultations, symptom-based
            guidance, and multilingual support, we bring essential healthcare
            services directly to your fingertips — anytime, anywhere.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;

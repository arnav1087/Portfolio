import React from "react";
import { motion } from "framer-motion";
import "./home.css"; // Import your CSS file
import profilePic from "../assets/profile.jpg"; // Put your image in /src/assets/

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ background: "transparent" }}
    >
      <div className="home-content">
                  <div className="home-image">
            <img src={profilePic} alt="Arnav Profile" />
          </div>
        <div className="home-text">
          
          <h2>Hello, I'm Arnav Rana</h2>

          <p>
            I am a passionate web developer skilled in JavaScript, React, and
            Python. I love building interactive and animated websites that
            deliver a great user experience.
          </p>
          <a href="/src/assets/resume.pdf" download className="download-button">
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

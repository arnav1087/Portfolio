import React from "react";
import "./Certificates.css";

// Frontend Web Development
import HTML5 from "../assets/ARNAV certificates/HTML5.pdf";
import CSS3 from "../assets/ARNAV certificates/CSS3.pdf";
import ES6JS from "../assets/ARNAV certificates/ES6 JS.pdf";
import ReactJS from "../assets/ARNAV certificates/ReactJS.pdf";
import MobileJS from "../assets/ARNAV certificates/Mobile Development and JavaScript.pdf";

// Data Analytics & Tableau
import VisualAnalytics from "../assets/ARNAV certificates/Visual Analytics with Tableau.pdf";
import DataViz from "../assets/ARNAV certificates/Data Visualization with Tableau.pdf";
import DataVizProject from "../assets/ARNAV certificates/Data Visualization with Tableau project.pdf";
import Dashboards from "../assets/ARNAV certificates/Creating dashboards and storytelling with Tableau.pdf";
import FundamentalsViz from "../assets/ARNAV certificates/Fundamental of visualization with Tableau.pdf";
import DesignPrinciples from "../assets/ARNAV certificates/Essential design principles for Tableau.pdf";

// Machine Learning & AI
import HandsOnML from "../assets/ARNAV certificates/Hands-on ML with scikit and Tensorflow.pdf";
import DeepRL from "../assets/ARNAV certificates/Deep learning and reinforcement learning.pdf";
import IntroML from "../assets/ARNAV certificates/Introduction to Machine Learning.pdf";
import MLForAll from "../assets/ARNAV certificates/Machine Learning for All.pdf";
import AIForEveryone from "../assets/ARNAV certificates/AI for everyone.pdf";

// Python for AI/Data Science
import H2OPython from "../assets/ARNAV certificates/Introduction to H20 using python.pdf";
import FlaskAI from "../assets/ARNAV certificates/Developing AI applications with python and Flask.pdf";
import CyberPython from "../assets/ARNAV certificates/Automate Cybersecurity tasks with python.pdf";

// R Programming
import MLR from "../assets/ARNAV certificates/Explore Machine Learning using R.pdf";
import IntroR from "../assets/ARNAV certificates/Introduction to R programming for data Science.pdf";

// UI/UX
import UXDesign from "../assets/ARNAV certificates/Principles of UX UI design.pdf";
import CanvaCard from "../assets/ARNAV certificates/Design professional business card using Canva.pdf";
import AdobeSpark from "../assets/ARNAV certificates/Getting started with Adobe Spark.pdf";

// Single Post
import DataStructures from "../assets/ARNAV certificates/Data Structures and performance.pdf";
import AlgorithmicToolbox from "../assets/ARNAV certificates/Algorithmic toolbox.pdf";
import ComputerVision from "../assets/ARNAV certificates/Introduction to computer vision and image processing.pdf";
import Blockchain from "../assets/ARNAV certificates/Bloakchain scalability and its foundations in Distributed Systems.pdf";
import NetZero from "../assets/ARNAV certificates/Net-zero building Fundamantals.pdf";
import ScientificWriting from "../assets/ARNAV certificates/How to write and publish scientific papers.pdf";
import PythonBasics from "../assets/ARNAV certificates/Python basics- Selection and iteration.pdf";

const certificatesData = [
  {
    category: "Frontend Web Development",
    caption:
      "Skilled in modern frontend technologies and UI design principles.",
    files: [
      { name: "HTML5", file: HTML5 },
      { name: "CSS3", file: CSS3 },
      { name: "ES6 JavaScript", file: ES6JS },
      { name: "ReactJS", file: ReactJS },
      { name: "Mobile Development and JavaScript", file: MobileJS },
    ],
  },
  {
    category: "Data Analytics & Visualization (Tableau)",
    caption: "Exploring the power of data visualization with Tableau.",
    files: [
      { name: "Visual Analytics with Tableau", file: VisualAnalytics },
      { name: "Data Visualization with Tableau", file: DataViz },
      { name: "Data Visualization with Tableau Project", file: DataVizProject },
      { name: "Creating Dashboards and Storytelling", file: Dashboards },
      { name: "Fundamentals of Visualization", file: FundamentalsViz },
      { name: "Essential Design Principles", file: DesignPrinciples },
    ],
  },
  {
    category: "Machine Learning & AI (Core Concepts)",
    caption: "Strengthening my AI/ML foundations with hands-on experience.",
    files: [
      { name: "Hands-on ML with Scikit and TensorFlow", file: HandsOnML },
      { name: "Deep Learning and Reinforcement Learning", file: DeepRL },
      { name: "Introduction to Machine Learning", file: IntroML },
      { name: "Machine Learning for All", file: MLForAll },
      { name: "AI for Everyone", file: AIForEveryone },
    ],
  },
  {
    category: "Python for AI & Data Science",
    caption: "Leveraging Python for advanced ML, AI and automation tasks.",
    files: [
      { name: "Introduction to H2O using Python", file: H2OPython },
      { name: "Developing AI with Python and Flask", file: FlaskAI },
      { name: "Automate Cybersecurity Tasks with Python", file: CyberPython },
    ],
  },
  {
    category: "R Programming & Data Science",
    caption: "Working with R for data science, machine learning and analytics.",
    files: [
      { name: "Explore Machine Learning using R", file: MLR },
      { name: "Introduction to R Programming", file: IntroR },
    ],
  },
  {
    category: "UI/UX and Design Tools",
    caption: "Creative meets code — Designing better digital experiences.",
    files: [
      { name: "Principles of UX UI Design", file: UXDesign },
      { name: "Design Business Card using Canva", file: CanvaCard },
      { name: "Getting Started with Adobe Spark", file: AdobeSpark },
    ],
  },
  {
    category: "Other Certificates",
    caption: "",
    files: [
      { name: "Data Structures and Performance", file: DataStructures },
      { name: "Algorithmic Toolbox", file: AlgorithmicToolbox },
      { name: "Intro to Computer Vision", file: ComputerVision },
      { name: "Blockchain Scalability", file: Blockchain },
      { name: "Net-zero Building Fundamentals", file: NetZero },
      { name: "Scientific Writing", file: ScientificWriting },
      { name: "Python Basics – Selection and Iteration", file: PythonBasics },
    ],
  },
];

const Certificates = () => {
  return (
    <div className="certificates-container">
      <h2>My Certificates</h2>
      {certificatesData.map((section, index) => (
        <div key={index} className="certificate-section">
          <h3>{section.category}</h3>
          {section.caption && <p className="caption">{section.caption}</p>}
          <ul>
            {section.files.map((item, i) => (
              <li key={i}>
                <a
                  href={item.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Certificates;

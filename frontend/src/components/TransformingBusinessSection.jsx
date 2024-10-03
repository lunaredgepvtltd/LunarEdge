import React, { useState, useEffect, useRef } from "react";
import halfmoon from '../assets/halfmoon.png';
import html from '../assets/html-5.png';
import sql from '../assets/sql.png';
import reactImg from '../assets/react.png';
import mongodb from '../assets/mongodb.png';
import aws from '../assets/aws.png';
import nodejs from '../assets/nodejs.png';
import figma from '../assets/figma.png';
import java from '../assets/java.png';
import css from '../assets/css.png';

const TransformingBusinessSection = () => {
  // Define state for active technology
  const [activeTechnology, setActiveTechnology] = useState(null);

  // Array of technologies for cycling through
  const technologies = ['figma', 'nodejs', 'mongodb', 'sql', 'html', 'react', 'aws', 'java', 'css'];

  // Ref to keep track of the index
  const indexRef = useRef(0);

  // Function to set the active technology
  const handleTechnologyClick = (tech) => {
    setActiveTechnology(tech);
    indexRef.current = technologies.indexOf(tech); // Update ref to the clicked tech index
  };

  // Define content for each technology
  const technologyContent = {
    html: "HTML is the standard language for creating web pages. It describes the structure of a webpage and is used along with CSS and JavaScript.",
    sql: "SQL (Structured Query Language) is a standard language for managing and manipulating databases, allowing for the querying, updating, and management of data.",
    react: "React is a JavaScript library for building user interfaces, especially single-page applications, by using a component-based architecture.",
    mongodb: "MongoDB is a NoSQL database designed for scalability and flexibility, allowing developers to store and query large amounts of unstructured data.",
    aws: "Amazon Web Services (AWS) is a comprehensive cloud computing platform that offers services like computing power, storage, and databases.",
    nodejs: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that enables fast and scalable network applications.",
    java: "Java is a high-level, class-based programming language designed to have as few implementation dependencies as possible, making it widely portable.",
    figma: "Figma is a web-based UI/UX design tool that allows for collaborative design, prototyping, and sharing of designs in real-time.",
    css: "CSS (Cascading Style Sheets) is used for describing the presentation of a document written in HTML or XML. It controls the layout and style of web pages."
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTechnology(technologies[indexRef.current]); 
      indexRef.current = (indexRef.current + 1) % technologies.length; // Cycle through the index
    }, 3000); 

    return () => clearInterval(interval); // Cleanup on unmount
  }, [technologies]);

  return (
    <div className="w-full h-[60vh] md:h-screen md:px-5 md:mt-28">
      <div className="w-[97%] h-[80%] md:h-full mx-auto flex flex-col justify-between">
        {/* heading-div */}
        <div className="w-full md:w-[50%] h-[40%] md:h-[60%] lg:h-auto mx-auto flex flex-col gap-3 md:gap-1 justify-center items-center">
          <p className="text-lg lg:text-4xl text-black md:text-nowrap text-center">
            TRANSFORMING BUSINESS THROUGH TECHNOLOGY
          </p>
          <p className="text-sm md:text-lg lg:text-2xl md:text-nowrap text-black text-center">
            We harness the latest tools to deliver exceptional results
          </p>
        </div>

        {/* Circle Gradients and Image */}
        <div className="w-full h-full relative">
          {/* First circle */}
          <div className="absolute left-[47%] md:left-[45%] top-[24%] md:top-[7%] w-[32%] xl:top-[4%] xl:left-[46%] h-auto flex justify-between items-center">
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white border transition-all duration-300 p-1 md:p-2 flex justify-center items-center cursor-pointer ${activeTechnology === 'html' ? 'border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('html')}
            >
              <img src={html} alt="HTML" className="h-[80%] w-[80%] object-contain" />
            </div>
          </div>

          {/* Second row of circles */}
          <div className="absolute left-[31%] xl:top-[9%] md:w-[37%] xl:w-[37%] xl:left-[31%] lg:left-[30%] top-[29%] md:top-[11%] lg:top-[10%] w-[41%] lg:w-[40%] h-auto flex justify-between items-center">
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white border hover:text-gray-400 transition-all duration-300 p-1 md:p-2 flex justify-center items-center cursor-pointer ${activeTechnology === 'sql' ? 'border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('sql')}
            >
              <img src={sql} alt="SQL" className="h-[80%] w-[80%] object-contain" />
            </div>
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white border hover:text-green-700 transition-all duration-300 p-1 md:p-2 flex justify-center items-center cursor-pointer ${activeTechnology === 'react' ? 'border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('react')}
            >
              <img src={reactImg} alt="react" className="h-[80%] w-[80%] object-contain" />
            </div>
          </div>

          {/* Third row of circles */}
          <div className="absolute left-[16%] top-[42%] md:top-[22%] lg:left-[17%] w-[67%] lg:w-[66%] xl:w-[60%] xl:left-[20%] xl:top-[21%] h-auto flex justify-between items-center">
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white border p-1 md:p-2 flex justify-center items-center cursor-pointer transition-all duration-300 ${activeTechnology === 'mongodb' ? 'border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('mongodb')}
            >
              <img src={mongodb} alt="mongodb" className="h-[80%] w-[80%] object-contain" />
            </div>
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white border p-1 md:p-2 flex justify-center items-center transition-all duration-300 cursor-pointer ${activeTechnology === 'aws' ? 'border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('aws')}
            >
              <img src={aws} alt="aws" className="h-[80%] w-[80%] object-contain" />
            </div>
          </div>

          {/* Fourth row of circles */}
          <div className="absolute left-[7%] lg:left-[5%] top-[59%] md:top-[40%] w-[86%] lg:w-[90%] xl:w-[82%] xl:left-[9%] xl:top[45%] h-auto flex justify-between items-center">
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white border p-1 md:p-2 flex justify-center items-center transition-all duration-300 cursor-pointer ${activeTechnology === 'nodejs' ? 'border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('nodejs')}
            >
              <img src={nodejs} alt="nodejs" className="h-[80%] w-[80%] object-contain" />
            </div>
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white border p-1 md:p-2 flex justify-center items-center transition-all duration-300 cursor-pointer ${activeTechnology === 'java' ? 'border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('java')}
            >
              <img src={java} alt="java" className="h-[80%] w-[80%] object-contain" />
            </div>
          </div>

          {/* Fifth row of circles */}
          <div className="absolute left-[0%] top-[78%] md:top-[57%] lg:top-[60%] xl:top-[61%] w-full xl:w-[96%] xl:left-[2%] h-auto flex justify-between items-center">
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white border p-1 md:p-2 flex justify-center items-center transition-all duration-300 cursor-pointer ${activeTechnology === 'figma' ? 'border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('figma')}
            >
              <img src={figma} alt="figma" className="h-[80%] w-[80%] object-contain" />
            </div>
            <div
              className={`z-10 h-9 w-9 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-full bg-white border p-1 md:p-2 flex justify-center items-center transition-all duration-300 cursor-pointer ${activeTechnology === 'css' ? 'border-black scale-110' : ''}`}
              onClick={() => handleTechnologyClick('css')}
            >
              <img src={css} alt="css" className="h-[80%] w-[80%] object-contain" />
            </div>
          </div>

          {/* Image */}
          <img
            src={halfmoon}
            alt="Picture of tagline"
            className="w-full h-full object-contain mt-10 md:mt-0 opacity-70"
          />

          {/* Conditionally render content based on active technology */}
          <p className=" text-slate-900 absolute text-[8px] md:text-[14px] xl:text-3xl w-[50%] md:w-[40%] left-[25%] xl:left-[31%] top-[68%] md:top-[47%] ">
            {activeTechnology ? technologyContent[activeTechnology] : "Click on a technology to learn more."}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default TransformingBusinessSection;

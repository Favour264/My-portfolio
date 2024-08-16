import React from 'react';
import '../App.css'; // Ensure this path is correct

const About = () => {
  return (
    <div className="">
               <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      <div className=" p-5">
        <div className="about-me text-xl text-white mt-5">
          <h1 className='font-bold text-3xl mb-3 text-sky-500 flex justify-center items-center underline'>
            About Me
          </h1>
          <h3 className='text-2xl'>
            <span className='ml-5'>Hello, I'm Adam Favour, a passionate</span> frontend web developer with a love for creating 
            intuitive and visually appealing interfaces. With certifications in software engineering.
          </h3>
          <p className='mt-3 text-2xl'>
            <span className='ml-5'>I'm eager to collaborate on innovative projects</span> and continue growing as a web developer.
            Feel free to explore my work and let's connect.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About;

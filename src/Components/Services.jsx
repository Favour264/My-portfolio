import React from 'react'
import '../App.css'
import { SiHtml5 } from 'react-icons/si'; 
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

const Services = () => {
  return (
    <div>
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
<section className="bg-animated cyber-grid py-20 relative overflow-hidden">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 neon-text " data-text="MY SERVICES">MY SKILLS</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="feature-card rounded-lg p-6 floating">
        <div className="text-5xl mb-4 text-cyan-400 feature-icon">
          <i className="fas fa-brain" />
        </div>
        <div className="flex gap-[200px]">
        <h3 className="text-2xl font-bold mb-2 text-sky-500 ">HTML</h3>
        <SiHtml5  className='text-sky-500' size={50}  />
        </div>
        <p className="text-gray-300">My expertise in HTML allows me to build clean,
             efficient code that enhances both functionality and user engagement.</p>
      </div>
      <div className="feature-card rounded-lg p-6 floating" style={{animationDelay: '1s'}}>
        <div className="text-5xl mb-4 text-pink-500 feature-icon">
          <i className="fas fa-shield-alt" />
        </div>
        <div className="flex gap-[200px]">
        <h3 className="text-2xl font-bold mb-2 text-sky-500">CSS</h3>
        <IoLogoCss3 className='text-sky-500' size={60} />
        </div>
        <p className="text-gray-300">
        CSS (Cascading Style Sheets) is a crucial tool in my web development toolkit, enabling me to transform raw HTML
         into visually appealing and user-friendly designs.
        </p>
      </div>
      <div className="feature-card rounded-lg p-6 floating" style={{animationDelay: '2s'}}>
        <div className="text-5xl mb-4 text-purple-500 feature-icon">
          <i className="fas fa-vr-cardboard" />
        </div>
        <div className="flex gap-[130px]">
        <h3 className="text-2xl font-bold mb-2 text-sky-500">JavaScript</h3>
        <TbBrandJavascript className='text-sky-500' size={60} />
        </div>
        <p className="text-gray-300">JavaScript is the backbone of interactive and dynamic web experiences, and I leverage it to bring websites to life with robust functionality and engaging user interactions. </p>
      </div>
      <div className="feature-card rounded-lg p-6 floating" style={{animationDelay: '0.5s'}}>
        <div className="text-5xl mb-4 text-green-400 feature-icon">
          <i className="fas fa-network-wired" />
        </div>
        <div className="flex gap-[160px]">
        <h3 className="text-2xl font-bold mb-2 text-sky-500">Reactjs</h3>
        <GrReactjs className='text-sky-500' size={60} />
        </div>
        <p className="text-gray-300">React.js is a powerful library I use to build dynamic and high-performance user
             interfaces with ease. Leveraging React’s component-based architecture, I create reusable and maintainable 
             UI elements that enhance development efficiency and consistency. </p>
      </div>
      <div className="feature-card rounded-lg p-6 floating" style={{animationDelay: '1.5s'}}>
        <div className="text-5xl mb-4 text-yellow-400 feature-icon">
          <i className="fas fa-bolt" />
        </div>
        <div className="flex gap-[120px]">
        <h3 className="text-2xl font-bold mb-2 text-sky-500 ">Tailwind Css</h3>
        <RiTailwindCssFill className='text-sky-500' size={60} />
        </div>
        <p className="text-gray-300">Tailwind CSS is a utility-first CSS framework that I use to design and build
             modern, responsive web interfaces efficiently. By applying Tailwind’s utility classes, I create highly
              customizable and visually appealing designs without the need for extensive custom CSS.</p>
      </div>
      <div className="feature-card rounded-lg p-6 floating" style={{animationDelay: '2.5s'}}>
        <div className="text-5xl mb-4 text-red-500 feature-icon">
          <i className="fas fa-dna" />
        </div>
        <div className="flex gap-[130px]">
        <h3 className="text-2xl font-bold mb-2 text-sky-500">Bootstrap</h3>
        <FaBootstrap className='text-sky-500' size={60}  />
        </div>
        <p className="text-gray-300">Bootstrap is a versatile front-end framework I use to quickly and
             efficiently design responsive and visually appealing websites. This results in well-structured,
              user-friendly websites that are both aesthetically pleasing and functional.</p>
      </div>
    </div>
  </div>
</section>
  </div>
    </div>
  )
}

export default Services

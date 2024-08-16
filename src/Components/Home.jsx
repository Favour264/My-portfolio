import React from 'react';
import '../App.css';

const Home = () => {
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
        <div className="content text-white mt-[10px] pb-[50px] ml-10">
          <div className="text text-2xl">
            <h1>Hello, It's Me</h1><br />
            <h1 className="text-4xl">Adams Favour</h1><br />
            <div className="flex">
              <h1 className="text-2xl mr-5">I am a</h1>
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl text-sky-500 font-bold">
                Webdeveloper
              </h1>
            </div>
            </div>
          </div>
        </div>
        </div>
     
  );
};

export default Home;

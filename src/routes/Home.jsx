import React from "react";
import About from "./About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "./Projects.jsx";
import Certificates from "./Certificates.jsx";

const Home = () => {
  return (
    <main className="main">
      <div className="py-5 my-5 text-center row">
        <div className="col-12 col-md-6" >
        <img
          className="d-block mx-auto personal-photo"
          src="/personal_photo.jpg"
          alt="varun jatav photo"
          width="350px"
          height="350px"
          style={{ borderRadius: "100%" }}
        />
        
        </div>
       <div className="col-12 col-md-6 text-center text-md-start" id="about" >
       <About/>
       </div>
      </div>
      <div className="container px-4 py-5" id="skills" >
        <h2 className="pb-2">Skills</h2>
        <hr />
        <Skills/>

      </div>
      <div className="b-example-divider mb-0"></div>
      <Projects/>
      <Certificates/>
     
    </main>
  );
};

export default Home;

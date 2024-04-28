
import Skills from "../components/Skills";

const About = () => {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold text-body-emphasis">About Me</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Experienced frontend developer proficient in HTML, CSS, and
            JavaScript, with a solid foundation in React, Redux, Redux Toolkit,
            Bootstrap, and Tailwind CSS. Backed by 3 months of hands-on
            experience in PHP, JavaScript, and WordPress development, I bring a
            versatile skill set to craft engaging and dynamic web experiences
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <a href="/VARUN JATAV.pdf" download="/VARUN JATAV.pdf">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
            >
              Download Resume
            </button>
            </a>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Skills</h2>

        <Skills/>

      </div>
    </>
  );
};

export default About;

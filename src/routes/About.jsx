import TypingAnimator from "react-typing-animator";

const About = () => {
  const textArray = ["Frontend Developer", "MERN Stack Developer"];
  return (
    <>
      <h1 className="display-5 fw-bold text-body-emphasis">Varun Jatav</h1>
      <div className="col-lg-6">
        <TypingAnimator
          textArray={textArray}
          cursorColor="#333"
          textColor="#555"
          fontSize="24px"
          loop
          typingSpeed={60}
          delaySpeed={1000}
          backspace
          height="60px"
        />
      </div>
      <div>
        <p className="lead mb-4">
          Experienced frontend developer proficient in HTML, CSS, and
          JavaScript, with a solid foundation in React, Redux, Redux Toolkit,
          Bootstrap, and Tailwind CSS. Backed by 3 months of hands-on experience
          in PHP, JavaScript, and WordPress development, I bring a versatile
          skill set to craft engaging and dynamic web experiences
        </p>
        <div className="d-flex justify-content-center mb-5 d-md-block">
          <a
            href="/VARUN JATAV.pdf"
            download
            className="btn btn-primary btn-lg px-4 me-sm-3"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default About;

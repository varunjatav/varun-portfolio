import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";

const projects = [
  {
    id: 1,
    img: "./param-computers.png",
    title: "Param Computers",
    content:
      "Welcome to Param Computers, where students and clients alike can register effortlessly through our intuitive MERN stack website. Seamlessly combining MongoDB, Express, React, and Node.js, our platform offers a user-friendly experience for registering and managing accounts. Join our community today and unlock access to exclusive resources tailored to your needs.",
    github: "https://github.com/varunjatav/param-computers-reg",
    netlify: "https://param-computers.netlify.app",
    techStack: ["./html.png", "./css.png", "./react.png", "./bootstrap.png", "./nodeJs.png", "./express.webp" ,"./Mongodb.png"],
  },
  {
    id: 2,
    img: "./black-pearl.png",
    title: "Black Pearl",
    content:
      "Black Pearl is an Ecommerce Website where you can find a variety of jewelleries of Gold, Platinum, Solitiare, Diamond, Silver, etc and more",
    github: "https://github.com/nikhildeora/black-pearl",
    netlify: "https://6647487847e656bbf09881ab--lucky-flan-117f5e.netlify.app/",
    techStack: [
      "./html.png",
      "./css.png",
      "./javascript.png",
      "./react.png",
      "./bootstrap.png",
      "./firebase.png",
    ],
  },
  
  {
    id: 3,
    img: "./BlissMart.png",
    title: "Bliss Mart",
    content:
      "An Mern Stack Ecommerce Application for Clothing and Accessories of men and women. The User can Signup and Login to App and can store the products to their carts.",
    github: "https://github.com/varunjatav/bliss-mart-frontend",
    netlify:
      "https://bliss-mart.netlify.app/",
    techStack: ["./html.png", "./css.png", "./react.png", "./tailwind.png", "./nodeJs.png", "./express.webp" ,"./Mongodb.png" ],
  },
 
];
const Projects = () => {
  return (
    <div className="container px-4 " id="projects">
      <h2 className="pb-2 border-bottom">Projects</h2>

      <div className="row row-cols-1 align-items-stretch g-4 mt-5">
        {projects.map((single) => (
          <div key={single.id} className="col mb-5">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col">
                <img
                  src={single.img}
                  alt={single.title}
                  className="rounded-s-2"
                  width="100%"
                  height="280px"
                />
              </div>
              <div className="col text-center">
                <h1 className="fs-2">{single.title}</h1>

                <p className="fst-italic fs-6 fs-md-5">{single.content}</p>
                <div className="d-flex gap-2 justify-content-center">
                  <a
                    href={single.github}
                    type="button"
                    className="btn btn-dark"
                    target="_blank"
                  >
                    <FaGithub /> Github
                  </a>
                  <a
                    href={"https://github.com/varunjatav/bliss-mart-backend"}
                    type="button"
                    className="btn btn-dark"
                    target="_blank"
                  >
                    <FaGithub /> Github Backend
                  </a>
                  <a
                    href={single.netlify}
                    type="button"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    <BiLogoNetlify /> Netlify
                  </a>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between pt-4">
                  {single.techStack.map((tech) => (
                    <img
                      style={{ cursor: "pointer" }}
                      key={tech}
                      src={tech}
                      alt={tech}
                      width="50px"
                      height="50px"
                      className="m-auto"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

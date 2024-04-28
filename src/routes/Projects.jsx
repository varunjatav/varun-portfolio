import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";

const projects = [
  {
    id: 1,
    img: "/black-pearl.png",
    title: "Black Pearl",
    content:
      "Black Pearl is an Ecommerce Website where you can find a variety of jewelleries of Gold, Platinum, Solitiare, Diamond, Silver, etc and more",
    github: "https://github.com/nikhildeora/black-pearl",
    netlify:
      "https://startling-tulumba-8a76b2.netlify.app/",
    techStack: ["/html.png", "/css.png" , "/javascript.png", "/react.png", "/bootstrap.png", "/firebase.png"],
  },
  {
    id: 2,
    img: "/weather-app.png",
    title: "Weather app",
    content:
      "A React weather app where you can check weathers of cities and countries",
    github: "https://github.com/varunjatav/weather-app",
    netlify:
      "https://658ea8986ca12d9c5896be81--incredible-haupia-446af4.netlify.app/",
    techStack: ["/html.png", "/css.png", "/react.png", "/bootstrap.png"],
  },
  {
    id: 3,
    img: "/e-commerce.png",
    title: "E commerce App",
    content:
      "An E commerce app to find electronics and household products",
    github: "https://github.com/varunjatav/e-coomerce",
    netlify:
      "https://magnificent-faloodeh-17d228.netlify.app/",
    techStack: ["/html.png", "/css.png", "/react.png", "/bootstrap.png"],
  },
];
const Projects = () => {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">Projects</h2>

      <div className="row row-cols-1 align-items-stretch g-4 py-5">
        {projects.map((single) => (
          <div key={single.id} className="col" style={{ height: "500px" }}>
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col">
                <img
                  src={single.img}
                  alt={single.title}
                  className="w-100 rounded-s-2"
                />
              </div>
              <div className="col text-center">
                <h1 className="fs-2">{single.title}</h1>

                <p className="fst-italic fs-5">{single.content}</p>
                <div className="d-flex gap-2 justify-content-center">
                  <a
                    href={single.github}
                    type="button"
                    className="btn btn-dark"
                  >
                    <FaGithub /> Github
                  </a>
                  <a
                    href={single.netlify}
                    type="button"
                    className="btn btn-primary"
                  >
                    <BiLogoNetlify /> Netlify
                  </a>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-between pt-4">
                  {single.techStack.map((tech) => (
                    <img
                    key={tech}
                      src={tech}
                      alt="javascript"
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

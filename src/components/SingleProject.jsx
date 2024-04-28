import { FaGithub } from "react-icons/fa";
import { BiLogoNetlify } from "react-icons/bi";

const SingleProject = ({id,img,title,content,github,netlify}) => {
  return (
    <div id={id} className="col" style={{ height: "500px" }}>
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <img src={img} alt={title}  className="w-100 rounded-s-2"/>
            </div>
            <div className="col text-center">
              <h1 className="fs-2">{title}</h1>
              
              <p className="fst-italic fs-5">{content}</p>
              <div className="d-flex gap-2 justify-content-center">
              <a href={github} type="button" className="btn btn-dark"><FaGithub/> Github</a>
              <a href={netlify} type="button" className="btn btn-primary"><BiLogoNetlify/> Netlify</a>
              </div>
              <div className="d-flex flex-wrap align-items-center justify-content-between pt-4">
                
              <img src="/html.png" alt="javascript" width="50px" height="50px" className="m-auto"/>
              <img src="/css.png" alt="javascript" width="50px" height="50px" className="m-auto"/>
              <img src="/react.png" alt="javascript" width="50px" height="50px" className="m-auto"/>
              <img src="/bootstrap.png" alt="javascript" width="50px" height="50px" className="m-auto"/>
              </div>
            </div>
          </div>
          </div>
  )
}

export default SingleProject
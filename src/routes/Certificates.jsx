const Certificates = () => {
  return (
    <div className="d-flex justify-content-around p-2 gap-5 flex-wrap">
      <div className="border-2" style={{ width: "400px", height: "400px" }}>
        <img
          src="react-redux-certificate.png"
          alt="react-redux-certificate"
          width="100%"
          height="80%"
        />
        <h3 className="text-center fst-italic">React and redux-Toolkit</h3>
      </div>
      <div className="border-2" style={{ width: "400px", height: "400px" }}>
        <img
          src="web-development-certificate.jpg"
          alt="react-redux-certificate"
          width="100%"
          height="80%"
        />
        <h3 className="text-center fst-italic">Full Stack</h3>
      </div>
    
      <div className="border-2" style={{ width: "400px", height: "400px" }}>
        <img
          src="typescript-certificate.jpg"
          alt="typescript-certificate"
          width="100%"
          height="80%"
        />
        <h3 className="text-center fst-italic">Typescript</h3>
      </div>
    </div>
  );
};

export default Certificates;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const SERVICE_ID = "service_yldfh7j";
  const TEMPLATE_ID = "template_hw9qqj3";
  const PUBLIC_KEY = "wRvzwkTevv6UTnjLk";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} id="contact">
        <div className="mb-4">
          <h1>Contact Me.</h1>
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="user_name"
            className="form-control"
            placeholder="Enter your name here"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            placeholder="Enter your email here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter your message here"
            name="message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          SEND
        </button>
      </form>
    </>
  );
};

export default Contact;

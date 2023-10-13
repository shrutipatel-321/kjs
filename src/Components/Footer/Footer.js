import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-1">
      <h1 id="footer-h1">Contact Form</h1>
      <form id="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Footer;

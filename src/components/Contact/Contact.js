import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>mouneshofficial11@gmail.com</span>
        </p>
        <p>
          Github Username : <span>@mouneshrebel</span>
        </p>
        <div className="contact__icons">
          <a
            href="https://www.linkedin.com/in/mouneshrebel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a
            href="https://www.facebook.com/mounesh.rebel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a
            href="https://www.instagram.com/mounesh_official_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;

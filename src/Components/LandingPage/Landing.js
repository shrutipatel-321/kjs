import React from "react";
import ReactPlayer from "react-player";
import video1 from "./v1.mp4";
import video2 from "./v2.mp4";
import video3 from "./v3.mp4";
import video4 from "./v4.mp4";
import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      <video className="v1" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
      <video className="v1" autoPlay loop muted>
        <source src={video2} type="video/mp4" />
      </video>
      <video className="v1" autoPlay loop muted>
        <source src={video3} type="video/mp4" />
      </video>
      <video className="v1" autoPlay loop muted>
        <source src={video4} type="video/mp4" />
      </video>
      
    </div>
  );
}

export default Landing;

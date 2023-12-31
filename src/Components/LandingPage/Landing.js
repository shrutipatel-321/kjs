import React from "react";
import ReactPlayer from "react-player";
import Footer from "../Footer/Footer";
import video1 from "./v1.mp4";
import video2 from "./v2.mp4";
import video3 from "./v3.mp4";
import video4 from "./v4.mp4";
// import img1 from './s1.png';
import img2 from './candy.png';
import img3 from './candy.png';
import img4 from './candy.png';
import "./Landing.css";

function Landing() {
  return (
    <>
    {/* <img className="strawberry" src={img1} alt="" /> */}
    <div className="container">
    
    <img className="strawberryy" id="s2" src={img3} alt="" />
    <img className="strawberryy" id="s9" src={img4} alt="" />
    <img className="strawberryy" id="s4" src={img2} alt="" />
    <img className="strawberry" id="s6" src={img4} alt="" />
    <img className="strawberryy" id="s8" src={img3} alt="" />
      <div className="landing">
      
      <img className="strawberryy" id="s1" src={img2} alt="" />
    <img className="strawberry" id="s3" src={img4} alt="" />
    
    <img className="strawberry" id="s5" src={img3} alt="" />
    
    <img className="strawberryy" id="s7" src={img2} alt="" />
    <img className="strawberry" id="s10" src={img4} alt="" />
    <img className="strawberry" id="s11" src={img3} alt="" />
    <img className="strawberry" id="s12" src={img2} alt="" />
    <img className="strawberryy" id="s13" src={img3} alt="" />
    <img className="strawberry" id="s14" src={img4} alt="" />
    
    
        <video className="v1" id="vid1" autoPlay loop muted>
          <source src={video1} type="video/mp4" />
        </video>
        <video className="v1" id="vid2" autoPlay loop muted>
          <source src={video2} type="video/mp4" />
        </video>
        <video className="v1" id="vid3" autoPlay loop muted>
          <source src={video3} type="video/mp4" />
        </video>
        <video className="v1" id="vid4" autoPlay loop muted>
          <source src={video4} type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="footer">
        <Footer />
    </div>
    </>
  );
}

export default Landing;

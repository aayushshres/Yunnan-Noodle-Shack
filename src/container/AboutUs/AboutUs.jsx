import React, { useEffect } from "react";
import images from "../../constants/images";
import "../AboutUs/about.css";

function About() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, 
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
          entry.target.classList.add("fade-out");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const targets = document.querySelectorAll(".aboutTop, .aboutBottom");
    targets.forEach((target) => {
      target.classList.add("fade-out"); 
      observer.observe(target); 
    });

    return () => {
      observer.disconnect(); 
    };
  }, []);

  return (
    <div className="about">
      <img src={images.about} alt="about" className="aboutItem aboutTop" />
      <div className="aboutItem aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid.
        </p>
        <button>More</button>
      </div>
    </div>
  );
}

export default About;
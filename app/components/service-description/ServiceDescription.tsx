import React, { useRef } from "react";
import Button from "../button/Button";
import image from "/service-description-icon.png";
// import { gsap } from "gsap";
// import { SplitText } from "gsap/SplitText";
// import { useGSAP } from "@gsap/react";
import "./service-description.css";

interface ServiceDescriptionProps {
   title: React.ReactNode;
   subTitle: React.ReactNode;
}
function ServiceDescription({ title, subTitle }: ServiceDescriptionProps) {
   const containerRef = useRef<HTMLDivElement>(null);

   return (
      <section className="service-description" ref={containerRef}>
         <div className="service-description__body">
            <h2 className="service-description__title">{title}</h2>
            <div className="service-description__subtitle-wrapper">
               <img
                  className="service-description__subtitle-image"
                  src={image}
                  alt="Orange icon"
               ></img>
               <h5 className="service-description__subtitle-text">
                  <span className="space"></span>
                  {subTitle}
               </h5>
            </div>
         </div>
      </section>
   );
}
export default ServiceDescription;

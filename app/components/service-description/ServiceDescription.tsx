import React, { useRef } from "react";
import image from "/service-description-icon.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./service-description.css";

interface ServiceDescriptionProps {
   title: React.ReactNode;
   subTitle: React.ReactNode;
}
function ServiceDescription({ title, subTitle }: ServiceDescriptionProps) {
   const iconContainerRef = useRef<HTMLDivElement>(null);
   useGSAP(() => {
      gsap.to(iconContainerRef.current, {
         duration: 10,
         rotate: 360,
         ease: "none",
         repeat: -1,
      });
   });
   return (
      <section className="service-description">
         <h3 className="service-description__title">{title}</h3>
         <div className="service-description__body">
            <div
               className="service-description__image-wrapper"
               ref={iconContainerRef}
            >
               <img
                  src={image}
                  alt="An Orange cirle rotating"
                  data-testid="service-description-icon"
               />
            </div>
            <h4
               className="service-description__sub-title"
               data-testid="service-description-sub-title"
            >
               <span className="space"></span>
               {subTitle}
            </h4>
         </div>
      </section>
   );
}
export default ServiceDescription;

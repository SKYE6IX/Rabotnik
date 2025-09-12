import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { landingsList } from "./landings-list";
import { Link } from "react-router";
import Button from "../button/Button";
import "./landing-list-block.css";

function LandingListBlock() {
   const containerRef = useRef<HTMLDivElement>(null);
   const { contextSafe } = useGSAP(
      () => {
         // Heading animation
         const split = SplitText.create(".landing-list-block__body-heading", {
            type: "lines",
         });
         gsap.from(split.lines, {
            yPercent: 100,
            autoAlpha: 0,
            stagger: 0.2,
            ease: "sine.out",
            scrollTrigger: {
               trigger: ".landing-list-block__body-heading",
               start: "top 90%",
               toggleActions: "play none none reverse",
            },
         });
         gsap.set(".landing-list-block__list-item", {
            yPercent: 20,
            autoAlpha: 0,
         });
         ScrollTrigger.batch(".landing-list-block__list-item", {
            onEnter: (batch) => {
               gsap.to(batch, {
                  yPercent: 0,
                  autoAlpha: 1,
                  ease: "sine.out",
                  duration: 1,
                  stagger: 0.2,
               });
            },
            onLeaveBack: (batch) => {
               gsap.to(batch, { yPercent: 20, autoAlpha: 0, ease: "sine.out" });
            },
            start: "top 90%",
         });
      },
      { scope: containerRef }
   );

   const handleMouseEnter = contextSafe(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
         const shapeContainer = e.currentTarget.querySelector(
            ".landing-list-block__list-item-shape-container"
         );
         gsap.to(shapeContainer, {
            y: 0,
            ease: "power1.out",
         });
      }
   );
   const handleMouseLeave = contextSafe(
      (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
         const shapeContainer = e.currentTarget.querySelector(
            ".landing-list-block__list-item-shape-container"
         );
         gsap.to(shapeContainer, {
            y: 100,
            ease: "power1.in",
         });
      }
   );

   return (
      <section
         className="landing-list-block"
         ref={containerRef}
         id="landings-list"
      >
         <div className="landing-list-block__inner-wrapper">
            <h3 className="landing-list-block__title">
               <span>
                  <svg
                     width="10"
                     height="10"
                     viewBox="0 0 10 10"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2Z"
                        fill="#252527"
                     />
                  </svg>
               </span>
               Примеры
            </h3>
            <div className="landing-list-block__body">
               <h4
                  className="landing-list-block__body-heading"
                  data-testid="landing-list-block-heading"
               >
                  Наши <span className="highlight">кейсы</span>
               </h4>
               <div className="landing-list-block__list">
                  {landingsList.map((landing) => (
                     <Link target="_blank" to={landing.href}>
                        <div
                           className="landing-list-block__list-item"
                           key={landing.label}
                           onMouseEnter={handleMouseEnter}
                           onMouseLeave={handleMouseLeave}
                        >
                           <div className="landing-list-block__list-item-inner">
                              <div className="landing-list-block__list-item-image-wrapper">
                                 <img
                                    src={landing.image}
                                    alt={landing.label}
                                    data-testid="landing-list-block-image"
                                 />
                              </div>
                              <div className="landing-list-block__list-item-icon">
                                 {landing.icon && (
                                    <img
                                       src={landing.icon}
                                       alt="An icon place on the service image"
                                    />
                                 )}
                              </div>
                              <div className="landing-list-block__list-item-shape-container">
                                 <div className="landing-list-block__list-item-shape-inner">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="30"
                                       height="30"
                                       viewBox="0 0 30 30"
                                       fill="none"
                                       className="landing-list-block__list-item-shape left"
                                    >
                                       <path
                                          d="M0 30C2.55414 30 5.7052 29.8662 8.99534 29.2308C18.8709 27.3234 29.9994 20.8963 30 0L30 30L0 30Z"
                                          fill="white"
                                       />
                                    </svg>
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="30"
                                       height="30"
                                       viewBox="0 0 30 30"
                                       fill="none"
                                       className="landing-list-block__list-item-shape right"
                                    >
                                       <path
                                          d="M0 30C2.55414 30 5.7052 29.8662 8.99534 29.2308C18.8709 27.3234 29.9994 20.8963 30 0L30 30L0 30Z"
                                          fill="white"
                                       />
                                    </svg>
                                    <Button
                                       target="_blank"
                                       color="purple"
                                       label="Перейти"
                                       type="link"
                                       href={landing.href}
                                    />
                                 </div>
                              </div>
                           </div>
                           <h5
                              className="landing-list-block__list-item-label"
                              data-testid="landing-list-block-label"
                           >
                              {landing.label}
                           </h5>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
export default LandingListBlock;

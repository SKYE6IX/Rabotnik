import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../button/Button";
import "./about-us.css";
const slides = [
   "/slide1.png",
   "/slide2.png",
   "/slide3.png",
   "/slide4.png",
   "/slide5.png",
   "/slide6.png",
   "/slide7.png",
   "/slide8.png",
   "/slide9.png",
   "/slide10.png",
   "/slide11.png",
   "/slide12.png",
   "/slide13.png",
   "/slide14.png",
];
function AboutUs() {
   const containerRef = useRef<HTMLDivElement>(null);
   useGSAP(
      () => {
         let tween: GSAPTween | null = null;
         const runAnimation = () => {
            if (tween !== null) {
               tween.kill();
               tween = null;
            }
            const widths: number[] = [];
            const gap = 90;
            const slides = gsap.utils.toArray(
               ".about-us-block__slide-container"
            ) as HTMLDivElement[];
            let offset = 0;
            slides.forEach((el) => {
               widths.push(el.offsetWidth);
            });
            const totalWidth = widths.reduce(
               (acc, width) => acc + width + gap,
               0
            );
            gsap.set(slides, {
               x: (i) => {
                  const x = offset;
                  offset += widths[i] + gap;
                  return x;
               },
            });
            tween = gsap.to(".about-us-block__slide-container", {
               duration: 50,
               ease: "none",
               x: `+=${totalWidth}`,
               modifiers: {
                  x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
               },
               repeat: -1,
            });
         };

         runAnimation();
         const handleResize = () => {
            runAnimation();
         };
         window.addEventListener("resize", handleResize);
         return () => window.removeEventListener("resize", handleResize);
      },
      { scope: containerRef }
   );

   return (
      <section className="about-us-block" ref={containerRef}>
         <div className="about-us-block__body">
            <h3 className="about-us-block__title">
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
               О нас
            </h3>
            <h4
               className="about-us-block__heading-text"
               data-testid="about-us-heading-text"
            >
               Мы — digital-агентство, работающее на стыке{" "}
               <span className="highlight">HR </span>и
               <span className="highlight"> маркетинга</span>
            </h4>
            <div className="about-us-block__sub-heading-wrapper">
               <h5
                  className="about-us-block__sub-heading-text"
                  data-testid="about-us-sub-heading-text"
               >
                  <span className="space"></span>С 2009 года мы закрываем
                  вакансии комплексно, используя современные digital-инструменты
                  и IT-технологии.
               </h5>
            </div>
            <div className="about-us-block__buttons-wrapper">
               <Button
                  label="Услуги"
                  color="purple"
                  type="link"
                  href="/service"
               />
               <Button
                  label="Оставить заявку"
                  color="black"
                  type="link"
                  href="#contact"
               />
            </div>
         </div>
         <div className="about-us-block__slide-wrapper">
            <div className="about-us-block__slides">
               {slides.map((slide, i) => (
                  <div key={i} className="about-us-block__slide-container">
                     <img
                        src={slide}
                        alt="An icon of an image moving to the left"
                        className="about-us-block__slide"
                        data-testid="about-us-slide-image"
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default AboutUs;

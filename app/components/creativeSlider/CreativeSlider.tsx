import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import slide1 from "/creative-slides/slide1.png";
import slide2 from "/creative-slides/slide2.png";
import slide3 from "/creative-slides/slide3.png";
import slide4 from "/creative-slides/slide4.png";
import slide5 from "/creative-slides/slide5.png";
import slide6 from "/creative-slides/slide6.png";
import slide7 from "/creative-slides/slide7.png";
import slide8 from "/creative-slides/slide8.png";
import slide9 from "/creative-slides/slide9.png";
import slide10 from "/creative-slides/slide10.png";
import Button from "../button/Button";
import "./creative-slider.css";

const slides = [
   slide1,
   slide2,
   slide3,
   slide4,
   slide5,
   slide6,
   slide7,
   slide8,
   slide9,
   slide10,
   slide1,
   slide2,
   slide3,
   slide4,
   slide5,
   slide6,
   slide7,
   slide8,
   slide9,
   slide10,
];

function CreativeSlider() {
   const containerRef = useRef<HTMLElement>(null);
   useGSAP(
      () => {
         let tween: GSAPTween | null = null;
         const runAnimation = () => {
            const slides = gsap.utils.toArray<HTMLDivElement>(
               ".creative-slider__slide"
            );
            const slidesWrapper = slides[0].parentNode as HTMLDivElement;
            if (tween !== null) {
               tween.kill();
               gsap.set(slidesWrapper, { clearProps: "transform" });
               gsap.set(slides, { clearProps: "all" });
               tween = null;
            }

            const wrapperRect = slidesWrapper.getBoundingClientRect();
            const containerWidth = wrapperRect.width;
            const radius = containerWidth / 4;
            const centerX = containerWidth / 2;
            const centerY = containerWidth / 4;
            const slice = 360 / slides.length;
            const deg2Rad = Math.PI / 180;

            gsap.set(slides, {
               x: (i) => centerX + radius * Math.sin(i * slice * deg2Rad),
               y: (i) => centerY - radius * Math.cos(i * slice * deg2Rad),
               rotation: (i) => i * slice,
               xPercent: -50,
               yPercent: -50,
            });

            gsap.set(slidesWrapper, {
               transformOrigin: `${centerX}px ${centerY}px`,
            });

            tween = gsap.to(slidesWrapper, {
               rotation: -360,
               ease: "none",
               duration: 60,
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
      <section className="creative-slider" ref={containerRef}>
         <h3 className="creative-slider__title">Наши креативы</h3>
         <div className="creative-slider__slides-wrapper">
            <div className="creative-slider__slides">
               {slides.map((slide, i) => (
                  <div key={slide + i} className="creative-slider__slide">
                     <img
                        src={slide}
                        alt="An image show case a creative ads by Rabotnik"
                        data-testid="creative-ads-image"
                     />
                  </div>
               ))}
            </div>
         </div>
         <div className="creative-slider__button-wrapper">
            <Button color="purple" label="Заказать" href="#" type="link" />
         </div>
      </section>
   );
}

export default CreativeSlider;

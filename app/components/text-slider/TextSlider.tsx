import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./text-slider.css";

function TextSlider() {
   const containerRef = useRef<HTMLDivElement>(null);
   useGSAP(
      () => {
         let tween1: GSAPTween | null = null;
         let tween2: GSAPTween | null = null;
         const runAnimation = () => {
            if (tween1 !== null) {
               tween1.kill();
               tween1 = null;
            }
            if (tween2 !== null) {
               tween2.kill();
               tween2 = null;
            }
            const slides1 = gsap.utils.toArray<HTMLDivElement>(
               ".text-slider__slide-text.left"
            );
            const slides2 = gsap.utils.toArray<HTMLDivElement>(
               ".text-slider__slide-text.right"
            );
            const gap = 20;
            const width = slides1[0].offsetWidth + gap;
            const totalWidth = width * slides1.length;

            gsap.set(slides1, {
               x: (i) => {
                  return i * width;
               },
            });
            gsap.set(slides2, {
               x: (i) => {
                  return i * width;
               },
            });
            tween1 = gsap.to(".text-slider__slide-text.left", {
               duration: 10,
               ease: "none",
               x: `-=${width}`,
               modifiers: {
                  x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
               },
               repeat: -1,
            });
            tween2 = gsap.to(".text-slider__slide-text.right", {
               duration: 10,
               ease: "none",
               x: `+=${width}`,
               modifiers: {
                  x: gsap.utils.unitize(
                     (x) => (parseFloat(x) % totalWidth) - width
                  ),
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
      <section className="text-slider" ref={containerRef}>
         <div className="text-slider__slide">
            <h3 className="text-slider__slide-text left">
               Давайте работать вместе
            </h3>
            <h3 className="text-slider__slide-text left">
               Давайте работать вместе
            </h3>
         </div>
         <div className="text-slider__slide">
            <h3 className="text-slider__slide-text right">
               Давайте работать вместе
            </h3>
            <h3 className="text-slider__slide-text right">
               Давайте работать вместе
            </h3>
         </div>
      </section>
   );
}

export default TextSlider;

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./metrics-block.css";

const removeCommas = (num: string) => {
   return num.replace(/,/g, "");
};
const formatNumber = (num: string, suffix?: string) => {
   const value = num.toString();
   if (value.length >= 3 && value.length <= 5) {
      return value.replace(/,/g, "") + suffix;
   }
   return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
};

function MetricsBlock() {
   const containerRef = useRef<HTMLDivElement>(null);
   useGSAP(
      () => {
         const metrics = gsap.utils.toArray(
            ".metrics-block__item-number"
         ) as HTMLElement[];
         metrics.forEach((el, i) => {
            gsap.to(el, {
               scrollTrigger: {
                  trigger: el.parentNode as HTMLDivElement,
                  start: "top 80%",
                  end: `${(el.parentNode as HTMLDivElement).offsetHeight} top`,
               },
               innerText: removeCommas(el.dataset.countEnd as string),
               snap: {
                  innerText: Number(removeCommas(el.dataset.countBy as string)),
               },
               onUpdate: () => {
                  el.innerHTML = formatNumber(el.innerText, "+");
               },
               duration: 1.3,
               ease: "none",
               onComplete: () => {
                  ScrollTrigger.refresh();
               },
            });
         });
      },
      { scope: containerRef }
   );
   return (
      <section className="metrics-block" ref={containerRef}>
         <div className="metrics-block__list">
            <div className="metrics-block__item-wrapper">
               <div className="metrics-block__item industry">
                  <div>
                     <h3
                        className="metrics-block__item-number"
                        data-count-end="15"
                        data-count-by="1"
                        data-testid="metric-number"
                     >
                        1
                     </h3>
                     <span
                        className="metrics-block__item-label"
                        data-testid="metric-label"
                     >
                        лет на рынке
                     </span>
                  </div>
               </div>
            </div>
            <div className="metrics-block__item-wrapper">
               <div className="metrics-block__item candidate">
                  <div>
                     <h3
                        className="metrics-block__item-number"
                        data-count-end="4,000,000"
                        data-count-by="100,000"
                        data-testid="metric-number"
                     >
                        1 000 000
                     </h3>
                     <span
                        className="metrics-block__item-label"
                        data-testid="metric-label"
                     >
                        кандидатов в базе
                     </span>
                  </div>
               </div>
            </div>
            <div className="metrics-block__item-wrapper">
               <div className="metrics-block__item employee">
                  <div>
                     <h3
                        className="metrics-block__item-number"
                        data-count-end="400"
                        data-count-by="10"
                        data-testid="metric-number"
                     >
                        100
                     </h3>
                     <span
                        className="metrics-block__item-label"
                        data-testid="metric-label"
                     >
                        сотрудников
                     </span>
                  </div>
               </div>
            </div>
            <div className="metrics-block__item-wrapper">
               <div className="metrics-block__item clients">
                  <div>
                     <h3
                        className="metrics-block__item-number"
                        data-count-end="350"
                        data-count-by="10"
                        data-testid="metric-number"
                     >
                        100
                     </h3>
                     <span
                        className="metrics-block__item-label"
                        data-testid="metric-label"
                     >
                        лклиентов
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default MetricsBlock;

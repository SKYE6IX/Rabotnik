import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./performance-metric.css";

const formatNumber = (num: string, suffix?: string) => {
   const value = num.toString();
   if (value.length >= 4) {
      return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ") + suffix;
   } else {
      return value.replace(/,/g, "") + suffix;
   }
};
interface PerformanceMetricsProps {
   sectionTitle: React.ReactNode;
   metrics: {
      label: string;
      value: {
         initial: string;
         countBy: string;
         countEnd: string;
         suffix: string;
      };
      description: string;
   }[];
}
function PerformanceMetrics({
   sectionTitle,
   metrics,
}: PerformanceMetricsProps) {
   const containerRef = useRef<HTMLDivElement>(null);
   useGSAP(
      () => {
         const metrics = gsap.utils.toArray(
            ".performance-metrics__item-value"
         ) as HTMLElement[];

         metrics.forEach((el, i) => {
            gsap.to(el, {
               scrollTrigger: {
                  trigger: el.parentNode as HTMLDivElement,
                  start: "top 70%",
                  end: `${(el.parentNode as HTMLDivElement).offsetHeight} top`,
               },
               innerText: el.dataset.countEnd as string,
               snap: {
                  innerText: Number(el.dataset.countBy),
               },
               onUpdate: () => {
                  el.innerHTML = formatNumber(el.innerText, el.dataset.suffix);
               },
               duration: 1.3,
               ease: "none",
            });
         });
      },
      { scope: containerRef }
   );
   return (
      <section
         className="performance-metrics"
         id="performance-metrics"
         ref={containerRef}
      >
         <div className="performance-metrics__inner-wrapper">
            <h3 className="performance-metrics__title">{sectionTitle}</h3>
            <div className="performance-metrics__body">
               <div className="performance-metrics__list">
                  {metrics.map((metric, idx) => (
                     <div
                        key={metric.label + idx}
                        className="performance-metrics__item"
                     >
                        <h5
                           className="performance-metrics__item-heading"
                           data-testid="performance-metrics-item-heading"
                        >
                           {metric.label}
                        </h5>
                        <span
                           className="performance-metrics__item-value"
                           data-count-end={metric.value.countEnd}
                           data-count-by={metric.value.countBy}
                           data-suffix={metric.value.suffix}
                           data-testid="performance-metrics-item-value"
                        >
                           {metric.value.initial}
                        </span>
                        <p
                           className="performance-metrics__item-description"
                           data-testid="performance-metrics-item-description"
                        >
                           {metric.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}

export default PerformanceMetrics;

import React from "react";
import "./work-stage.css";

interface WorkStageProps {
   list: string[];
}

function WorkStage({ list }: WorkStageProps) {
   return (
      <section className="work-stage">
         <h3 className="work-stage__title">
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
            Этапы работы
         </h3>
         <div className="work-stage__body">
            <div className="work-stage__list">
               {list.map((item, index) => (
                  <div key={index} className="work-stage__item-container">
                     <div className="work-stage__item-inner-container">
                        <span className="work-stage__item-index">
                           {index + 1}
                        </span>
                        <p
                           className="stage-work__item-text"
                           data-testid="work-stage-step"
                        >
                           {item}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default WorkStage;

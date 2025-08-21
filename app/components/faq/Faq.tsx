import React, { useState } from "react";
import { faqList } from "./faqList.";
import "./faq.css";

function Faq() {
   const [isExpandIdx, setIsExpandIdx] = useState<number | null>(null);
   const toggleExpand = (newIdx: number) => {
      setIsExpandIdx((prev) => (prev === newIdx ? null : newIdx));
   };
   return (
      <section className="faq-block">
         <h3 className="faq-block__title">FAQ</h3>
         <div className="faq-block__list">
            {faqList.map((faq, idx) => (
               <div className="faq-block__list-item" key={faq.question}>
                  <div
                     className="faq-block__list-item-header"
                     aria-expanded={isExpandIdx === idx}
                     aria-controls="faq1"
                     id="faq1-control"
                     onClick={() => toggleExpand(idx)}
                     data-testid="faq-block-list-item-header"
                  >
                     <h4
                        className="faq-block__list-item-header-title"
                        data-testid="faq-block-list-item-title"
                     >
                        {faq.question}
                     </h4>
                     <span
                        className={[
                           "faq-block__list-item-header-icon",
                           isExpandIdx === idx ? "expand" : "collapsed",
                        ].join(" ")}
                     >
                        <svg
                           width="13"
                           height="13"
                           viewBox="0 0 13 13"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M11.5633 0.487305H12.458L12.4655 11.2236H10.6761L10.6708 3.54043L2.36339 11.8573L1.73009 12.491L0.465462 11.2236L1.09876 10.5898L9.40613 2.27668H1.723L1.72175 0.487305H11.5633Z"
                              fill="white"
                           />
                        </svg>
                     </span>
                  </div>
                  <div
                     className={[
                        "faq-block__list-item-text-wrapper",
                        isExpandIdx === idx
                           ? "expand animate_in"
                           : "collapsed animate_out",
                     ].join(" ")}
                     id="faq1"
                     role="region"
                     aria-labelledby="faq1-control"
                     data-testid="faq-block-list-item-text-wrapper"
                  >
                     <div className="faq-block__list-item-text-wrapper-inner">
                        {faq.answer.hasList && (
                           <div className="faq-block__list-item-content-list-wrapper">
                              <h5 className="faq-block__list-item-content-title">
                                 {faq.answer.title}
                              </h5>
                              <ul className="faq-block__list-item-content-list">
                                 {faq.answer.list?.map((list) => (
                                    <li
                                       className="faq-block__list-item-content-list-item"
                                       key={list}
                                    >
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
                                       {list}
                                    </li>
                                 ))}
                              </ul>
                              <p className="faq-block__list-item-content-text">
                                 {faq.answer.bottomText}
                              </p>
                           </div>
                        )}
                        <p className="faq-block__list-item-text">
                           {faq.answer.text}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}

export default Faq;

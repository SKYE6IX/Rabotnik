import React from "react";
import Button from "../button/Button";
import "./recruitment-funnel-offer.css";

function RecruitmentFunnelOffer() {
   return (
      <section className="recruitment-funnel-offer">
         <div className="recruitment-funnel-offer__left">
            <h3 className="recruitment-funnel-offer__title">
               <span className="recruitment-funnel-offer__title-inner">
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
                  Что вы получаете?
               </span>
               Полная воронка под ключ — от
               <span className="highlight"> лида</span> до
               <span className="highlight"> трудоустройства</span>
            </h3>
            <Button
               label="Связаться"
               type="link"
               href="/contact"
               color="purple"
            />
         </div>
         <div className="recruitment-funnel-offer__right">
            <ul className="recruitment-funnel-offer__list">
               <li className="recruitment-funnel-offer__list-item">
                  <span className="recruitment-funnel-offer__list-item-icon">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                     >
                        <path
                           d="M4.78796 7.81737L12.4609 0.267261C12.642 0.089087 12.8532 0 13.0946 0C13.3361 0 13.5473 0.089087 13.7284 0.267261C13.9095 0.445434 14 0.657164 14 0.90245C14 1.14774 13.9095 1.35917 13.7284 1.53675L5.42171 9.73274C5.24064 9.91091 5.02939 10 4.78796 10C4.54653 10 4.33528 9.91091 4.15421 9.73274L0.261162 5.902C0.0800896 5.72383 -0.00682502 5.5124 0.000417858 5.26771C0.00766074 5.02301 0.10212 4.81128 0.283795 4.63252C0.465471 4.45375 0.680645 4.36466 0.929317 4.36526C1.17799 4.36585 1.39286 4.45494 1.57393 4.63252L4.78796 7.81737Z"
                           fill="#FBFBFB"
                        />
                     </svg>
                  </span>
                  Релевантные лиды по согласованным критериям
               </li>
               <li
                  className="recruitment-funnel-offer__list-item"
                  data-testid="recruitment-funnel-offer-list-item"
               >
                  <span className="recruitment-funnel-offer__list-item-icon">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                     >
                        <path
                           d="M4.78796 7.81737L12.4609 0.267261C12.642 0.089087 12.8532 0 13.0946 0C13.3361 0 13.5473 0.089087 13.7284 0.267261C13.9095 0.445434 14 0.657164 14 0.90245C14 1.14774 13.9095 1.35917 13.7284 1.53675L5.42171 9.73274C5.24064 9.91091 5.02939 10 4.78796 10C4.54653 10 4.33528 9.91091 4.15421 9.73274L0.261162 5.902C0.0800896 5.72383 -0.00682502 5.5124 0.000417858 5.26771C0.00766074 5.02301 0.10212 4.81128 0.283795 4.63252C0.465471 4.45375 0.680645 4.36466 0.929317 4.36526C1.17799 4.36585 1.39286 4.45494 1.57393 4.63252L4.78796 7.81737Z"
                           fill="#FBFBFB"
                        />
                     </svg>
                  </span>
                  Интеграция с вашей системой
               </li>
               <li
                  className="recruitment-funnel-offer__list-item"
                  data-testid="recruitment-funnel-offer-list-item"
               >
                  <span className="recruitment-funnel-offer__list-item-icon">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                     >
                        <path
                           d="M4.78796 7.81737L12.4609 0.267261C12.642 0.089087 12.8532 0 13.0946 0C13.3361 0 13.5473 0.089087 13.7284 0.267261C13.9095 0.445434 14 0.657164 14 0.90245C14 1.14774 13.9095 1.35917 13.7284 1.53675L5.42171 9.73274C5.24064 9.91091 5.02939 10 4.78796 10C4.54653 10 4.33528 9.91091 4.15421 9.73274L0.261162 5.902C0.0800896 5.72383 -0.00682502 5.5124 0.000417858 5.26771C0.00766074 5.02301 0.10212 4.81128 0.283795 4.63252C0.465471 4.45375 0.680645 4.36466 0.929317 4.36526C1.17799 4.36585 1.39286 4.45494 1.57393 4.63252L4.78796 7.81737Z"
                           fill="#FBFBFB"
                        />
                     </svg>
                  </span>
                  Экономию времени рекрутера
               </li>
               <li
                  className="recruitment-funnel-offer__list-item"
                  data-testid="recruitment-funnel-offer-list-item"
               >
                  <span className="recruitment-funnel-offer__list-item-icon">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                     >
                        <path
                           d="M4.78796 7.81737L12.4609 0.267261C12.642 0.089087 12.8532 0 13.0946 0C13.3361 0 13.5473 0.089087 13.7284 0.267261C13.9095 0.445434 14 0.657164 14 0.90245C14 1.14774 13.9095 1.35917 13.7284 1.53675L5.42171 9.73274C5.24064 9.91091 5.02939 10 4.78796 10C4.54653 10 4.33528 9.91091 4.15421 9.73274L0.261162 5.902C0.0800896 5.72383 -0.00682502 5.5124 0.000417858 5.26771C0.00766074 5.02301 0.10212 4.81128 0.283795 4.63252C0.465471 4.45375 0.680645 4.36466 0.929317 4.36526C1.17799 4.36585 1.39286 4.45494 1.57393 4.63252L4.78796 7.81737Z"
                           fill="#FBFBFB"
                        />
                     </svg>
                  </span>
                  Гибкий подход: тестируем, масштабируем, оптимизируем
               </li>
               <li
                  className="recruitment-funnel-offer__list-item"
                  data-testid="recruitment-funnel-offer-list-item"
               >
                  <span className="recruitment-funnel-offer__list-item-icon">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                     >
                        <path
                           d="M4.78796 7.81737L12.4609 0.267261C12.642 0.089087 12.8532 0 13.0946 0C13.3361 0 13.5473 0.089087 13.7284 0.267261C13.9095 0.445434 14 0.657164 14 0.90245C14 1.14774 13.9095 1.35917 13.7284 1.53675L5.42171 9.73274C5.24064 9.91091 5.02939 10 4.78796 10C4.54653 10 4.33528 9.91091 4.15421 9.73274L0.261162 5.902C0.0800896 5.72383 -0.00682502 5.5124 0.000417858 5.26771C0.00766074 5.02301 0.10212 4.81128 0.283795 4.63252C0.465471 4.45375 0.680645 4.36466 0.929317 4.36526C1.17799 4.36585 1.39286 4.45494 1.57393 4.63252L4.78796 7.81737Z"
                           fill="#FBFBFB"
                        />
                     </svg>
                  </span>
                  Вы платите только за валидных кандидатов
               </li>
            </ul>
         </div>
      </section>
   );
}

export default RecruitmentFunnelOffer;

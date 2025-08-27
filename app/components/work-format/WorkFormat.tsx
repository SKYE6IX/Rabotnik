import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./work-format.css";

function WorkFormat() {
   const containerRef = useRef<HTMLDivElement>(null);
   useGSAP(
      () => {
         gsap.from(".work-format__heading", {
            xPercent: 100,
            autoAlpha: 0,
            duration: 0.8,
            scrollTrigger: {
               trigger: ".work-format__heading",
               start: "top 70%",
            },
         });
         const items = gsap.utils.toArray<HTMLLIElement>(
            ".work-format__item-inner-list-item"
         );
         items.forEach((el, i) => {
            gsap.from(el, {
               yPercent: 50,
               autoAlpha: 0,
               stagger: 0.3,
               duration: 1,
               scrollTrigger: {
                  trigger: el.parentNode as HTMLElement,
                  start: "top 80%",
                  toggleActions: "play none none reverse",
               },
            });
         });
      },
      { scope: containerRef }
   );
   return (
      <section className="work-format" ref={containerRef}>
         <div className="work-format__header-wrapper">
            <h3 className="work-format__title">
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
               Форматы работы
            </h3>
            <h4
               className="work-format__heading"
               data-testid="work-format-heading"
            >
               <span className="highlight">Форматы работы:</span> как мы
               передаём вам кандидатов
            </h4>
         </div>
         <div className="work-format__body">
            <div className="work-format__list">
               <div className="work-format__item">
                  <h5 className="work-format__item-heading">Формат</h5>
                  <ul className="work-format__item-inner-list">
                     <li
                        className="work-format__item-inner-list-item"
                        data-testid="work-format-list-item"
                     >
                        Базовый обзвон
                     </li>
                     <li
                        className="work-format__item-inner-list-item"
                        data-testid="work-format-list-item"
                     >
                        Расширенный ресечинг
                     </li>
                     <li
                        className="work-format__item-inner-list-item"
                        data-testid="work-format-list-item"
                     >
                        Квалификация + запись
                     </li>
                  </ul>
               </div>

               <div className="work-format__item">
                  <h5 className="work-format__item-heading">Что входит</h5>
                  <ul className="work-format__item-inner-list">
                     <li
                        className="work-format__item-inner-list-item"
                        data-testid="work-format-list-item"
                     >
                        Фиксация отклика + передача в CRM
                     </li>
                     <li
                        className="work-format__item-inner-list-item"
                        data-testid="work-format-list-item"
                     >
                        Проверка, фильтрация, комментарии
                     </li>
                     <li
                        className="work-format__item-inner-list-item"
                        data-testid="work-format-list-item"
                     >
                        Назначение интервью, расписание
                     </li>
                  </ul>
               </div>

               <div className="work-format__item">
                  <h5 className="work-format__item-heading">Подходит для</h5>
                  <ul className="work-format__item-inner-list">
                     <li
                        className="work-format__item-inner-list-item"
                        data-testid="work-format-list-item"
                     >
                        Горячие лиды, массовые вакансии
                     </li>
                     <li
                        className="work-format__item-inner-list-item"
                        data-testid="work-format-list-item"
                     >
                        Вахта, дефицитные позиции
                     </li>
                     <li
                        className="work-format__item-inner-list-item"
                        data-testid="work-format-list-item"
                     >
                        Внутренние HR-команды, найм в регионах
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   );
}

export default WorkFormat;

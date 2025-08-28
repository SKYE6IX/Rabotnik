import React from "react";
import Hero from "~/components/hero/Hero";
import ServiceDescription from "~/components/service-description/ServiceDescription";
import RecruitmentFunnelOffer from "~/components/recruitment-funnel-offer/RecruitmentFunnelOffer";
import CreativeSlider from "~/components/creativeSlider/CreativeSlider";
import heroImage from "./hero-image.jpg";
import "./creative-ads.css";

function creativeAdsService() {
   return (
      <div className="creative-ads-service">
         <Hero
            image={heroImage}
            showMetrics={false}
            subTitle="Превращаем трафик в отклики, а вакансии — в поток кандидатов"
         >
            <h1 className="hero__title">
               Разработка креативных
               <br /> концепций и{" "}
               <span className="highlight">
                  рекламных
                  <br /> материалов
               </span>
            </h1>
         </Hero>
         <ServiceDescription
            title={
               <>
                  Кандидат
                  <span className="highlight"> реагирует на эмоцию,</span>{" "}
                  оформление и смысл
               </>
            }
            subTitle={
               <>
                  Мы <span className="highlight">разрабатываем креатив,</span>{" "}
                  который выделяет вас среди 100 объявлений и
                  <span className="highlight"> превращает внимание</span> в
                  отклик
               </>
            }
         />
         <RecruitmentFunnelOffer
            headingIntro="Что вы получаете?"
            heading={
               <>
                  Инструмент который работает на{" "}
                  <span className="highlight"> результат</span>
               </>
            }
            lists={[
               "Внимание аудитории с первых секунд",
               "Целевое сообщение — без лишнего текста",
               "Повышение CTR, снижение стоимости лида",
               "Конкурентное преимущество — вас запоминают",
               "Универсальные материалы под все каналы",
            ]}
         />
         <CreativeSlider />
      </div>
   );
}

export default creativeAdsService;

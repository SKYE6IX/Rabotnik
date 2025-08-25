import Hero from "~/components/hero/Hero";
import ServiceDescription from "~/components/service-description/ServiceDescription";
import RecruitmentFunnelOffer from "~/components/recruitment-funnel-offer/RecruitmentFunnelOffer";
import ContactUs from "~/components/contact-us/ContactUs";
import heroImage from "./hero-image.png";
import "./talent-flow-service.css";

export default function talentFlowService() {
   return (
      <div className="home-page">
         <Hero
            image={heroImage}
            showMetrics={false}
            subTitle="Приводим целевых кандидатов на ваши вакансии. Без шума, без воды — только валидные отклики."
         >
            <h1 className="hero__title">
               Генерация{" "}
               <span className="highlight">
                  кадрового
                  <br /> трафика
               </span>
            </h1>
         </Hero>
         <ServiceDescription
            title={
               <>
                  Мы не размещаем объявления — мы строим
                  <span className="highlight"> digital-воронки </span>найма
               </>
            }
            subTitle={
               <>
                  Вам нужны не просмотры, а люди. Мы знаем, где найти даже тех,
                  кто не ищет работу.
               </>
            }
         />
         <RecruitmentFunnelOffer />
         <ContactUs />
      </div>
   );
}

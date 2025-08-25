import Hero from "~/components/hero/Hero";
import ServiceDescription from "~/components/service-description/ServiceDescription";
import RecruitmentFunnelOffer from "~/components/recruitment-funnel-offer/RecruitmentFunnelOffer";
import ServiceOverview from "~/components/service-overview/ServiceOverview";
import ContactUs from "~/components/contact-us/ContactUs";
import heroImage from "./hero-image.png";
import ChannelOverview from "~/components/channel-overview/ChannelOverview";
import "./talent-flow-service.css";

const recruitmentFunnelList = [
   "Релевантные лиды по согласованным критериям",
   "Экономию времени рекрутера",
   "Гибкий подход: тестируем, масштабируем, оптимизируем",
   "Вы платите только за валидных кандидатов",
];
const channelOverviewList = [
   "Реклама в транспорте, баннеры, offline-носители",
   "SMS и голосовые рассылки",
   "Таргетированная реклама (ВКонтакте, myTarget, Telegram Ads)",
   "Прямые интеграции с HRM-платформами",
   "Контекстная реклама (Яндекс.Директ, Google Ads при необходимости)",
   "Чат-боты и автообзвон",
];

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
         <RecruitmentFunnelOffer
            lists={recruitmentFunnelList}
            headingIntro="Что вы получаете?"
            heading={
               <>
                  Полная воронка под ключ — от
                  <span className="highlight"> лида</span> до
                  <span className="highlight"> трудоустройства</span>
               </>
            }
         />
         <ServiceOverview
            boxTwoTitle="Что такое генерация кадрового трафика?"
            boxTwoText="Это не просто реклама вакансии. Это система привлечения кандидатов по заданным критериям через digital-каналы, автоматизацию и обработку откликов"
            boxThreeText="Мы настраиваем поток валидных лидов с максимальным охватом и персонализацией под специфику вашего бизнеса"
         />
         <ChannelOverview
            title="Используемые каналы:"
            list={channelOverviewList}
         />
         <ContactUs />
      </div>
   );
}

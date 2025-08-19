import type { Route } from "./+types/home";
import Hero from "~/components/hero/Hero";
import HowWeWork from "~/components/how-we-work/HowWeWork";
import MetricsBlock from "~/components/metrics-block/MetricsBlock";
import ServiceListBlock from "~/components/service-list-block/ServiceListBlock";
import OurPlatform from "~/components/our-platform/OurPlatform";
import heroImage from "./hero-image.jpg";
import "./home.css";

export function meta({}: Route.MetaArgs) {
   return [
      { title: "New React Router App" },
      { name: "description", content: "Welcome to React Router!" },
   ];
}

export default function Home() {
   return (
      <div className="home-page">
         <Hero
            image={heroImage}
            showMetrics={true}
            subTitle="Помогаем вовремя закрывать вакансии "
         >
            <h1 className="hero__title">
               Агентство генерации
               <br />
               <span className="highlight">трафика кандидатов</span>
            </h1>
         </Hero>
         <HowWeWork />
         <MetricsBlock />
         <ServiceListBlock />
         <OurPlatform />
      </div>
   );
}

import React from "react";
import { Link } from "react-router";
import "./telegram-channels.css";

const telegramChannels = [
   {
      name: "Rabotnik Москва",
      link: "https://t.me/rabotnik_vakansii_rabota_v_msk",
   },
   { name: "Rabotnik MO", link: "https://t.me/rabotnik_vakansii_rabota_v_mo" },
   {
      name: "Rabotnik Санкт-Петербург",
      link: " https://t.me/rabotnik_vakansii_rabota_v_spb",
   },
   {
      name: "Rabotnik Екатеринбург",
      link: "https://t.me/rabotnik_vakansii_rabota_v_ekate",
   },
   {
      name: "Rabotnik Ростов-на-Дону",
      link: " https://t.me/vakansii_rabota_v_rostove",
   },
   {
      name: "Rabotnik Краснодар",
      link: "https://t.me/vakansii_rabota_v_krasnodare",
   },
   {
      name: "Rabotnik Новосибирск",
      link: "https://t.me/vakansii_rabota_v_novosibirske",
   },
   {
      name: "Rabotnik Омск",
      link: "https://t.me/rabotnik_vakansii_rabota_v_omske",
   },
   {
      name: "Rabotnik Волгоград",
      link: "https://t.me/vakansii_rabota_v_volgograde",
   },
   {
      name: "Rabotnik Тверь",
      link: "https://t.me/rabotnik_vakansii_rabota_v_tveri",
   },
   { name: "Rabotnik Самара", link: "https://t.me/vakansii_rabota_v_samare" },
   {
      name: "Rabotnik Нижний Новгород",
      link: "https://t.me/vakansii_rabota_v_nizhnem_nov",
   },
   {
      name: "Rabotnik Россия",
      link: "https://t.me/rabotnik_rabota_i_vakansii",
   },
];

function TelegramChannels() {
   return (
      <section className="telegram-channels">
         <h3 className="telegram-channels__title">Telegram каналы Rabotnik</h3>
         <div className="telegram-channels__body">
            <ul className="telegram-channels__list">
               {telegramChannels.map((item) => (
                  <li key={item.name} className="telegram-channels__item">
                     <Link
                        to={item.link}
                        target="_blank"
                        className="telegram-channels__item-link"
                        data-testid="telegram-channel-link"
                     >
                        {item.name}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
}

export default TelegramChannels;

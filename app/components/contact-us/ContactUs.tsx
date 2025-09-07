import React, { useState } from "react";
import Button from "../button/Button";
import { Link } from "react-router";
import image from "/contact-us-image.jpg";
import "./contact-us.css";

function ContactUs() {
   const initialState = {
      name: "",
      telephone: "",
      company: "",
   };
   const [formState, setFormState] = useState(initialState);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormState((prvState) => ({
         ...prvState,
         [name]: value,
      }));
   };

   return (
      <section className="contact-us">
         <div className="contact-us__inner-wrapper">
            {/* <h3 className="contact-us__title">
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
               Связаться
            </h3> */}
            <div className="contact-us__body">
               <div className="contact-us__image-wrapper">
                  <img
                     src={image}
                     alt="An image showing a laptop on the table with a chair"
                  />
               </div>
               <div>
                  <h4
                     className="contact-us__form-title"
                     data-testid="contact-us-form-title"
                  >
                     Готовы подключиться?
                  </h4>
                  <h5
                     className="contact-us__form-sub-title"
                     data-testid="contact-us-sub-form-title"
                  >
                     Оставьте заявку
                  </h5>
                  <form action="" className="contact-us__form">
                     <label htmlFor="name">
                        <input
                           type="text"
                           id="name"
                           name="name"
                           value={formState.name}
                           onChange={handleChange}
                           className="contact-us__form-input"
                           placeholder="Имя"
                           data-testid="contact-us-form-input"
                        />
                     </label>
                     <label htmlFor="telephone">
                        <input
                           type="text"
                           id="telephone"
                           name="telephone"
                           value={formState.telephone}
                           onChange={handleChange}
                           className="contact-us__form-input"
                           placeholder="Телефон"
                           data-testid="contact-us-form-input"
                        />
                     </label>
                     <label htmlFor="company">
                        <input
                           type="text"
                           id="company"
                           name="company"
                           value={formState.company}
                           onChange={handleChange}
                           className="contact-us__form-input"
                           placeholder="Компания"
                           data-testid="contact-us-form-input"
                        />
                     </label>
                     <div className="contact-us__form-footer">
                        <Button
                           label="Отправить"
                           color="orange"
                           type="submit"
                        />
                        <p className="contact-us__form-term">
                           Нажимая кнопку "Отправить", я даю согласие на
                           <Link
                              target="_blank"
                              className="contact-us__form-term__link"
                              to="/consent-page"
                           >
                              {" "}
                              обработку моих персональных данных
                           </Link>
                        </p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}

export default ContactUs;

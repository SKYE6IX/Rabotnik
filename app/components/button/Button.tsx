import React from "react";
import { Link } from "react-router";
import "./button.css";

function Button() {
   return (
      <button className="botton">
         <Link to="#" className="botton__link">
            <span className="button__text">Связаться</span>
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="11"
               height="11"
               viewBox="0 0 11 11"
               fill="none"
               className="button__icon"
            >
               <path
                  d="M9.94205 5.01798L10.3316 5.40756L5.65672 10.0825L4.87757 9.30332L8.22305 5.95783L0.981812 5.95946L0.429913 5.95946L0.431537 4.85728L0.983436 4.85728L8.22305 4.85728L4.87757 1.5118L5.65672 0.732649L9.94205 5.01798Z"
                  fill="white"
               />
            </svg>
         </Link>
      </button>
   );
}
export default Button;

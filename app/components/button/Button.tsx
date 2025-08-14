import React from "react";
import { Link } from "react-router";
import "./button.css";

interface ButtonProps {
   label: string;
   color: "orange" | "purple" | "black";
}

function Button({ label, color }: ButtonProps) {
   return (
      <button className={["botton", color].join(" ")}>
         <Link to="#" className="botton__link">
            <span className="button__text" data-testid="button-text">
               {label}
            </span>
            <svg
               width="25"
               height="14"
               viewBox="0 0 25 14"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="button__icon"
               data-testid="button-icon"
            >
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.28508 13.7072C5.89456 13.3167 5.89456 12.6835 6.28508 12.293L11.578 7.00012L6.28508 1.70723C5.89456 1.31671 5.89456 0.683541 6.28508 0.293017C6.6756 -0.0975077 7.30877 -0.0975077 7.69929 0.293017L13.6993 6.29302C14.0898 6.68354 14.0898 7.31671 13.6993 7.70723L7.69929 13.7072C7.30877 14.0978 6.6756 14.0978 6.28508 13.7072Z"
                  fill="white"
                  className="button__icon-path-1"
               />
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-0.0078125 7.00012C-0.0078125 6.44784 0.439903 6.00012 0.992187 6.00012H12.9922C13.5445 6.00012 13.9922 6.44784 13.9922 7.00012C13.9922 7.55241 13.5445 8.00012 12.9922 8.00012H0.992187C0.439903 8.00012 -0.0078125 7.55241 -0.0078125 7.00012Z"
                  fill="white"
                  className="button__icon-path-2"
               />
            </svg>
         </Link>
      </button>
   );
}
export default Button;

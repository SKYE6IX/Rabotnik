import React from "react";
import { Link } from "react-router";
import "./button.css";

interface ButtonProps {
   label: string;
   color: "orange" | "purple" | "black";
   type: "link" | "submit";
   href?: string;
}
function Button({ label, color, type, href }: ButtonProps) {
   return (
      <button
         className={["botton", color].join(" ")}
         type={type === "submit" ? type : "button"}
      >
         {type === "submit" ? (
            <div className="botton__submit">
               <span className="button__text" data-testid="button-text">
                  {label}
               </span>
               <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon mobile"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M8.09142 17.6234C7.58932 17.1213 7.58932 16.3073 8.09142 15.8051L14.8966 9L8.09142 2.19485C7.58932 1.69275 7.58932 0.87868 8.09142 0.376578C8.59352 -0.125525 9.40759 -0.125525 9.9097 0.376578L17.624 8.09086C18.1261 8.59297 18.1261 9.40704 17.624 9.90914L9.9097 17.6234C9.40759 18.1255 8.59352 18.1255 8.09142 17.6234Z"
                     fill="#FFFFFF"
                  />
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M0 9.00005C0 8.28997 0.575634 7.71434 1.28571 7.71434H16.7143C17.4244 7.71434 18 8.28997 18 9.00005C18 9.71013 17.4244 10.2858 16.7143 10.2858H1.28571C0.575634 10.2858 0 9.71013 0 9.00005Z"
                     fill="#FFFFFF"
                  />
               </svg>
               <svg
                  width="25"
                  height="14"
                  viewBox="0 0 25 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon large"
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
            </div>
         ) : (
            <Link to={href ? href : ""} className="botton__link">
               <span className="button__text" data-testid="button-text">
                  {label}
               </span>
               <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon mobile"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M8.09142 17.6234C7.58932 17.1213 7.58932 16.3073 8.09142 15.8051L14.8966 9L8.09142 2.19485C7.58932 1.69275 7.58932 0.87868 8.09142 0.376578C8.59352 -0.125525 9.40759 -0.125525 9.9097 0.376578L17.624 8.09086C18.1261 8.59297 18.1261 9.40704 17.624 9.90914L9.9097 17.6234C9.40759 18.1255 8.59352 18.1255 8.09142 17.6234Z"
                     fill="#FFFFFF"
                  />
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M0 9.00005C0 8.28997 0.575634 7.71434 1.28571 7.71434H16.7143C17.4244 7.71434 18 8.28997 18 9.00005C18 9.71013 17.4244 10.2858 16.7143 10.2858H1.28571C0.575634 10.2858 0 9.71013 0 9.00005Z"
                     fill="#FFFFFF"
                  />
               </svg>
               <svg
                  width="25"
                  height="14"
                  viewBox="0 0 25 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="button__icon large"
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
         )}
      </button>
   );
}
export default Button;

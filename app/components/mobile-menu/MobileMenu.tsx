import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../button/Button";
import "./mobile-menu.css";

interface NavigationsList {
   name: string;
   href: string;
}

type MobileMenuProp = {
   navList: NavigationsList[];
   isActive: boolean;
   addAnimation: (animation: GSAPTween) => void;
   toggleMenu: () => void;
};

function MobileMenu({
   navList,
   isActive,
   addAnimation,
   toggleMenu,
}: MobileMenuProp) {
   const menuRef = useRef<HTMLDivElement>(null);
   const [initialRender, setInitialRender] = useState(true);

   useGSAP(() => {
      const animation = gsap
         .fromTo(
            menuRef.current,
            { y: isActive ? 30 : 0, opacity: isActive ? 0 : 1 },
            { y: !isActive ? 30 : 0, opacity: !isActive ? 0 : 1 }
         )
         .progress(initialRender ? 1 : 0, true);
      addAnimation(animation);
      setInitialRender(false);
   }, [isActive]);

   return (
      <div
         className={["mobile-menu", isActive ? "active" : ""].join(" ")}
         ref={menuRef}
         aria-hidden
         aria-disabled={!isActive}
         aria-haspopup="menu"
      >
         <nav className="mobile-menu__nav">
            <ul className="mobile-menu__nav-container">
               {navList.map((nav) => (
                  <li
                     key={nav.name}
                     className="mobile-menu__nav-item"
                     onClick={toggleMenu}
                  >
                     <Link to={nav.href}>{nav.name}</Link>
                  </li>
               ))}
            </ul>
         </nav>
         <div className="mobile-menu__cta-button">
            <Button
               color="orange"
               label="Связаться"
               type="link"
               href="/contact"
            />
         </div>
      </div>
   );
}
export default MobileMenu;

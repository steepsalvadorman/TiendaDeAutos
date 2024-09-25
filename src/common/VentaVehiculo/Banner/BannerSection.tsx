import { SetStateAction, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./BannerSection.css";

export const BannerSection = ({ selected = 1 }) => {
   const [selectedButton, setSelectedButton] = useState(selected);
   const location = useLocation();

   useEffect(() => {
      if (location.pathname === "/vender") {
         setSelectedButton(1);
      } else if (
         location.pathname === "/plan/gratis" ||
         location.pathname === "/plan/simple" ||
         location.pathname === "/plan/destacado" ||
         location.pathname === "/plan/premium"
      ) {
         setSelectedButton(2);
      } else if (location.pathname === "/tercera-etapa") {
         setSelectedButton(3);
      }
   }, [location.pathname]);

   const handleSelect = (buttonNumber: SetStateAction<number>) => {
      if (location.pathname !== "/vender") {
         setSelectedButton(buttonNumber);
      }
   };

   const getText = () => {
      if (selectedButton === 1) {
         return "SELECCIONA EL TIPO DE AVISO";
      } else if (selectedButton === 2) {
         return "COMPLETA LOS DATOS DEL AVISO";
      } else if (selectedButton === 3) {
         return "CONFIRMA Y DESTACA";
      }
   };

   return (
      <section>
         <div className="fondo-gris p-4">
            <div className="d-grid gap-3 d-md-flex justify-content-md-end container">
               <button
                  className={`btn me-md-1 ${
                     selectedButton === 1 ? "text-white" : "text-secondary"
                  }`}
                  type="button"
                  style={{
                     backgroundColor:
                        selectedButton === 1 ? "#fa9300" : "black",
                  }}
                  onClick={() => handleSelect(1)}
               >
                  1
               </button>
               {selectedButton === 1 ? (
                  <p className="text-white mt-2 fst-italic fw-bolder">
                     {getText()}
                  </p>
               ) : (
                  ""
               )}
               <button
                  className={`btn me-md-1 ${
                     selectedButton === 2 ? "text-white" : "text-secondary"
                  }`}
                  type="button"
                  style={{
                     backgroundColor:
                        selectedButton === 2 ? "#fa9300" : "black",
                  }}
                  onClick={() => handleSelect(2)}
               >
                  2
               </button>
               {selectedButton === 2 ? (
                  <p className="text-white mt-2 fst-italic fw-bolder">
                     {getText()}
                  </p>
               ) : (
                  ""
               )}
               <button
                  className={`btn me-md-1 ${
                     selectedButton === 3 ? "text-white" : "text-secondary"
                  }`}
                  type="button"
                  style={{
                     backgroundColor:
                        selectedButton === 3 ? "#fa9300" : "black",
                  }}
                  onClick={() => handleSelect(3)}
               >
                  3
               </button>
               {selectedButton === 3 ? (
                  <p className="text-white mt-2 fst-italic fw-bolder">
                     {getText()}
                  </p>
               ) : (
                  ""
               )}
            </div>
         </div>
      </section>
   );
};

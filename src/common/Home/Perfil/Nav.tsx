import { SetStateAction } from "react";

interface NavProps {
   selectedTab: string;
   onTabClick: (tab: SetStateAction<string>) => void;
}

export const Nav = ({ selectedTab, onTabClick }: NavProps) => {
   return (
      <div className="col-3">
         <ul className="list_liner uiAdmin_singletabs">
            <li
               className={
                  selectedTab === "perfil"
                     ? "Select perfil_active"
                     : "perfil_active"
               }
               onClick={() => onTabClick("perfil")}
            >
               <a title="Mi perfil" href="#">
                  Mi Perfil
               </a>
            </li>
            <li
               className={
                  selectedTab === "cuenta"
                     ? "Select cuenta_active"
                     : "cuenta_active"
               }
               onClick={() => onTabClick("cuenta")}
            >
               <a title="Mi Cuenta" href="#">
                  Mi Cuenta
               </a>
            </li>
         </ul>
      </div>
   );
};

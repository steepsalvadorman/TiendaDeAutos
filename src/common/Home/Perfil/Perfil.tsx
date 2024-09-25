import { useState } from "react";
import { Nav } from "./Nav";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar";
import "./Perfil.css";

export const PerfilComponent = () => {
   const [selectedTab, setSelectedTab] = useState("datosPersonales");

   const handleSidebarClick = (tab: string) => {
      setSelectedTab(tab);
   };

   return (
      <div className="port-wrap-main mt-4">
         <header>
            <div className="w980">
               <Nav selectedTab={selectedTab} onTabClick={setSelectedTab} />
            </div>
            <div id="content" className="fix_flex uiAdmin_content_box">
               <div className="uiAdmin layout_common">
                  <div className="uiAdmin_content_inner">
                     <Sidebar onSidebarClick={handleSidebarClick} selectedTab={selectedTab} />
                     <Content selectedTab={selectedTab} />
                  </div>
               </div>
            </div>
         </header>
      </div>
   );
};

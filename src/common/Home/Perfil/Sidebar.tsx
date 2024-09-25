import { useState } from "react";
import "./Sidebar.css";
import "./Nav.tsx";

interface SidebarProps {
   onSidebarClick: (tab: string) => void;
   selectedTab: string;
}

export const Sidebar = ({ onSidebarClick }: SidebarProps) => {
   const [isDataPersonalOpen, setIsDataPersonalOpen] = useState(false);
   const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
   const [isMisdatosOpen, setIsMisdatosOpen] = useState(true);
   const [isFacturacionOpen, setIsFacturacionOpen] = useState(false);
   const [isNewCompanyOpen, setIsNewCompanyOpen] = useState(false);
   const [isRegisteredCompaniesOpen, setIsRegisteredCompaniesOpen] =
      useState(false);
   const [isMisAvisosOpen, setIsMisAvisosOpen] = useState(false);
   const [isAvisosActivos, setIsAvisosActivos] = useState(false);
   const [isAvisosPendientes, setIsAvisosPendientes] = useState(false);
   const [isAvisosBajas, setIsAvisosBajas] = useState(false);
   const [isMisInteresados, setIsMisInteresados] = useState(false);
  

   const handleDataPersonalClick = () => {
      setIsDataPersonalOpen((prevState) => !prevState);
      setIsChangePasswordOpen(false);
      setIsNewCompanyOpen(false);
      setIsRegisteredCompaniesOpen(false);
      onSidebarClick("datosPersonales");
   };

   const handleChangePasswordClick = () => {
      setIsChangePasswordOpen((prevState) => !prevState);
      setIsDataPersonalOpen(false);
      setIsNewCompanyOpen(false);
      setIsRegisteredCompaniesOpen(false);
      onSidebarClick("cambioDeClave");
   };

   const handleMisdatosClick = () => {
      setIsMisdatosOpen((prevState) => !prevState);
      setIsFacturacionOpen(false);
      setIsMisAvisosOpen(false);
   };

   const handleFacturacionClick = () => {
      setIsFacturacionOpen((prevState) => !prevState);
      setIsMisdatosOpen(false);
      setIsNewCompanyOpen(false);
      setIsRegisteredCompaniesOpen(false);
      setIsMisAvisosOpen(false);
   };

   const handleNewCompanyClick = () => {
      setIsNewCompanyOpen((prevState) => !prevState);
      setIsDataPersonalOpen(false);
      setIsChangePasswordOpen(false);
      setIsRegisteredCompaniesOpen(false);
      onSidebarClick("nuevaEmpresa");
   };

   const handleRegisteredCompaniesClick = () => {
      setIsRegisteredCompaniesOpen((prevState) => !prevState);
      setIsDataPersonalOpen(false);
      setIsChangePasswordOpen(false);
      setIsNewCompanyOpen(false);
      onSidebarClick("empresasRegistradas");
   };

   const handleMisAvisosClick = () => {
      setIsMisAvisosOpen((prevState) => !prevState);
      setIsFacturacionOpen(false);
      setIsMisdatosOpen(false);
      setIsNewCompanyOpen(false);
      setIsRegisteredCompaniesOpen(false);
   };

   const handleAvisosActivosClick = () => {
      setIsAvisosActivos((prevState) => !prevState);
      setIsFacturacionOpen(false);
      setIsMisdatosOpen(false);
      setIsNewCompanyOpen(false);
      setIsRegisteredCompaniesOpen(false);
      onSidebarClick("avisosActivos");
   };

   const handleAvisosPendientesClick = () => {
      setIsAvisosPendientes((prevState) => !prevState);
      onSidebarClick("avisosPendientes");
   };

   const handleAvisosBajasClick = () => {
      setIsAvisosBajas((prevState) => !prevState);
      onSidebarClick("avisosBajas");
   };

   const handleMisInteresadosClick = () => {
      setIsMisInteresados((prevState) => !prevState);
      onSidebarClick("misInteresados");
   };

   return (
      <div className="uiAdmin_sidebar col1">
         <div className="sidebar">
            {/* Mis Datos Section */}
            < ul >
               <li className={isMisdatosOpen ? "active" : ""}>
                  <a
                     href="#"
                     title="Mis Datos"
                     className="category_data_active_perfil"
                     onClick={handleMisdatosClick}
                  >
                     <strong>Mis Datos</strong>
                  </a>
                  {isMisdatosOpen && (
                     <ul className="uiAdmin_side_sub_menu">
                        <li>
                           <a
                              href="#"
                              title="Datos Personales"
                              className="category_data_perfil"
                              onClick={handleDataPersonalClick}
                           >
                              <strong>{"Datos Personales"}</strong>
                              {isDataPersonalOpen && (
                                 <i className="bi bi-chevron-right color_arrow_right"></i>
                              )}
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              title="Cambio de Claves"
                              className="category_data_perfil"
                              onClick={handleChangePasswordClick}
                           >
                              &nbsp;
                              <strong>{"Cambio de Claves"}</strong>
                              {isChangePasswordOpen && (
                                 <i className="bi bi-chevron-right color_arrow_right"></i>
                              )}
                           </a>
                        </li>
                     </ul>
                  )}
               </li>
            </ul>

            {/* Datos de Facturación Section */}
            <ul>
               <li>
                  <a
                     href="#"
                     title="Datos de Facturación"
                     className="category_data_active_perfil"
                     onClick={handleFacturacionClick}
                  >
                     <strong>Datos de Facturación</strong>
                  </a>
                  {isFacturacionOpen && (
                     <ul className="uiAdmin_side_sub_menu">
                        <li>
                           <a
                              href="#"
                              title="Nueva Empresa"
                              className="category_data_perfil"
                              onClick={handleNewCompanyClick}
                           >
                              <strong>{"Nueva Empresa"}</strong>
                              {isNewCompanyOpen && (
                                 <i className="bi bi-chevron-right color_arrow_right"></i>
                              )}
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              title="Empresas Registradas"
                              className="category_data_perfil"
                              onClick={handleRegisteredCompaniesClick}
                           >
                              &nbsp;
                              <strong>{"Empresas Registradas"}</strong>
                              {isRegisteredCompaniesOpen && (
                                 <i className="bi bi-chevron-right color_arrow_right"></i>
                              )}
                           </a>
                        </li>
                     </ul>
                  )}
               </li>
            </ul>

            {/* Mis Avisos Section */}
            <ul>
               <li>
                  <a
                     href="#"
                     title="Mis Avisos"
                     className="category_data_active_perfil"
                     onClick={handleMisAvisosClick}
                  >
                     <strong>Mis Avisos</strong>
                  </a>
                  {isMisAvisosOpen && (
                     <ul className="uiAdmin_side_sub_menu">
                        <li>
                           <a href="#" title="Avisos Activos" className="category_data_perfil" onClick={handleAvisosActivosClick}>
                              <strong>{"Avisos Activos"}</strong>
                              {isAvisosActivos && (
                                 <i className="bi bi-chevron-right color_arrow_right"></i>
                              )}
                           </a>
                        </li>
                        <li>
                           <a href="#" title="Avisos Pendientes" className="category_data_perfil" onClick={handleAvisosPendientesClick}>
                              <strong>{"Avisos Pendientes"}</strong>
                              {isAvisosPendientes && (
                                 <i className="bi bi-chevron-right color_arrow_right"></i>
                              )}
                           </a>
                        </li>
                        <li>
                           <a href="#" title="Avisos de Baja" className="category_data_perfil" onClick={handleAvisosBajasClick}>
                              <strong>{"Avisos de Baja"}</strong>
                              {isAvisosBajas && (
                                 <i className="bi bi-chevron-right color_arrow_right"></i>
                              )}
                           </a>
                        </li>
                        <li>
                           <a href="#" title="Mis Interesados" className="category_data_perfil" onClick={handleMisInteresadosClick}>
                              <strong>{"Mis Interesados"}</strong>
                              {isMisInteresados && (
                                 <i className="bi bi-chevron-right color_arrow_right"></i>
                              )}
                           </a>
                        </li>
                     </ul>
                  )}
               </li>
            </ul>

            {/* Mis Alertas Section */}
            <ul>
               <li>
                  <a
                     href="#"
                     title="Mis Alertas"
                     className="category_data_active_perfil"
                  >
                     <strong>Mis Alertas</strong>
                  </a>
               </li>
            </ul>

            {/* Mis Favoritos Section */}
            <ul>
               <li>
                  <a
                     href="#"
                     title="Mis Favoritos"
                     className="category_data_active_perfil"
                  >
                     <strong>Mis Favoritos</strong>
                  </a>
               </li>
            </ul>
         </div>
      </div >
   );
};
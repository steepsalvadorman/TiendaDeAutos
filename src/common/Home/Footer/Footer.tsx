import "./Footer.css";
import facebookLogo from "/icons/facebook.svg";
import twitterLogo from "/icons/twitter.webp";
import instagramLogo from "/icons/instagram.webp";
import linkedinLogo from "/icons/linkedin.svg";
import tiktokLogo from "/icons/tik-tok.webp";
import youtubeLogo from "/icons/youtube.webp";

export const Footer = () => {
   return (
      <footer className="footer bg-black pt-4 pb-2 text-white">
         <div className="container">
            <div className="row mt-4">
               <div className="col-md-3">
                  <p className="utext fs-5 text-white">Usados</p>
                  <ul className="list-inline">
                     <li className="mt-3">
                        <a
                           href="/autos"
                           className="box-border link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Autos
                        </a>
                     </li>
                     <li className="mt-3">
                        <a
                           href="/motos"
                           className="box-border link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Motos
                        </a>
                     </li>
                     <li className="mt-3">
                        <a
                           href="/camiones"
                           className="box-border link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Buses y Camiones
                        </a>
                     </li>
                  </ul>

                  <br />
                  <p className="utext fs-5">Servicios</p>
                  <ul className="list-inline">
                     <li>
                        <a
                           href="transferencia"
                           className="box-border text-secondary no-underline"
                        >
                           Transferencia Vehicular
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="col-md-3">
                  <p className="utext fs-5">Nuevos</p>
                  <ul className="list-inline">
                     <li className="mt-3">
                        <a
                           href="/autos"
                           className="box-border  link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Autos
                        </a>
                     </li>
                     <li className="mt-3">
                        <a
                           href="/motos"
                           className="box-border link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                           style={{ color: "#808080" }}
                        >
                           Motos
                        </a>
                     </li>
                     <li className="mt-3">
                        <a
                           href="/camiones"
                           className="box-border link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Buses y Camiones
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="col-md-3">
                  <p className="utext fs-5">Ayuda</p>
                  <ul className="list-inline">
                     <li className="mt-3">
                        <a
                           href="#"
                           className="box-border  link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Mapa de sitio
                        </a>
                     </li>
                     <li className="mt-3">
                        <a
                           href="terminos_condiciones"
                           className="box-border  link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Términos y condiciones
                        </a>
                     </li>
                     <li className="mt-3">
                        <a
                           href="#"
                           className="box-border  link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Políticas de publicación
                        </a>
                     </li>
                     <li className="mt-3">
                        <a
                           href="privacidad"
                           className="box-border  link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Políticas de privacidad
                        </a>
                     </li>
                     <li className="mt-3">
                        <a
                           href="politicas"
                           className="box-border  link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Política de cookies
                        </a>
                     </li>
                     <li className="mt-3">
                        <a
                           href="terminos_condiciones"
                           className="box-border  link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Términos de uso
                        </a>
                     </li>
                     
                     <li className="mt-3">
                        <a href="#">
                           <img
                              src="/images/libro-reclamaciones.webp"
                              alt="Libro de Reclamaciones"
                           />
                        </a>
                     </li>
                     
                  </ul>
               </div>
               <div className="col-md-3">
                  <p className="utext fs-5">Sobre Neoauto</p>
                  <ul className="list-inline">
                     <li className="mt-3">
                        <a
                           href="noticias"
                           className="box-border  link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Noticias
                        </a>
                     </li>
                     <li className="mt-3">
                        <a
                           href="preguntas"
                           className="box-border  link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Preguntas Frecuentes
                        </a>
                     </li>
                     <li className="mt-3">
                        <a
                           href="#"
                           className="box-border  link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-secondary"
                        >
                           Ayuda en Línea
                        </a>
                     </li>
                  </ul>
                  <br />
                  <p className="utext fs-5">Síguenos</p>
                  <div className="d-flex flex-wrap justify-content-between gap-1 mt-3">
                     <div className="cont-icon-sigueme">
                        <a href="#">
                           <img
                              src={linkedinLogo}
                              alt="LinkedIn"
                              className="img-fluid"
                           />
                        </a>
                     </div>
                     <div className="cont-icon-sigueme">
                        <a href="#">
                           <img
                              src={tiktokLogo}
                              alt="TikTok"
                              className="img-fluid"
                           />
                        </a>
                     </div>
                     <div className="cont-icon-sigueme">
                        <a href="#">
                           <img
                              src={youtubeLogo}
                              alt="YouTube"
                              className="img-fluid"
                           />
                        </a>
                     </div>
                     <div className="cont-icon-sigueme">
                        <a href="#">
                           <img
                              src={instagramLogo}
                              alt="Instagram"
                              className="img-fluid"
                           />
                        </a>
                     </div>
                     <div className="cont-icon-sigueme">
                        <a href="#">
                           <img
                              src={twitterLogo}
                              alt="Twitter"
                              className="img-fluid"
                           />
                        </a>
                     </div>
                     <div className="cont-icon-sigueme">
                        <a href="#">
                           <img
                              src={facebookLogo}
                              alt="Facebook"
                              className="img-fluid"
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};



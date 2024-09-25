import { useEffect, useState } from "react";
import authService from "../../../services/authService";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

export const Header = () => {
   const [value, setValue] = useState("");
   const [user, setUser] = useState<string | null>(null);
   const navigate = useNavigate(); // Para redirigir a otra página
   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
   };

   useEffect(() => {
      const checkAuth = async () => {
         const currentUser = authService.getCurrentUser();
         console.log("Current User:", currentUser); // Para ver el usuario actual
         if (currentUser && currentUser.nombreUsuario) {
            setUser(currentUser.nombreUsuario);
         }
      };
      checkAuth();
   }, []);

   const handleLogout = async () => {
      try {
         await authService.logout();
         setUser(null);
         navigate("/"); // Redirige a la página de inicio
      } catch (error) {
         console.error("Logout error:", error);
      }
   };

   return (
      <header>
         <link
            href="https://cds.neoauto.pe/neoauto2/css/topbar_styles.css?20230516121747"
            rel="stylesheet"
            type="text/css"
            media="all"
         />
         <div className="top-gec">
            <div className="w980">
               <a
                  href="http://elcomercio.pe"
                  target="_blank"
                  title="Grupo El Comercio"
                  className="logo-gec"
               ></a>
               <h4>Los clasificados Automotores del Grupo El Comercio</h4>
            </div>
         </div>
         <div className="port-wrap-header2">
            <link
               href="https://cds.neoauto.pe/neoauto2/css/search-styles.css?20230516121747"
               rel="stylesheet"
               type="text/css"
               media="all"
            />
            <div className="neov3_search_port-header2">
               <div className="neov3_search_port-header-form neov3_search_fl-lf">
                  <form method="POST" id="frmSearch" action="/busqueda-autos/">
                     <div className="neov3_search_fl-lf frmSearch_divsel">
                        <select
                           name="estado"
                           value={value}
                           onChange={handleChange}
                           className="nuevos_y_usados"
                        >
                           <option className="nuevos_y_usados" value="">
                              Nuevos y Usados
                           </option>
                           <option value="nuevos">Nuevos</option>
                           <option value="usados">Usados</option>
                        </select>
                     </div>
                     <input
                        type="text"
                        name="keyword"
                        id="validateSearch"
                        className="search-text"
                        placeholder="Buscar por descripción o código de aviso"
                        autoComplete="off"
                        size={31}
                     />
                     <div className="btndiv neov3_search_fl-lf">
                        <input
                           type="submit"
                           name="lnkvolver"
                           value="Buscar"
                           className="btn btn-primary"
                        />
                     </div>
                  </form>
               </div>
               <ul className="social-redesNeo">
                  {!user ? (
                     <li className="social-links">
                        <a href="/">Ingresar</a>
                        <span> | </span>
                        &nbsp; &nbsp;
                        <a href="/">Registrarse</a>
                        <span> | </span>
                        <a href="/perfil">Perfil</a>
                     </li>
                  ) : (
                     <li className="social-links">
                        <a href="/perfil">{user}</a>
                        <span> | </span>
                        &nbsp; &nbsp;
                        <a href="/" onClick={handleLogout}>
                           Cerrar sesión
                        </a>
                        <span> | </span>
                        &nbsp; &nbsp;
                        <a href="/perfil">Perfil</a>
                     </li>
                  )}
                  &nbsp;
                  <ul>
                     <li>
                        <a
                           id="follow-button"
                           className="facebook_like_button"
                           title="Seguir a @NeoAutocom en Facebook"
                           href="https://www.facebook.com/NeoAutocom"
                        >
                           <i className="bi bi-facebook"></i>
                           <span className="white">Me gusta</span>
                        </a>
                     </li>
                     <li>
                        <a
                           id="follow-button"
                           className="twitter_follow_button"
                           title="Seguir a @NeoAutocom en X"
                           href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fneoauto.com%2F&amp;ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ENeoAutocom&amp;region=follow_link&amp;screen_name=NeoAutocom"
                        >
                           <i className="bi bi-twitter-x"></i>
                           <span className="white">Seguir</span>
                        </a>
                     </li>
                  </ul>
               </ul>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-black">
               <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                     <li className="nav-item active">
                        <a className="nav-link text-white fs-4" href="/">
                           Inicio
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-white fs-4" href="">
                           Autos nuevos
                        </a>
                     </li>
                     <li className="nav-item">
                        <a
                           className="nav-link active text-white fs-4"
                           aria-current="page"
                           href="/autos"
                        >
                           Autos Usados
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-white fs-4" href="/motos">
                           Motos
                        </a>
                     </li>
                     <li className="nav-item">
                        <a
                           className="nav-link text-white fs-4"
                           href="/noticias"
                        >
                           Noticias Tuautope
                        </a>
                     </li>
                     <li className="nav-item position-absolute top-0 end-0 p-2 fs-4">
                        <a className="nav-link text-white fs-4" href="/vender">
                           Publica tu aviso
                        </a>
                     </li>
                  </ul>
               </div>
            </nav>
            <div id="gad_megabanner"></div>
            <div id="content" className="fix_flex"></div>
         </div>
      </header>
   );
};

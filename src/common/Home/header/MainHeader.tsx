import { useEffect, useState } from "react";
import "./MainHeader.css";
import authService from "../../../services/authService";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export const MainHeader = () => {
   const [user, setUser] = useState<string | null>(null);
   const navigate = useNavigate(); // Para redirigir a otra página
   const [isOpen, setIsOpen] = useState(false);

   const checkAuth = async () => {
      const currentUser = authService.getCurrentUser();
      console.log("Current User:", currentUser); // Para ver el usuario actual
      if (currentUser && currentUser.nombreUsuario) {
         setUser(currentUser.nombreUsuario);
      }
   };

   useEffect(() => {
      checkAuth();
   }, []);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

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
      <header style={{ marginBottom: 0 }}>
         <nav className="navbar navbar-expand-lg p-2 bg-black mw-100">
            <div className="container">
               <a className="navbar-brand" href="/">
                  <img src="/images/logo3.webp" alt="Logo" />
               </a>
               <button
                  className="navbar-toggler bg-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon" />
               </button>
               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <form className="d-flex me-auto" role="search">
                     <input
                        className="form-control me-3 bg-white buscarBoton"
                        type="search"
                        placeholder="Buscar por marca o modelo"
                        aria-label="Buscar"
                     />
                     <button className="btn btn-outline-success" type="submit">
                        Buscar
                     </button>
                  </form>
                  <ul className="navbar-nav me-4 mb-2 mb-lg-0">
                     {!user ? (
                        <>
                           <li className="nav-item">
                              <a
                                 className="nav-link active text-white"
                                 id="btnRegistrar"
                                 aria-current="page"
                                 href="#"
                                 data-bs-toggle="modal"
                                 data-bs-target="#registerModal"
                              >
                                 Registrate
                              </a>
                           </li>
                           <li className="nav-item">
                              <a
                                 className="nav-link text-secondary fw-bold"
                                 id="btnIngresar"
                                 aria-current="page"
                                 href="#"
                                 data-bs-toggle="modal"
                                 data-bs-target="#ingresarModal"
                              >
                                 Ingresa
                              </a>
                           </li>
                        </>
                     ) : (
                        <li className="nav-item">
                           <span className="nav-link text-white">
                              Hola, {user}
                              <div
                                 className="filtroFlechaAbajo"
                                 onClick={toggleDropdown}
                              >
                                 <i
                                    className="bi bi-chevron-down flechaDespliegue"
                                    aria-hidden="true"
                                 ></i>
                              </div>
                              {isOpen && (
                                 <ul className="dropdown-menu">
                                    <li>
                                       <a href="/perfil">Mi perfil</a>
                                    </li>
                                    <li>
                                       <a href="#">Mis avisos</a>
                                    </li>
                                    <li>
                                       <a href="#">Mis interesados</a>
                                    </li>
                                    <li>
                                       <a href="#">Alertas</a>
                                    </li>
                                    <li>
                                       <a href="#">Favoritos</a>
                                    </li>
                                    <li>
                                       <a href="#" onClick={handleLogout}>
                                          Salir
                                       </a>
                                    </li>
                                 </ul>
                              )}
                           </span>
                        </li>
                     )}
                  </ul>
                  <a
                     type="button"
                     className="btn-vender btn btn-secondary text-light"
                     href="/vender"
                  >
                     Vende tu Vehiculo
                  </a>
               </div>
            </div>
         </nav>
         <div className="datos" style={{ backgroundColor: "black" }}>
            <div className="container mt-0">
               <div className="row">
                  <div className="col">
                     <div className="d-flex">
                        <button
                           type="button"
                           className="btn btn-dark me-3 btn-categoria"
                        >
                           Usados
                        </button>
                        <button
                           type="button"
                           className="btn btn-dark me-3 btn-categoria"
                        >
                           Nuevos
                        </button>
                        <button
                           type="button"
                           className="btn btn-dark me-3 btn-categoria"
                        >
                           Servicios
                        </button>
                        <button
                           type="button"
                           className="btn btn-dark btn-categoria"
                        >
                           Noticias
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};

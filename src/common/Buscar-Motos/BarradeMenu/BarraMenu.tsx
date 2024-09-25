import "./BarraMenu.css";
export const BarraMenu = () => {
   return (
      <>
         <div className="w980">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <div className="container-fluid">
                  <a
                     className="navbar-brand d-flex align-items-center"
                     href="/"
                     title="Neoauto"
                  >
                     <strong>TUAUTOpe</strong>
                  </a>
                  <i className="bi bi-chevron-right mx-2"></i>
                  <button
                     className="navbar-toggler"
                     type="button"
                     data-bs-toggle="collapse"
                     data-bs-target="#navbarNav"
                     aria-controls="navbarNav"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  >
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                        <li className="nav-item d-flex align-items-center">
                           <a className="nav-link" href="/Motos" title="Motos">
                              Motos
                           </a>
                           <i className="bi bi-chevron-right mx-2"></i>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                           <a className="nav-link" href="NuevosyUsados">
                              Nuevos y Usados
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
            <h1 className="s-container__title">
               Venta de motos nuevas y usadas
            </h1>
         </div>
      </>
   );
};

export const Footer = () => {
   return (
      <footer className="bg-black text-white text-center text-lg-start">
         <div className="container p-4">
            <div className="row align-items-center">
               <div className="col-md-auto mb-4 mb-md-0">
                  <p className="text-center mb-0" style={{ color: "#fa9300" }}>
                     © 2024 TUAUTOpe
                  </p>
               </div>
               <div className="col-md-auto mb-4 mb-md-0 ms-auto">
                  <div className="d-flex justify-content-center align-items-center">
                     <a
                        href="/cokkie"
                        className="me-4 text-white text-decoration-none"
                     >
                        Política de Cookies
                     </a>
                     <div className="me-4">|</div>
                     <a
                        href="/terminos_condiciones"
                        className="me-4 text-white text-decoration-none"
                     >
                        Términos de uso
                     </a>
                     <div className="me-4">|</div>
                     <a
                        href="/Privacidad"
                        className="me-4 text-white text-decoration-none"
                     >
                        Políticas de privacidad &nbsp;
                     </a>
                     <div className="me-4">|</div>
                     <a href="/reclamo">
                        <img
                           src="/src/assets/images/rclamaciones.webp"
                           alt="logo"
                           width="88"
                           height="50"
                           className="ms-4"
                        />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

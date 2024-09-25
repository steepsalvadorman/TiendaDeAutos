import "./Footer.css";

export const Footer = () => {
   return (
      <div className="footer-container">
         <div className="secure-purchases d-flex justify-content-center align-items-center my-4">
            <p className="mr-2">Compras 100% seguras con:</p>
            <div className="d-flex">
               <a
                  href="https://pagoefectivo.pe"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img
                     className="mx-1"
                     src="https://cds.neoauto.pe/neoauto2/imagenes/portada/pagos-1.png?20230516121747"
                     alt="Pago Efectivo"
                  />
               </a>
               <a
                  href="http://www.visanet.com.pe"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img
                     className="mx-1"
                     src="https://cds.neoauto.pe/neoauto2/imagenes/portada/pagos-2.png?20230516121747"
                     alt="Visa"
                  />
               </a>
               <a
                  href="http://www.mastercard.com/pe/gateway.html"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img
                     className="mx-1"
                     src="https://cds.neoauto.pe/neoauto2/imagenes/portada/pagos-3.png?20230516121747"
                     alt="MasterCard"
                  />
               </a>
            </div>
         </div>
         <p className="text-center">
            Autorizado por Visa para realizar transacciones electrónicas
         </p>
         <hr />
         <div className="secure-purchases d-flex justify-content-center align-items-center flex-wrap">
            <a className="mr-2">
               <strong>© 2024 TUAUTOpe</strong>
            </a>
            <div className="d-flex">
               <a
                  href="http://localhost:8000/Terminos_condiciones"
                  className="mx-2"
               >
                  Términos de uso
               </a>
               <a href="/privacidad" className="mx-2">
                  Politicas de Privacidad
               </a>
               <a href="/reclamo" className="mx-2">
                  Libro de reclamaciones
               </a>
               <p className="mx-2">Los Clasificados Automores de </p>
               <a href="http://elcomercio.pe" className="mx-2">
                  <img
                     className="small-logo"
                     src="/src/assets/images/elcomercio.png"
                     alt="El Comercio"
                  ></img>
               </a>
            </div>
         </div>
      </div>
   );
};

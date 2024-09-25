
export const ImagesFooter = () => {
   return (
      <section className="images-footer d-flex p-2 justify-content-center align-items-center">
         <p className="text pt-1">Compras 100% seguras con: &nbsp;</p>
         <a href="https://pagoefectivo.pe/">
            <img
               src="/src/assets/images/pago.png"
               alt="Logo de la compañia"
               className="icon-pago"
            />
         </a>
         <a href="https://www.visa.com.pe/">
            <img
               src="/src/assets/images/visa.png"
               alt="Logo de la compañia"
               className="icon-pago"
            />
         </a>
         <a href="https://www.mastercard.com.pe/es-pe.html">
            <img
               src="/src/assets/images/mastercad.png"
               alt="Logo de la compañia"
               className="icon-pago"
            />
         </a>
         <p className="text mt-1">
            Autorizado por Visa para realizar transacciones electrónicas
         </p>
      </section>
   );
};



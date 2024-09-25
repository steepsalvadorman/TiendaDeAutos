import "./Contacto.css"; // Asegúrate de que la ruta es correcta

export const Contacto = () => {
   return (
      <div className="divall-port-publici2">
         <div id="gad-middle1"></div>
         <div className="port-publici2 fl-lf">
            <img
               src="https://cds.neoauto.pe/neoauto2/imagenes/portada/port_publi_2.jpg?20230516121747"
               alt="Quieres vender tu vehículo"
               className="port-publici-img2"
            />
            <div className="port-publici-back2">
               <div className="port-publici-backdiv-btn2 d-flex justify-content-start">
                  <input
                     type="button"
                     onClick={() =>
                        (window.location.href =
                           "https://neoauto.com/autonuevo-concesionario/pedido")
                     }
                     className="btn btn-publicar button-sty"
                     value="Contactate Aquí"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

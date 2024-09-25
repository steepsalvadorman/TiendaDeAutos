import "./ModeloPreferido.css";

export const ModeloPreferido = () => {
   return (
      <div className="port-marcp">
         <div className="d-flex justify-content-between align-items-center port-marcp_top port_marcp_top2">
            <h2 className="port-marcp_t10 mb-0">Modelos Preferidos</h2>
            <div className="port-marcp_t2">
               <a href="">Ver todos »</a>
            </div>
         </div>
         {/* Lista de modelos con icono de clasificación */}
         <div className="port_modp_row d-flex align-items-center">
            <i className="bi bi-star-fill"></i> {/* Icono de estrella */}
            <div className="port_aus_text">
               <a href="">SPORTAGE</a> <span>(KIA)</span>
            </div>
         </div>
         <div className="port_modp_row d-flex align-items-center">
            <i className="bi bi-star-fill"></i>
            <div className="port_aus_text">
               <a href="">X-TRAIL</a> <span>(NISSAN)</span>
            </div>
         </div>
         <div className="port_modp_row d-flex align-items-center">
            <i className="bi bi-star-fill"></i>
            <div className="port_aus_text">
               <a href="">RAV4</a> <span>(TOYOTA)</span>
            </div>
         </div>
         <div className="port_modp_row d-flex align-items-center">
            <i className="bi bi-star-fill"></i>
            <div className="port_aus_text">
               <a href="">3</a> <span>(MAZDA)</span>
            </div>
         </div>
         <div className="port_modp_row d-flex align-items-center">
            <i className="bi bi-star-fill"></i>
            <div className="port_aus_text">
               <a href="">TUCSON</a> <span>(HYUNDAI)</span>
            </div>
         </div>
         <div className="port_modp_row d-flex align-items-center">
            <i className="bi bi-star-fill"></i>
            <div className="port_aus_text">
               <a href="">CX-5</a> <span>(MAZDA)</span>
            </div>
         </div>
         <div className="port_modp_row d-flex align-items-center">
            <i className="bi bi-star-fill"></i>
            <div className="port_aus_text">
               <a href="">COROLLA</a> <span>(TOYOTA)</span>
            </div>
         </div>
      </div>
   );
};

import { ListaCarros } from "../ListaCarros/ListaCarros";
import "./UltimosVehiculos.css";

export const UltimosVehiculos = () => {
   return (
      <div className="port_vehi_des">
         <div className="port-marcp_top">
            <h2 className="port-marcp_vehitit">
               Últimos avisos vehículos usados
            </h2>
            <div className="port-marcp_t2">
               <a href="#">Ver todos »</a>
            </div>
         </div>
         <div className="pagespan container">
            <div className="wrap">
               <div className="frame" id="basic">
                  <ListaCarros />
               </div>
            </div>
            <div className="controls center">
               <a className="prevPage disabled"></a>
               <a className="nextPage"></a>
               <a className="toStart"></a>
            </div>
         </div>
      </div>
   );
};

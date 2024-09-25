import React from "react";
import { useNavigate } from "react-router-dom";
import "./Resultado.css";

interface ResultadoProps {
   tipoCombustible: string;
   titulo: string;
   precio: string;
   ubicacion: string;
   kilometraje: string;
   descripcion: string;
   imagen: string;
   esNueva: boolean;
}

export const Resultado: React.FC<ResultadoProps> = ({
   tipoCombustible,
   titulo,
   precio,
   ubicacion,
   kilometraje,
   descripcion,
   imagen,
   esNueva,
}) => {
   const navigate = useNavigate();

   const handleContactar = () => {
       navigate('/DetalleMoto');
   };

   return (
      <div className="resultado-card">
         <div className="resultado-header">
            <h5 className="tituloEstilo">{titulo}</h5>
            <div>
               {esNueva && <span className="nuevo-badge">NUEVA</span>}
            </div>
         </div>
         <div className="resultado-body">
            <div className="resultado-imagen">
               <img src={imagen} alt={titulo} />
            </div>
            <div className="resultado-info">
               <p>{tipoCombustible}</p>
               <p className="ubicacion resultado-info-background">{ubicacion}</p>
               <p>{kilometraje}</p>
               <p>{descripcion}</p>
            </div>

            <div className="resultado">
               <div className="resultado-precio">{precio}</div>
               <button className="btn-contactar" onClick={handleContactar}>
                   CONTACTAR
               </button>
            </div>
         </div>
      </div>
   );
};

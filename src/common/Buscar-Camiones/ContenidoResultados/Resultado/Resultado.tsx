import "./Resultado.css";

interface ResultadoProps {
   tipoCombustible: string;
   titulo: string;
   precio: string;
   kilometraje: string;
   ubicacion: string;
   descripcion: string;
   imagen: string;
   esNueva?: boolean;
}

export const Resultado: React.FC<ResultadoProps> = ({
   tipoCombustible,
   titulo,
   precio,
   kilometraje,
   ubicacion,
   descripcion,
   imagen,
}) => {
   return (
      <div className="resultado-card">
         <div className="resultado-header">
            <h2 className="tituloEstilo">{titulo}</h2>
            <div>

            </div>
         </div>
         <div className="resultado-body">
            <div className="resultado-imagen">
               <img src={imagen} alt={titulo} />
            </div>
            <div className="resultado-info">
             
                  <p>{tipoCombustible}</p>
                  <p>{kilometraje}</p>
                  <p className="ubicacion resultado-info-background">{ubicacion}</p>
                  <p>{descripcion}</p>
              
            </div>
        
            <div className="resultado">
            <div className="resultado-precio">{precio}</div>
            <button className="btn-contactar">CONTACTAR</button>
         </div>
         </div>
       
      </div>
   );
};

import "./DetalleMoto.css";
import { Resultado } from "../ContenidoResultados/Resultado/Resultado";

interface ResultadoData {

   imagen: string;
  
}

export const Resultados = () => {
  

   const resultados: ResultadoData[] = [
      {
        
         imagen: "/src/assets/images/Moto/motosventa/1.webp",
         
      },
      {
 
         imagen: "/src/assets/images/Moto/motosventa/2.webp",
      
      },
      {
      
         imagen: "/src/assets/images/Moto/motosventa/3.webp",
       
      },
      // Otros resultados...
   ];

   return (
      <div>
         <div className="resultados">
            <div className="resultados-cantidad">
               <p>{resultados.length} Resultados</p>
            </div>
         
         </div>
         <div className="resultados-lista">
            {resultados.map((resultado, index) => (
               <Resultado
                  key={index}

                  imagen={resultado.imagen} tipoCombustible={""} titulo={""} precio={""} ubicacion={""} kilometraje={""} descripcion={""} esNueva={false}               
               />
            ))}
         </div>
      </div>
   );
};

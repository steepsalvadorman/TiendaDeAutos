import { useState, ChangeEvent } from "react";
import "./Resultados.css";
import { Resultado } from "./Resultado/Resultado";

interface ResultadoData {
   tipoCombustible: string;
   titulo: string;
   precio: string;
   ubicacion: string;
   descripcion: string;
   kilometraje: string;
   imagen: string;
   esNueva: boolean;
}

export const Resultados = () => {
   const [filtro, setFiltro] = useState<string>("Relevancia");

   const manejarCambioFiltro = (evento: ChangeEvent<HTMLSelectElement>) => {
      setFiltro(evento.target.value);
   };

   const resultados: ResultadoData[] = [
      {
         tipoCombustible: "Gasolina | Mecánica",
         titulo: "Discover 125 St 2022",
         precio: "US$ 1,651",
         ubicacion: "Lima, Lima",
         descripcion: "MOTO CERO KILÓMETROS.",
         kilometraje: "0 kms",
         imagen: "/images/Moto/motosventa/1.webp",
         esNueva: true,
      },
      {
         tipoCombustible: "Gasolina | Mecánica",
         titulo: "Furbo Street 150 2022",
         precio: "US$ 1,429",
         ubicacion: "Lima, Lima",
         descripcion: "MOTO NUEVA - PRECIO DE OFERTA",
         kilometraje: "985 kms",
         imagen: "/images/Moto/motosventa/2.webp",
         esNueva: true,
      },
      {
         tipoCombustible: "Gasolina | Mecánica",
         titulo: "Furbo Tm 200 2022",
         precio: "US$ 2,042",
         ubicacion: "Lima, Lima",
         descripcion: "MOTO NUEVA - PRECIO DE OFERTA",
         kilometraje: "750 kms",
         imagen: "/images/Moto/motosventa/3.webp",
         esNueva: true,
      },
      // Otros resultados...
   ];

   return (
      <div>
         <div className="resultados">
            <div className="resultados-cantidad">
               <p>{resultados.length} Resultados</p>
            </div>
            <div className="resultados-filtros">
               <p>Filtros</p>
               <select
                  value={filtro}
                  onChange={manejarCambioFiltro}
                  className="selectFiltro"
               >
                  <option value="Relevancia">Relevancia</option>
                  <option value="Menor precio">Menor precio</option>
                  <option value="Mayor precio">Mayor precio</option>
                  <option value="Avisos recientes">Avisos recientes</option>
                  <option value="Menor cuota mensual">
                     Menor cuota mensual
                  </option>
                  <option value="Mayor cuota mensual">
                     Mayor cuota mensual
                  </option>
                  <option value="Año más reciente">Año más reciente</option>
                  <option value="Menor kilometraje">Menor kilometraje</option>
               </select>
            </div>
         </div>
         <div className="resultados-lista">
            {resultados.map((resultado, index) => (
               <Resultado
                  key={index}
                  tipoCombustible={resultado.tipoCombustible}
                  titulo={resultado.titulo}
                  precio={resultado.precio}
                  ubicacion={resultado.ubicacion}
                  kilometraje={resultado.kilometraje}
                  descripcion={resultado.descripcion}
                  imagen={resultado.imagen}
                  esNueva={resultado.esNueva}
               />
            ))}
         </div>
      </div>
   );
};

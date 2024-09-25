import { useState, ChangeEvent } from "react";
import { Resultado } from "./Resultado/Resultado";
import "./Resultados.css";
interface ResultadoData {
   tipoCombustible: string;
   titulo: string;
   precio: string;
   kilometraje: string;
   ubicacion: string;
   descripcion: string;
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
         titulo: "Hyundai Hd35 Euro lii",
         precio: "US$ 9,900",
         ubicacion: "Lima, Lima",
         kilometraje: "32,000 Kms",
         descripcion:
            "Mantenimientos Reciente, Llatas Nuevas, Listas Para Usar!",
         imagen:
            "/src/assets/images/Camion/BuscarCamiones/buscarcamionejemplo.webp",
         esNueva: false,
      },
      {
         tipoCombustible: "Diesel | Mecánica",
         titulo: "Forland Incapower F25 2010",
         precio: "US$ 8,000",
         kilometraje: "28,000 Kms",
         ubicacion: "Lima, Lima",
         descripcion:
            "Mantenimientos Reciente, Llatas Nuevas, Listas Para Usar!",
         imagen:
            "/src/assets/images/Camion/BuscarCamiones/buscarcamionejemplo.webp",
         esNueva: false,
      },
      {
         tipoCombustible: "Gasolina | Mecánica",
         titulo: "Dongfeng Df-1016I 2021",
         precio: "US$ 21,650",
         kilometraje: "30,000 Kms",
         ubicacion: "Lima, Lima",
         descripcion: "Vendo Camion Dong Feng",
         imagen:
            "/src/assets/images/Camion/BuscarCamiones/buscarcamionejemplo.webp",
         esNueva: true,
      },
      // Otros resultados...
   ];

   return (
      <div>
         <div className="resultados">
            <div className="resultados-cantidad">
               <h6 className="h6CamionesStyle">{resultados.length} Resultados</h6>
            </div>
            <div className="resultados-filtros">
               <h6>Filtros</h6>
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
                  kilometraje={resultado.kilometraje}
                  ubicacion={resultado.ubicacion}
                  descripcion={resultado.descripcion}
                  imagen={resultado.imagen}
                  esNueva={resultado.esNueva}
               />
            ))}
         </div>
      </div>
   );
};

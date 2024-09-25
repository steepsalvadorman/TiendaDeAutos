import React, { useState } from "react";
import "./Categorias.css";

export const Categorias: React.FC = () => {
   const [isConditionVisible, setIsConditionVisible] = useState(false);
   const [isBrandVisible, setIsBrandVisible] = useState(false);
   const [isPriceVisible, setIsPriceVisible] = useState(false);
   const [isYearVisible, setIsYearVisible] = useState(false);
   const [isKilometersVisible, setIsKilometersVisible] = useState(false);
   const [isTransmissionVisible, setIsTransmissionVisible] = useState(false);
   const [isDepartmentVisible, setIsDepartmentVisible] = useState(false);
   const [isCategoryVisible, setIsCategoryVisible] = useState(false);
   const [isFuelVisible, setIsFuelVisible] = useState(false);
   const [isTraccionVisible, setIsTraccionVisible] = useState(false);
   const [isPublicationDateVisible, setIsPublicationDateVisible] = useState(false);

   const togglePublicationDateVisibility = () => {
      setIsPublicationDateVisible(!isPublicationDateVisible);
   }

   const toggleTractionsVisibility = () => {
      setIsTraccionVisible(!isTraccionVisible);
   };

   const toggleFuelVisibility = () => {
      setIsFuelVisible(!isFuelVisible);
   };

   const toggleCategoryVisibility = () => {
      setIsCategoryVisible(!isCategoryVisible);
   };

   const toggleDepartmentVisibility = () => {
      setIsDepartmentVisible(!isDepartmentVisible);
   };

   const toggleTransmissionVisibility = () => {
      setIsTransmissionVisible(!isTransmissionVisible);
   };

   const toggleKilometersVisibility = () => {
      setIsKilometersVisible(!isKilometersVisible);
   };

   const toggleYearVisibility = () => {
      setIsYearVisible(!isYearVisible);
   };

   const togglePriceVisibility = () => {
      setIsPriceVisible(!isPriceVisible);
   };

   const toggleBrandVisibility = () => {
      setIsBrandVisible(!isBrandVisible);
   };

   const toggleConditionVisibility = () => {
      setIsConditionVisible(!isConditionVisible);
   };

   return (
      <div>
         <div className="filtros-header">
            <h3>Filtros</h3>
            <img
               src="/icons/BuscarMotos/1.svg"
               className="papeleraMotos"
               alt="Borrar filtros"
            />
         </div>

         <div className="div_Motos">
            <button className="button_Motos">Motos</button>
         </div>

         <div className="filtros-header">
            <h3>Condición</h3>
            <img
               src="/icons/BuscarMotos/3.svg"
               className={`flechaOcultar ${isConditionVisible ? "rotate" : ""}`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleConditionVisibility}
            />
         </div>

         <div className={`condicion ${isConditionVisible ? "visible" : ""}`}>
            <div>Usados</div>
            <div>Nuevos</div>
         </div>

         <div className="filtros-header">
            <h3>Marca</h3>
            <img
               src="/icons/BuscarMotos/3.svg"
               className={`flechaOcultarMarca ${
                  isBrandVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleBrandVisibility}
            />
         </div>

         <div className={`condicion ${isBrandVisible ? "visible" : ""}`}>
            <div>Kawasaki</div>
            <div>BMW</div>
            <div>Yamaha</div>
            <div>Honda</div>
            <div>Jettor</div>
            <div>Ktm</div>
            <div>Pulsar</div>
            <div>Suzuki</div>
            <div>Ducati</div>
            <div>Ssenda</div>
            <div>Advance</div>
            <div className="letrasChiquitas">Más Opciones</div>
         </div>

         <div className="filtros-header">
            <h3>Precio</h3>
            <img
               src="/icons/BuscarMotos/3.svg"
               className={`flechaOcultarPrice ${
                  isPriceVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={togglePriceVisibility}
            />
         </div>
         <div className={`condicion ${isPriceVisible ? "visible" : ""}`}>
            <div>Hasta US$2,000</div>
            <div>US$2,000 a US$5,000</div>
            <div>US$5,000 a US$10,000</div>
            <div>US$10,000 a US$20,000</div>
            <div>US$20,000 a más</div>
            <div className="input-row">
               <input className="inputDesde" type="text" placeholder="Desde" />
               <input className="inputHasta" type="text" placeholder="Hasta" />
               <button className="botonFiltro">
                  <img
                     src="/icons/BuscarMotos/4.svg"
                     alt="Filtrar"
                     className="iconoFiltro"
                  />
               </button>
            </div>
         </div>
         <div className="filtros-header">
            <h3>Año</h3>
            <img
               src="/icons/BuscarMotos/3.svg"
               className={`flechaOcultarYear ${isYearVisible ? "rotate" : ""}`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleYearVisibility}
            />
         </div>
         <div className={`condicion ${isYearVisible ? "visible" : ""}`}>
            <div>2018 a 2023</div>
            <div>2012 a 2017</div>
            <div>2006 a 2011</div>
            <div>Hasta 1999</div>
            <div className="input-row">
               <input className="inputDesde" type="text" placeholder="Desde" />
               <input className="inputHasta" type="text" placeholder="Hasta" />
               <button className="botonFiltro">
                  <img
                     src="/icons/BuscarMotos/4.svg"
                     alt="Filtrar"
                     className="iconoFiltro"
                  />
               </button>
            </div>
         </div>
         <div className="filtros-header">
            <h3>Kilómetros</h3>
            <img
               src="/icons/BuscarMotos/3.svg"
               className={`flechaOcultarKilometers ${
                  isKilometersVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleKilometersVisibility}
            />
         </div>
         <div className={`condicion ${isKilometersVisible ? "visible" : ""}`}>
            <div>Hasta 15,000 Kms</div>
            <div>15,000 a 30,000 Kms</div>
            <div>30,000 a 50,000 Kms</div>
            <div>50,000 a 100,000 Kms</div>
         </div>
         <div className="filtros-header">
            <h3>Transmisión</h3>
            <img
               src="/icons/BuscarMotos/3.svg"
               className={`flechaOcultarTransmision ${
                  isTransmissionVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleTransmissionVisibility}
            />
         </div>
         <div className={`condicion ${isTransmissionVisible ? "visible" : ""}`}>
            <div>Mecánica</div>
            <div>Automática</div>
            <div>Automática - Secuencial</div>
         </div>
         <div className="filtros-header">
            <h3>Departamento</h3>
            <img
               src="/icons/BuscarMotos/3.svg"
               className={`flechaOcultarDepartment ${
                  isDepartmentVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleDepartmentVisibility}
            />
         </div>
         <div className={`condicion ${isDepartmentVisible ? "visible" : ""}`}>
            <div>Lima</div>
            <div>Arequipa</div>
            <div>Callao</div>
            <div>Piura</div>
            <div>Ancash</div>
            <div>Lambayeque</div>
            <div>La Libertad</div>
            <div>Cusco</div>
            <div>Junín</div>
            <div>Huanuco</div>
            <div>Loreto</div>
            <div className="letrasChiquitas">Más Opciones</div>
         </div>
         <div className="filtros-header">
            <h3>Categoría</h3>
            <img
               src="/icons/BuscarMotos/3.svg"
               className={`flechaOcultarCategory ${
                  isCategoryVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleCategoryVisibility}
            />
         </div>
         <div className={`condicion ${isCategoryVisible ? "visible" : ""}`}>
            <div className="categoria-column">
               <figure className="categoriaStyle">
                  <img src="/images/Moto/categorias/deportiva.png"></img>
                  <figcaption>Deportiva</figcaption>
               </figure>
               <figure className="categoriaStyle">
                  <img src="/images/Moto/categorias/de-calle.png"></img>
                  <figcaption>De calle</figcaption>
               </figure>
               <figure className="categoriaStyle">
                  <img src="/images/Moto/categorias/otros-motos.png"></img>
                  <figcaption>Otros</figcaption>
               </figure>
               <figure className="categoriaStyle">
                  <img src="/images/Moto/categorias/cross-enduro.png"></img>
                  <figcaption>Cross/Enduro</figcaption>
               </figure>
            </div>
            <div className="categoria-column">
               <figure className="categoriaStyle">
                  <img src="/images/Moto/categorias/scooter.png"></img>
                  <figcaption>Scooter</figcaption>
               </figure>
               <figure className="categoriaStyle">
                  <img src="/images/Moto/categorias/cuatrimoto.png"></img>
                  <figcaption>Cuatrimoto</figcaption>
               </figure>
               <figure className="categoriaStyle">
                  <img src="/images/Moto/categorias/custom.png"></img>
                  <figcaption>Custom</figcaption>
               </figure>
               <figure className="categoriaStyle">
                  <img src="/images/Moto/categorias/bicimoto.png"></img>
                  <figcaption>Bicimoto</figcaption>
               </figure>
            </div>
         </div>

         <div className="filtros-header">
            <h3>Combustible</h3>
            <img
               src="/icons/BuscarMotos/3.svg"
               className={`flechaOcultarFuel ${isFuelVisible ? "rotate" : ""}`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleFuelVisibility}
            />
         </div>
         <div className={`condicion ${isFuelVisible ? "visible" : ""}`}>
            <div>Gasolina</div>
            <div>Eléctrico</div>
            <div>Gasolina-Hibrido</div>
            <div>Diesel</div>
            <div>Gas GLP</div>
         </div>

         <div className="filtros-header">
            <div>
               <h3>
                  Tracción<span className="spanNuevo">¡Nuevo!</span>
               </h3>
            </div>
            <img
               src="/icons/BuscarMotos/3.svg"
               className={`flechaOcultarTraccion ${
                  isTraccionVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleTractionsVisibility}
            />
         </div>
         <div className={`condicion ${isTraccionVisible ? "visible" : ""}`}>
            <div>Posterior</div>
            <div>Delantera</div>
            <div className="letrasChiquitas">Más Opciones</div>
         </div>

         <div className="filtros-header">
            <div>
               <h3>
                  Fecha de Publicación<span className="spanNuevo">¡Nuevo!</span>
               </h3>
            </div>
            <img
               src="/icons/BuscarMotos/3.svg"
               className={`flechaOcultarPublicationDate ${
                  isPublicationDateVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={togglePublicationDateVisibility}
            />
         </div>
         <div
            className={`condicion ${isPublicationDateVisible ? "visible" : ""}`}
         >
            <div>Publicados hoy</div>
            <div>Últimos 7 dias</div>
            <div>Últimos 15 dias</div>
            <div>Últimos 30 dias</div>
         </div>
      </div>
   );
};

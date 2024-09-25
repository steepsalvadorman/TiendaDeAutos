import { useState } from "react";
import "./Categorias.css";

export const Categorias = () => {
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
   const [isPublicationDateVisible, setIsPublicationDateVisible] =
      useState(false);
   const [isCreditVisible, setIsCreditVisible] = useState(false);

   const [isCapacityVisible, setIsCapacityVisible] = useState(false);

   const toggleCapacityVisibility = () => {
      setIsCapacityVisible(!isCapacityVisible);
   };

   const toggleCreditVisibility = () => {
      setIsCreditVisible(!isCreditVisible);
   };

   const togglePublicationDateVisibility = () => {
      setIsPublicationDateVisible(!isPublicationDateVisible);
   };

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
               src="/src/assets/icons/BuscarMotos/1.svg"
               className="papeleraMotos"
               alt="Borrar filtros"
            />
         </div>

         <div className="div_Motos">
            <button className="button_Motos">Buses y camiones</button>
         </div>

         <div className="filtros-header">
            <h3>Condición</h3>
            <img
               src="/src/assets/icons/BuscarMotos/3.svg"
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
               src="/src/assets/icons/BuscarMotos/3.svg"
               className={`flechaOcultarMarca ${
                  isBrandVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleBrandVisibility}
            />
         </div>

         <div className={`condicion ${isBrandVisible ? "visible" : ""}`}>
            <div>Volvo</div>
            <div>Hyundai</div>
            <div>Hino</div>
            <div>International</div>
            <div>Mercedez Benz</div>
            <div>Jac</div>
            <div>Kia</div>
            <div>Otros</div>
            <div>Isuzu</div>
            <div>Foton</div>
            <div>Chevrolet</div>
            <div className="letrasChiquitas">Más Opciones</div>
         </div>

         <div className="filtros-header">
            <h3>Precio</h3>
            <img
               src="/src/assets/icons/BuscarMotos/3.svg"
               className={`flechaOcultarPrice ${
                  isPriceVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={togglePriceVisibility}
            />
         </div>
         <div className={`condicion ${isPriceVisible ? "visible" : ""}`}>
            <div>Hasta US$5,000</div>
            <div>US$5,000 a US$10,000</div>
            <div>US$10,000 a US$20,000</div>
            <div>US$20,000 a US$35,000</div>
            <div>US$35,000 a más</div>
            <div>Consultar Precio</div>
            <div className="input-row">
               <input className="inputDesde" type="text" placeholder="Desde" />
               <input className="inputHasta" type="text" placeholder="Hasta" />
               <button className="botonFiltro">
                  <img
                     src="/src/assets/icons/BuscarMotos/4.svg"
                     alt="Filtrar"
                     className="iconoFiltro"
                  />
               </button>
            </div>
         </div>
         <div className="filtros-header">
            <h3>Credito Vehicular</h3>
            <img
               src="/src/assets/icons/BuscarMotos/3.svg"
               className={`flechaOcultarCredit ${
                  isCreditVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleCreditVisibility}
            />
         </div>
         <div className={`condicion ${isCreditVisible ? "visible" : ""}`}>
            <div>Hasta US$300</div>
            <div>US$600 a US$900</div>
            <div className="input-row">
               <input className="inputDesde" type="text" placeholder="Desde" />
               <input className="inputHasta" type="text" placeholder="Hasta" />
               <button className="botonFiltro">
                  <img
                     src="/src/assets/icons/BuscarMotos/4.svg"
                     alt="Filtrar"
                     className="iconoFiltro"
                  />
               </button>
            </div>
         </div>
         <div className="filtros-header">
            <h3>Año</h3>
            <img
               src="/src/assets/icons/BuscarMotos/3.svg"
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
                     src="/src/assets/icons/BuscarMotos/4.svg"
                     alt="Filtrar"
                     className="iconoFiltro"
                  />
               </button>
            </div>
         </div>

         <div className="filtros-header">
            <h3>Kilómetros</h3>
            <img
               src="/src/assets/icons/BuscarMotos/3.svg"
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
            <div>100,000 Kms a más</div>
         </div>
         <div className="filtros-header">
            <h3>Capacidad de Carga</h3>
            <img
               src="/src/assets/icons/BuscarMotos/3.svg"
               className={`flechaOcultarCapacity ${
                  isCapacityVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleCapacityVisibility}
            />
         </div>
         <div className={`condicion ${isCapacityVisible ? "visible" : ""}`}>
            <div>Hasta 3 Tn</div>
            <div>3 - 6 Tn</div>
            <div>6 - 15 Tn</div>
            <div>15 - 30 Tn</div>
            <div>Más de 30 Tn</div>
         </div>
         <div className="filtros-header">
            <h3>Transmisión</h3>
            <img
               src="/src/assets/icons/BuscarMotos/3.svg"
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
               src="/src/assets/icons/BuscarMotos/3.svg"
               className={`flechaOcultarDepartment ${
                  isDepartmentVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleDepartmentVisibility}
            />
         </div>
         <div className={`condicion ${isDepartmentVisible ? "visible" : ""}`}>
            <div>Lima</div>
            <div>Callao</div>
            <div>Piura</div>
            <div>Ica</div>
            <div>Ancash</div>
            <div>Arequipa</div>
            <div>Cajamarca</div>
            <div>Junin</div>
            <div>La Libertad</div>
            <div>Moquegua</div>
            <div>Apurimac</div>
            <div className="letrasChiquitas">Más Opciones</div>
         </div>
         <div className="filtros-header">
            <h3>Categoría</h3>
            <img
               src="/src/assets/icons/BuscarMotos/3.svg"
               className={`flechaOcultarCategory ${
                  isCategoryVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleCategoryVisibility}
            />
         </div>
         <div className={`condicion ${isCategoryVisible ? "visible" : ""}`}>
            <div className="categoria-column">
               <figure className="categoria2Style">
                  <img src="/src/assets/images/Camion/CategoriaCamion/camion.png"></img>
                  <figcaption>Camion</figcaption>
               </figure>
               <figure className="categoria2Style">
                  <img src="/src/assets/images/Camion/CategoriaCamion/otros-camiones.png"></img>
                  <figcaption>Otros</figcaption>
               </figure>
            </div>
            <div className="categoria-column">
               <figure className="categoria2Style">
                  <img src="/src/assets/images/Camion/CategoriaCamion/bus.png"></img>
                  <figcaption>Bus</figcaption>
               </figure>
               <figure className="categoria2Style">
                  <img src="/src/assets/images/Camion/CategoriaCamion/maquinaria.png"></img>
                  <figcaption>Maquinaria</figcaption>
               </figure>
            </div>
         </div>

         <div className="filtros-header">
            <h3>Combustible</h3>
            <img
               src="/src/assets/icons/BuscarMotos/3.svg"
               className={`flechaOcultarFuel ${isFuelVisible ? "rotate" : ""}`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleFuelVisibility}
            />
         </div>
         <div className={`condicion ${isFuelVisible ? "visible" : ""}`}>
            <div>Diesel</div>
            <div>Gasolina</div>
            <div>Gas GLP</div>
            <div>Dual</div>
            <div>Electrico</div>
            <div>Gasolina-Hibrido</div>
            <div>Gas GNV</div>
         </div>

         <div className="filtros-header">
            <div>
               <h3>
                  Tracción
               </h3>
            </div>
            <img
               src="/src/assets/icons/BuscarMotos/3.svg"
               className={`flechaOcultarTraccion ${
                  isTraccionVisible ? "rotate" : ""
               }`}
               alt="Ocultar/Mostrar filtros"
               onClick={toggleTractionsVisibility}
            />
         </div>
         <div className={`condicion ${isTraccionVisible ? "visible" : ""}`}>
            <div>4 X 2</div>
            <div>6 X 4</div>
            <div className="letrasChiquitas">Más Opciones</div>
         </div>

         <div className="filtros-header">
            <div>
               <h3>
                  Fecha de Publicación
               </h3>
            </div>
            <img
               src="/src/assets/icons/BuscarMotos/3.svg"
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

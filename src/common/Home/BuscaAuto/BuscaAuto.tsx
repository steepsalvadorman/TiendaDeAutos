import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import CamionetasSuv from "/icons/camionetas-suv.svg";
import HatchBack from "/icons/hatchback.svg";
import Vans from "/icons/vans.svg";
import StationWagon from "/icons/station-wagon.svg";
import Sedan from "/icons/sedan.svg";
import Deportivo from "/icons/deportivo.svg";
import PickUp from "/icons/pick-up.svg";
import Toyota from "/icons/toyota.svg";
import Bmw from "/icons/bmw.svg";
import Kia from "/icons/kia.svg";
import Hyundai from "/icons/hyundai.svg";
import Nissan from "/icons/nissan.svg";
import Volkswagen from "/icons/volkswagen.svg";
import Mazda from "/icons/mazda.svg";
import Subaru from "/icons/subaru.svg";
import Mercedes from "/icons/mercedes.svg";
import Ford from "/icons/ford.svg";
import Honda from "/icons/Honda.svg";
import Jeep from "/icons/Jeep.svg";
import Audi from "/icons/Audi.svg";
import Chevrolet from "/icons/Chevrolet.svg";
import Suzuki from "/icons/Suzuki.svg";
import "./BuscaAuto.css";

export const BuscaAuto = () => {
   const [showTipo, setShowTipo] = useState(true); 
   const [showMarca, setShowMarca] = useState(false); 

   const handleTipoClick = () => {
      setShowTipo(true);
      setShowMarca(false);
   };

   const handleMarcaClick = () => {
      setShowTipo(false);
      setShowMarca(true);
   };

   return (
      <section id="hero">
         <div className="container text-center">
            <h2 className="bauto text-center m-3">Busca autos por</h2>
            <div>
               <button type="button" className="btn btn-custom" onClick={handleTipoClick}>
                  TIPO VEHICULO
               </button>
               <button type="button" className="btn btn-custom" onClick={handleMarcaClick}>
                  MARCA
               </button>
            </div>

            {/* Sección para Tipo de Vehículo */}
            <CSSTransition
               in={showTipo}
               timeout={300}
               classNames="fade"
               unmountOnExit
            >
               <div className="d-flex justify-content-center flex-wrap">
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={CamionetasSuv} alt="Camionetas SUV" />
                     </a>
                     <p className="suv-text">suv</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={HatchBack} alt="HatchBack" />
                     </a>
                     <p className="suv-text">hatchback</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Vans} alt="Vans" />
                     </a>
                     <p className="suv-text">vans</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={StationWagon} alt="Station Wagon" />
                     </a>
                     <p className="suv-text">s.wagon</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Sedan} alt="Sedan" />
                     </a>
                     <p className="suv-text">sedan</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Deportivo} alt="Deportivo" />
                     </a>
                     <p className="suv-text">deportivo</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={PickUp} alt="Pick-Up" />
                     </a>
                     <p className="suv-text">pick-up</p>
                  </div>
               </div>
            </CSSTransition>

            {/* Sección para Marca */}
            <CSSTransition
               in={showMarca}
               timeout={300}
               classNames="fade"
               unmountOnExit
            >
               <div className="d-flex justify-content-center flex-wrap">
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Toyota} alt="Toyota" />
                     </a>
                     <p className="suv-text">Toyota</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Bmw} alt="Bmw" />
                     </a>
                     <p className="suv-text">Bmw</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Kia} alt="Kia" />
                     </a>
                     <p className="suv-text">Kia</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Hyundai} alt="Hyundai" />
                     </a>
                     <p className="suv-text">Hyundai</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Nissan} alt="Nissan" />
                     </a>
                     <p className="suv-text">Nissan</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Volkswagen} alt="Volkswagen" />
                     </a>
                     <p className="suv-text">Volkswagen</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Mazda} alt="Mazda" />
                     </a>
                     <p className="suv-text">Mazda</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Subaru} alt="Subaru" />
                     </a>
                     <p className="suv-text">Subaru</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Mercedes} alt="Mercedes" />
                     </a>
                     <p className="suv-text">Mercedes</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Ford} alt="Ford" />
                     </a>
                     <p className="suv-text">Ford</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Honda} alt="Honda" />
                     </a>
                     <p className="suv-text">Honda</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Jeep} alt="Jeep" />
                     </a>
                     <p className="suv-text">Jeep</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Audi} alt="Audi" />
                     </a>
                     <p className="suv-text">Audi</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Chevrolet} alt="Chevrolet" />
                     </a>
                     <p className="suv-text">Chevrolet</p>
                  </div>
                  <div className="icon-tipo">
                     <a href="" className="nav-icon">
                        <img src={Suzuki} alt="Suzuki" />
                     </a>
                     <p className="suv-text">Suzuki</p>
                  </div>
               </div>
            </CSSTransition>
         </div>
      </section>
   );
};

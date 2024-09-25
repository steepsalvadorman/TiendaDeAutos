import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VehicleSelector } from "../SeleccionarVehiculo/VehicleSelector";
import "./PricingCards.css";

interface Plan {
   title: string;
   price: string;
   features: string[];
   navigateTo: string;
}

interface Plans {
   [key: string]: Plan[];
}

const plans: Plans = {
   AUTO: [
      {
         title: "PUBLICA",
         price: "GRATIS",
         features: [
            "EXPOSICIÓN BAJA",
            "-",
            "Foto estándar en listado",
            "Vigencia 60 días",
            "-",
            "-",
            "-",
            "-",
            "-",
            "-",
         ],
         navigateTo: "/plan/gratis",
      },
      {
         title: "SIMPLE",
         price: "S/ 59",
         features: [
            "EXPOSICIÓN MEDIA",
            "-",
            "Foto estándar en listado",
            "Vigencia 60 días",
            "10 fotos en ficha",
            "Video de youtube",
            "-",
            "-",
            "-",
            "-",
         ],
         navigateTo: "/plan/simple",
      },
      {
         title: "DESTACADO",
         price: "S/ 99",
         features: [
            "EXPOSICIÓN ALTA",
            "Estudio de placa gratuito",
            "Foto grande en listado",
            "Vigencia 60 días",
            "15 Fotos en ficha",
            "Video de youtube",
            "Pasador de fotos",
            "-",
            "-",
            "-",
         ],
         navigateTo: "/plan/destacado",
      },
      {
         title: "PREMIUM",
         price: "S/ 129",
         features: [
            "EXPOSICIÓN MUY ALTA",
            "Estudio de placa gratuito",
            "Foto grande en listado",
            "Vigencia 75 días",
            "20 Fotos en ficha",
            "Video de youtube",
            "Pasador de fotos",
            "Destaque en portada",
            "Subtítulos en listado",
            "Etiquetas en resultados",
         ],
         navigateTo: "/plan/premium",
      },
   ],
   MOTO: [
      {
         title: "MOTO BÁSICO",
         price: "S/ 29",
         features: [
            "EXPOSICIÓN BAJA",
            "-",
            "Foto estándar en listado",
            "Vigencia 30 días",
            "5 fotos en ficha",
            "-",
            "-",
            "-",
            "-",
            "-",
         ],
         navigateTo: "/plan/moto-basico",
      },
      {
         title: "MOTO PREMIUM",
         price: "S/ 79",
         features: [
            "EXPOSICIÓN ALTA",
            "Estudio de placa gratuito",
            "Foto grande en listado",
            "Vigencia 60 días",
            "10 Fotos en ficha",
            "Video de youtube",
            "-",
            "-",
            "-",
            "-",
         ],
         navigateTo: "/plan/moto-premium",
      },
   ],
   "BUS/CAMIÓN": [
      {
         title: "CAMIÓN BÁSICO",
         price: "S/ 49",
         features: [
            "EXPOSICIÓN MEDIA",
            "-",
            "Foto estándar en listado",
            "Vigencia 45 días",
            "8 fotos en ficha",
            "Video de youtube",
            "-",
            "-",
            "-",
            "-",
         ],
         navigateTo: "/plan/camion-basico",
      },
      {
         title: "CAMIÓN PREMIUM",
         price: "S/ 99",
         features: [
            "EXPOSICIÓN MUY ALTA",
            "Estudio de placa gratuito",
            "Foto grande en listado",
            "Vigencia 75 días",
            "15 Fotos en ficha",
            "Video de youtube",
            "Pasador de fotos",
            "Destaque en portada",
            "-",
            "-",
         ],
         navigateTo: "/plan/camion-premium",
      },
   ],
};

export const PricingCards: React.FC = () => {
   const navigate = useNavigate();
   const [selectedVehicle, setSelectedVehicle] = useState<string>("AUTO");

   const handleVehicleSelect = (vehicle: string) => {
      setSelectedVehicle(vehicle);
   };

   const selectedPlans = plans[selectedVehicle];

   return (
      <section>
         <VehicleSelector onVehicleSelect={handleVehicleSelect} />
         <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-3">
               {selectedPlans.map((plan, index) => (
                  <div className="col" key={index}>
                     <div className="card h-100">
                        <div className="card-body">
                           <h5 className="card-title text-center text-secondary fw-semibold">
                              {plan.title}
                           </h5>
                           <h2 className="card-subtitle text-center fst-italic fw-bold text-warning">
                              {plan.price}
                           </h2>
                           <button
                              className="btn text-white w-100 mt-5"
                              style={{ backgroundColor: "#fa9300" }}
                              type="button"
                              onClick={() => navigate(plan.navigateTo)}
                           >
                              SELECCIONAR
                           </button>
                        </div>
                        {plan.features.map((feature, i) => (
                           <p className="card-text text-center" key={i}>
                              {feature}
                           </p>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <br />
      </section>
   );
};

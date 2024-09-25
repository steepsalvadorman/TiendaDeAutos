import { useState } from "react";
import "./VehicleSelector.css";

interface VehicleSelectorProps {
   onVehicleSelect: (vehicle: string) => void;
}

export const VehicleSelector: React.FC<VehicleSelectorProps> = ({
   onVehicleSelect,
}) => {
   const [selectedVehicle, setSelectedVehicle] = useState<string>("AUTO");

   const handleVehicleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedValue = event.target.value;
      setSelectedVehicle(selectedValue);
      onVehicleSelect(selectedValue); // Notificar al componente padre
   };
   
   return (
      <section>
         <div className="rectangulo-fondo p-1">
            <h5 className="text-start text-white mt-3 container">
               Elige el tipo de vehículo
            </h5>
            <div className="d-grid gap-2 d-md-block container">
               <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group"
               >
                  <input
                     type="radio"
                     className="btn-check"
                     name="btnradio"
                     id="btnradio1"
                     value="AUTO"
                     autoComplete="off"
                     checked={selectedVehicle === "AUTO"}
                     onChange={handleVehicleChange}
                  />
                  <label
                     className="btn btn-outline-warning text-white border-white me-4"
                     htmlFor="btnradio1"
                  >
                     <img
                        className="me-4"
                        src="/src/assets/icons/coche.svg"
                        alt="AUTO"
                     />
                     AUTO
                  </label>

                  <input
                     type="radio"
                     className="btn-check"
                     name="btnradio"
                     id="btnradio2"
                     value="MOTO"
                     autoComplete="off"
                     checked={selectedVehicle === "MOTO"}
                     onChange={handleVehicleChange}
                  />
                  <label
                     className="btn btn-outline-warning text-white border-white me-4"
                     htmlFor="btnradio2"
                  >
                     <img
                        className="me-4"
                        src="/src/assets/icons/moto.svg"
                        alt="MOTO"
                     />
                     MOTO
                  </label>

                  <input
                     type="radio"
                     className="btn-check"
                     name="btnradio"
                     id="btnradio3"
                     value="BUS/CAMIÓN"
                     autoComplete="off"
                     checked={selectedVehicle === "BUS/CAMIÓN"}
                     onChange={handleVehicleChange}
                  />
                  <label
                     className="btn btn-outline-warning text-white border-white me-4"
                     htmlFor="btnradio3"
                  >
                     <img
                        className="me-4"
                        src="/src/assets/icons/camion.svg"
                        alt="BUS/CAMIÓN"
                     />
                     BUS/CAMIÓN
                  </label>
               </div>
            </div>
         </div>
         <br />
         <br />
         <br />
      </section>
   );
};

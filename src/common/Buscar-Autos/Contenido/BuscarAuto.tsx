import "./BuscarAuto.css";
import { Busqueda } from "./Busqueda/Busqueda";
import { Contacto } from "./Contacto/Contacto";
import { FooterComponente } from "./FooterComponente/FooterComponente";
import { FooterLinks } from "./FooterComponente/FooterLinks/FooterLinks";
import { MarcaPreferida } from "./MarcaPreferida/MarcaPreferida";
import { ModeloPreferido } from "./ModeloPreferido/ModeloPreferido";
import { TarifadorVehiculo } from "./TarifadorVehiculo/TarifadorVehiculo";
import { TiendasVehiculo } from "./TiendasVehiculo/TiendasVehiculo";
import { UltimosVehiculos } from "./UltimosVehiculos/UltimosVehiculos";

export const BuscarAuto = () => {
   return (
      <>
         <main className="w980">
            <div className="port-wrap-main">
               <div className="col1 fl-lf">
                  <Busqueda />
                  <MarcaPreferida />
                  <ModeloPreferido />
                  <UltimosVehiculos />
                  <Contacto />
               </div>
               <aside className="col2 fl-rt">
                  <TiendasVehiculo />
                  <TarifadorVehiculo />
               </aside>
            </div>
         </main>
         <FooterComponente />
         <FooterLinks />
      </>
   );
};

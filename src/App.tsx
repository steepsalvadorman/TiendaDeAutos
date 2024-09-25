import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { HomePage } from "./pages/HomePage/HomePage";
import { VentaAutosPage } from "./pages/VendeVehiculoPage/VentaAutosPage";
import { BuscarAutosPage } from "./pages/BuscarAutosPage/BuscarAutosPage";
import { PreguntasPage } from "./pages/PreguntasPage/PreguntasPage";
import { CompradorPage } from "./pages/PreguntasPage/CompradorPage";
import {
   VendedorPage,
   SubirFotosPage,
   EditarPage,
   PubliquePage,
} from "./pages/PreguntasPage/VendedorPage";
import { MediosPage } from "./pages/PreguntasPage/MediosPage";
import {
   CuentasPage,
   PrivacidadMenuPage,
} from "./pages/PreguntasPage/CuentasPage";
import {
   AliadosPage,
   CookiePage,
   FinanciamientoPage,
   PoliticasPage,
   TerminosCondicionesPage,
} from "./pages/TerminosCondicionesPage/TerminosCondicionesPage";
import { FacturaMenuPage } from "./pages/PreguntasPage/FacturaMenuPage";
import { RecomendacionesPage } from "./pages/PreguntasPage/RecomendacionesPage";
import { PublicarVehiculoPage } from "./pages/PreguntasPage/PublicarVehiculo";
import { BuscarMotosPage } from "./pages/BuscarMotosPage/BuscarMotosPage";
import { PrivacidadPage } from "./pages/TerminosCondicionesPage/TerminosCondicionesPage";
import { TransferenciaPage } from "./pages/TransferenciaPage/TransferenciaPage";
import { BuscarCamionesPage } from "./pages/BuscarCamionesPage/BuscarCamionesPage";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {PerfilPage} from './pages/BuscarPerfilPage/BuscarPerfilPage';
import { VentaPlanesPage } from "./pages/VentaPlanesPage/VentaPlanesPage";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/perfil" element={<PerfilPage />} />
            <Route path="/vender" element={<VentaAutosPage />} />
            <Route path="/autos" element={<BuscarAutosPage />} />
            <Route path="/preguntas" element={<PreguntasPage />} />
            <Route path="/comprador" element={<CompradorPage />} />
            <Route path="/vendedor" element={<VendedorPage />} />
            <Route path="/medios" element={<MediosPage />} />
            <Route path="/cuentas" element={<CuentasPage />} />
            <Route path="/aliados" element={<AliadosPage />} />
            <Route path="/privacidad_menu" element={<PrivacidadMenuPage />} />
            <Route path="/financiamiento" element={<FinanciamientoPage />} />
            <Route path="/factura_menu" element={<FacturaMenuPage />} />
            <Route path="/recomendaciones" element={<RecomendacionesPage />} />
            <Route
               path="/terminos_condiciones"
               element={<TerminosCondicionesPage />}
            />
            <Route path="/politicas" element={<PoliticasPage />} />
            <Route
               path="/publicar_vehiculo"
               element={<PublicarVehiculoPage />}
            />
            <Route path="/subir_fotos" element={<SubirFotosPage />} />
            <Route path="/editar" element={<EditarPage />} />
            <Route path="/publique" element={<PubliquePage />} />
            <Route path="/motos" element={<BuscarMotosPage />} />
            <Route path="/privacidad" element={<PrivacidadPage />} />
            <Route path="/cookie" element={<CookiePage />} />
            <Route path="/transferencia" element={<TransferenciaPage />} />
            <Route path="/camiones" element={<BuscarCamionesPage />} />
            <Route path="/perfil" element={<PerfilPage />} />
            <Route path="/plan/:tipo" element={<VentaPlanesPage />} />
         </Routes>
      </Router>
   );
}

export default App;

import { Footer } from "../../common/Preguntas/Footer/Footer";
import { Header } from "../../common/Preguntas/Header/Header";
import { Aliados } from "../../common/Terminos-Condiciones/Aliados";
import { Cookie } from "../../common/Terminos-Condiciones/Cookie";
import { Financiamiento } from "../../common/Terminos-Condiciones/Financiamiento";
import { Politicas } from "../../common/Terminos-Condiciones/Politicas";
import { Privacidad } from "../../common/Terminos-Condiciones/Privacidad";
import { TerminosCondiciones } from "../../common/Terminos-Condiciones/TerminosCondiciones";

export const AliadosPage = () => {
  return (
    <>
      <Header />
      <Aliados />
      <Footer />
    </>
  );
};
export const FinanciamientoPage = () => {
  return (
    <>
      <Header />
      <Financiamiento />
      <Footer />
    </>
  );
};
export const TerminosCondicionesPage = () => {
  return (
    <>
      <Header />
      <TerminosCondiciones />
      <Footer />
    </>
  );
};
export const PoliticasPage = () => {
  return (
    <>
      <Header />
      <Politicas />
      <Footer />
    </>
  );
};
export const PrivacidadPage = () => {
  return (
    <>
      <Header />
      <Privacidad />
      <Footer />
    </>
  );
};
export const CookiePage = () => {
  return (
    <>
      <Header />
      <Cookie />
      <Footer />
    </>
  );
};

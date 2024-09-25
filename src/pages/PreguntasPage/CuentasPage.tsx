import { Cuentas, PrivacidadMenu } from "../../common/Preguntas/Content/Cuentas";
import { Footer } from "../../common/Preguntas/Footer/Footer";
import { Header } from "../../common/Preguntas/Header/Header";

export const CuentasPage = () => {
  return (
    <>
      <Header />
      <Cuentas />
      <Footer />
    </>
  );
};

export const PrivacidadMenuPage = () => {
  return (
    <>
      <Header />
      <PrivacidadMenu />
      <Footer />
    </>
  );
}
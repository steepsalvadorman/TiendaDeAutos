import { Editar } from "../../common/Preguntas/Content/Editar";
import { SubirFotos } from "../../common/Preguntas/Content/SubirFotos";
import { Publique, Vendedor } from "../../common/Preguntas/Content/Vendedor";
import { Footer } from "../../common/Preguntas/Footer/Footer";
import { Header } from "../../common/Preguntas/Header/Header";
export const VendedorPage = () => {
  return (
    <>
      <Header />
      <Vendedor />
      <Footer />
    </>
  );
};
export const SubirFotosPage = () => {
  return (
    <>
      <Header />
      <SubirFotos />
      <Footer />
    </>
  );
};
export const EditarPage = () =>{
   return(
      <>
      <Header />
      <Editar />
      <Footer />
      </>
   )
}
export const PubliquePage = () =>{
   return(
      <>
      <Header />
      <Publique />
      <Footer />
      </>
   )
}
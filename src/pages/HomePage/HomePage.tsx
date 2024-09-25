import { BuscaAuto } from "../../common/Home/BuscaAuto/BuscaAuto";
import { CompraVenta } from "../../common/Home/Busqueda/CompraVenta";
import { Carousel } from "../../common/Home/Carousel/Carousel";
import { ComprasTarjeta } from "../../common/Home/ComprasTarjeta/ComprasTarjeta";
import { AvisosMotos } from "../../common/Home/Destacados/AvisosMotos";
import { CamionesDestacados } from "../../common/Home/Destacados/CamionesDestacados";
import { UltimasNoticias } from "../../common/Home/Destacados/Ultimas_Noticias";
import { VistasDestacadas } from "../../common/Home/Destacados/VistasDestacadas";
import { Footer } from "../../common/Home/Footer/Footer";
import { MainHeader } from "../../common/Home/header/MainHeader";
import { Login } from "../../common/Home/Login/Login";
import { Register } from "../../common/Home/Register/Register";

export const HomePage = () => {
   return (
      <>
         <MainHeader />
         <Login/>
         <Register />
         <Carousel />
         <CompraVenta />
         <BuscaAuto />
         <VistasDestacadas />
         <AvisosMotos />
         <CamionesDestacados />
         <UltimasNoticias />
         <ComprasTarjeta />
         <Footer />
      </>
   );
};

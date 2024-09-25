import { MainHeader } from "../../common/Home/header/MainHeader";
import { BannerSection } from "../../common/VentaVehiculo/Banner/BannerSection";
import { ImagesFooter } from "../../common/VentaVehiculo/ComprasTarjeta/ComprasTarjeta";
import { Footer } from "../../common/VentaVehiculo/Footer/Footer";

export const VentaPlanesPage = () => {

    return (
       <>
          <MainHeader />
          <BannerSection />
          <body className="bg-background">
             <ImagesFooter />
             
          </body>
          <Footer />
       </>
    );
};

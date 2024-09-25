import { MainHeader } from "../../common/Home/header/MainHeader";
import { BannerSection } from "../../common/VentaVehiculo/Banner/BannerSection";
import { ImagesFooter } from "../../common/VentaVehiculo/ComprasTarjeta/ComprasTarjeta";
import { Footer } from "../../common/VentaVehiculo/Footer/Footer";
import { LinkWithImage } from "../../common/VentaVehiculo/Oferta/Oferta";
import { PricingCards } from "../../common/VentaVehiculo/PricingCards/PricingCards";
import "./VentaAutosPage.css";

export const VentaAutosPage = () => {
   return (
      <>
         <MainHeader />
         <BannerSection />
         <body className="bg-background">
            <PricingCards />
            <br />
            <LinkWithImage />
            <br />
            <ImagesFooter />
         </body>
         <Footer />
      </>
   );
};

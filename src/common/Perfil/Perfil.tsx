import { FooterComponente } from "../Buscar-Autos/Contenido/FooterComponente/FooterComponente";
import { FooterLinks } from "../Buscar-Autos/Contenido/FooterComponente/FooterLinks/FooterLinks";
import { PerfilComponent } from "../Home/Perfil/Perfil";
import { Header } from "../Buscar-Autos/Header/Header";

export const Perfil = () => {
   return (
      <>
         <Header />
         <PerfilComponent />
         <FooterComponente />
         <FooterLinks />
      </>
   );
};

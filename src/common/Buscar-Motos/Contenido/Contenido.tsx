import { Categorias } from "../ContenidoCategorias/Categorias";
import { Resultados } from "../ContenidoResultados/Resultados";
import { Footer } from "../Footer/Footer";

export const Contenido = () => {
   return (
      <>
         <div className="container">
            <div className="row">
               <div className="col-md-4">
                  <Categorias />
               </div>
               <div className="col-md-8">
                  <Resultados />
               </div>
            </div>
         </div>
         <footer className="bg-black">
            <Footer />
            
         </footer>
      </>
   );
};

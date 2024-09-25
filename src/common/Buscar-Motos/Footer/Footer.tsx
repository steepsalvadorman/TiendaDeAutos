import { ComprasTarjeta } from "../../Home/ComprasTarjeta/ComprasTarjeta";
import "./Footer.css";

export const Footer = () => {
   return (
      <>
         <footer className="s-footer">
            <div className="columna">
               <img
                  src="/images/Moto/Footer/1.png"
                  className="icon"
               ></img>
               <p className="tituloFooterMotos">Acerca De TUAUTOpe</p>
               <p className="txtBlancoMotos">Mapa De Sitio</p>
               <p className="txtBlancoMotos">Terminos Y Condiciones</p>
               <p className="txtBlancoMotos">Politicas De Publicación</p>
               <p className="txtBlancoMotos">Politicas De Privacidad</p>
            </div>

            <div className="columna">
               <p className="tituloFooterMotos">Marcas</p>
               <p className="txtGrisMotos">Toyota</p>
               <p className="txtGrisMotos">Nissan</p>
               <p className="txtGrisMotos">Kia</p>
               <p className="txtGrisMotos">Hyundai</p>
               <p className="txtGrisMotos">Mazda</p>
               <p className="txtGrisMotos">Bmw</p>
               <p className="txtGrisMotos">Volkswagen</p>
               <p className="txtBlancoMotos">Ver Todos</p>
            </div>

            <div className="columna">
               <p className="tituloFooterMotos">Modelos</p>
               <p className="txtGrisMotos">Sportage</p>
               <p className="txtGrisMotos">Rav4</p>
               <p className="txtGrisMotos">X-Trail</p>
               <p className="txtGrisMotos">3</p>
               <p className="txtGrisMotos">Tucson</p>
               <p className="txtGrisMotos">Cr-V</p>
               <p className="txtGrisMotos">Cx-5</p>
               <p className="txtBlancoMotos">Ver Todos</p>
            </div>

            <div className="columna">
               <p className="tituloFooterRedes">CENTRAL DE AYUDA</p>
               <p className="txtBlancoMotos">Preguntas Frecuentes</p>
               <p className="txtBlancoMotos">Ayuda en Linea</p>
               <div className="iconoHorizontal">
                  <img src="/images/Moto/Footer/youtube.png"></img>
                  <img src="/images/Moto/Footer/twitter.png"></img>
                  <img src="/images/Moto/Footer/facebook.png"></img>
               </div>
            </div>
         </footer>
         <ComprasTarjeta />
         <div className="clearfix">
            <div className="divIzquierda">
               <p className="txtBlancoMotosTitulo">© 2023 TUAUTOpe</p>
            </div>
            <div className="divDerecha">
               <p className="txtBlancoMotos">Politica De Cookies |</p>
               <p className="txtBlancoMotos">Términos De Uso |</p>
               <p className="txtBlancoMotos">Politica De Privacidad |</p>
               <img
                  src="/images/Moto/Footer/librodereclamaciones.png"
                  alt="Libro de Reclamaciones"
                  className="imgLibroReclamacionesDerecha"
               />
            </div>
         </div>
      </>
   );
};

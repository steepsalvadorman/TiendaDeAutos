import { Footer } from "./Footer/Footer";
import "./FooterComponente.css";

export const FooterComponente = () => {
  return (
    <div className="footer bg-dark text-white pt-4 mt-5">
      <div className="container w980">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <h2 className="h5 border-bottom pb-2">MARCAS PREFERIDAS</h2>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="TOYOTA(753)"
                >
                  Toyota
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="NISSAN(649)"
                >
                  Nissan
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="KIA(543)"
                >
                  Kia
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="MAZDA(536)"
                >
                  Mazda
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="HYUNDAI(529)"
                >
                  Hyundai
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="VOLKSWAGEN(495)"
                >
                  Volkswagen
                </a>
              </li>
            </ul>
            <a className="text-white d-block mt-2" href="#" title="Más Marcas">
              Ver todos »
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h2 className="h5 border-bottom pb-2">MODELOS PREFERIDOS</h2>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="SPORTAGE (141)"
                >
                  Kia Sportage
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="X-TRAIL (140)"
                >
                  Nissan X-trail
                </a>
              </li>
              <li>
                <a className="text-white d-block py-1" href="#" title="3 (140)">
                  Mazda 3
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="RAV4 (138)"
                >
                  Toyota Rav4
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="TUCSON (132)"
                >
                  Hyundai Tucson
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="CX-5 (120)"
                >
                  Mazda Cx-5
                </a>
              </li>
            </ul>
            <a className="text-white d-block mt-2" href="#" title="Más Avisos">
              Ver todos »
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h2 className="h5 border-bottom pb-2">AVISOS RECIENTES</h2>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="Camionetas Suv HYUNDAI i20 ACTIVE a 13000 del2017"
                >
                  Hyundai I20 active
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="Camionetas Suv HONDA CR-V a 28000 del2018"
                >
                  Honda Cr-v
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="Pick Up RENAULT OROCH a 14500 del2020"
                >
                  Renault Oroch
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="Camion FREIGHTLINER M2 106 a 35500 del2013"
                >
                  Freightliner M2 106
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="Camionetas Suv HONDA PILOT a 27500 del2016"
                >
                  Honda Pilot
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  href="#"
                  title="Sedan VOLKSWAGEN BORA a 8500 del2009"
                >
                  Volkswagen Bora
                </a>
              </li>
            </ul>
            <a className="text-white d-block mt-2" href="#" title="Más Avisos">
              Ver todos »
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h2 className="h5 border-bottom pb-2">CENTRAL DE AYUDA</h2>
            <p className="large">
              ¿Tienes alguna duda o consulta? Estamos para ayudarte.
            </p>
            <ul className="list-unstyled">
              <li>
                <a
                  className="text-white d-block py-1"
                  target="_blank"
                  href="/preguntas"
                >
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a
                  className="text-white d-block py-1"
                  target="_blank"
                  href="/ayuda"
                >
                  Ayuda en Línea
                </a>
              </li>
            </ul>

            <div className="text-center imagenAyuda">
              <img
                src="https://cds.neoauto.pe/neoauto2/img/CentralVentasAyuda.jpg?20230516121747"
                alt="Central de Ayuda"
              />
            </div>
            <button
              className="btn btn-primary btn-sm mb-3 botonAyuda"
              onClick={() => window.open("/preguntas")}
            >
              Clic Aquí
            </button>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
};

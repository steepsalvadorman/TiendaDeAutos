import "./Transferencia.css";
export const TransferenciaContacto = () => {
  return (
    <section className="slider-home">
      <div className="container">
        <div className="slider-content">
          <h1>
            Inicia la transferencia vehicular desde la comodidad de tu casa con
            solo un clics
          </h1>
          <div className="slider-desde" style={{ paddingTop: 10 }}>
            Fácil, rápido y seguro.
          </div>
          <div className="logo-ibr">
            <img
              className="img-logo-ibr"
              src="https://neoauto.com/promocion/assets_neo/transfer/img/logo-ibr.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export const TransferenciaContactoForm = () => {
  return (
    <div className="form-flot">
      <div className="container slider-form">
        <div className="form-neoauto" id="formulario">
          <h2 className="form-title">¡Solicítalo Aquí!</h2>
          <form
            action="https://neoauto.com/promocion/transfiere-tu-auto"
            method="post"
            id="contactForm"
            className="form-header"
            role="form"
          >
            <div className="form-container">
              <div
                className="alert alert-danger"
                style={{ padding: 5, marginLeft: 0, display: "none" }}
                id="msgError"
              >
                Ha ocurrido un error
              </div>
              <div className="form-row">
                <div
                  className="form-group col-md-6  col-xs-6"
                  style={{ padding: 0 }}
                >
                  <select
                    className="form-select"
                    id="tipo_documento"
                    name="tipo_documento"
                  >
                    <option value="">Tipo de doc.</option>
                    <option value={1}>DNI</option>
                    <option value={2}>CE</option>
                    <option value={3}>Pasaporte</option>
                  </select>
                </div>
                <div
                  className="form-group col-md-6 col-xs-6"
                  style={{ paddingRight: 0 }}
                >
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Nº de doc."
                    name="nro_documento"
                    id="nro_documento"
                  />{" "}
                </div>
              </div>
              <div className="form-row">
                <div
                  className="form-group  col-md-12  col-xs-12"
                  style={{ padding: 0 }}
                >
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Nombres y apellidos"
                    id="nombres"
                    name="nombres"
                  />
                </div>
              </div>
              <div className="form-row">
                <div
                  className="form-group  col-md-12  col-xs-12"
                  style={{ padding: 0 }}
                >
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Correo electrónico"
                    id="correo"
                    name="correo"
                  />
                </div>
              </div>
              <div className="form-row">
                <div
                  className="form-group  col-md-12  col-xs-12"
                  style={{ padding: 0 }}
                >
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Celular"
                    id="celular"
                    name="celular"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-col-full form-check">
                  <input type="checkbox" id="terminos" name="terminos" />
                  <div className="form-terminos space-pleft-x1">
                    Acepto los{" "}
                    <a
                      className="link-form"
                      href="https://centraldeayuda.neoauto.com/hc/es/articles/214974063"
                      target="_blank"
                    >
                      Términos y Condiciones
                    </a>{" "}
                    de NeoAuto
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-col-full form-check">
                  <input type="checkbox" id="politica" name="politica" />
                  <div className="form-politicas space-pleft-x1">
                    Acepto las{" "}
                    <a
                      className="link-form"
                      href="https://centraldeayuda.neoauto.com/hc/es/articles/214974083"
                      target="_blank"
                    >
                      Políticas de Privacidad
                    </a>
                    de NeoAuto
                  </div>
                </div>
              </div>
              <button
                className="btn btn-primary"
                id="btn-contactar"
                type="submit"
              >
                Cotizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export const TransferenciaContent = () => {
  return (
    <section className="icons">
      <div className="container">
        <div className="row">
          <div className="col-4 text-center">
            <div className="ico-landing">
              <img
                className="ico-facil"
                src="https://neoauto.com/promocion/assets_neo/transfer/img/ico-facil.svg"
              />
            </div>
            <h3>Fácil</h3>
            <div className="text-icons">
              Podrás realizar tu trámite en el lugar que prefieras.
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="ico-landing">
              <img
                className="ico-rapido"
                src="https://neoauto.com/promocion/assets_neo/transfer/img/ico-rapido.svg"
              />
            </div>
            <h3>Rápido</h3>
            <div className="text-icons">
              Realizamos tu trámite en el menor tiempo posible.
            </div>
          </div>
          <div className="col-4 text-center">
            <div className="ico-landing">
              <img
                className="ico-seguro"
                src="https://neoauto.com/promocion/assets_neo/transfer/img/ico-seguro.svg"
              />
            </div>
            <h3>Seguro</h3>
            <div className="text-icons">
              Por solida alianza entre TUAUTOpe y IBR.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const TransferenciaContent2 = () => {
  return (
    <section className="content-producto space-mtop space-mbottom">
      <div className="container">
        <div className="descr-producto">
          <h2>¿Qué es TUAUTOpe Transfiere?</h2>
          <div className="text-producto space-ptop-x1">
            Es un servicio de transferencia vehicular donde nos encargamos de
            realizar los trámites para que el proceso de compra o venta de un
            vehículo se realice en el menor tiempo posible.
          </div>
        </div>
      </div>
    </section>
  );
};
export const TransferenciaContent3 = () => {
  return (
    <section className="pasos space-mtop space-mbottom">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              className="w-100"
              src="/src/assets/images/pasos-transferencia-vehicular.webp"
            />
          </div>
          <div className="col-6 space-pleft-x2 space-ptop-x2">
            <h2>¿Cómo funciona?</h2>
            <div className="space-ptop-x1 space-pbottom-x1">
              ¡Nosotros trabajamos por ti!
            </div>
            <div className="point-pasos">
              <div className="number">1</div>
              <div className="text-pasos">Solicita el servicio online.</div>
            </div>
            <div className="point-pasos">
              <div className="number">2</div>
              <div className="text-pasos">
                Te llamamos para brindarte información aclarando dudas del
                proceso de transferencia vehícular.
              </div>
            </div>
            <div className="point-pasos">
              <div className="number">3</div>
              <div className="text-pasos">
                Te brindamos asesoria especializada, gestionamos el proceso
                notarial y registral de vehículo.
              </div>
            </div>
            <div className="point-pasos">
              <div className="number">4</div>
              <div className="text-pasos">
                Realizamos un estudio del vehículo y trámite municipal (cambio
                de contribuyente SAT Lima).{" "}
                <span className="text-naranja">(opcional)</span>
              </div>
            </div>
            <div className="point-pasos">
              <div className="number">5</div>
              <div className="text-pasos">
                En menos de 24 horas iniciamos el proceso de transferencia del
                vehículo (sólo Lima, Callao, Trujillo y Arequipa).
              </div>
            </div>
            <div className="legal-pasos text-naranja">
              Ambas partes (comprador-vendedor) deberán encontrarse en la misma
              provincia para poder llevar a cabo el trámite.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const TransferenciaContent4 = () => {
  return (
    <section className="beneficios space-mtop space-mbottom">
      <div className="container">
        <div className="row row-beneficios">
          <div className="col-6 space-pright-x2 space-ptop-x2">
            <h2>Beneficios</h2>
            <ul>
              <li>Realizamos el trámite en el menor tiempo posible.</li>
              <li>Podrás realizar tu trámite en el lugar que prefieras.</li>
              <li>Confianza por sólida alianza entre TUAUTOpe y IBR.</li>
            </ul>
            <h3 className="space-ptop-x1">Beneficios para el comprador</h3>
            <ul>
              <li>
                Contamos con precios competitivos con respecto al mercado.
              </li>
              <li>
                Te brindaremos visibilidad del estado de tu trámite por correo
                electrónico.
              </li>
              <li>
                Si el carro tiene algún tipo de gravamen o multas, ayudamos al
                vendedor a que lo pueda subsanar.
              </li>
            </ul>
          </div>
          <div className="col-6">
            <img className="w-100" src="/src/assets/images/beneficios.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};
export const TransferenciaFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row content-footer">
          <div className="col-8 des-text-right foot-botones">
            <a href="/">
                <img src="/src/assets/images/Logo1.webp" alt="Logo" />
            </a>
            <a
              href="{{route('Cokkie')}}"
              target="_blank"
              title="Política De cookies"
              rel="noreferrer"
            >
              Política de cookies
            </a>
            <abbr className="separador">|</abbr>
            <a
              href="{{route('Terminos_condiciones')}}"
              target="_blank"
              title="Términos De uso"
              rel="noreferrer"
            >
              Términos de uso
            </a>
            <abbr className="separador">|</abbr>
            <a
              href="{{route('Privacidad')}}"
              target="_blank"
              title="Políticas De privacidad"
              rel="noreferrer"
            >
              Políticas de privacidad
            </a>
            <abbr className="separador">|</abbr>
            <a
              href="{{route('Reclamo')}}"
              target="_blank"
              title="Libro de Reclamaciones"
              rel="noreferrer"
            >
              <img
                className="libro-reclamaciones"
                src="/src/assets/images/rclamaciones.webp"
                alt="Libro de Reclamaciones"
                title="Libro de Reclamaciones"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Financiamiento = () => {
  return (
    <main role="main">
      <div className="container-divider" />
      <div className="container">
        <nav className="sub-nav">
          <ol className="breadcrumbs">
            <li title="Central de Ayuda">
              <a href="preguntas">Central de Ayuda</a>
            </li>
            <li title="Cuentas, privacidad y términos de uso">
              <a href="cuentas">
                Cuentas, privacidad y términos de uso
              </a>
            </li>
            <li title="Cuentas, privacidad y términos de uso">
              <a href="privacidadmenu">
                Cuentas, privacidad y términos de uso
              </a>
            </li>
          </ol>
          <div className="search-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              focusable="false"
              viewBox="0 0 12 12"
              className="search-icon"
            >
              <circle
                cx="4.5"
                cy="4.5"
                r={4}
                fill="none"
                stroke="currentColor"
              />
              <path
                stroke="currentColor"
                strokeLinecap="round"
                d="M11 11L7.5 7.5"
              />
            </svg>
            <form
              role="search"
              className="search"
              data-search=""
              action="/hc/es/search"
              acceptCharset="UTF-8"
              method="get"
            >
              <input
                name="utf8"
                type="hidden"
                defaultValue="✓"
                autoComplete="off"
              />
              <input
                type="hidden"
                name="category"
                id="category"
                defaultValue={201819743}
                autoComplete="off"
              />
              <input
                type="search"
                name="query"
                id="query"
                placeholder="Buscar"
                aria-label="Buscar"
              />
            </form>
          </div>
        </nav>
        <div className="article-container" id="article-container">
          <aside
            className="article-sidebar"
            aria-labelledby="section-articles-title"
          >
            <div className="collapsible-sidebar">
              <button
                type="button"
                className="collapsible-sidebar-toggle"
                aria-labelledby="section-articles-title"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  focusable="false"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                  className="collapsible-sidebar-toggle-icon chevron-icon"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    d="M3 4.5l2.6 2.6c.2.2.5.2.7 0L9 4.5"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  focusable="false"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                  className="collapsible-sidebar-toggle-icon x-icon"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    d="M3 9l6-6m0 6L3 3"
                  />
                </svg>
              </button>
              <span
                id="section-articles-title"
                className="collapsible-sidebar-title sidenav-title"
              >
                Artículos en esta sección
              </span>
              <div className="collapsible-sidebar-body">
                <ul>
                  <li>
                    <a href="aliados" className="sidenav-item">
                      Aliados comerciales de Tuautope SAC
                    </a>
                  </li>
                  <li>
                    <a
                      href="financiamiento"
                      className="sidenav-item current-article"
                    >
                      Financiamiento Santander Consumer
                    </a>
                  </li>
                  <li>
                    <a
                      href="consentimiento"
                      className="sidenav-item"
                    >
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li>
                    <a href="cokkie" className="sidenav-item ">
                      POLÍTICA DE COKKIE DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a href="privacidad" className="sidenav-item ">
                      POLÍTICA DE PRIVACIDAD DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a href="politicas" className="sidenav-item">
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a
                      href="terminos_condiciones"
                      className="sidenav-item "
                    >
                      {" "}
                      Condiciones Generales de Uso
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <article id="main-content" className="article">
            <header className="article-header">
              <h1
                title="Financiamiento Santander Consumer"
                className="article-title"
              >
                Financiamiento Santander Consumer
              </h1>
              <div className="article-author">
                <div className="avatar article-avatar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    focusable="false"
                    viewBox="0 0 12 12"
                    className="icon-agent"
                  >
                    <path
                      fill="currentColor"
                      d="M6 0C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm2.3 7H3.7c-.3 0-.4-.3-.3-.5C3.9 7.6 4.9 7 6 7s2.1.6 2.6 1.5c.1.2 0 .5-.3.5z"
                    />
                  </svg>
                  <img
                    src="https://centraldeayuda.neoauto.com/system/photos/38950358/Neoauto.png"
                    alt=""
                    className="user-avatar"
                  />
                </div>
                <div className="article-meta">
                  TUAUTOpe
                  <ul className="meta-group">
                    <li className="meta-data">
                      <time
                        dateTime="2022-03-04T20:38:49Z"
                        title="2022-03-04 15:38"
                        data-datetime="relative"
                      >
                        hace 1 año
                      </time>
                    </li>
                    <li className="meta-data">Actualización</li>
                  </ul>
                </div>
              </div>
            </header>
            <section className="article-info">
              <div className="article-content">
                <div className="article-body">
                  <p>
                    <strong>
                      <u>
                        Financiamiento Santander Consumer: Condiciones generales
                        y ejemplo explicativo referencial.
                      </u>
                    </strong>
                  </p>
                  <p>
                    Cuotas y TEA referenciales. Sujeto a evaluación crediticia y
                    envío de información requerida por Santander Consumer.
                  </p>
                  <p>
                    Firma electrónica y sin papeleos solo aplica para
                    financiamiento de Libre disponibilidad con un monto pre
                    aprobado máximo hasta S/40,000. La fecha de desembolso está
                    sujeta a la validación de datos y documentos del cliente, de
                    ser necesario.
                  </p>
                  <p>
                    Si el monto a financiar es mayor aplicará a un Crédito
                    Vehicular, con tiempo de atención estimado promedio de cinco
                    días, dependiendo del oportuno envío de documentos y
                    validación de gravámenes de la unidad y otros relacionados.
                  </p>
                  <p>
                    &nbsp;
                    <strong>
                      <u>Ejemplo Libre disponibilidad</u>
                    </strong>
                    : TCEA 31.79% máxima referencial calculada considerando: TEA
                    máxima de 30.00%, en moneda nacional, para un préstamo de S/
                    14,200, a 35 meses y seguro de desgravamen mensual
                    referencial de 0.127% sobre el saldo capital. Cuota mensual
                    de ejemplo: S/ 597.81.
                    <strong>
                      {" "}
                      La cuota ha sido calculada considerando 23 días calendario
                      desde la fecha de desembolso y la fecha de pago de la
                      primera cuota
                    </strong>{" "}
                    <strong>
                      <u>Ejemplo Crédito Vehicular</u>
                    </strong>
                    : TCEA 32.29% referencial calculada considerando: TEA
                    referencial de 18.99%, en moneda nacional para el
                    financiamiento referencial de una unidad de S/ 50,511 a 60
                    cuotas, cuota inicial de 30% que es igual a S/15,153 y
                    seguro de desgramen mensual referencial dé 0.127% sobre el
                    saldo de capital. Cuota mensual de ejemplo: S/ 1163.13 para
                    el Plan tradicional. El financiamiento incluye seguro
                    vehicular, GPS y gastos.
                  </p>
                  <p>
                    La cuota de ejemplo es cuota simple. Se considera el envío
                    virtual gratuito de estado de cuenta mensual. La TCEA y el
                    valor de la cuota podrán variar dependiendo del monto a
                    desembolsar, fecha de desembolso, fecha de pago primera
                    cuota, entre otros. Sujeto a ITF: 0.005%
                  </p>
                  <p>
                    Plazo máximo para Libre Disponibilidad hasta 48 cuotas y
                    para Crédito Vehicular hasta 60 cuotas. La opción de envío
                    físico del estado de cuenta mensual tiene un costo adicional
                    de $ 4.75 dólares al tipo de cambio de la fecha de
                    desembolso de la operación. En caso de retrasos en los
                    pagos, se aplicará un interés moratorio anual de 9.90%. Para
                    mayor información de requisitos, tarifario, número de cuotas
                    y periodicidad, consulte nuestra web{" "}
                    <a href="http://www.santanderconsumer.com.pe/">
                      www.santanderconsumer.com.pe
                    </a>
                    .
                  </p>
                </div>
                <div className="article-attachments">
                  <ul className="attachments"></ul>
                </div>
              </div>
            </section>
            <footer>
              <div className="article-footer"></div>
              <div className="article-votes">
                <span
                  className="article-votes-question"
                  id="article-votes-label"
                >
                  ¿Fue útil este artículo?
                </span>
                <div
                  className="article-votes-controls"
                  role="group"
                  aria-labelledby="article-votes-label"
                >
                  <button
                    type="button"
                    className="button article-vote article-vote-up"
                    data-auth-action="signin"
                    aria-label="Este artículo fue útil"
                    aria-pressed="false"
                  >
                    Sí
                  </button>
                  <button
                    type="button"
                    className="button article-vote article-vote-down"
                    data-auth-action="signin"
                    aria-label="Este artículo no fue útil"
                    aria-pressed="false"
                  >
                    No
                  </button>
                </div>
                <small className="article-votes-count">
                  <span className="article-vote-label">
                    Usuarios a los que les pareció útil: 1 de 1
                  </span>
                </small>
              </div>
              <div className="article-more-questions">
                ¿Tiene más preguntas?{" "}
                <a href="/hc/es/requests/new">Enviar una solicitud</a>
              </div>
              <div className="article-return-to-top">
                <a href="#article-container">
                  Regresar al inicio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="article-return-to-top-icon"
                    width={20}
                    height={20}
                    focusable="false"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      d="M3 4.5l2.6 2.6c.2.2.5.2.7 0L9 4.5"
                    />
                  </svg>
                </a>
              </div>
            </footer>
            <div className="article-relatives">
              <section className="recent-articles">
                <h2 className="recent-articles-title">
                  Artículos recién vistos
                </h2>
                <ul>
                  <li>
                    <a href="consentimiento">
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li>
                    <a href="cokkie">Política de Cookies</a>
                  </li>
                  <li>
                    <a href="terminos_condiciones">
                      {" "}
                      Condiciones Generales de Uso
                    </a>
                  </li>
                  <li>
                    <a href="privacidad">
                      POLÍTICA DE PRIVACIDAD DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Politicas')}}">
                      Políticas de Publicación
                    </a>
                  </li>
                </ul>
              </section>
              <section className="related-articles">
                <h2 className="related-articles-title">
                  Artículos relacionados
                </h2>
                <ul>
                  <li>
                    <a href="{{route('Consentimiento')}}" rel="nofollow">
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Terminos_condiciones')}}" rel="nofollow">
                      {" "}
                      Condiciones Generales de Uso
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Privacidad')}}" rel="nofollow">
                      POLÍTICA DE PRIVACIDAD DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Politicas')}}" rel="nofollow">
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a href="{{route('compra_segura')}}" rel="nofollow">
                      Consejos para una compra segura del vehículo{" "}
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="article-comments" id="article-comments">
              <section className="comments">
                <header className="comment-overview">
                  <h2 className="comment-heading">Comentarios</h2>
                  <p className="comment-callout">0 comentarios</p>
                </header>
                <ul id="comments" className="comment-list"></ul>
                <p className="comment-callout">
                  <a
                    data-auth-action="signin"
                    rel="nofollow"
                    href="/hc/es/signin?return_to=https%3A%2F%2Fcentraldeayuda.neoauto.com%2Fhc%2Fes%2Farticles%2F4417351833364-Financiamiento-Santander-Consumer"
                  >
                    Inicie sesión
                  </a>{" "}
                  para dejar un comentario.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

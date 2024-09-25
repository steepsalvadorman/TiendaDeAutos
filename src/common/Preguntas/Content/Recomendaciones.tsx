export const Recomendaciones = () => {
  return (
    <main role="main">
      <div className="container-divider" />
      <div className="container">
        <nav className="sub-nav">
          <ol className="breadcrumbs">
            <li title="Central de Ayuda">
              <a href="preguntas">Central de Ayuda</a>
            </li>
            <li title="Medios de Pago y Facturación">
              <a href="medios">Medios de Pago y Facturación</a>
            </li>
            <li title="Facturación">
              <a href="factura_menu">Facturación</a>
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
                defaultValue={201819783}
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
                    <a
                      href="{{route('Descargar_Factura')}}"
                      className="sidenav-item "
                    >
                      ¿Cómo descargo mi factura o boleta?
                    </a>
                  </li>
                  <li>
                    <a
                      href="{{route('Solicitar_Factura')}}"
                      className="sidenav-item "
                    >
                      ¿Cómo solicito una factura al comprar?
                    </a>
                  </li>
                  <li>
                    <a
                      href="{{route('Guardar_factura')}}"
                      className="sidenav-item "
                    >
                      ¿Cómo guardo mis datos de facturación?
                    </a>
                  </li>
                  <li>
                    <a
                      href="{{route('Fact_electronico')}}"
                      className="sidenav-item "
                    >
                      ¿Qué es la facturación electrónica?
                    </a>
                  </li>
                  <li>
                    <a
                      href="{{route('Generar_factura')}}"
                      className="sidenav-item "
                    >
                      Si ya publiqué mi aviso. ¿Puedo generar una factura?
                    </a>
                  </li>
                  <li>
                    <a
                      href="{{route('Recomendaciones')}}"
                      className="sidenav-item current-article"
                    >
                      Recomendaciones para el usuario
                    </a>
                  </li>
                  <li>
                    <a
                      href="{{route('Refacturaciones')}}"
                      className="sidenav-item "
                    >
                      Refacturaciones
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <article id="main-content" className="article">
            <header className="article-header">
              <h1
                title="Recomendaciones para el usuario"
                className="article-title"
              >
                Recomendaciones para el usuario
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
                        dateTime="2020-04-20T15:17:42Z"
                        title="2020-04-20 10:17"
                        data-datetime="relative"
                      >
                        hace 3 años
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
                  <p>Ten en cuenta las siguientes recomendaciones:</p>
                  <ol>
                    <li>
                      <strong>Verifica el tipo de comprobante:</strong>
                      &nbsp;Luego de realizado el pago por un aviso o paquete la
                      solicitud de cambio de tipo de comprobante no procede.
                    </li>
                    <li>
                      <strong>
                        Verifica los datos registrados antes de generar el pago
                      </strong>
                      : Los datos que ingreses serán utilizados en la emisión
                      del comprobante.
                    </li>
                  </ol>
                  <ul>
                    <ul>
                      <li>Permanecerán en nuestro sistema de facturación.</li>
                      <li>
                        La actualización de datos de facturación&nbsp;no&nbsp;es
                        automática, debes comunicarte a nuestra Central de Ayuda
                        para gestionarla
                        <a
                          title="Consulta"
                          href="http://centraldeayuda.neoauto.com/anonymous_requests/new"
                        >
                          &nbsp;aquí
                        </a>
                      </li>
                      <li>
                        Solo procede aquel cambio que ha sido registrado
                        previamente en Sunat.&nbsp;
                      </li>
                      <li>
                        No procederá ninguna refacturación por error en la
                        dirección fiscal.
                      </li>
                    </ul>
                  </ul>
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
                    Usuarios a los que les pareció útil: 0 de 1
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
                    <a href="">
                      Si ya publiqué mi aviso. ¿Puedo generar una factura?
                    </a>
                  </li>
                  <li>
                    <a href="">¿Cómo descargo mi factura o boleta?</a>
                  </li>
                  <li>
                    <a href="">¿Qué hacer si el CIP expiró?</a>
                  </li>
                  <li>
                    <a href="">
                      ¿Cuánto tiempo tengo para pagar mi voucher de
                      PagoEfectivo?
                    </a>
                  </li>
                  <li>
                    <a href="">
                      ¿Qué debo hacer si ocurrió un error al publicar un aviso?
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
                    <a href="" rel="nofollow">
                      Si ya publiqué mi aviso. ¿Puedo generar una factura?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      ¿Cómo solicito una factura al comprar?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      ¿Qué es la facturación electrónica?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      Refacturaciones
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      Financiamiento Santander Consumer
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
                  El artículo está cerrado para comentarios.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

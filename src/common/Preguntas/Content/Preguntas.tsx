import "../preguntas.css";
export const PreguntasFrecuentes = () => {
  return (
    <main role="main">
      <h1 className="visibility-hidden">Central de Ayuda</h1>
      <section id="main-content" className="section hero">
        <div className="hero-inner">
          <a className="titu">¿En qué podemos ayudarte?</a>
          <h2 className="visibility-hidden">Búsqueda</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            focusable="false"
            viewBox="0 0 12 12"
            className="search-icon"
            aria-hidden="true"
          >
            <circle cx="4.5" cy="4.5" r={4} fill="none" stroke="currentColor" />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              d="M11 11L7.5 7.5"
            />
          </svg>
          <form
            role="search"
            className="search search-full"
            data-search=""
            data-instant="true"
            autoComplete="off"
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
              type="search"
              name="query"
              id="query"
              placeholder="Buscar"
              autoComplete="off"
              aria-label="Buscar"
            />
          </form>
        </div>
      </section>
      <div className="container">
        <section className="section knowledge-base">
          <h2 className="visibility-hidden">Categorías</h2>
          <section className="categories blocks">
            <ul className="blocks-list">
              <li className="blocks-item">
                <a href="comprador">
                  <img src="//theme.zdassets.com/theme_assets/123476/2d77ccbe2e81698cf54cae305aecb1476238c7fd.png" />
                </a>
              </li>
              <li className="blocks-item">
                <a href="vendedor">
                  <img src="//theme.zdassets.com/theme_assets/123476/492ff50f2eace139d8b229dae8cdee3e7bcf9663.png" />
                </a>
              </li>
              <li className="blocks-item">
                <a href="Publicacion">
                  <img src="//theme.zdassets.com/theme_assets/123476/dc5c3b8430fb93bdece269a3f415cf5a9e9a3093.png" />
                </a>
              </li>
              <li className="blocks-item">
                <a href="medios">
                  <img src="//theme.zdassets.com/theme_assets/123476/0c6e49bb76ec9416d3ac82ff16ea3381e071d744.png" />
                </a>
              </li>
              <li className="blocks-item">
                <a href="cuentas">
                  <img src="//theme.zdassets.com/theme_assets/123476/beb6fdb082c22e8c1ce8a228e0d600b621a9461d.png" />
                </a>
              </li>
            </ul>
          </section>
        </section>
        <section className="section home-section activity">
          <div
            data-app="recent-activity"
            data-url="/hc/api/internal/recent_activities?locale=es"
          >
            <div className="recent-activity">
              <h2 className="recent-activity-header">Actividad reciente</h2>
              <div role="status" className="recent-activity-list">
                <section
                  className="recent-activity-item"
                  data-recent-activity-action="article_created"
                >
                  <h3>
                    <a
                      className="recent-activity-item-parent"
                      href="cuentas"
                    >
                      Cuentas, privacidad y términos de uso
                    </a>
                  </h3>
                  <a
                    className="recent-activity-item-link"
                    href="aliados"
                  >
                    Aliados comerciales de TUAUTOpe SAC
                  </a>
                  <div className="recent-activity-item-meta">
                    <div className="recent-activity-item-time">
                      Artículo creado hace 20 días
                    </div>
                    <div className="recent-activity-item-comment">
                      <span
                        className="recent-activity-comment-icon"
                        aria-hidden="true"
                        data-comment-count={0}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          focusable="false"
                          viewBox="0 0 12 12"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="M1 .5h10c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H6l-2.6 2.6c-.3.3-.9.1-.9-.4V8.5H1C.7 8.5.5 8.3.5 8V1C.5.7.7.5 1 .5z"
                          />
                        </svg>
                      </span>
                      <span className="recent-activity-accessibility-label">
                        Número de comentarios: 0
                      </span>
                    </div>
                  </div>
                </section>
                <section
                  className="recent-activity-item"
                  data-recent-activity-action="article_created"
                >
                  <h3>
                    <a
                      className="recent-activity-item-parent"
                      href="privacidadmenu"
                    >
                      Cuentas, privacidad y términos de uso
                    </a>
                  </h3>
                  <a
                    className="recent-activity-item-link"
                    href="financiamiento"
                  >
                    Financiamiento Santander Consumer
                  </a>
                  <div className="recent-activity-item-meta">
                    <div className="recent-activity-item-time">
                      Artículo creado hace 1 año
                    </div>
                    <div className="recent-activity-item-comment">
                      <span
                        className="recent-activity-comment-icon"
                        aria-hidden="true"
                        data-comment-count={0}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          focusable="false"
                          viewBox="0 0 12 12"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="M1 .5h10c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H6l-2.6 2.6c-.3.3-.9.1-.9-.4V8.5H1C.7 8.5.5 8.3.5 8V1C.5.7.7.5 1 .5z"
                          />
                        </svg>
                      </span>
                      <span className="recent-activity-accessibility-label">
                        Número de comentarios: 0
                      </span>
                    </div>
                  </div>
                </section>
                <section
                  className="recent-activity-item"
                  data-recent-activity-action="article_created"
                >
                  <h3>
                    <a
                      className="recent-activity-item-parent"
                      href="Publicar_venta"
                    >
                      ¿Cómo publicar la venta de mi vehículo?
                    </a>
                  </h3>
                  <a
                    className="recent-activity-item-link"
                    href="publicar_vehiculo"
                  >
                    ¿Cómo publicar un vehículo en TUAUTOpe?
                  </a>
                  <div className="recent-activity-item-meta">
                    <div className="recent-activity-item-time">
                      Artículo creado hace 2 años
                    </div>
                    <div className="recent-activity-item-comment">
                      <span
                        className="recent-activity-comment-icon"
                        aria-hidden="true"
                        data-comment-count={0}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          focusable="false"
                          viewBox="0 0 12 12"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="M1 .5h10c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H6l-2.6 2.6c-.3.3-.9.1-.9-.4V8.5H1C.7 8.5.5 8.3.5 8V1C.5.7.7.5 1 .5z"
                          />
                        </svg>
                      </span>
                      <span className="recent-activity-accessibility-label">
                        Número de comentarios: 0
                      </span>
                    </div>
                  </div>
                </section>
                <section
                  className="recent-activity-item"
                  data-recent-activity-action="article_created"
                >
                  <h3>
                    <a
                      className="recent-activity-item-parent"
                      href="cuentas"
                    >
                      Cuentas, privacidad y términos de uso
                    </a>
                  </h3>
                  <a
                    className="recent-activity-item-link"
                    href="privacidadmenu"
                  >
                    Consentimiento para fines adicionales
                  </a>
                  <div className="recent-activity-item-meta">
                    <div className="recent-activity-item-time">
                      Artículo creado hace 2 años
                    </div>
                    <div className="recent-activity-item-comment">
                      <span
                        className="recent-activity-comment-icon"
                        aria-hidden="true"
                        data-comment-count={0}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          focusable="false"
                          viewBox="0 0 12 12"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="M1 .5h10c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H6l-2.6 2.6c-.3.3-.9.1-.9-.4V8.5H1C.7 8.5.5 8.3.5 8V1C.5.7.7.5 1 .5z"
                          />
                        </svg>
                      </span>
                      <span className="recent-activity-accessibility-label">
                        Número de comentarios: 0
                      </span>
                    </div>
                  </div>
                </section>
                <section
                  className="recent-activity-item"
                  data-recent-activity-action="article_created"
                >
                  <h3>
                    <a
                      className="recent-activity-item-parent"
                      href="factura_menu"
                    >
                      Facturación
                    </a>
                  </h3>
                  <a
                    className="recent-activity-item-link"
                    href="recomendaciones"
                  >
                    Recomendaciones para el usuario
                  </a>
                  <div className="recent-activity-item-meta">
                    <div className="recent-activity-item-time">
                      Artículo creado hace 3 años
                    </div>
                    <div className="recent-activity-item-comment">
                      <span
                        className="recent-activity-comment-icon"
                        aria-hidden="true"
                        data-comment-count={0}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          focusable="false"
                          viewBox="0 0 12 12"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            d="M1 .5h10c.3 0 .5.2.5.5v7c0 .3-.2.5-.5.5H6l-2.6 2.6c-.3.3-.9.1-.9-.4V8.5H1C.7 8.5.5 8.3.5 8V1C.5.7.7.5 1 .5z"
                          />
                        </svg>
                      </span>
                      <span className="recent-activity-accessibility-label">
                        Número de comentarios: 0
                      </span>
                    </div>
                  </div>
                </section>
              </div>
              <div
                className="recent-activity-no-activities"
                style={{ display: "none" }}
              />
              <div
                className="recent-activity-loader"
                style={{ display: "none" }}
              >
                ...
              </div>
              <div className="recent-activity-controls" style={{}}>
                <a href="#" data-recent-activity-seemore="">
                  Ver más
                  <span
                    style={{
                      clip: "rect(0 0 0 0)",
                      clipPath: "inset(50%)",
                      height: 1,
                      overflow: "hidden",
                      position: "absolute",
                      whiteSpace: "nowrap",
                      width: 1,
                    }}
                  >
                    elementos de la actividad reciente
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

import "../preguntas.css";
export const Cuentas = () => {
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
              Cuentas, privacidad y términos de uso
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
                type="search"
                name="query"
                id="query"
                placeholder="Buscar"
                aria-label="Buscar"
              />
            </form>
          </div>
        </nav>
        <div className="category-container">
          <div className="category-content">
            <header className="page-header">
              <h1>Cuentas, privacidad y términos de uso</h1>
            </header>
            <div id="main-content" className="section-tree">
              <section className="section">
                <h2 className="section-tree-title">
                  <a href="privacidadmenu">
                    Cuentas, privacidad y términos de uso
                  </a>
                </h2>
                <ul className="article-list">
                  <li className="article-list-item">
                    <a
                      href="aliados"
                      className="article-list-link"
                    >
                      Aliados comerciales de Neoauto SAC
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="financiamiento"
                      className="article-list-link"
                    >
                      Financiamiento Santander Consumer
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Consentimiento')}}"
                      className="article-list-link"
                    >
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a href="{{route('Cokkie')}}" className="article-list-link">
                      Política de Cookies
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Privacidad')}}"
                      className="article-list-link"
                    >
                      POLÍTICA DE PRIVACIDAD DE NEOAUTO
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Politicas')}}"
                      className="article-list-link"
                    >
                      Políticas de Publicación
                    </a>
                  </li>
                </ul>
                <a
                  href="{{route('Privacidad_menu')}}"
                  className="see-all-articles"
                >
                  Ver los 7 artículos
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export const PrivacidadMenu = () => {
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
              <a href="cuentas">Cuentas, privacidad y términos de uso</a>
            </li>
            <li title="Cuentas, privacidad y términos de uso">
              <a href="privacidadmenu">Cuentas, privacidad y términos de uso</a>
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
                type="search"
                name="query"
                id="query"
                placeholder="Buscar"
                aria-label="Buscar"
              />
            </form>
          </div>
        </nav>
        <div className="section-container">
          <section id="main-content" className="section-content">
            <header className="page-header">
              <h1>Cuentas, privacidad y términos de uso</h1>
            </header>
            <ul className="article-list">
              <li className="article-list-item ">
                <a href="aliados" className="article-list-link">
                  Aliados comerciales de TUAUTOpe SAC
                </a>
              </li>
              <li className="article-list-item ">
                <a
                  href="{{route('Financiamiento')}}"
                  className="article-list-link"
                >
                  Financiamiento Santander Consumer
                </a>
              </li>
              <li className="article-list-item ">
                <a
                  href="{{route('Consentimiento')}}"
                  className="article-list-link"
                >
                  Consentimiento para fines adicionales
                </a>
              </li>
              <li className="article-list-item ">
                <a href="{{route('Cokkie')}}" className="article-list-link">
                  Política de Cookies
                </a>
              </li>
              <li className="article-list-item ">
                <a href="{{route('Privacidad')}}" className="article-list-link">
                  POLÍTICA DE PRIVACIDAD DE TUAUTOpe
                </a>
              </li>
              <li className="article-list-item ">
                <a href="{{route('Politicas')}}" className="article-list-link">
                  Políticas de Publicación
                </a>
              </li>
              <li className="article-list-item ">
                <a
                  href="{{route('Terminos_condiciones')}}"
                  className="article-list-link"
                >
                  {" "}
                  Condiciones Generales de Uso
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

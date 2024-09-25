import "../preguntas.css";
export const Comprador = () => {
  return (
    <main role="main">
      <div className="container-divider" />
      <div className="container">
        <nav className="sub-nav">
          <ol className="breadcrumbs">
            <li title="Central de Ayuda">
              <a href="preguntas">Central de Ayuda</a>
            </li>
            <li title="Comprador">Comprador</li>
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
              <h1>Comprador</h1>
            </header>
            <div id="main-content" className="section-tree">
              <section className="section">
                <h2 className="section-tree-title">
                  <a href="{{route('Cuenta')}}">Cuenta</a>
                </h2>
                <ul className="article-list">
                  <li className="article-list-item">
                    <a
                      href="{{route('registro_cuenta')}}"
                      className="article-list-link"
                    >
                      ¿Cómo me registro en NeoAuto?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('neo_registro')}}"
                      className="article-list-link"
                    >
                      ¿Cómo me registro?
                    </a>
                  </li>
                </ul>
              </section>
              <section className="section">
                <h2 className="section-tree-title">
                  <a href="{{route('comprador2')}}">Comprador</a>
                </h2>
                <ul className="article-list">
                  <li className="article-list-item">
                    <a
                      href="{{route('compra_segura')}}"
                      className="article-list-link"
                    >
                      Consejos para una compra segura del vehículo{" "}
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('busco_vehiculo')}}"
                      className="article-list-link"
                    >
                      ¿Cómo busco vehículos en NeoAuto?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('contacto_vendedor')}}"
                      className="article-list-link"
                    >
                      ¿Como contacto al Vendedor?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a href="{{route('Cambio')}}" className="article-list-link">
                      ¿Cómo cambio la contraseña?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('recuperar')}}"
                      className="article-list-link"
                    >
                      ¿Cómo recuperar mi contraseña?
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

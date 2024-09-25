export const FacturaMenu = () => {
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
              <h1>Facturación</h1>
            </header>
            <ul className="article-list">
              <li className="article-list-item ">
                <a
                  href="{{route('Descargar_Factura')}}"
                  className="article-list-link"
                >
                  ¿Cómo descargo mi factura o boleta?
                </a>
              </li>
              <li className="article-list-item ">
                <a
                  href="{{route('Solicitar_Factura')}}"
                  className="article-list-link"
                >
                  ¿Cómo solicito una factura al comprar?
                </a>
              </li>
              <li className="article-list-item ">
                <a
                  href="{{route('Guardar_factura')}}"
                  className="article-list-link"
                >
                  ¿Cómo guardo mis datos de facturación?
                </a>
              </li>
              <li className="article-list-item ">
                <a
                  href="{{route('Fact_electronico')}}"
                  className="article-list-link"
                >
                  ¿Qué es la facturación electrónica?
                </a>
              </li>
              <li className="article-list-item ">
                <a
                  href="{{route('Generar_factura')}}"
                  className="article-list-link"
                >
                  Si ya publiqué mi aviso. ¿Puedo generar una factura?
                </a>
              </li>
              <li className="article-list-item ">
                <a
                  href="{{route('Recomendaciones')}}"
                  className="article-list-link"
                >
                  Recomendaciones para el usuario
                </a>
              </li>
              <li className="article-list-item ">
                <a
                  href="{{route('Refacturaciones')}}"
                  className="article-list-link"
                >
                  Refacturaciones
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

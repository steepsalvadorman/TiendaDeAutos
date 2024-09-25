import "../preguntas.css"
export const Medios = () => {
  return (
    <main role="main">
      <div className="container-divider" />
      <div className="container">
        <nav className="sub-nav">
          <ol className="breadcrumbs">
            <li title="Central de Ayuda">
              <a href="{{route('Preguntas')}}">Central de Ayuda</a>
            </li>
            <li title="Comprador">Medios de Pago y Facturación</li>
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
              <h1>Medios de Pago y Facturación</h1>
            </header>
            <div id="main-content" className="section-tree">
              <section className="section">
                <h2 className="section-tree-title">
                  <a href="{{route('Medio_pago')}}">Medios de Pago</a>
                </h2>
                <ul className="article-list">
                  <li className="article-list-item">
                    <a
                      href="{{route('Pago_efectivo')}}"
                      className="article-list-link"
                    >
                      Paga tu aviso con PagoEfectivo
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Efectivo')}}"
                      className="article-list-link"
                    >
                      ¿Qué es PagoEfectivo?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Pagar_Aviso')}}"
                      className="article-list-link"
                    >
                      Paga tu aviso con tarjeta de crédito
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a href="{{route('CIP')}}" className="article-list-link">
                      ¿Qué es un CIP?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Pagar_Voucher')}}"
                      className="article-list-link"
                    >
                      ¿Cuánto tiempo tengo para pagar mi voucher de
                      PagoEfectivo?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Cip_expiro')}}"
                      className="article-list-link"
                    >
                      ¿Qué hacer si el CIP expiró?
                    </a>
                  </li>
                </ul>
              </section>
              <section className="section">
                <h2 className="section-tree-title">
                  <a href="{{route('Factura_menu')}}">Facturación</a>
                </h2>
                <ul className="article-list">
                  <li className="article-list-item">
                    <a
                      href="{{route('Descargar_Factura')}}"
                      className="article-list-link"
                    >
                      ¿Cómo descargo mi factura o boleta?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Solicitar_Factura')}}"
                      className="article-list-link"
                    >
                      ¿Cómo solicito una factura al comprar?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Guardar_factura')}}"
                      className="article-list-link"
                    >
                      ¿Cómo guardo mis datos de facturación?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Fact_electronico')}}"
                      className="article-list-link"
                    >
                      ¿Qué es la facturación electrónica?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Generar_factura')}}"
                      className="article-list-link"
                    >
                      Si ya publiqué mi aviso. ¿Puedo generar una factura?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Recomendaciones')}}"
                      className="article-list-link"
                    >
                      Recomendaciones para el usuario
                    </a>
                  </li>
                </ul>
                <a
                  href="{{route('Factura_menu')}}"
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

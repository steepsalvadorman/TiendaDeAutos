import "../preguntas.css";
export const Vendedor = () => {
  return (
    <main role="main">
      <div className="container-divider" />
      <div className="container">
        <nav className="sub-nav">
          <ol className="breadcrumbs">
            <li title="Central de Ayuda">
              <a href="{{route('Preguntas')}}">Central de Ayuda</a>
            </li>
            <li title="Comprador">Vendedor</li>
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
              <h1>Vendedor</h1>
            </header>
            <div id="main-content" className="section-tree">
              <section className="section">
                <h2 className="section-tree-title">
                  <a href="{{route('publicar_venta')}}">
                    ¿ Cómo publicar la venta de mi vehículo ?
                  </a>
                </h2>
                <ul className="article-list">
                  <li className="article-list-item">
                    <a
                      href="{{route('publicar_vehiculo')}}"
                      className="article-list-link"
                    >
                      ¿Cómo publicar un vehículo en TUAUTOpe?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('subir_foto')}}"
                      className="article-list-link"
                    >
                      ¿Cómo subir la foto de mi aviso?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('agregar')}}"
                      className="article-list-link"
                    >
                      ¿Cómo puedo agregar accesorios a mi aviso web?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Informacion')}}"
                      className="article-list-link"
                    >
                      ¿Cómo puedo agregar más información en mi aviso web?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('publique')}}"
                      className="article-list-link"
                    >
                      ¿Qué debo hacer si la foto de mi aviso no es la que
                      publiqué?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a href="{{route('pago')}}" className="article-list-link">
                      ¿Qué formas de pago existen?
                    </a>
                  </li>
                </ul>
                <a
                  href="{{route('publicar_venta')}}"
                  className="see-all-articles"
                >
                  Ver los 8 artículos
                </a>
              </section>
              <section className="section">
                <h2 className="section-tree-title">
                  <a href="{{route('Gestion')}}">Gestión de avisos y cuenta</a>
                </h2>
                <ul className="article-list">
                  <li className="article-list-item">
                    <a href="{{route('Contra')}}" className="article-list-link">
                      ¿Cómo recuperar mi contraseña?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Cambio_contra')}}"
                      className="article-list-link"
                    >
                      ¿Cómo cambio la contraseña?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Editar_Aviso')}}"
                      className="article-list-link"
                    >
                      ¿Cómo edito mi aviso?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Activar_Cuenta')}}"
                      className="article-list-link"
                    >
                      ¿Por qué necesito activar mi cuenta de usuario?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Editar_Perfil')}}"
                      className="article-list-link"
                    >
                      ¿Cómo edito mi perfil?
                    </a>
                  </li>
                  <li className="article-list-item">
                    <a
                      href="{{route('Retirar_Aviso')}}"
                      className="article-list-link"
                    >
                      Ya vendí mi vehículo ¿Cómo retiro mi aviso?
                    </a>
                  </li>
                </ul>
                <a href="{{route('Gestion')}}" className="see-all-articles">
                  Ver los 10 artículos
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export const Publique = () => {
  return (
    <main role="main">
      <div className="container-divider" />
      <div className="container">
        <nav className="sub-nav">
          <ol className="breadcrumbs">
            <li title="Central de Ayuda">
              <a href="preguntas">Central de Ayuda</a>
            </li>
            <li title="Vendedor">
              <a href="vendedor">Vendedor</a>
            </li>
            <li title="¿ Cómo publicar la venta de mi vehículo ?">
              <a href="publicar_venta">
                ¿ Cómo publicar la venta de mi vehículo ?
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
                defaultValue={201819723}
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
            aria-labelledby="section-article-title"
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
                      href="publicar_vehiculo"
                      className="sidenav-item "
                    >
                      ¿Cómo publicar un vehículo en TUAUTOpe?
                    </a>
                  </li>
                  <li>
                    <a href="subir_fotos" className="sidenav-item ">
                      ¿Cómo subir la foto de mi aviso?
                    </a>
                  </li>
                  <li>
                    <a href="agregar" className="sidenav-item ">
                      ¿Cómo puedo agregar accesorios a mi aviso web?
                    </a>
                  </li>
                  <li>
                    <a
                      href="Informacion"
                      className="sidenav-item "
                    >
                      ¿Cómo puedo agregar más información en mi aviso web?
                    </a>
                  </li>
                  <li>
                    <a
                      href="publique"
                      className="sidenav-item current-article"
                    >
                      ¿Qué debo hacer si la foto de mi aviso no es la que
                      publiqué?
                    </a>
                  </li>
                  <li>
                    <a href="{{route('pago')}}" className="sidenav-item ">
                      ¿Qué formas de pago existen?
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Activos')}}" className="sidenav-item ">
                      ¿Qué son avisos activos?
                    </a>
                  </li>
                  <li>
                    <a href="editar" className="sidenav-item ">
                      ¿Puedo editar un aviso impreso?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <article id="main-content" className="article">
            <header className="article-header">
              <h1
                title="¿Qué debo hacer si la foto de mi aviso no es la que publiqué?"
                className="article-title"
              >
                ¿Qué debo hacer si la foto de mi aviso no es la que publiqué?
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
                        dateTime="2021-11-12T21:17:10Z"
                        title="2021-11-12 16:17"
                        data-datetime="relative"
                      >
                        hace 2 años
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
                  <p className="wysiwyg-text-align-justify">
                    Deberás editar tu aviso, eliminar la foto y volverla a
                    subir, lo más probable es que la foto se haya dañado durante
                    el proceso de publicación.
                  </p>
                  <p className="wysiwyg-text-align-justify">
                    Para hacerlo sigue los pasos que se indican dando clic{" "}
                    <a
                      title="¿Cómo subir una foto?"
                      href="{{route('subir_foto')}}"
                    >
                      aqui
                    </a>
                  </p>
                  <p className="wysiwyg-text-align-justify">&nbsp;</p>
                  <p className="wysiwyg-text-align-justify">
                    <strong>Recuerda:</strong> Si elegiste un destaque con
                    fotoviñeta, el aviso impreso saldrá publicado con la primera
                    foto que ingresaste en el proceso de publicación. Si la foto
                    que subiste estaba dañada es muy probable que el sistema
                    tome la siguiente.&nbsp;
                  </p>
                  <p className="wysiwyg-text-align-justify">
                    Si tienes problemas con la foto de tu aviso impreso puede
                    comunicarte con nosotros haciendo clic{" "}
                    <a title="Formulario" href="">
                      aqui
                    </a>
                    .
                  </p>
                </div>
                <div className="article-attachments">
                  <ul className="attachments" />
                </div>
              </div>
            </section>
            <footer>
              <div className="article-footer" />
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
                    Usuarios a los que les pareció útil: 0 de 0
                  </span>
                </small>
              </div>
              <div className="article-more-questions">
                ¿Tiene más preguntas?
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
                      ¿Cómo puedo agregar más información en mi aviso web?
                    </a>
                  </li>
                  <li>
                    <a href="">
                      ¿Cómo puedo agregar accesorios a mi aviso web?
                    </a>
                  </li>
                  <li>
                    <a href="">¿Cómo publicar un vehículo en TUAUTOpe?</a>
                  </li>
                  <li>
                    <a href="">¿Cómo subir la foto de mi aviso?</a>
                  </li>
                  <li>
                    <a href="">¿Cómo me registro en TUAUTOpe?</a>
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
                      ¿Qué debo hacer si ocurrió un error al publicar un aviso?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      ¿Cómo me registro?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      ¿Cómo puedo agregar accesorios a mi aviso web?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      ¿Puedo editar un aviso impreso?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      ¿Cómo subir la foto de mi aviso?
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
                <ul id="comments" className="comment-list" />
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

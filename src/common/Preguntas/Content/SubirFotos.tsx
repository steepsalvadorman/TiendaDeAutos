export const SubirFotos = () => {
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
                      href="publicar_vehiculo"
                      className="sidenav-item "
                    >
                      ¿Cómo publicar un vehículo en NeoAuto?
                    </a>
                  </li>
                  <li>
                    <a
                      href="subir_foto"
                      className="sidenav-item current-article"
                    >
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
                      href="{{route('Informacion')}}"
                      className="sidenav-item "
                    >
                      ¿Cómo puedo agregar más información en mi aviso web?
                    </a>
                  </li>
                  <li>
                    <a href="publique" className="sidenav-item ">
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
                title="¿Cómo subir la foto de mi aviso?"
                className="article-title"
              >
                ¿Cómo subir la foto de mi aviso?
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
                        dateTime="2021-11-12T21:03:34Z"
                        title="2021-11-12 16:03"
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
                    Primero, debes ingresar a tu cuenta con tu correo y
                    contraseña que te registraste.
                  </p>
                  <p className="wysiwyg-text-align-justify">
                    Para subir una foto solo ubica tu aviso (en la sección de
                    Avisos Activos) y da clic en el ícono de una hoja con un
                    lápiz:&nbsp; <strong>Editar</strong>
                  </p>
                  <p className="wysiwyg-text-align-justify">
                    <img
                      src="/src/assets/images/sf.png"
                      alt="Captura.PNG"
                      width={746}
                      height={207}
                    />
                  </p>
                  <p className="wysiwyg-text-align-justify">
                    Da clic en <strong>Añadir foto</strong> y selecciona una de
                    tus imágenes.&nbsp;
                    <strong>
                      <br />
                    </strong>
                  </p>
                  <p className="wysiwyg-text-align-justify">
                    <img
                      src="/src/assets/images/foto.jpg"
                      alt="Captura.JPG"
                      width={598}
                      height={274}
                    />
                  </p>
                  <p className="wysiwyg-text-align-justify">
                    Una vez que termines &nbsp;haz clic en&nbsp;
                    <strong>Siguiente&nbsp;</strong>para que los cambios se
                    guarden en tu aviso.
                  </p>
                  <p className="wysiwyg-text-align-justify">
                    <strong>Importante:</strong>
                  </p>
                  <ul className="wysiwyg-text-align-justify">
                    <li>
                      Para que la publicación del aviso se aprecie mejor, es
                      importante que en la foto el vehículo este posicionada de
                      forma lateral y centrada, manteniendo siempre un margen.
                    </li>
                    <li>
                      Imagen Referencial &nbsp;(Formatos permitidos: jpg, jpeg,
                      png, gif)
                    </li>
                    <li>Tamaño máxima: 3000x3000px</li>
                    <li>Peso máximo: 5MB</li>
                  </ul>
                  <p className="wysiwyg-text-align-justify">
                    <strong>Vista Correcta</strong>
                  </p>
                  <p className="wysiwyg-text-align-justify">
                    <img
                      src="/src/assets/images/carro.jpg"
                      alt="vista_correcta.jpg"
                    />
                  </p>
                  <p className="wysiwyg-text-align-justify">
                    <strong>Vista Incorrecta</strong>
                  </p>
                  <p className="wysiwyg-text-align-justify">
                    <strong>
                      <img
                        src="/src/assets/images/incorrecta.jpg"
                        alt="vista_incorrecta.jpg"
                      />
                    </strong>
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
                ¿Tiene más preguntas? <a href="">Enviar una solicitud</a>
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
                    <a href="">¿Cómo publicar un vehículo en TUAUTOpe?</a>
                  </li>
                  <li>
                    <a href="">¿Cómo me registro en TUAUTOpe?</a>
                  </li>
                  <li>
                    <a href="">¿Cómo me registro?</a>
                  </li>
                  <li>
                    <a href="">¿Cómo cambio la contraseña?</a>
                  </li>
                  <li>
                    <a href="">¿Cómo recuperar mi contraseña?</a>
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
                      ¿Cómo edito mi aviso?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      Ya vendí mi vehículo ¿Cómo retiro mi aviso?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      ¿Cómo busco vehículos en TUAUTOpe?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      ¿Cómo puedo agregar más información en mi aviso web?
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

export const PublicarVehiculo = () => {
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
                      className="sidenav-item current-article"
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
                      href="informacion"
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
                    <a href="pago" className="sidenav-item ">
                      ¿Qué formas de pago existen?
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Activos')}}" className="sidenav-item ">
                      ¿Qué son avisos activos?
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Editar')}}" className="sidenav-item ">
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
                title="¿Cómo publicar un vehículo en NeoAuto?"
                className="article-title"
              >
                ¿Cómo publicar un vehículo en TUAUTOpe?
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
                        dateTime="2023-05-23T21:44:57Z"
                        title="2023-05-23 16:44"
                        data-datetime="relative"
                      >
                        hace 13 días
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
                    Publica tu vehículo en <strong>TUAUTOpe</strong> y obtén el
                    contacto de personas interesadas en comprarlo. Para hacerlo,
                    sigue estos pasos:
                  </p>
                  <h2>
                    <strong>Inicia sesión en tu cuenta:</strong>
                  </h2>
                  <p>
                    <strong /> Para publicar un aviso, primero debes estar
                    registrado en{" "}
                    <a href="/" target="_self">
                      <strong>TUAUTOpe</strong>.
                    </a>{" "}
                    Si aún no te encuentras registrado en nuestra plataforma,
                    haz clic <strong>aquí</strong> para poder ayudarte.
                  </p>
                  <p>
                    <strong /> Si estas en una computadora, ubica la opción{" "}
                    <span className="wysiwyg-color-orange110">
                      <strong>Ingresa</strong>
                    </span>{" "}
                    en la esquina superior derecha de la web.
                  </p>
                  <p className="wysiwyg-text-align-center">
                    <img
                      src="/src/assets/images/jp.webp"
                      width={521}
                      height={219}
                    />
                  </p>
                  <p>
                    Si estas en un celular, abre el menú lateral presionando el
                    botón en la esquina superior izquierda de la web. Luego,
                    ubica la opción{" "}
                    <span className="wysiwyg-color-orange110">
                      <strong>Ingresa</strong>
                    </span>{" "}
                    y presiónalo para iniciar sesión.
                  </p>
                  <p className="wysiwyg-text-align-center">
                    <img
                      src="/src/assets/images/neoa.webp"
                      width={263}
                      height={207}
                    />
                  </p>
                  <p>
                    <strong /> Ingresa el correo y la contraseña con el que te
                    registraste o inicia sesión usando tu Facebook.
                  </p>
                  <p>
                    <strong /> Una vez que hayas iniciado sesión, verás la
                    opción{" "}
                    <span className="wysiwyg-color-orange110">
                      <strong>Vende tu Vehículo</strong>
                    </span>{" "}
                    en la esquina superior derecha de la página. Haz clic en
                    esta opción.
                  </p>
                  <p className="wysiwyg-text-align-center">
                    <img
                      src="/src/assets/images/vac.webp"
                      width={522}
                      height={222}
                    />
                  </p>
                  <h2>
                    <strong>Elige el tipo de aviso que deseas publicar:</strong>
                  </h2>
                  <p>
                    <strong /> A continuación, debes seleccionar qué tipo de
                    aviso deseas publicar según el vehículo que quieras vender,
                    puedes elegir entre publicar:
                  </p>
                  <ul>
                    <li>Auto</li>
                    <li>Moto</li>
                    <li>Bus/Camión</li>
                  </ul>
                  <p>
                    <strong /> TUAUTOpe te ofrece 4 alternativas para publicar
                    tu aviso, las cuales se diferencian por la posición donde
                    aparecerá en el catálogo de vehículos, la opciones de
                    personalización y el costo del aviso. Si deseas más
                    información sobre los tipos de destaque ingresa{" "}
                    <strong>aquí.</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p className="wysiwyg-text-align-center">
                    <img
                      src="/src/assets/images/alter.webp"
                      width={487}
                      height={379}
                    />
                  </p>
                  <p className="wysiwyg-text-align-left">
                    <em>
                      Asegúrate de elegir la opción correcta ya que los modelos
                      disponibles pueden variar según el tipo de vehículo.
                    </em>
                  </p>
                  <h2>
                    <strong>Ingresa la información de tu vehículo:</strong>
                  </h2>
                  <p className="wysiwyg-text-align-left">
                    <strong>7. </strong>Completa el formulario de publicación
                    con los datos de tu vehículo, incluyendo las fotos y el
                    precio. Una vez hayas completado la información, haz clic en{" "}
                    <span className="wysiwyg-color-orange110">
                      <strong>Siguiente</strong>
                    </span>{" "}
                    para continuar con el proceso.
                  </p>
                  <p className="wysiwyg-text-align-left">
                    <strong>
                      <em>
                        Recuerda incluir la mayor información de tu vehículo
                        para que obtener mejores resultados con tu aviso.
                      </em>
                    </strong>
                  </p>
                  <p className="wysiwyg-text-align-center">
                    <img
                      src="/src/assets/images/datos.webp"
                      width={466}
                      height={524}
                    />
                  </p>
                  <p className="wysiwyg-text-align-left">
                    <strong>
                      <em>
                        Recuerda que una vez publicado tu aviso, los campos:{" "}
                        <span className="opt_bold">marca, modelo y año</span> no
                        podrán cambiarse.
                      </em>
                    </strong>
                  </p>
                  <h2>
                    <strong>
                      Potencia tu aviso para obtener más contactos:
                    </strong>
                  </h2>
                  <p className="wysiwyg-text-align-left">
                    <strong>8.</strong> En la siguiente página, podrás ver la
                    vista previa de tu aviso y seleccionar distintas opciones
                    para potenciar tu publicación. Una vez hayas validado tu
                    aviso, haz clic en{" "}
                    <span className="wysiwyg-color-orange110">
                      <strong>Siguiente</strong>
                    </span>{" "}
                    para continuar con el proceso.
                  </p>
                  <p className="wysiwyg-text-align-center">
                    <img src="/src/assets/images/aviso.webp" />
                  </p>
                  <p className="wysiwyg-text-align-left">
                    Tienes las siguientes opciones para potenciar tu aviso:
                  </p>
                  <ul>
                    <li style={{ listStyleType: "none" }}>
                      <ul>
                        <li>
                          <span>
                            <strong>Avisos similares</strong>: Tu aviso
                            aparecerá como recomendado en modelos similares al
                            suyo en la parte inferior de la ficha del vehículo.
                          </span>
                        </li>
                        <li>
                          <span>
                            <strong>Redes Sociales:</strong> Tu aviso aparecerá
                            en un post de Facebook y de Instagram*
                          </span>
                        </li>
                        <li>
                          <span>
                            <strong>Boletín</strong>
                            <strong>:</strong>
                            <span>
                              {" "}
                              Tu vehículo aparecerá en un boletín enviado por
                              Neoauto a sus usuarios.
                            </span>
                          </span>
                        </li>
                        <li className="wysiwyg-text-align-left">
                          <span>
                            <strong>Avisos impresos:</strong> Tu aviso será
                            publicado en la sección de Clasificados de los
                            diarios El Comercio y El Trome**
                          </span>
                          <span>
                            <br />
                          </span>
                          <span>
                            <img src="/src/assets/images/repo.webp" />
                          </span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    <em>
                      *La publicación en Redes Sociales será programado según
                      disponibilidad del feed de Neoauto, el cual puede ser
                      hasta en 2 semanas aproximadamente. La foto y descripción
                      se tomarán del aviso publicado.&nbsp;
                    </em>
                  </p>
                  <p>
                    <span>
                      <em>
                        **Si tu aviso tiene una opción impresa deberás verificar
                        el texto a programarse. Una vez pagado, no hay opción a
                        cambios en el texto impreso
                      </em>
                      .
                    </span>
                  </p>
                  <h2>
                    <strong>Realiza el pago de tu aviso:</strong>
                  </h2>
                  <p>
                    <strong>9.</strong> Para finalizar, seleccionar el tipo de
                    comprobante* y medio de pago de tu preferencia. Una vez
                    realizado, haz clic en{" "}
                    <span className="wysiwyg-color-orange110">
                      <strong>Pagar.</strong>
                    </span>
                  </p>
                  <p>
                    Para más información acerca de nuestros medios de pago, haz
                    clic <strong>aquí.</strong>
                  </p>
                  <p className="wysiwyg-text-align-left">
                    <img src="/src/assets/images/detalle.webp" />
                  </p>
                  <p className="wysiwyg-text-align-left">
                    <em>
                      *Deberás validar los datos que aparezcan cuando solicites
                      tu boleta o factura, ya que una vez emitido el comprobante
                      de pago, no podrás cambiar esta información. Si necesitas
                      ayuda, por favor ingresa{" "}
                      <a
                        href="https://centraldeayuda.neoauto.com/hc/es/requests/new"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        aquí.
                      </a>
                    </em>
                  </p>
                  <p className="wysiwyg-text-align-left">&nbsp;</p>
                  <h4>
                    <strong>
                      Una vez hayas realizado del pago de tu aviso, este se
                      publicará automáticamente. Puedes revisar tu publicación y
                      los resultados en la sección{" "}
                      <span className="wysiwyg-color-orange110">
                        Avisos Activos
                      </span>{" "}
                      de tu cuenta.
                    </strong>
                  </h4>
                  <p>
                    <img src="/src/assets/images/c_uenta.webp" />
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Si deseas saber cómo hacer una buena publicación, te
                    compartimos <strong>estas sugerencias.</strong>
                  </p>
                  <p>&nbsp;</p>
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
                  <li>
                    <a href="">¿Como contacto al Vendedor?</a>
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
                      ¿Cómo me registro en TUAUTOpe?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      ¿Cómo subir la foto de mi aviso?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      ¿Qué debo hacer si ocurrió un error al publicar un aviso?
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      Ya vendí mi vehículo ¿Cómo retiro mi aviso?
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
                  <a
                    data-auth-action="signin"
                    rel="nofollow"
                    href="/hc/es/signin?return_to=https%3A%2F%2Fcentraldeayuda.neoauto.com%2Fhc%2Fes%2Farticles%2F15034497584020--C%25C3%25B3mo-publicar-un-veh%25C3%25ADculo-en-NeoAuto-"
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

export const Cookie = () => {
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
              <a href="privacidad_menu">
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
                    <a href="{{route('Aliados')}}" className="sidenav-item">
                      Aliados comerciales de Neoauto SAC
                    </a>
                  </li>
                  <li>
                    <a
                      href="{{route('Financiamiento')}}"
                      className="sidenav-item"
                    >
                      Financiamiento Santander Consumer
                    </a>
                  </li>
                  <li>
                    <a
                      href="{{route('Consentimiento')}}"
                      className="sidenav-item"
                    >
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li>
                    <a
                      href="{{route('Cokkie')}}"
                      className="sidenav-item current-article"
                    >
                      POLÍTICA DE COKKIE DE NEOAUTO
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Privacidad')}}" className="sidenav-item">
                      POLÍTICA DE PRIVACIDAD DE NEOAUTO
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Politicas')}}" className="sidenav-item">
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a
                      href="{{route('Terminos_condiciones')}}"
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
              <h1 title="Política de Cookies" className="article-title">
                Política de Cookies
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
                        dateTime="2020-06-04T22:37:14Z"
                        title="2020-06-04 17:37"
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
                  <p>
                    <strong>Política de Cookies</strong>
                  </p>
                  <p>
                    La presente política de privacidad (la “Política”) tiene por
                    finalidad informar la manera en que Neoauto S.A.C. (en
                    adelante, Neoauto), con R.U.C. Nro. 20605850708, con
                    domicilio en Av. Juan de Arona Nro. 755, piso 3, distrito de
                    San Isidro, provincia y departamento de Lima, trata la
                    información y datos personales de sus usuarios que recopila
                    a través de Cookies y otras tecnologías.
                  </p>
                  <p>
                    La Política describe toda la tipología de información que se
                    recaba de los Usuarios mediante las formas anteriormente
                    detalladas, y todos los tratamientos que se realizan con
                    dicha información. El Usuario declara haber leído y aceptado
                    de manera previa y expresa la Política sujetándose a sus
                    disposiciones.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>¿A quiénes les alcanza de la Política?</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Para efectos de esta Política toda referencia a “nos”,
                    “nosotros” o “nuestra”, se refiere al Neoauto, y cuando se
                    refiera a “el Usuario” o “los Usuarios”, se entenderá a
                    todos aquellos distintos al Neoauto que naveguen dentro de
                    los Sitios Web y las Aplicaciones del Neoauto.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Esta Política no se aplica a sitios web, servicios,
                    productos o aplicaciones de terceros, incluso si pueden ser
                    accedidos a través de nuestros servicios.
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>¿Qué son las Cookies?</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    Las Cookies son archivos que el sitio web o aplicación
                    instala en el navegador o dispositivo (Smartphone, tableta,
                    televisión conectada) al acceder o durante el recorrido en
                    determinadas páginas web o aplicaciones, y sirven para
                    almacenar información sobre tu visita.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Las cookies permiten almacenar ciertos datos sobre el
                    dispositivo del Usuario o sobre la navegación del mismo, es
                    decir, recopila información estadística, facilita ciertas
                    funcionalidades técnicas, ver qué páginas han sido
                    visitadas, el tiempo de conexión, la ciudad a la que está
                    asignada la dirección IP desde la que se accede, el número
                    de nuevos Usuarios, la frecuencia y reincidencia de las
                    visitas, el tiempo de visita, el navegador o el operador o
                    tipo de terminal desde el que se realiza la visita, analiza
                    el funcionamiento de una página, detecta problemas técnicos,
                    entre otros; y dependiendo de la información que contengan y
                    de la forma en que utilice su equipo, pueden utilizarse para
                    reconocer al usuario. La mayoría de las cookies se asocian a
                    un usuario, ordenador y dispositivo no identificable en el
                    sentido de que no proporcionan referencias que permitan
                    conocer datos personales. Un navegador sólo permite que un
                    sitio web acceda a las cookies que éste establece, no a las
                    que establecen otros sitios Web.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>¿Qué tipo de Cookies usamos?</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>Neoauto utiliza los siguientes tipos de cookies:</p>
                  <p>&nbsp;</p>
                  <ul>
                    <li>
                      <strong>Por finalidad</strong>
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <ul>
                    <li>
                      <strong>Cookies Técnicas</strong>.-&nbsp;Permiten navegar
                      al usuario en la página web, plataforma o aplicación, así
                      como la utilización de las diferentes opciones que existen
                      en ellas.
                    </li>
                    <li>
                      <strong>Cookies de Geolocalización</strong>.-&nbsp;
                      Identifica el lugar del usuario.
                    </li>
                    <li>
                      <strong>Cookies de Personalización</strong>.- Permiten
                      acceder a un servicio dependiendo de las características
                      del usuario, como idioma, tipo de navegador, entre otros.
                    </li>
                    <li>
                      <strong>Cookies Analíticas</strong>.-&nbsp;Mide la
                      actividad del sitio web para elaboración de perfiles de
                      navegación para incorporar mejoras.
                    </li>
                    <li>
                      <strong>Cookies Publicitarias</strong>.- Ayuda a gestionar
                      la oferta publicitaria, adecuando el contenido al servicio
                      solicitado por el usuario.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>2 Por duración</strong>
                  </p>
                  <p>&nbsp;</p>
                  <ul>
                    <li>
                      <strong>Cookies de Sesión</strong>.- Recaban y almacenan
                      datos mientras el usuario accede a una página web. No se
                      almacenan en el ordenador y se eliminan cuando el usuario
                      cierra el navegador o su cesión caduca.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <ul>
                    <li>
                      <strong>Cookies Permanentes</strong>.-&nbsp;Los datos se
                      mantienen almacenados en el ordenador del usuario como un
                      historial. Son tratados cuando el usuario abandona la
                      página web y pueden ser eliminadas por éste.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>3 Por gestión</strong>
                  </p>
                  <p>&nbsp;</p>
                  <ul>
                    <li>
                      Cookies de TUAUTOpe.-&nbsp;Se envían desde un terminal de
                      TUAUTOpe al ordenador del usuario.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <ul>
                    <li>
                      Cookies de Terceros.-&nbsp;Se envían desde un equipo o
                      dominio de un tercero al ordenador del usuario o la
                      información recolectada sea gestionada por un tercero.
                      Cabe precisar que, las cookies de terceros podrían
                      encontrarse dentro de los sitios web y aplicaciones de
                      Neoauto; sin embargo, al no ser administrados por
                      nosotros, es que no garantizamos que sus políticas cumplan
                      con la normativa legal actual.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    Por otro lado, los Cookies de terceros que se encuentran en
                    nuestros sitios web y aplicaciones son las siguientes:
                  </p>
                  <p>&nbsp;</p>
                  <table width={543}>
                    <tbody>
                      <tr>
                        <td width={145}>
                          <p>CHARTBEAT</p>
                        </td>
                        <td width={398}>
                          <p>
                            <a href="https://static.chartbeat.com/opt-out.html">
                              https://static.chartbeat.com/opt-out.html
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145}>
                          <p>GOOGLE ANALYTICS</p>
                        </td>
                        <td width={398}>
                          <p>
                            <a href="https://tools.google.com/dlpage/gaoptout">
                              https://tools.google.com/dlpage/gaoptout
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145}>
                          <p>CXENSE</p>
                        </td>
                        <td width={398}>
                          <p>
                            <u>
                              https://www.cxense.com/preferences?optOutStatus=false
                            </u>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145}>
                          <p>FACEBOOK</p>
                        </td>
                        <td width={398}>
                          <p>
                            <u>https://www.facebook.com/policy/cookies/</u>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145}>
                          <p>DFP/ADX</p>
                        </td>
                        <td width={398}>
                          <p>
                            &nbsp;HYPERLINK
                            "https://adssettings.google.com/"&nbsp;
                            <u>https://adssettings.google.com/</u>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145}>
                          <p>SMARTADSERVER</p>
                        </td>
                        <td width={398}>
                          <p>
                            <a href="http://www.smartadserver.com/diffx/optout/IABOptout.aspx">
                              http://www.smartadserver.com/diffx/optout/IABOptout.aspx
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145}>
                          <p>CRITEO</p>
                        </td>
                        <td width={398}>
                          <p>
                            <a href="https://www.criteo.com/privacy/">
                              https://www.criteo.com/privacy/
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145}>
                          <p>OPENX</p>
                        </td>
                        <td width={398}>
                          <p>
                            <a href="https://docs.openx.com/Content/publishers/aud_segment_optout_howitworks.html">
                              https://docs.openx.com/Content/publishers/aud_segment_optout_howitworks.html
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145}>
                          <p>OUTBRAIN</p>
                        </td>
                        <td width={398}>
                          <p>
                            <a href="https://www.outbrain.com/legal/">
                              https://www.outbrain.com/legal/
                            </a>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145}>
                          <p>&nbsp;TROVIT</p>
                        </td>
                        <td width={398}>
                          <p>
                            <u>
                              https://corporate.trovit.com/desactivar-cookies-es/
                            </u>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145}>
                          <p>INDEED</p>
                        </td>
                        <td width={398}>
                          <p>
                            <u>https://www.indeed.com.pe/legal#cookies</u>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145}>
                          <p>EMBLUE</p>
                        </td>
                        <td width={398}>
                          <p>
                            <u>
                              http://www.embluemail.com/terminos-y-condiciones/
                            </u>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <p>
                    <strong>
                      ¿Para qué usamos la información que es recolectada a
                      través “Cookies”?
                    </strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Neoauto puede utilizar la información recolectada a través
                    de “Cookies” para los siguientes fines:
                  </p>
                  <p>
                    <strong>
                      &nbsp;1 Operatividad y Seguridad del Sistema
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Uso de “Cookies” u otras tecnologías para acceder a los
                      sitios web, servicios, aplicaciones, herramientas, entre
                      otros, de Neoauto.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <ul>
                    <li>
                      Los “Cookies” u otras tecnologías identificarán y
                      analizarán los comportamientos de los Usuarios en los
                      sitios web y aplicaciones de Neoauto, con el fin de
                      identificar actos irregulares, prevenir actividad
                      fraudulenta y mejorar la seguridad de nuestros servicios.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>2 Funcionalidad del Sistema</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    A través de las cookies, los Sitios Web y las Aplicaciones
                    podrán utilizar la información de su visita para realizar
                    evaluaciones, cálculos estadísticos sobre datos anónimos y
                    conteo de visitas a los sitios web, con el fin de garantizar
                    la continuidad del servicio y realizar mejoras.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>3 Envío de Contenido Personalizado</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Los Sitios Web y las Aplicaciones también utilizarán la
                    información obtenida a través de las Cookie u otras
                    tecnologías s para analizar los hábitos de navegación del
                    Usuario y las búsquedas realizadas por éste, a fin de
                    mejorar sus iniciativas comerciales y promocionales,
                    mostrando publicidad que pueda ser de su interés, y
                    personalizando los contenidos.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>
                      Control de los “Cookies” y otras tecnologías
                    </strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Las cookies pueden borrarse del disco duro si el Usuario así
                    lo desea. La mayoría de los navegadores aceptan las cookies
                    de forma automática, pero le permiten al Usuario cambiar la
                    configuración de su navegador para que rechace la
                    instalación de cookies, sin que ello perjudique su acceso y
                    navegación por los Sitios Web y las Aplicaciones.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Es importante recalcar que, en algunos casos, el impedir la
                    generación de algunos “Cookies” específicos; podría generar
                    que varias funciones dejen de estar disponibles o que partes
                    del sitio web no se carguen.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    En el supuesto de que en los Sitios Web y las Aplicaciones
                    se dispusieran enlaces o hipervínculos hacia otros lugares
                    de Internet propiedad de terceros que utilicen cookies,
                    Neoauto no se hace responsable ni controla el uso de cookies
                    por parte de dichos terceros.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Consentimiento</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Neoauto puede tratar la información recopilada a través de
                    “Cookies”, siempre que el Usuario brinde su consentimiento
                    al ingresar a cualquiera de nuestros sitios web y
                    aplicaciones, salvo en los casos en que las “Cookies” sean
                    necesarias para la operatividad y navegación de las mismas.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    En caso de que el Usuario preste su consentimiento, Neoauto
                    podrá utilizar “Cookies” que permitan obtener información
                    acerca de sus preferencias, con el fin de personalizar
                    nuestros sitios web y aplicaciones, de acuerdo con sus
                    intereses.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>
                      Revisión y Modificación de la Política de Cookies
                    </strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Neoauto se reserva expresamente el derecho a modificar,
                    actualizar o completar en cualquier momento la presente
                    Política. Cualquier modificación, actualización o ampliación
                    producida en la presente Política será inmediatamente
                    publicada en los Sitios Web y las Aplicaciones.
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>Fecha de última actualización: 26/03/2020</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Disclaimer de Cookies</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    TUAUTOpe gestiona este sitio web y utiliza cookies y
                    tecnologías similares (en adelante "Cookies" propias y de
                    terceros. Acepte las condiciones para continuar navegando en
                    nuestro sitio web sin restricción alguna; de lo contrario,
                    algunas funciones podrían no estar disponibles. Puede
                    obtener más información en nuestra Política de Cookies.
                  </p>
                  <p>&nbsp;</p>
                  <p>Actualizado 04/06/2020</p>
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
                    <a href="{{route('Consentimiento')}}">
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Terminos_condiciones')}}">
                      {" "}
                      Condiciones Generales de Uso
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Privacidad')}}">
                      POLÍTICA DE PRIVACIDAD DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Politicas')}}">
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Aliados')}}">
                      Aliados comerciales de Tuautope SAC
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
                    <a href="{{route('Privacidad')}}" rel="nofollow">
                      POLÍTICA DE PRIVACIDAD DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Terminos_condiciones')}}" rel="nofollow">
                      Condiciones Generales de Uso
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Consentimiento')}}" rel="nofollow">
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Politicas')}}" rel="nofollow">
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      Paquete de Avisos
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

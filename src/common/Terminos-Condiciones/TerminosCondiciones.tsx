export const TerminosCondiciones = () => {
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
              <a href="cuentas">
                Cuentas, privacidad y términos de uso
              </a>
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
                    <a href="aliados" className="sidenav-item">
                      Aliados comerciales de TUAUTOpe SAC
                    </a>
                  </li>
                  <li>
                    <a
                      href="financiamiento"
                      className="sidenav-item"
                    >
                      Financiamiento Santander Consumer
                    </a>
                  </li>
                  <li>
                    <a
                      href="consentimiento"
                      className="sidenav-item"
                    >
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li>
                    <a href="cokkie" className="sidenav-item">
                      Política de Cookies
                    </a>
                  </li>
                  <li>
                    <a href="privacidad" className="sidenav-item">
                      POLÍTICA DE PRIVACIDAD DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a href="politicas" className="sidenav-item">
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a
                      href="terminos_condiciones"
                      className="sidenav-item current-article"
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
              <h1
                title=" Condiciones Generales de Uso"
                className="article-title"
              >
                Condiciones Generales de Uso
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
                        dateTime="2022-01-03T19:16:31Z"
                        title="2022-01-03 14:16"
                        data-datetime="relative"
                      >
                        hace 1 año
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
                  <p className="wysiwyg-text-align-center">
                    <span className="wysiwyg-font-size-large">
                      <strong>Términos y Condiciones</strong>
                    </span>
                  </p>
                  <ol>
                    <li>
                      <ol>
                        <li>
                          <strong> Datos de identificación</strong>
                        </li>
                      </ol>
                      <p>
                        Usted está visitando el Portal automotriz&nbsp;
                        <a href="{{route('inicio')}}">TUAUTOpe</a>&nbsp;(el
                        “Portal”), de titularidad de la empresa Neoauto S.A.C.
                        (en adelante Neoauto).
                      </p>
                      <p>
                        Denominación: TUAUTOpe S.A.C.
                        <br />
                        Domicilio: Calle Paracas No. 530, distrito de Pueblo
                        Libre , Provincia y Departamento de Lima.
                        <br />
                        R.U.C.: 20605850708
                        <br />
                        Registro: Personas Jurídicas de Lima - Partida
                        Electrónica 14450154
                        <br />
                        E-mail:&nbsp;
                        <a href="mailto:contacto@neoauto.com">
                          contacto@tuautope.com
                        </a>
                      </p>
                      <ol start={2}>
                        <li>
                          <strong> Acceso y aceptación del Usuario</strong>
                        </li>
                      </ol>
                      <p>
                        Estos Términos y Condiciones regulan el acceso y
                        utilización del Portal por parte del Usuario. La
                        condición de “Usuario” es adquirida por la mera
                        navegación y/o utilización del Portal.
                      </p>
                      <p>
                        El acceso y utilización del Portal por parte del Usuario
                        tiene carácter libre y gratuito, con excepción de
                        algunos servicios suministrados por Tuautope o por
                        terceros a través del Portal que están sujetos a
                        condiciones específicas.
                      </p>
                      <p>
                        En ese sentido, el Usuario declara conocer también la
                        plataforma digital de pagos “
                        <strong>PAGOEFECTIVO”</strong> cuyos términos y
                        condiciones se encuentran publicados en el Portal y en
                        el Portal de “PAGOEFECTIVO”, y que es una solución de
                        recaudo y pagos que opera bajo de la generación en línea
                        de un código que puede ser pagado a través de una
                        transferencia bancaria, pagos de servicios en canales
                        digitales bancarios o en efectivo en las redes con las
                        que se tiene interconexión. Permite realizar compras por
                        diferentes canales de ventas como internet, televentas,
                        ventas no presenciales y cualquier otro proceso de pago
                        a fin y poder pagar a través de los canales online de
                        los principales Bancos del país, así como en la red de
                        Centros de Pago autorizados y permite a los
                        establecimientos y/o comercios electrónicos afiliarse a
                        esta plataforma digital de pagos para actuar como un
                        medio de pago dentro de sus canales de venta (en
                        adelante “PAGOEFECTIVO”).
                      </p>
                      <p>
                        El Usuario declara conocer y acepta que algunos de los
                        servicios prestados por Neoauto o por terceros, podrían
                        tener alguna contraprestación que se establecerá
                        expresamente en cada caso, y que podrían canalizarse y/o
                        procesarse a través de <strong>PAGOEFECTIVO</strong>{" "}
                        como medio de pago.Asimismo, el acceso y navegación por
                        parte del Usuario en el Portal implica la aceptación sin
                        reservas de todas las disposiciones incluidas en los
                        presentes Términos y Condiciones.
                      </p>
                      <ol start={3}>
                        <li>
                          <strong>
                            {" "}
                            Modificación de los Términos y Condiciones
                          </strong>
                        </li>
                      </ol>
                      <p>
                        Tuautope se reserva expresamente el derecho a modificar,
                        actualizar o ampliar en cualquier momento los presentes
                        Términos y Condiciones.
                      </p>
                      <p>
                        Cualquier modificación, actualización o ampliación
                        producida en los presentes Términos y Condiciones será
                        inmediatamente publicada siendo responsabilidad del
                        Usuario revisar los Términos y Condiciones vigentes al
                        momento de la navegación.
                      </p>
                      <p>
                        Cada Usuario tendrá el derecho de no aceptar las
                        variaciones de los presentes Términos y Condiciones, en
                        cuyo caso deberá informar a Tuautope. De verificarse el
                        rechazo por parte de un Usuario a tales modificaciones,
                        se le dará inmediatamente de baja como tal,
                        inhabilitándolo en adelante para la utilización del
                        servicio.
                      </p>
                      <ol start={4}>
                        <li>
                          <strong> Uso del Portal TUAUTOpe.com</strong>
                        </li>
                      </ol>
                      <p>
                        Los servicios que se ofrecen a través del Portal se
                        encuentran disponibles sólo para aquellas personas que
                        puedan celebrar contratos legalmente vinculantes de
                        acuerdo a lo establecido por la ley aplicable. Al
                        acceder al Portal, el Usuario declara ser mayor de 18
                        años de edad y encontrarse facultado a asumir
                        obligaciones vinculantes con respecto a cualquier tipo
                        de responsabilidad que se produzca por el uso del
                        Portal.
                      </p>
                      <p>
                        El Usuario se compromete a utilizar el Portal de
                        conformidad con la Ley, los presentes Términos y
                        Condiciones, la moral, las buenas costumbres y el orden
                        público. En este sentido, la utilización por parte del
                        Usuario del Portal se realizará de conformidad con las
                        siguientes directivas:
                      </p>
                      <ul>
                        <li>
                          El Usuario se obliga a no utilizar el Portal con fines
                          o efectos ilícitos o contrarios al contenido de los
                          presentes Términos y Condiciones, lesivos de los
                          intereses o derechos de terceros, o que de cualquier
                          forma pueda dañar, inutilizar, deteriorar la
                          plataforma o impedir un normal disfrute del Portal por
                          otros Usuarios.
                        </li>
                        <li>
                          El Usuario se compromete expresamente a no destruir,
                          alterar, inutilizar o, de cualquier otra forma, dañar
                          los datos, programas o documentos electrónicos y demás
                          que se encuentren en el Portal.
                        </li>
                        <li>
                          El Usuario se compromete a no obstaculizar el acceso a
                          otros Usuarios mediante el consumo masivo de los
                          recursos informáticos a través de los cuales Neoauto
                          presta el servicio, así como a no realizar acciones
                          que dañen, interrumpan o generen errores en dichos
                          sistemas o servicios.
                        </li>
                        <li>
                          El Usuario se compromete a no intentar penetrar o
                          probar la vulnerabilidad de un sistema o de una red
                          propia del Portal, así como quebrantar las medidas de
                          seguridad o de autenticación del mismo.
                        </li>
                        <li>
                          El Usuario se compromete a hacer un uso adecuado de
                          los contenidos que se ofrecen en el Portal y a no
                          emplearlos para incurrir en actividades ilícitas, así
                          como a no publicar ningún tipo de contenido ilícito.
                        </li>
                        <li>
                          El Usuario se compromete a no utilizar el presente
                          Portal para, a modo de referencia, más no limitativo,
                          enviar correos electrónicos masivos (spam) o correos
                          electrónicos con contenido amenazante, abusivo,
                          hostil, ultrajante, difamatorio, vulgar, obsceno o
                          injurioso. Asimismo, se compromete a no utilizar un
                          lenguaje ilícito, abusivo, amenazante, obsceno,
                          vulgar, racista, ni cualquier lenguaje que se
                          considere inapropiado, ni anunciar o proporcionar
                          enlaces a sitios que contengan materia ilegal u otro
                          contenido que pueda dañar o deteriorar la red personal
                          o computadora de otro Usuario.
                        </li>
                      </ul>
                      <p>
                        TUAUTOpe se reserva la potestad de determinar a su libre
                        criterio, cuándo se produce la vulneración de cualquiera
                        de los preceptos enunciados en el presente apartado por
                        parte de los contenidos publicados por algún Usuario,
                        así como la potestad de eliminar dichos contenidos del
                        Portal. Asimismo, todo Usuario tiene la posibilidad de
                        denunciar cualquier conducta o contenido de otros
                        Usuarios que considere vulneran sus derechos o los
                        preceptos establecidos anteriormente.
                      </p>
                      <p>
                        En el caso en que un Usuario infrinja lo establecido en
                        el presente apartado, TUAUTOpe procederá a realizar
                        alguna de las siguientes acciones, dependiendo de la
                        gravedad o reiteración de la infracción:
                      </p>
                      <p>
                        <br />
                        1° Amonestación al Usuario.
                      </p>
                      <p>2° Suspensión temporal de la cuenta del Usuario.</p>
                      <p>3° Cancelación definitiva de la cuenta del Usuario.</p>
                      <p>
                        4° Acciones por responsabilidades civiles o penales.
                      </p>
                      <ol start={5}>
                        <li>
                          <strong>
                            {" "}
                            Registro y responsabilidad por contraseñas
                          </strong>
                        </li>
                      </ol>
                      <p>
                        El Usuario podrá navegar por el Portal sin necesidad de
                        registrarse en una cuenta, sin embargo, para
                        determinados servicios que ofrece el Portal, podrá
                        hacerlo ingresando sus datos personales en el formulario
                        de registro implementado a tal efecto. El procedimiento
                        de registro es totalmente gratuito. La cuenta de Usuario
                        no debe incluir el nombre de otra persona con la
                        intención de hacerse pasar por esa persona, ni ser
                        ofensivo, vulgar, obsceno o contrario a la moral y las
                        buenas costumbres.
                      </p>
                      <p>
                        Los Usuarios registrados contarán con una clave personal
                        o password con el cual podrán acceder a cuenta personal.
                        Cada Usuario es responsable de su propia contraseña, y
                        deberá mantenerla bajo absoluta reserva y
                        confidencialidad, sin revelarla o compartirla, en ningún
                        caso, con terceros. Cada Usuario es responsable de todas
                        las acciones realizadas mediante el uso de su
                        contraseña. Toda acción realizada a través de la cuenta
                        personal de un Usuario se presume realizada por el
                        Usuario titular de dicha cuenta. &nbsp;
                      </p>
                      <p>
                        En el caso de que un Usuario identificara que un tercero
                        conociera y usara su contraseña y su cuenta personal,
                        deberá notificarlo de manera inmediata a TUAUTOpe.
                      </p>
                      <p>
                        TUAUTOpe no será responsable de cualquier daño
                        relacionado con la divulgación del nombre de un Usuario
                        o de su contraseña, o del uso que cualquier persona de
                        al nombre de un Usuario o contraseña.
                      </p>
                      <p>
                        TUAUTOpe puede requerir el cambio de un nombre de
                        Usuario y contraseña cuando considere que la cuenta ya
                        no es segura, o si se recibe alguna queja o denuncia
                        respecto al nombre de un Usuario que viole derechos de
                        terceros. Asimismo, puede rechazar el registro de un
                        Usuario, cancelar su cuenta o no permitir el acceso a
                        los servicios que ofrece el Portal, a modo de
                        referencia, mas no limitativo, en caso se incumpla con
                        los presentes Términos y Condiciones o se incurra en
                        posibles infracciones de carácter legal o se efectúe un
                        uso inadecuado del Portal.
                      </p>
                      <ol start={6}>
                        <li>
                          <strong> Propiedad Intelectual</strong>
                        </li>
                      </ol>
                      <p>
                        Todos los derechos de propiedad intelectual del Portal y
                        de sus contenidos y diseños pertenecen a Neoauto o, en
                        su caso, a terceras personas. En aquellos casos en que
                        sean propiedad de terceros contamos con las licencias
                        necesarias para su utilización.
                      </p>
                      <p>
                        Quedan expresamente prohibidas la reproducción, la
                        distribución, la transformación, la comunicación pública
                        y puesta a disposición, de la totalidad o parte de los
                        contenidos del Portal, en cualquier soporte y por
                        cualquier medio técnico, sin la autorización de
                        TUAUTOpe. El Usuario se compromete a respetar los
                        derechos de propiedad industrial e intelectual de
                        titularidad de Neoauto y de terceros.
                      </p>
                      <p>
                        Asimismo, queda expresamente prohibido la utilización o
                        reproducción de cualquier marca registrada, nombre o
                        logotipo que figure en el Portal sin la autorización
                        previa y por escrito de Neoauto, así como la utilización
                        del software que opera el Portal con excepción de
                        aquellos usos permitidos bajo estos Términos y
                        Condiciones.
                      </p>
                      <ol start={7}>
                        <li>
                          <strong>
                            {" "}
                            Contenidos publicados por los Usuarios
                          </strong>
                        </li>
                      </ol>
                      <p>
                        TUAUTOpe no garantiza la veracidad, exactitud,
                        exhaustividad y actualidad de los contenidos publicados
                        por los Usuarios en el Portal. Es responsabilidad del
                        Usuario garantizar la autenticidad, veracidad y
                        actualización de la información que publica en el
                        Portal. En cualquier caso el Usuario será el único
                        responsable de las manifestaciones falsas o inexactas
                        que realice y de los perjuicios que pudiera causar al
                        Portal o a terceros por la información que facilite.
                      </p>
                      <p>
                        TUAUTOpe no se hace responsable por los contenidos ya
                        sean estos, imágenes, fotos, textos o cualquier otro
                        tipo de material digital, publicados por terceros en el
                        Portal y traslada toda responsabilidad a cada Usuario
                        proveedor de dichos contenidos.
                      </p>
                      <p>
                        El Usuario deberá ofrecer los bienes en la categoría y
                        subcategorías apropiadas. Las publicaciones podrán
                        incluir textos descriptivos, gráficos, fotografías y
                        otros contenidos, siempre que no violen ninguna
                        disposición de los presentes Términos y Condiciones o la
                        Política de Publicación del Portal. El producto ofrecido
                        por el Usuario debe ser exactamente descrito en cuanto a
                        sus condiciones.
                      </p>
                      <p>
                        Se entiende y presume que mediante la inclusión de un
                        bien en el Portal, el Usuario tiene la intención y el
                        derecho de vender el bien por él ofrecido, o está
                        facultado para ello por su titular y lo tiene disponible
                        para su entrega inmediata. Se establece que los precios
                        de los productos publicados deberán ser expresados con
                        IGV incluido cuando corresponda la aplicación del mismo.
                      </p>
                      <ol start={8}>
                        <li>
                          <strong>
                            {" "}
                            Contenidos publicados por encargo de los
                            Concesionarios y/o Marcas
                          </strong>
                        </li>
                      </ol>
                      <p>
                        A través del portal web de TUAUTOpe, el Usuario podrá
                        realizar la reserva del vehículo ofrecido por los
                        Concesionarios y/o Marcas, a cambio de una
                        contraprestación económica; no obstante, &nbsp;si el
                        Usuario tuviera algún reclamo referente a dicha reserva,
                        o si deseara solicitar la devolución de su dinero, el
                        trámite deberá realizarlo directamente con los
                        Concesionarios y/o Marcas.
                      </p>
                      <p>
                        TUAUTOpe no garantiza la veracidad, exactitud,
                        exhaustividad y actualidad de los contenidos publicados
                        por los Concesionarios y/o Marcas, y tampoco se hace
                        responsable por el buen funcionamiento comercial o
                        publicitario de los autos ofrecidos en el portal web, en
                        la medida que, las imágenes, fotos, textos y cualquier
                        tipo de información referente a los vehículos ofrecidos
                        en venta, son proporcionadas directamente por los
                        Concesionarios y/o Marcas.
                      </p>
                      <p>
                        Por ello, los Concesionarios y/o Marcas asumen toda la
                        responsabilidad si es que existiera algún caso de
                        publicidad engañosa, inexacta o cualquier vulneración a
                        la legislación nacional vigente referente a materia
                        publicitaria.
                      </p>
                      <p>
                        Asimismo, TUAUTOpe no interviene en la negociación o
                        contrato realizado entre los Concesionaros y/o Marcas y
                        los usuarios de TUAUTOpe, en la medida que, TUAUTOpe
                        solo funciona como un intermediario entre estos.
                      </p>
                      <p>
                        Por tal motivo, TUAUTOpe no asume ningún tipo de
                        responsabilidad, presente o futura, por la idoneidad o
                        calidad del vehículo ofrecido o vendido, siendo esta
                        exclusiva responsabilidad de los Concesionarios y/o
                        Marcas.
                        <br />
                        <br />
                        <strong>&nbsp;- </strong>
                        <strong>
                          Campaña <em>Autos a Precios de Regalo</em> – Neoauto
                          &nbsp;
                        </strong>
                      </p>
                      <p>
                        <br />
                        Campaña válida del 08 al 16 de Noviembre del 2020. La
                        propuesta de “Autos de Regalo” consiste en ofrecer a los
                        consumidores un único lugar donde podrán encontrar los
                        diferentes descuentos ofrecidos por los Concesionarios
                        y/o Marcas del rubro Automotriz, además de un amplio
                        catálogo de vehículos. Para ello, las Concesionarios y/o
                        Marcas participantes podrán comunicar sus ofertas y/o
                        precios exclusivos en la web de Neoauto y en sus canales
                        de comunicación (canales a elección por equipo de
                        neoauto). <br />
                        <br />A través del portal web de Neoauto, el Usuario
                        podrá realizar el contacto del vehículo ofrecido por los
                        Concesionarios y/o Marcas durante la campaña. No
                        obstante, si el Usuario tuviera algún reclamo referente
                        a dicha promoción u oferta, el trámite deberá realizarlo
                        directamente con los Concesionarios y/o Marcas.
                      </p>
                      <p>
                        TUAUTOpe no garantiza la veracidad, exactitud,
                        exhaustividad y actualidad de los contenidos publicados
                        por los Concesionarios y/o Marcas, y tampoco se hace
                        responsable por el buen funcionamiento comercial o
                        publicitario de los autos ofrecidos en el portal web, en
                        la medida que, las imágenes, fotos, textos y cualquier
                        tipo de información referente a los vehículos ofrecidos
                        en venta, son proporcionadas directamente por los
                        Concesionarios y/o Marcas.
                      </p>
                      <p>
                        Por ello, los Concesionarios y/o Marcas asumen toda la
                        responsabilidad si es que existiera algún caso de
                        publicidad engañosa, inexacta o cualquier vulneración a
                        la legislación nacional vigente referente a materia
                        publicitaria.
                      </p>
                      <p>
                        Asimismo, TUAUTOpe no interviene en la negociación o
                        contrato realizado entre los Concesionaros y/o Marcas y
                        los usuarios de TUAUTOpe, en la medida que, TUAUTOpe
                        solo funciona como un intermediario entre estos.
                      </p>
                      <p>
                        Por tal motivo, TUAUTOpe no asume ningún tipo de
                        responsabilidad, presente o futura, por la idoneidad o
                        calidad del vehículo ofrecido o vendido, siendo esta
                        exclusiva responsabilidad de los Concesionarios y/o
                        Marcas.
                      </p>
                      <p>
                        <br />
                        <br />
                      </p>
                      <ol start={9}>
                        <li>
                          <strong> Enlaces de terceros</strong>
                        </li>
                      </ol>
                      <p>
                        TUAUTOpe se encuentra facultado para disponer libremente
                        de los espacios que no han sido objeto de alquiler en su
                        portal web, para los fines que estime pertinentes,
                        incluyendo la colocación de enlaces, links, banners,
                        botones, herramientas de búsqueda o cualquier medio que
                        permita a los consumidores finales acceder a sitios web
                        pertenecientes a terceros. En tal sentido, los espacios
                        que no han sido contratados, inclusive los que se
                        encuentran dentro de la ficha del anunciante, podrán ser
                        utilizados de la forma que TUAUTOpe estime conveniente,
                        pudiendo ser utilizados para fines publicitarios a
                        discrecionalidad
                      </p>
                      <p>
                        En el supuesto de que en el Portal se dispusieran
                        enlaces o hipervínculos hacia otros sitios de Internet,
                        TUAUTOpe declara que no ejerce ningún tipo de control
                        sobre dichos sitios y contenidos. En ningún caso
                        TUAUTOpe asumirá responsabilidad alguna por los
                        contenidos de algún enlace perteneciente a una web
                        ajena, ni garantizará la disponibilidad técnica,
                        calidad, fiabilidad, exactitud, veracidad, validez y
                        constitucionalidad de cualquier material o información
                        contenida en cabeza de los hipervínculos u otros lugares
                        de Internet.
                      </p>
                      <p>
                        Estos enlaces se proporcionan únicamente para informar
                        al Usuario sobre la existencia de otras fuentes de
                        información sobre un tema concreto, y la inclusión de un
                        enlace no implica la aprobación de la página web
                        enlazada por parte de TUAUTOpe.
                      </p>
                      <ol start={10}>
                        <li>
                          <strong>
                            {" "}
                            Limitación de responsabilidad e indemnidad
                          </strong>
                        </li>
                      </ol>
                      <p>
                        Salvo que así lo establezca la legislación aplicable de
                        obligado cumplimiento, el uso que el Usuario haga del
                        Portal o de todas las funcionalidades que el Portal
                        ofrece, incluyendo cualquier contenido, publicación o
                        herramienta contenida en la misma, se ofrece “tal cual”
                        y “según su disponibilidad” sin declaraciones o
                        garantías de ningún tipo, tanto explícitas como
                        implícitas, incluidas entre otras, las garantías de
                        comerciabilidad, adecuación a un fin particular y no
                        incumplimiento. TUAUTOpe no garantiza que el Portal sea
                        siempre seguro o esté libre de errores, ni que funcione
                        siempre sin interrupciones, retrasos o imperfecciones.
                      </p>
                      <p>
                        TUAUTOpe no se hace responsable de los posibles daños o
                        perjuicios en el Portal, que se puedan derivar de
                        interferencias, omisiones, interrupciones, virus
                        informáticos, averías o desconexiones en el
                        funcionamiento operativo de este sistema electrónico,
                        motivado por causas ajenas a Neoauto, de retrasos o
                        bloqueos en el uso de este sistema electrónico causados
                        por deficiencias o sobrecargas en el sistema de Internet
                        o en otros sistemas electrónicos, así como también de
                        daños que puedan ser causados por terceras personas
                        mediante intromisiones ilegítimas fuera del control de
                        TUAUTOpe.
                      </p>
                      <p>
                        Asimismo, TUAUTOpe no se hace responsable por la
                        calidad, utilidad e idoneidad de los productos
                        contratados por el Usuario en el Portal. En este
                        sentido, TUAUTOpe no responderá por las posibles
                        reclamaciones que puedan formular los Usuarios
                        relacionadas con la calidad o adecuación de los
                        productos o bienes contratados con los
                        anunciantes.&nbsp; El Usuario conoce y acepta que al
                        realizar operaciones con otros Usuarios o terceros lo
                        hace bajo su propia cuenta y riesgo, y se compromete a
                        mantener al margen a TUAUTOpe, sus directivos,
                        empleados, representantes y apoderados de todo reclamo
                        que pueda llegar a entablar en contra e otros Usuarios
                        del Portal.
                      </p>
                      <ol start={11}>
                        <li>
                          <strong> Datos de Carácter Personal</strong>
                        </li>
                      </ol>
                      <p>
                        Los distintos tratamientos de datos personales que
                        TUAUTOpe realiza a través del Portal, así como las
                        finalidades de dichos tratamientos serán detallados
                        específicamente en la&nbsp;
                        <strong>Política de Privacidad&nbsp;</strong>del Portal
                        a la que el Usuario podrá acceder a través del siguiente
                        enlace:{" "}
                        <a
                          href="https://centraldeayuda.neoauto.com/hc/es/articles/214974083"
                          target="_self"
                        >
                          Central ayuda
                        </a>
                        <a href="{{route('Preguntas')}}">&nbsp;</a>.
                      </p>
                      <ol start={12}>
                        <li>
                          <strong> Comunicaciones</strong>
                        </li>
                      </ol>
                      <p>
                        El Usuario acepta expresamente que la dirección de
                        correo electrónico consignada en el formulario de
                        registro será el medio de contacto oficial entre el
                        Portal y el Usuario, siendo absoluta responsabilidad de
                        este último verificar que dicho correo electrónico esté
                        siempre activo y funcional para poder recibir todas las
                        comunicaciones procedentes del Portal.
                      </p>
                      <p>
                        Los mensajes o comunicaciones del Portal a los Usuarios
                        sólo pueden provenir de las páginas o cuentas oficiales
                        de éste en redes sociales u otros medios. En caso se
                        detectara que algún Usuario está enviando comunicaciones
                        o realizando publicaciones en nombre del Portal, Neoauto
                        iniciará las acciones correctivas y legales pertinentes
                        a fin de proteger al resto de Usuarios del de posibles
                        riesgos de confusión.
                      </p>
                      <p>
                        De otro lado, toda comunicación que el Usuario desee
                        dirigir al Portal deberá realizarla a través de la
                        siguiente dirección de correo electrónico:&nbsp;
                        <a href="mailto:contacto@neoauto.com">
                          contacto@tuautope.com
                        </a>
                        &nbsp;o a través del canal de Central de Ayuda que el
                        Portal pone a disposición del Usuario:&nbsp;
                        <a href="{{route('Preguntas')}}">Central ayuda</a>.
                      </p>
                      <ol start={13}>
                        <li>
                          <strong> Fuerza mayor</strong>
                        </li>
                      </ol>
                      <p>
                        TUAUTOpe no será responsable por cualquier retraso o
                        falla en el rendimiento o la interrupción en la
                        prestación de los servicios que pueda resultar directa o
                        indirectamente de cualquier causa o circunstancia más
                        allá de su control razonable, incluyendo, pero sin
                        limitarse a fallas en los equipos o las líneas de
                        comunicación electrónica o mecánica, robo, errores del
                        operador, clima severo, terremotos o desastres
                        naturales, huelgas u otros problemas laborales, guerras,
                        o restricciones gubernamentales.
                      </p>
                      <ol start={14}>
                        <li>
                          <strong> Libro de reclamaciones</strong>
                        </li>
                      </ol>
                      <p>
                        Conforme a lo establecido en el Código de Protección y
                        Defensa del Consumidor, Ley N° 29571, el Portal pone a
                        disposición del Usuario un Libro de Reclamaciones
                        virtual a fin de que éste pueda registrar sus quejas o
                        reclamos formales sobre los servicios ofrecidos a través
                        del Portal. Éste puede ser encontrado en esta
                        dirección:&nbsp;
                        <a href="http://gec.pe/LibroReclamaciones/reclamo/p/neoauto.com">
                          http://gec.pe/LibroReclamaciones/reclamo/p/neoauto.com
                        </a>
                        .
                      </p>
                      <ol start={15}>
                        <li>
                          <strong> Autoridades y requerimientos legales</strong>
                        </li>
                      </ol>
                      <p>
                        TUAUTOpe coopera con las autoridades competentes y con
                        terceros para garantizar el cumplimiento de las leyes en
                        materia de protección de derechos de propiedad
                        industrial e intelectual, prevención del fraude,
                        protección al consumidor y otras materias.
                        <br />
                        <br />
                        Neoauto podrá revelar la información personal de
                        Usuarios del Portal bajo requerimiento de las
                        autoridades judiciales o gubernamentales competentes, en
                        la medida en que discrecionalmente lo entienda
                        necesario, para efectos de investigaciones conducidas
                        por ellas, cuando se trate de investigaciones de
                        carácter penal o de fraude, o las relacionadas con
                        piratería informática, la violación de derechos de
                        autor, infracción de derechos de propiedad intelectual o
                        otra actividad ilícita o ilegal que pueda exponer al
                        Portal o a sus Usuarios a cualquier responsabilidad
                        legal.
                      </p>
                      <p>
                        Asimismo, &nbsp;TUAUTOpe se reserva el derecho de
                        comunicar información sobre sus Usuarios a otros
                        Usuarios, a entidades o a terceros, cuando haya motivos
                        suficientes para considerar que la actividad de un
                        Usuario sea sospechosa de intentar o cometer un delito o
                        intentar perjudicar a otras personas. Este derecho será
                        utilizado por Neoauto a su entera discreción cuando lo
                        considere apropiado o necesario para mantener la
                        integridad y seguridad del Portal y la de sus Usuarios,
                        para hacer cumplir los presentes Términos y Condiciones,
                        y a efectos de cooperar con la ejecución y cumplimiento
                        de la ley.
                      </p>
                      <ol start={16}>
                        <li>
                          <strong>
                            {" "}
                            Inexistencia de sociedad o relación laboral
                          </strong>
                        </li>
                      </ol>
                      <p>
                        La participación de un Usuario en el Portal no
                        constituye ni crea contrato de sociedad, de
                        representación, de mandato, como así tampoco relación
                        laboral alguna entre dicho Usuario y TUAUTOpe.
                      </p>
                      <ol start={17}>
                        <li>
                          <strong> Cesión de posición contractual</strong>
                        </li>
                      </ol>
                      <p>
                        Los Usuarios autorizan expresamente la cesión de estos
                        Términos y Condiciones y de su información personal en
                        favor de cualquier persona que (i) quede obligada por
                        estos Términos y Condiciones y/o (ii) que sea el nuevo
                        responsable del banco de datos que contenga su
                        información personal.&nbsp; Luego de producida la
                        cesión, &nbsp;TUAUTOpe no tendrá ninguna responsabilidad
                        con respecto de cualquier hecho que ocurrirá a partir de
                        la fecha de la cesión.&nbsp; El nuevo responsable del
                        banco de datos asumirá todas y cada una de las
                        obligaciones de Neoauto establecidas en los presentes
                        Términos y Condiciones y en la Política de Privacidad
                        respecto del tratamiento, resguardo y conservación de la
                        información personal de los usuarios del Portal.
                      </p>
                      <ol start={18}>
                        <li>
                          <strong> Ley aplicable y jurisdicción</strong>
                        </li>
                      </ol>
                      <p>
                        Los presentes Términos y Condiciones se rigen por la ley
                        peruana y cualquier disputa que se produzca con relación
                        a la validez, aplicación o interpretación de los mismos,
                        incluyendo la Política de Privacidad, será resuelta en
                        los tribunales del Cercado de Lima.
                      </p>
                      <br />
                      19
                      <strong>
                        .De los servicios prestados por empresas terceras
                        incorporados en el portal web de TUAUTOpe
                      </strong>
                      <p>
                        El Usuario conoce y acepta que, los servicios prestados
                        por empresas terceras e incorporados dentro del portal
                        web de TUAUTOpe, son brindados de manera directa por
                        dichos proveedores; por lo que, TUAUTOpe no será
                        responsable de la idoneidad de dichos servicios, en
                        tanto reconoce que, Neoauto es solo un intermediario que
                        pone a su disposición un espacio dentro de su plataforma
                        para brindar una mejor experiencia a sus clientes.
                      </p>
                      <br />
                      20.
                      <strong>
                        {" "}
                        Banco Santander Perú S.A., Edpyme Santander Consumo Perú
                        S.A. y TUAUTOpe S.A.C., (en adelante, TUAUTOpe), no
                        garantizan la veracidad, idoneidad, exactitud,
                        exhaustividad
                      </strong>{" "}
                      y actualidad de los contenidos publicados y/o
                      promocionados por los Usuarios y/o Concesionarios en el
                      Portal automotriz{" "}
                      <a href="{{route('inicio')}}">TUAUTOpe</a>.&nbsp; <br />
                      <br />
                      Es responsabilidad del Usuario y/o Concesionario
                      garantizar la autenticidad, veracidad y actualización de
                      la información que publica y/o promociona en el Portal
                      automotriz <a href="{{route('inicio')}}">TUAUTOpe</a>.
                      Téngase presente que, el Usuario y/o Concesionarios serán
                      los únicos responsables de las manifestaciones falsas o
                      inexactas que realice y de los perjuicios que pueda
                      ocasionar a Banco Santander Perú S.A., Edpyme Santander
                      Consumo Perú S.A. y TUAUTOpe S.A.C., o a terceros por la
                      información que publique y/o promocione.
                      <br />
                      <br />
                      Banco Santander Perú S.A., Edpyme Santander Consumo Perú
                      S.A. y TUAUTOpe S.A.C., declaran expresamente que no serán
                      responsables por los contenidos digitales publicados por
                      los Usuarios y/o Concesionarios en el Portal
                      automotriz&nbsp;
                      <a href="{{route('inicio')}}">TUAUTOpe</a>&nbsp;y traslada
                      toda responsabilidad al proveedor de dicho contenido
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <p>Fecha de última actualización: 01-2022</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
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
                    Usuarios a los que les pareció útil: 3 de 3
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
                    <a href="{{route('Politicas')}}">
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Privacidad')}}">
                      POLÍTICA DE PRIVACIDAD DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Cokkie')}}">Política de Cookies</a>
                  </li>
                  <li>
                    <a href="{{route('Consentimiento')}}">
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Financiamiento')}}">
                      Financiamiento Santander Consumer
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
                    <a href="{{route('Politicas')}}" rel="nofollow">
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a href="" rel="nofollow">
                      ¿Cómo publico un aviso?
                    </a>
                  </li>
                  <li>
                    <a href="{{route('contacto_vendedor')}}" rel="nofollow">
                      ¿Como contacto al Vendedor?
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Cokkie')}}" rel="nofollow">
                      Política de Cookies
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

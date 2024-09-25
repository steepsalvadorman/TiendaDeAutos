export const Privacidad = () => {
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
                    <a href="{{route('Aliados')}}" className="sidenav-item">
                      Aliados comerciales de Tuautope SAC
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
                    <a href="{{route('Cokkie')}}" className="sidenav-item">
                      POLÍTICA DE COKKIE DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a
                      href="{{route('Privacidad')}}"
                      className="sidenav-item current-article"
                    >
                      POLÍTICA DE PRIVACIDAD DE TUAUTOpe
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
                      className="sidenav-item"
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
                title="POLÍTICA DE PRIVACIDAD DE NEOAUTO"
                className="article-title"
              >
                POLÍTICA DE PRIVACIDAD DE TUAUTOpe
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
                        dateTime="2023-04-11T22:13:19Z"
                        title="2023-04-11 17:13"
                        data-datetime="relative"
                      >
                        hace 1 mes
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
                  <p className="wysiwyg-text-align-center">&nbsp;</p>
                  <p className="wysiwyg-text-align-center">
                    <span className="wysiwyg-underline">
                      <span className="wysiwyg-font-size-x-large">
                        <strong>POLÍTICA DE PRIVACIDAD DE TUAUTOpe</strong>
                      </span>
                    </span>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    TUAUTOpe valora a sus usuarios y está comprometida con la
                    protección de su privacidad. Como parte de dicho compromiso,
                    hemos desarrollado la presente política de privacidad (en
                    adelante, la “<u>Política de Privacidad</u>” o la “
                    <u>Política</u>”, indistintamente) que describe la manera en
                    la que TUAUTOpe tratará sus datos personales en el marco de
                    la relación que mantiene con usted para el uso de este sitio
                    web y sus aplicativos (en adelante y de manera conjunta, el
                    “<u>Sitio Web</u>”)..
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>I. ASPECTOS GENERALES</strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <ol>
                    <li>
                      TUAUTOpe se encuentra constituida bajo la razón social
                      TUAUTOpe S.A.C., identificada con RUC 20605850708 y
                      domiciliada en Calle Paracas N° 530, Distrito de Pueblo
                      Libre, Provincia y Departamento de Lima.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={2}>
                    <li>
                      Al registrarse en el Sitio Web usted, en tanto usuario de
                      éste, acepta haber sido debidamente informado por TUAUTOpe
                      de las prácticas, usos y políticas que se detallan a
                      continuación. Esta Política contiene las prácticas de
                      privacidad del Sitio Web operado por TUAUTOpe en
                      cumplimiento de la Ley 29733, Ley de Protección de Datos
                      Personales (en adelante, “<u>LPDP</u>”),&nbsp;y el Decreto
                      Supremo 3-2013-JUS, Reglamento de la Ley de Protección de
                      Datos Personales (en adelante, “<u>RLPDP</u>").
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={3}>
                    <li>
                      Para efectos de esta Política, toda referencia a “nos”,
                      “nosotros” o “nuestra”, se refiere a TUAUTOpe; y cuando se
                      refiera a “el Usuario”, “los Usuarios” o alguna variación
                      de éstos, se entenderá a todos aquellos individuos
                      distintos a NEOAUTO registrados como usuarios del Sitio
                      Web.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={4}>
                    <li>
                      Esta Política no aplica a sitios web, servicios, productos
                      o aplicaciones de terceros, incluso si pueden ser
                      accedidos a través de nuestros servicios o viceversa.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <p>
                    <strong>
                      II. INFORMACIÓN PERSONAL QUE RECOLECTAMOS DEL USUARIO
                    </strong>
                  </p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <ol start={5}>
                    <li>
                      NEOAUTO recibe y almacena la información que los Usuarios
                      proporcionan al registrarse como usuarios del Sitio Web, a
                      fin de poder desarrollar nuestra relación y brindar
                      nuestros servicios.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={6}>
                    <li>
                      Toda información proporcionada por el usuario deberá ser
                      verdadera, completa y exacta. Cada Usuario es responsable
                      por la veracidad, exactitud, vigencia y autenticidad de la
                      información suministrada.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={7}>
                    <li>
                      La Información del Usuario es necesaria para la ejecución
                      de la relación contractual, motivo por el cual debe ser
                      obligatoriamente proporcionada. Lo contrario implicará la
                      imposibilidad de contratar los productos y servicios
                      ofrecidos por NEOAUTO.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={8}>
                    <li>
                      En caso se realice un registro en nombre de un tercero, el
                      usuario declara que ha obtenido su consentimiento antes de
                      facilitarnos su información personal.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <p>
                    <strong>
                      III. INCORPORACIÓN DE LA INFORMACIÓN DEL USUARIO EN EL
                      BANCO DE DATOS DE TUAUTOpe Y PERIODO DE CONSERVACIÓN{" "}
                    </strong>
                  </p>
                  <p>&nbsp;</p>
                  <ol start={9}>
                    <li>
                      La información personal brindada por los Usuarios del
                      Sitio Web será almacenada en los siguientes bancos de
                      datos, según sea el caso:
                    </li>
                  </ol>
                  <table
                    style={{ borderCollapse: "collapse", width: "100%" }}
                    border={1}
                  >
                    <tbody>
                      <tr>
                        <td
                          className="wysiwyg-text-align-center"
                          style={{ width: "33.3333%" }}
                        >
                          <strong>Código de Registro</strong>
                        </td>
                        <td
                          className="wysiwyg-text-align-center"
                          style={{ width: "33.3333%" }}
                        >
                          <p>
                            <strong>Titular del Banco de Datos</strong>
                          </p>
                        </td>
                        <td
                          className="wysiwyg-text-align-center"
                          style={{ width: "33.3333%" }}
                        >
                          <strong>Denominación</strong>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="wysiwyg-text-align-center"
                          style={{ width: "33.3333%" }}
                        >
                          En trámite
                        </td>
                        <td
                          className="wysiwyg-text-align-center"
                          style={{ width: "33.3333%" }}
                        >
                          TUAUTOpe S.A.C.
                        </td>
                        <td
                          className="wysiwyg-text-align-center"
                          style={{ width: "33.3333%" }}
                        >
                          Cliente
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p>&nbsp;</p>
                  <ol start={10}>
                    <li>
                      Los datos personales serán conservados durante el tiempo
                      en que el Usuario mantenga una relación con NEOAUTO y, con
                      posterioridad al término de ésta, se mantendrán por un
                      total de diez (10) años, para poder cumplir con las
                      obligaciones legales pertinentes. Transcurrido dicho
                      tiempo, serán eliminados.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <h4>
                    <strong>IV. MENORES DE EDAD</strong>
                  </h4>
                  <p>&nbsp;</p>
                  <ol start={11}>
                    <li>
                      Para acceder a los servicios de TUAUTOpe se requiere que
                      el Usuario sea mayor de edad. Se precisa que la mayoría de
                      edad dependerá de lo establecido legalmente en el país de
                      residencia de los Usuarios.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={12}>
                    <li>
                      En el caso que TUAUTOpe decida, eventualmente, dirigir
                      algún servicio a menores de edad, se solicitará el
                      consentimiento del padre, tutor o representante.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={13}>
                    <li>
                      Si un menor de edad accede al Sitio Web de TUAUTOpe a
                      través de cualquier medio, se presume que dichos accesos
                      se han realizado con el debido consentimiento de padres,
                      tutores o representantes legales.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={14}>
                    <li>
                      En caso TUAUTOpe detecte o presuma que se ha registrado
                      información de menores de edad sin la obtención del
                      consentimiento del padre, tutor o representante, la misma
                      será eliminada de nuestra base de datos lo más pronto
                      posible.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <p>
                    <strong>V. ¿CÓMO RECOLECTAMOS LA INFORMACIÓN?</strong>
                  </p>
                  <p>&nbsp;</p>
                  <ol start={15}>
                    <li>
                      A fin de recibir los servicios de TUAUTOpe, el Usuario le
                      proporciona la información personal indicada en el numeral
                      anterior a través de los siguientes mecanismos
                    </li>
                  </ol>
                  <ul>
                    <li>
                      Comunicación directa (vía llamada, telefónica, correo
                      electrónico y/o cualquier otro medio de comunicación) con
                      NEOAUTO.
                    </li>
                    <li>
                      Solicitudes de registro, información, adquisición y/o
                      asistencia de algún producto o servicio de NEOAUTO.
                    </li>
                    <li>Encuestas voluntarias online o físicas.</li>
                    <li>
                      Publicaciones en sitios web de terceros, o en blogs,
                      foros, noticias, entre otros, ofrecidos por NEOAUTO.
                    </li>
                    <li>&nbsp;</li>
                    <li>
                      Al participar en algún sorteo o concurso desarrollado por
                      TUAUTOpe.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <ol start={16}>
                    <li>
                      Como se indicó en la sección I anterior, todos los datos
                      recolectados son necesarios para la ejecución de la
                      relación con el Usuario y, por tanto, serán tratadas
                      únicamente para tal finalidad.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <p>
                    <strong>VI. FINALIDAD DEL TRATAMIENTO</strong>
                  </p>
                  <p>&nbsp;</p>
                  <ol start={17}>
                    <li>
                      La información del Usuario podrá ser tratada para los
                      siguientes fines:
                    </li>
                  </ol>
                  <ul>
                    <li>
                      Proveer productos, servicios o completar información
                      requerida para ello.
                    </li>
                    <li>
                      Atender y procesar solicitudes de registro y/o suscripción
                      de Usuarios, brindar soporte al Usuario, validar la
                      veracidad de la información proporcionada y atender
                      consultas del Usuario.
                    </li>
                    <li>
                      Gestionar los concursos y promociones que se realicen con
                      los Usuarios. Informar sobre los ganadores de premios,
                      promociones, concursos y/o sorteos realizados.
                    </li>
                    <li>
                      Gestionar y administrar las cuentas personales y/o
                      corporativas que los Usuarios mantengan en el Sitio Web.
                    </li>
                    <li>
                      Supervisar, monitorear y moderar el comportamiento y la
                      actividad del Usuario en las secciones en las que el
                      Usuario pueda crear o generar contenido, como las
                      secciones de comentarios, blogs, conversaciones en foros,
                      entre otros; con el fin de detectar actos fraudulentos e
                      irregulares.
                    </li>
                    <li>
                      Transferir la Información del Usuario a empresas que
                      brinden servicios basados en infraestructura en la nube en
                      el extranjero, a fin de poder alojar, almacenar, procesar
                      y ejecutar la Información del Usuario durante la ejecución
                      de los servicios brindados por NEOAUTO.
                    </li>
                  </ul>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
                  <p>
                    <strong>
                      VII. CUSTODIA Y CONFIDENCIALIDAD DE LA INFORMACIÓN
                    </strong>
                  </p>
                  <p>&nbsp;</p>
                  <ol start={18}>
                    <li>
                      La información personal será tratada con el grado de
                      protección legalmente exigible para garantizar su
                      seguridad y evitar su alteración, pérdida, tratamiento o
                      acceso no autorizado. NEOAUTO resguarda su Información
                      Personal de acuerdo con estándares y procedimientos de
                      seguridad y confidencialidad impuestos en el Perú de
                      conformidad con la LPDP.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={19}>
                    <li>
                      TUAUTOpe no transmite, divulga o proporciona la
                      información personal recopilada a terceros diferentes del
                      titular de dicha información personal, salvo en los casos
                      en los que existe una relación de encargo para el
                      tratamiento de datos personales, cuando el Usuario haya
                      consentido expresamente que su información personal sea
                      transferida a terceros debidamente identificados en la
                      cláusula de consentimiento o en caso ello sea requerido
                      por autoridades públicas o se trate del estricto
                      cumplimiento de un mandato legal.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={20}>
                    <li>
                      En caso TUAUTOpe sea adquirida por alguna persona, cambie
                      de titulares, sea fusionada con otras empresas, se escinda
                      o reorganice o sufra cualquier otra modificación
                      societaria, la información personal brindada continuará
                      siendo conservada según lo establecido en esta Política y
                      utilizada para los mismos fines que los aquí establecidos.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <h4>
                    <strong>VIII. ENCARGADOS DE TRATAMIENTO</strong>
                  </h4>
                  <p>&nbsp;</p>
                  <ol start={21}>
                    <li>
                      TUAUTOpe cuenta con relaciones de encargo con las
                      siguientes terceras empresas, con la finalidad de brindar
                      los servicios solicitados y/o contratados por los
                      Usuarios:
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ul>
                    <li>Culqui, ubicado en Perú, para procesar pagos.</li>
                    <li>
                      Oracle, ubicado en Estados Unidos de América, para el
                      envío de mailing.
                    </li>
                  </ul>
                  <h4>
                    <strong>
                      IIX. Derechos de acceso e información, derecho de
                      rectificación, actualización e inclusión, derecho de
                      cancelación o supresión y derecho de oposición
                    </strong>
                  </h4>
                  <p>&nbsp;</p>
                  <ol start={22}>
                    <li>
                      Los Usuarios tienen reconocidos y podrán ejercitar los
                      derechos de acceso e información, rectificación,
                      actualización e inclusión, cancelación o supresión y
                      oposición sobre su información personal, y a oponerse a su
                      tratamiento.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={23}>
                    <li>
                      Los derechos descritos en el primer párrafo de este
                      acápite se ejercen por escrito a través de la presentación
                      de la solicitud respectiva en nuestro domicilio, o
                      mediante el Buzón ARCO ubicado en el siguiente enlace:{" "}
                      <a href="https://grupoelcomercio.com.pe/ventanilla-arco/">
                        https://grupoelcomercio.com.pe/ventanilla-arco/
                      </a>
                      .
                    </li>
                  </ol>
                  <p>&nbsp;&nbsp;</p>
                  <p>
                    En su solicitud deberá indicar su nombre completo y, de ser
                    el caso, adjuntar el documento que acredite la
                    representación legal del titular, adjuntar copia simple de
                    su documento nacional de identidad, indicar su correo
                    electrónico y una dirección postal para efectos de
                    notificaciones; así como algún número telefónico de
                    contacto; y una descripción clara y precisa de los datos
                    personales respecto de los que busca ejercer sus derechos,
                    incluyendo los documentos que sustenten su pedido (de ser el
                    caso).
                  </p>
                  <p>&nbsp;</p>
                  <ol start={24}>
                    <li>
                      Una vez cumplidos los requisitos antes detallados,
                      TUAUTOpe le comunicará si ha procedido su pedido o si es
                      rechazado, explicando las razones para ello. Conforme a la
                      legislación peruana, NEOAUTO cuenta con veinte (20) días
                      hábiles desde la recepción de la solicitud para enviar una
                      respuesta en caso de tratarse de una solicitud de acceso,
                      y diez (10) días hábiles si solicitara la rectificación,
                      actualización o supresión de su información personal.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={25}>
                    <li>
                      Sin perjuicio de lo anterior, TUAUTOpe podrá conservar
                      determinada información del Usuario que solicita la baja,
                      a fin de que sirva de prueba ante una eventual reclamación
                      contra NEOAUTO por responsabilidades derivadas del
                      tratamiento de dicha información o de la relación que
                      mantenían. Dicha conservación será de 10 años,
                      correspondiente al plazo de prescripción legal por
                      responsabilidad contractual.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <h4>
                    <strong>X. PORTABILIDAD DE DATOS.</strong>
                  </h4>
                  <p>&nbsp;</p>
                  <ol start={26}>
                    <li>
                      TUAUTOpe pone en conocimiento del Usuario que en caso
                      tenga sus datos registrados en nuestro Banco de Datos,
                      puede ejercer su derecho a la Portabilidad de Datos hacia
                      otro responsable del tratamiento de su información. Con el
                      fin de Portar sus Datos, el Usuario deberá solicitarlo a
                      través del portal de Ventanilla Arco, el cual se encuentra
                      en el siguiente&nbsp;
                      <a href="https://elcomercio.pe/procedimiento-arco">
                        enlace
                      </a>
                      :{" "}
                      <a href="https://grupoelcomercio.com.pe/ventanilla-arco/">
                        https://grupoelcomercio.com.pe/ventanilla-arco/
                      </a>
                      brindando los datos y el contacto del nuevo responsable
                      del tratamiento de su información.
                    </li>
                  </ol>
                  <h4>
                    <strong>XI. Vínculos Externos</strong>
                  </h4>
                  <p>&nbsp;</p>
                  <ol start={27}>
                    <li>
                      Este Sitio Web puede contener vínculos (links) a otros
                      sitios web que tienen sus propias políticas de privacidad
                      y confidencialidad. Por ello le recomendamos que, si usted
                      visita dichos sitios, revise cuidadosamente sus prácticas
                      y políticas de confidencialidad, toda vez que la presente
                      Política no cubre las prácticas o políticas de terceros,
                      incluyendo aquellos que pueden revelar y/o compartir
                      información con NEOAUTO.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <h4>
                    <strong>XII. Información Pública</strong>
                  </h4>
                  <p>&nbsp;</p>
                  <ol start={28}>
                    <li>
                      Tenga presente que, en caso de colocar información en un
                      área pública de este Sitio Web (comentarios, opiniones,
                      entre otros), la está poniendo a disposición de otros
                      miembros, usuarios del Sitio Web y al público en general,
                      lo cual queda fuera del ámbito de control de NEOAUTO. Por
                      favor, recuerde lo anterior y sea cuidadoso con la
                      información que decide divulgar.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <p>
                    <strong>XIII. TRATAMIENTO TRANSFRONTERIZO</strong>
                  </p>
                  <p>&nbsp;</p>
                  <ol start={29}>
                    <li>
                      TUAUTOpe realiza el flujo transfronterizo de su
                      información, en la medida que, sus datos personales son
                      almacenados, según el siguiente detalle:
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ul>
                    <li>
                      Oracle, cuyos servidores se encuentran en California,
                      Estados Unidos de América.
                    </li>
                    <li>
                      Amazon, cuyos servidores se encuentran en Virginia,
                      Estados Unidos de América.
                    </li>
                    <li>
                      Google Analytics, cuyos servidores se encuentran en
                      Estados Unidos de América.
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>
                      XIV. REVISIÓN Y MODIFICACIÓN DE LA POLÍTICA DE PRIVACIDAD
                    </strong>
                  </p>
                  <p>&nbsp;</p>
                  <ol start={30}>
                    <li>
                      TUAUTOpe podrá realizar modificaciones a esta Política de
                      Privacidad de manera unilateral en cualquier momento.
                      Cualquier modificación a la manera en la que NEOAUTO
                      utiliza la información personal será reflejada en
                      versiones futuras de esta Política, las cuales serán
                      publicadas en este Sitio Web, por lo que se aconseja
                      revisar periódicamente la Política de Privacidad.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={31}>
                    <li>
                      Cualquier cambio sustancial en el tratamiento de la
                      información personal será comunicado oportunamente a los
                      Usuarios. Además, todo cambio realizado estará siempre
                      sujeto a la LPDP y el RLPDP.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={32}>
                    <li>
                      Si el Usuario no se encuentra de acuerdo con la revisión y
                      modificación de la presente política, deberá dejar de usar
                      inmediatamente nuestros servicios.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <h4>
                    <strong>XV. Contacto y domicilio</strong>
                  </h4>
                  <p>&nbsp;</p>
                  <ol start={33}>
                    <li>
                      Si tiene preguntas sobre esta Política de Privacidad, las
                      prácticas de TUAUTOpe, o los registros en la página de
                      NEOAUTO, nos puede contactar al correo electrónico:{" "}
                      <a href="mailto:gerencia.legal@comercio.com.pe">
                        gerencia.legal@comercio.com.pe
                      </a>
                      .
                    </li>
                  </ol>
                  <p className="wysiwyg-text-align-center">
                    <span className="wysiwyg-font-size-x-large">
                      <strong>&nbsp;</strong>
                    </span>
                  </p>
                  <h2 className="wysiwyg-text-align-center">&nbsp;</h2>
                  <h2 className="wysiwyg-text-align-center">
                    <span className="wysiwyg-underline">
                      <strong>EMPLEO DE COOKIES</strong>
                    </span>
                  </h2>
                  <h2>&nbsp;</h2>
                  <ol start={12}>
                    <li>
                      TUAUTOpe utiliza cookies para mejorar la experiencia de
                      los Usuarios, informando siempre acerca del envío de
                      cookies a las computadoras o dispositivos móviles cada vez
                      que visiten el Sitio Web.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={13}>
                    <li>
                      Por medio de cookies TUAUTOpe podrá recabar la siguiente
                      información: comportamiento al navegar en el Sitio Web;
                      información sobre las actividades realizadas por el
                      Usuario cuando accede, visualiza, crea, comenta y comparte
                      contenido, entre otros; la URL de la que proviene el
                      Usuario (incluyendo las externas al Sitio Web); las URL
                      más visitadas por el Usuario (incluyendo las externas al
                      Sitio Web); direcciones IP; información sobre la ubicación
                      del Usuario; navegador que utiliza el Usuario; información
                      sobre aspectos operativos del Sitio Web, como estadísticas
                      de navegación, tráfico, entre otros
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={14}>
                    <li>
                      Usted autoriza a TUAUTOpe a tratar la información obtenida
                      por medio de cookies para las finalidades y en los
                      términos establecidos en el Consentimiento para el
                      Tratamiento de Datos Personales anterior, siendo éste
                      aplicable en todos sus términos. Debe tener en cuenta que
                      la aceptación o denegatoria de esta autorización para usos
                      adicionales (ajenos a la ejecución de nuestra relación) no
                      condiciona la prestación del servicio que estás
                      contratando con NEOAUTO.
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <ol start={15}>
                    <li>
                      Para mayor detalle sobre nuestra Política de Cookies,
                      puede acceder al siguiente enlace:{" "}
                      <a href="https://centraldeayuda.neoauto.com/hc/es/articles/360016235292-Pol%C3%ADtica-de-Cookies">
                        https://centraldeayuda.neoauto.com/hc/es/articles/360016235292-Pol%C3%ADtica-de-Cookies
                      </a>
                    </li>
                  </ol>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>
                    <em>Sí acepto </em>
                    <em>
                      <img
                        src="/hc/article_attachments/360080579592/mceclip0.png"
                        alt="mceclip0.png"
                        width={20}
                        height={18}
                      />
                    </em>
                  </p>
                  <p>
                    <em>No acepto </em>
                    <em>
                      <img
                        src="/hc/article_attachments/360080579592/mceclip0.png"
                        alt="mceclip0.png"
                        width={20}
                        height={18}
                      />
                    </em>
                  </p>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                  <p>
                    <em>&nbsp;</em>
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>&nbsp;</strong>
                  </p>
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
                    Usuarios a los que les pareció útil: 11 de 12
                  </span>
                </small>
              </div>
              <div className="article-more-questions">
                ¿Tiene más preguntas?{" "}
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
                    <a href="{{route('Politicas')}}">
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Terminos_condiciones')}}">
                      {" "}
                      Condiciones Generales de Uso
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Aliados')}}">
                      Aliados comerciales de TUAUTOpe SAC
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
                </ul>
              </section>
              <section className="related-articles">
                <h2 className="related-articles-title">
                  Artículos relacionados
                </h2>
                <ul>
                  <li>
                    <a href="{{route('Terminos_condiciones')}}" rel="nofollow">
                      {" "}
                      Condiciones Generales de Uso
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Politicas')}}" rel="nofollow">
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Cokkie')}}" rel="nofollow">
                      Política de Cookies
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

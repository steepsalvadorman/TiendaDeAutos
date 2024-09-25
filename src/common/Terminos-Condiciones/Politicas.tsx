export const Politicas = () => {
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
                      Aliados comerciales de Tuautope SAC
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
                    <a href="/cokkie" className="sidenav-item">
                      Política de Cookies
                    </a>
                  </li>
                  <li>
                    <a href="privacidad" className="sidenav-item">
                      POLÍTICA DE PRIVACIDAD DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a
                      href="politicas"
                      className="sidenav-item current-article"
                    >
                      Políticas de Publicación
                    </a>
                  </li>
                  <li>
                    <a
                      href="terminos_condiciones"
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
              <h1 title="Políticas de Publicación" className="article-title">
                Políticas de Publicación
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
                        dateTime="2023-01-20T16:08:31Z"
                        title="2023-01-20 11:08"
                        data-datetime="relative"
                      >
                        hace 4 meses
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
                    <strong>POLÍTICA DE PUBLICACIÓN</strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    Este documento es parte integrante de las Condiciones
                    Generales de Uso del portal web:&nbsp;
                    <a href="http://www.neoauto.com/">TUAUTOpe.com</a>., de
                    propiedad de la empresa TUAUTOpe S.A.C. (en adelante,
                    TUAUTOpe), identificada con R.U.C. N° 20605850708, con
                    domicilio en Av. Juan de Arona N° 755 Oficina 301 (Edificio
                    Wework), distrito de san Isidro, Provincia y Departamento de
                    Lima.
                  </p>
                  <p>
                    Mediante la aceptación de las Condiciones Generales de Uso
                    en el momento del registro, el USUARIO acepta las políticas
                    aquí contenidas.
                  </p>
                  <p>
                    <strong>1.- Sitio</strong>
                  </p>
                  <p>
                    TUAUTOpe&nbsp;sólo pone a disposición de los usuarios un
                    espacio virtual que les permite ponerse en comunicación
                    mediante Internet para encontrar una forma de vender o
                    comprar vehículos para transporte terrestre o bienes y/o
                    servicios relacionados. Queda expresamente establecido
                    que&nbsp;TUAUTOpe no es el propietario de los artículos
                    ofrecidos, no tiene posesión de ellos ni los ofrece en
                    venta.&nbsp;Neoauto no interviene en el perfeccionamiento de
                    las operaciones realizadas entre los usuarios ni en las
                    condiciones por ellos estipuladas para las mismas, por ello
                    no será responsable respecto de la existencia, calidad,
                    cantidad, estado, integridad o legitimidad de los bienes
                    ofrecidos, adquiridos o enajenados por los usuarios, así
                    como de la capacidad para contratar de los usuarios o de la
                    veracidad de los datos personales por ellos ingresados. Cada
                    usuario conoce y acepta ser el exclusivo responsable por los
                    artículos que publica para su venta y por las ofertas y/o
                    compras que realiza.
                  </p>
                  <p>
                    Debido a que&nbsp;TUAUTOpe no tiene ninguna participación
                    durante todo el tiempo en que el artículo se publica para la
                    venta, ni en la posterior negociación y perfeccionamiento
                    del contrato definitivo entre las partes, no será
                    responsable por el efectivo cumplimiento de las obligaciones
                    asumidas por los usuarios en el perfeccionamiento de la
                    operación comercial. El usuario conoce y acepta que al
                    realizar operaciones con otros usuarios o terceros lo hace
                    bajo su propio riesgo. En ningún caso&nbsp;Neoauto será
                    responsable por lucro cesante, o por cualquier otro daño y/o
                    perjuicio que haya podido sufrir el usuario, debido a las
                    operaciones realizadas o no realizadas por artículos
                    publicados a través de&nbsp;Neoauto.
                  </p>
                  <p>
                    TUAUTOpe&nbsp;recomienda actuar con prudencia y sentido
                    común al momento de realizar operaciones con otros usuarios.
                    El usuario debe tener presente, además, los riesgos de
                    contratar con menores o con personas que se valgan de una
                    identidad falsa.&nbsp;TUAUTOpe&nbsp;NO será responsable por
                    la realización de ofertas y/o operaciones con otros usuarios
                    basadas en la confianza depositada en el sistema o los
                    servicios brindados por&nbsp;Neoauto.
                  </p>
                  <p>
                    En caso que uno o más usuarios o algún tercero inicien
                    cualquier tipo de reclamo o acciones legales contra otro u
                    otros usuarios, todos y cada uno de los usuarios
                    involucrados en dichos reclamos o acciones eximen de toda
                    responsabilidad a&nbsp;TUAUTOpe&nbsp;y a sus directores,
                    gerentes, empleados, agentes, operarios, representantes y
                    apoderados.
                  </p>
                  <p>
                    Asimismo, a través del portal web de TUAUTOpe, el Usuario
                    también podrá realizar la reserva de los vehículos ofrecidos
                    por los Concesionarios y/o Marcas, a cambio de una
                    contraprestación económica; no obstante, si el Usuario
                    tuviera algún reclamo referente a dicha reserva, o si
                    deseara solicitar la devolución de su dinero, el trámite
                    deberá realizarlo directamente con los Concesionarios y/o
                    Marcas.
                  </p>
                  <p>
                    <strong>2.- Avisos clasificados</strong>
                  </p>
                  <p>
                    En el portal&nbsp;web&nbsp;
                    <a href="{{route('inicio')}}">TUAUTOpe.com</a>&nbsp;se
                    incluyen aquellas publicaciones que sean del tipo&nbsp;
                    <strong>Económico&nbsp;</strong>(entiéndase por un aviso
                    clasificado facturado por una determinada cantidad de
                    palabras a ser publicado el domingo en la sección
                    “Vehículos” de los Clasificados del diario “El Comercio” o
                    “Trome”) como un servicio de valor agregado adicional y
                    gratuito, no incluido en el precio pagado por el cliente.
                    Por su origen, la publicación en el portal web Neoauto.com
                    no está sujeta a reclamos.
                  </p>
                  <p>
                    Para la publicación de avisos impresos que fueron creados en
                    el portal web TUAUTOpe.com, solo serán publicados siempre y
                    cuando que el paquete incluya la publicación de un aviso
                    impreso o porque se adquirió un extracargo que incluye la
                    publicación de un aviso impreso.&nbsp;TUAUTOpe publicará
                    estos avisos en la sección “Vehículos” de los Clasificados
                    del diario “El Comercio” o “Trome”&nbsp; con la información
                    que el cliente ingresó en el campo destinado para el texto
                    de los avisos impresos.
                  </p>
                  <p>
                    En TUAUTOpe los sistemas para la edición, están configurados
                    únicamente para modificar características del aviso
                    web&nbsp;(no se podrá modificar la Marca, Modelo, Año, toda
                    vez que son datos no variables, propios del vehículo). En
                    caso el usuario publique una información incorrecta o una
                    foto errónea (dependiendo de las características que incluye
                    el aviso), el aviso impreso no podrá ser modificado, luego
                    de su publicación. Esto no generará ningún tipo de
                    indemnización al usuario por haberse brindado las
                    herramientas necesarias y la visualización de la vista
                    previa del aviso impreso.
                  </p>
                  <p>
                    <strong>3.- Avisos desde la web</strong>
                  </p>
                  <p>
                    En&nbsp;TUAUTOpe se publican avisos de venta de vehículos,
                    de servicios relacionados al rubro automotriz y publicidad.
                  </p>
                  <p>
                    <strong>3.1 Publicación de venta de vehículos</strong>
                  </p>
                  <p>
                    Los avisos de venta de vehículos pueden generar una
                    publicación en la edición impresa de Clasificados del diario
                    El Comercio y Clasificados del diario Trome o ambos de
                    acuerdo al destaque contratado. El usuario es responsable
                    del ingreso de información en el aviso web, fotografías y
                    aviso impreso.
                  </p>
                  <p>
                    TUAUTOpe permite publicar en los perfiles de Persona
                    Natural, Revendedor y Concesionario según corresponda. Por
                    ello, se podrán adquirir los siguientes productos:
                  </p>
                  <ul>
                    <li>
                      <strong>Persona Natural: </strong>Desde este perfil se
                      pueden publicar avisos unitarios de autos usados tipo
                      Simple, Destacado y Premium. La tarifa varía de acuerdo
                      con la selección de potenciadores.
                    </li>
                    <li>
                      <strong>Revendedor: </strong>Perfil que muestra paquetes
                      de avisos usados del tipo Simple, Plus, Destacado y
                      Premium. Las tarifas varían de acuerdo al tipo de aviso,
                      características del paquete y vigencia.
                    </li>
                    <li>
                      <strong>Concesionario:</strong>Perfil diseñado para
                      empresas concesionarias que permite adquirir paquete de
                      avisos nuevos del tipo Simple, Destacado y Premium. Las
                      tarifas varían de acuerdo al tipo de aviso,
                      características del paquete y vigencia.
                    </li>
                  </ul>
                  <p>
                    Cabe precisar que, un usuario solo puede estar vinculado a
                    una cuenta y a un perfil. En ese sentido, en caso Neoauto
                    detecte que un mismo usuario ha creado diferentes perfiles o
                    cuentas, procederá a eliminar el más reciente, procediendo a
                    enviarle un correo electrónico informándole sobre tal hecho.
                  </p>
                  <p>
                    Solo el usuario con perfil Concesionario 0km podrá publicar
                    avisos en la categoría Autos Nuevos - 0km. Las publicaciones
                    realizadas en los demás perfiles se crearán por defecto como
                    Autos usados.&nbsp;
                  </p>
                  <p>
                    En ningún caso, el anunciante recibirá compensación alguna
                    por la no publicación del aviso, sobre todo por el
                    incumplimiento de un requisito obligatorio para la
                    publicación.
                  </p>
                  <p>
                    Luego de optar por cualquiera de los paquetes antes
                    mencionados, los usuarios podrán adquirir cualquier de los
                    cross-selling o up-selling que se detallan y se especifican
                    en la página web de TUAUTOpe.com, los cuales se rigen
                    igualmente por todo lo señalado en estas políticas.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>3.1.1 Medios de pago</strong>
                  </p>
                  <p>Neoauto ofrece como medios de pago:</p>
                  <ul>
                    <li>
                      Culqi: Opción que genera un código de pago, que puede ser
                      cancelado en efectivo o por internet en distintas
                      entidades bancarias. Las tarjetas permitidas son: VISA,
                      Mastercard, AMERICAN EXPRESS, DINNERS CLUB, Tarjeta OH,
                      UNION PAY, RIPLEY, CMR FALABELLA, CENCOSUD.
                    </li>
                    <li>
                      Crédito: A solicitud del cliente y para gestionar por
                      medio de ejecutivos, no disponible en Web. Solo para
                      empresas con contrato con “El Comercio” o TUAUTOpe.
                    </li>
                  </ul>
                  <p>
                    <strong>3.1.2 Edición de avisos</strong>
                  </p>
                  <p>
                    En general, luego de publicado el anuncio en web, no se
                    podrá modificar la Marca, Modelo, Año, toda vez que son
                    datos no variables, propios del vehículo. Asimismo, no se
                    podrá modificar el medio de publicación, texto y/o foto
                    enviado a la edición impresa de Neoauto.
                  </p>
                  <p>
                    En el caso de avisos unitarios, al realizar el pago
                    correspondiente para la activación del aviso, el usuario
                    expresa su conformidad para la publicación tanto Web como
                    impresa. En base a ello, TUAUTOpe, no se responsabiliza por
                    cualquier error cometido por el usuario con respecto a los
                    datos del vehículo. En estos casos, el usuario podrá
                    comunicarse con los administradores solicitando la
                    corrección de su aviso. Neoauto evaluará y emitirá una
                    respuesta según&nbsp;los plazos propios determinados por la
                    complejidad de la solicitud.
                  </p>
                  <p>
                    Este procedimiento no garantiza la corrección del aviso web,
                    web/impreso. Asimismo, se deja constancia que en ningún caso
                    TUAUTOpe pagará al usuario compensaciones, indemnizaciones,
                    retribuciones, reembolsos ni similares. Una vez habilitado
                    el servicio web, web/impreso se considerará como consumido
                    el aviso adquirido.
                  </p>
                  <p>
                    Con respecto a los paquetes, el usuario podrá gestionar sus
                    publicaciones vinculadas al paquete de acuerdo a los
                    espacios disponibles, liberando y reemplazando avisos web
                    por otros. En caso se programen al impreso, esto son
                    editables ni pueden ser eliminados una vez programados.
                  </p>
                  <p>
                    <strong>3.1.3 Tiempo de Expiración</strong>
                  </p>
                  <p>
                    La vigencia de los avisos unitarios se consume desde la
                    activación correspondiente al pago. No es posible pausar un
                    aviso web por ningún motivo.
                  </p>
                  <p>
                    El tiempo de publicación máximo de los avisos en el portal
                    web&nbsp;<a href="http://www.neoauto.com/">Neoauto.com</a>,
                    dependerá del tiempo de duración según el aviso elegido.
                    Después de este período, todos los avisos podrán ser
                    retirados por el sitio en cualquier momento; para ser
                    publicados nuevamente.
                  </p>
                  <p>
                    En el caso de paquetes, la vigencia de los avisos está
                    vinculada al paquete en general; todos los avisos se
                    desactivarán indefectiblemente al culminar la vigencia del
                    paquete. Estos podrán reactivarse siempre que se adquiera un
                    nuevo paquete.
                  </p>
                  <p>
                    <strong>3.1.4 Facturación</strong>
                  </p>
                  <p>
                    Los avisos o paquetes se facturarán según el tipo de
                    comprobante seleccionado al realizar la compra: boleta o
                    factura; e incluirán el Impuesto General a las Venta. El
                    usuario que requiera factura deberá de contar con la Razón
                    Social y RUC vigentes, los cuales serán ingresados al portal
                    al finalizar la publicación (Paso 4 – Tipo de Comprobante).
                    En todos los demás casos, se emitirá la boleta de venta.
                  </p>
                  <p>
                    Al realizar el pago se acepta la emisión del tipo de
                    comprobante seleccionado, Neoauto no realiza cambios
                    posteriores.
                  </p>
                  <p>
                    En cuanto al envío, la facturación es electrónica, “El
                    Comercio” proporciona una plataforma habilitada para su
                    descarga; no se realizan envíos físicos ni por correo
                    electrónico.
                  </p>
                  <p>
                    Asimismo, un aviso o paquete puede generar hasta dos
                    comprobantes vinculados al mismo producto adquirido, uno
                    correspondiente a la parte web y otro a la impresa. TUAUTOpe
                    no realizará ninguna refacturación con el fin de otorgar un
                    solo comprobante.
                  </p>
                  <p>
                    Solo en caso de crédito el comprobante podrá mostrar un
                    recargo al precio del producto. Esta opción de pago solo
                    habilitada para “Chat Center” o fuerza de venta presencial
                    previa negociación de contrato con “El Comercio” o Neoauto.
                  </p>
                  <p>
                    <strong>3.1.5 Cierre de publicación</strong>
                  </p>
                  <p>Para publicación en la edición impresa el cierre es:</p>
                  <ul>
                    <li>
                      Clasificados “El Comercio” - Vehículos: Viernes hasta las
                      5:30*
                    </li>
                    <li>
                      Clasificados “Trome” – Vehículos: Jueves hasta las 5:30pm*
                    </li>
                  </ul>
                  <p>*Desde nuestro “Chat Center” 5:30pm.&nbsp;</p>
                  <p>
                    La fecha de cierre puede variar según feriados u otros que
                    afecten la publicación de los avisos impresos. La nueva
                    fecha de cierre se hará constar en la página principal del
                    portal, al elegir los destaques y/o en los detalles de la
                    compra.
                  </p>
                  <p>
                    &nbsp;El usuario acepta que en ningún caso procederá a la
                    devolución de su dinero, descuentos, reembolsos
                    prorrateados, ni similares, una vez adquirido cualquiera de
                    los avisos, paquetes o publicidad, siempre que su aviso sea
                    publicado en cualquiera de los medios (web o impreso),
                    independientemente del producto elegido.&nbsp;Por ningún
                    motivo, incluido las fallas en los sistemas operativos o en
                    los procesos de avisos de la publicación impresa o al sitio
                    web&nbsp;
                    <a href="http://www.neoauto.com/">Neoauto.com</a>, se
                    generará el cobro de un lucro cesante a favor del usuario.
                  </p>
                  <p>
                    Todo reclamo con respecto al pago de alguno de los avisos
                    ofrecidos en el sitio deberá realizarse presentando la
                    boleta de pago o el estado de cuenta en dónde se verifique
                    el depósito, según el medio de pago escogido.
                  </p>
                  <p>
                    <strong>
                      3.2. Publicación de Venta de Vehículos publicados por
                      encargo de Concesionarios y/o Marcas.
                    </strong>
                  </p>
                  <p>
                    TUAUTOpe no garantiza la veracidad, exactitud, exhaustividad
                    y actualidad de los contenidos publicados por los
                    Concesionarios y/o Marcas, y tampoco se hace responsable por
                    el buen funcionamiento comercial o publicitario de los autos
                    ofrecidos en el portal web, en la medida que, las imágenes,
                    fotos, textos y cualquier tipo de información referente a
                    los vehículos ofrecidos en venta, son proporcionadas
                    directamente por los Concesionarios y/o Marcas.
                  </p>
                  <p>
                    Por ello, los Concesionarios y/o Marcas asumen toda la
                    responsabilidad si es que existiera algún caso de publicidad
                    engañosa, inexacta o cualquier vulneración a la legislación
                    nacional vigente referente a materia publicitaria.
                  </p>
                  <p>
                    Asimismo, TUAUTOpe no interviene en la negociación o
                    contrato realizado entre los Concesionaros y/o Marcas y los
                    usuarios de Neoauto, en la medida que, Neoauto solo funciona
                    como un intermediario entre estos.
                  </p>
                  <p>
                    Por tal motivo, TUAUTOpe no asume ningún tipo de
                    responsabilidad, presente o futura, por la idoneidad o
                    calidad del vehículo ofrecido o vendido, siendo esta
                    exclusiva responsabilidad de los Concesionarios y/o Marcas.
                  </p>
                  <p>
                    <strong>3.3 Publicidad en Web</strong>
                  </p>
                  <p>
                    El portal web TUAUTOpe.com cuenta con espacios dentro su
                    página principal e interiores destinados a la publicidad
                    digital. De acuerdo a la naturaleza del producto los
                    espacios podrán redirigir al mismo portal o a la página web
                    del cliente, previa aprobación de Neoauto. Las tarifas
                    varían según el producto adquirido, vigencia, cantidad y/o
                    paquetes. Este producto solo es gestionado por intermedio de
                    ejecutivos de Neoauto.
                  </p>
                  <p>
                    El Medio de pago y Facturación se rige según lo expresado en
                    el punto 3 de la presente política.
                  </p>
                  <p>
                    Por otro lado, determinados proveedores terceros, incluido
                    Google, muestran sus anuncios en sitios de Internet.
                  </p>
                  <p>
                    Además determinados proveedores terceros, incluido Google,
                    utilizan cookies para mostrar anuncios en función de las
                    visitas anteriores del usuario a su sitio web.
                  </p>
                  <p>
                    Los usuarios pueden inhabilitar el uso de cookies por parte
                    de Google a través de la&nbsp;
                    <a href="http://www.google.es/privacy/ads/">
                      página de inhabilitación de publicidad de Google
                    </a>
                    . También puede indicar a los usuarios que inhabiliten el
                    uso de cookies por parte de un proveedor tercero a través de
                    la&nbsp;
                    <a href="http://www.networkadvertising.org/managing/opt_out.asp">
                      página de inhabilitación de la Network Advertising
                      Initiative
                    </a>
                    &nbsp;o Iniciativa publicitaria en la red.
                  </p>
                  <p>
                    En ambos casos TUAUTOpe se rige según el punto 8 de los
                    Términos y Condiciones. &nbsp;
                  </p>
                  <ol start={4}>
                    <li>
                      <strong>Avisos desde el Chat Center</strong>
                    </li>
                  </ol>
                  <p>
                    Los usuarios podrán publicar sus avisos de venta de
                    vehículos con destaque y asesoría personalizada a través de
                    nuestro canal “Chat center” TUAUTOpe.
                  </p>
                  <p>
                    Al recibir el contacto los ejecutivos ofrecerán la mejora
                    del aviso(s) Web con opciones de hasta una publicación
                    impresa en la sección Clasificados Vehículos del diario El
                    Comercio, o de la sección Talán del diario Trome y/o
                    soluciones de paquetes para autos usados.
                  </p>
                  <p>
                    En el caso de solicitar avisos unitarios, los avisos serán
                    publicados de acuerdo con lo acordado con el usuario, según
                    su requerimiento, el cual dará su conformidad una vez
                    concluido con la gestión del “Chat Center”. En ningún caso,
                    el anunciante recibirá compensación, indemnizaciones ni
                    similares por la no publicación del aviso contratado por el
                    “Chat center”, sobre todo por el incumplimiento de nuestras
                    políticas para la publicación de avisos.
                  </p>
                  <p>
                    De solicitar un paquete revendedor, el contenido de cada
                    aviso deberá ser ingresado por el mismo usuario. El
                    ejecutivo instruirá al usuario sobre el proceso de
                    autogestión del paquete adquirido, en caso de renovación de
                    paquete este paso podrá ser obviado.
                  </p>
                  <p>
                    <strong>4.1 &nbsp; &nbsp;</strong>Los destaques y paquetes
                    ofrecidos por el canal de “Chat Center” están sujetos y se
                    rigen de acuerdo con todos los Términos y Condiciones de
                    TUAUTOpe, así como las Políticas de Publicación (se entiende
                    por todos los puntos además del inciso 4 – Avisos desde el
                    Chat Center).
                  </p>
                  <p>
                    &nbsp; &nbsp; &nbsp; &nbsp;Los ejecutivos no tienen
                    permitido colocar más de un bien por aviso web o impreso.
                    &nbsp;El aviso impreso vinculado a un aviso Web no podrá
                    hacer referencia a otro vehículo, ni tampoco aprovecha el
                    espacio de una palabra para incluir otra adicional.
                  </p>
                  <p>
                    <strong>4.2&nbsp;</strong>El usuario acepta en forma
                    irrevocable como medio de pago, el sistema autorizado por
                    éste, según conste el medio empleado de contratación.
                    TUAUTOpe no se hace responsable por los perjuicios que
                    origine cancelar un código de pago de la pasarela Culqi
                    errado. El usuario deberá pagar solo el indicado por el
                    ejecutivo del “Chat center”.
                  </p>
                  <p>
                    Para el pago de paquetes Revendedor podrá solicitar aplicar
                    el crédito aprobado por “El Comercio” para efectuar la
                    compra, para hacerlo el usuario deberá haber negociado
                    previamente un contrato de publicidad con “El Comercio” o
                    Neoauto. El “Chat Center” no se hace responsable por el
                    recargo de interés sobre precio del producto adquirido.
                  </p>
                  <p>
                    <strong>4.3&nbsp;&nbsp;&nbsp;&nbsp;</strong>El usuario
                    acepta como fecha de publicación, la indicada por éste
                    mediante su contratación por el “Chat Center”. Una vez
                    confirmada, no existe modo para su modificación. El usuario
                    deberá tener en cuenta el cierre de publicación de
                    Clasificados Vehículos en el diario El Talán son los jueves
                    antes de las 5:30 pm y para Clasificados Vehículos en el
                    diario El Comercio son los viernes antes de las 5:30pm
                    &nbsp;En ese sentido, el pago deberá realizarse antes de
                    dicha hora. Pasado el plazo indicado de cierre, la
                    publicación será programada para el domingo siguiente.
                  </p>
                  <p>
                    Una vez realizada la compra del destaque y elegido el tipo
                    de comprobante de pago a emitirse, éste último no podrá ser
                    modificado ni cambiado.
                  </p>
                  <p>
                    <strong>4.4</strong>. El proceso de entrega de factura es
                    por medio de la plataforma electrónica habilitada por la “El
                    Comercio”, el ejecutivo no realizará el envío del
                    comprobante en físico o por correo electrónico, solo
                    indicará por medio de un mensaje la guía para su descarga.
                    La facturación se realiza de acuerdo a lo señalado en el
                    punto 3 inciso 3.1.4 Facturación.
                  </p>
                  <p>
                    <strong>4.5</strong>. El usuario puede dar de baja un aviso
                    web activo antes de que culmine su vigencia. No podrá
                    solicitar al ejecutivo la reactivación, indemnización en
                    dinero o compensación de días por esta acción; al dar de
                    baja un aviso el destaque que lo acompaña se pierde. &nbsp;
                  </p>
                  <p>
                    Ni el usuario ni el ejecutivo podrán actualizar o eliminar
                    un aviso impreso programado. En caso el usuario retire o
                    elimine la publicación Web de su anuncio, esto no
                    significará que el impreso vinculado se retire de la
                    impresión en el diario correspondiente.
                  </p>
                  <p>
                    Si se solicitase alguna reprogramación del aviso impreso, se
                    evaluará la gestión del ejecutivo. En caso de proceder se
                    realizará según la disponibilidad del portal.
                  </p>
                  <p>
                    <strong>4.6&nbsp;</strong>&nbsp;El usuario podrá contactar
                    nuevamente al canal “Chat center” con el fin de utilizar sus
                    servicios, esto bajo su propio criterio y responsabilidad.
                  </p>
                  <p>
                    <strong>4.7</strong>.&nbsp;En caso de presentarse alguna
                    duda o consulta del servicio adquirido por medio de nuestro
                    Chat Center, deberá comunicarse a través de:
                  </p>
                  <p>
                    &nbsp; &nbsp;- Servicio al Cliente:Ingresa
                    <a href="http://centraldeayuda.neoauto.pe/anonymous_requests/new">
                      <strong>Aquí</strong>
                    </a>
                  </p>
                  <p>
                    <strong>5.- Tarifas</strong>
                  </p>
                  <p>
                    TUAUTOpe&nbsp;se reserva el derecho de modificar, cambiar,
                    agregar, o eliminar las tarifas vigentes, en cualquier
                    momento, lo cual será notificado a los usuarios.
                    Asimismo,&nbsp;Neoauto&nbsp;podrá modificar temporalmente
                    las tarifas por sus servicios debido a la realización de
                    promociones, siendo efectivas estas modificaciones cuando se
                    haga pública la promoción o se realice el anuncio.
                  </p>
                  <p>
                    <strong>7.- Descripciones y fotos</strong>
                  </p>
                  <p>
                    Las descripciones no podrán contener información falsa sobre
                    el producto ni sobre sus características y estado del
                    vehículo o producto y/o servicio vinculado. No podrán
                    incluir palabras que no estén relacionadas con el producto o
                    servicio en cuestión, con el único fin de direccionar hacia
                    el aviso los procesos de búsqueda realizados en el portal
                    web&nbsp;
                    <a href="{{route('inicio')}}">TUAUTOpe.com</a>. Además, no
                    podrán mostrar datos de contacto tales como: teléfono /
                    correo electrónico en este espacio, no está permitido.
                  </p>
                  <p>
                    Queda terminantemente prohibida la utilización de códigos en
                    las descripciones con la función de colocar y leer cookies,
                    redireccionar a los Usuarios hacia páginas externas al
                    portal web&nbsp;
                    <a href="{{route('inicio')}}">TUAUTOpe.com</a>, abrir
                    ventanas adicionales, solicitar u obtener cualquier tipo de
                    información de otros Usuarios, etc. El incumplimiento de
                    esta cláusula, puede acarrear la eliminación del o los
                    mensajes, así como la inhabilitación de la cuenta, sin que
                    ello genere algún tipo de indemnización para el usuario.
                  </p>
                  <p>
                    &nbsp;En caso de incluir una fotografía, esta deberá ser
                    indefectiblemente la correspondiente al producto
                    ofertado;&nbsp;no se podrá publicar un conjunto de fotos
                    dentro del único espacio habilitado para esta opción, así
                    como, no se aceptarán fotos de tipo collage o con datos de
                    contacto o texto en ningún tipo de publicaciones, sean
                    gratuitas o pagadas.&nbsp;En caso de los avisos gratuitos
                    solo se aceptará 1 foto del vehículo, según lo establecido
                    en la descripción del tipo de aviso.&nbsp;
                  </p>
                  <p>
                    Luego de publicado el anuncio, no se podrá modificar la
                    Marca, Modelo y Año, toda vez que son datos no variables,
                    propios del vehículo. En base a ello, Neoauto, no se
                    responsabiliza por cualquier error cometido por el usuario
                    al ingresar la información y datos del vehículo. En estos
                    casos, el usuario podría comunicarse con los administradores
                    para cualquier corrección. Asimismo, tampoco tiene derecho a
                    compensaciones, retribuciones ni reembolsos.
                  </p>
                  <p>La descripción del aviso impreso no es editable.&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>8.- Comparaciones</strong>
                  </p>
                  <p>
                    Queda terminantemente prohibida la publicación
                    en&nbsp;TUAUTOpe&nbsp;de avisos que establezcan
                    comparaciones con otros usuarios o con avisos de terceros o
                    bien contengan información referida a otros avisos (nombres,
                    apodos, precios, cantidades, etc.).
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>9.- &nbsp;Copia de descripciones y/o foto</strong>
                  </p>
                  <p>
                    Neoauto no permite la copia de descripciones y/o de fotos.
                    Tanto la descripción del artículo como las fotos que incluya
                    en el mismo, deberán ser de su propiedad o autoría. Las
                    descripciones del producto o servicio que se ofrezca en un
                    aviso pueden incluir gráficos, textos, descripciones y
                    fotos, siempre y cuando cumplan con lo establecido en estas
                    políticas. &nbsp;
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>10.- Ubicación de avisos</strong>
                  </p>
                  <p>
                    El usuario deberá ofrecer la venta del vehículo en la
                    categoría que corresponda, sin repetir sus productos en
                    otras categorías.
                  </p>
                  <p>
                    Para los avisos, creados desde la página
                    web,&nbsp;TUAUTOpe&nbsp;se reserva el derecho de modificar
                    la categoría en la que se haya publicado un aviso en caso
                    que así se lo crea conveniente, pudiendo incluso procederse
                    a la eliminación del aviso en cuestión.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>11.- Un bien y/o servicio por aviso</strong>
                  </p>
                  <p>
                    Cada aviso web o impreso tendrá asociado la oferta de un
                    vehículo. En caso de no respetar esta cláusula, queda a
                    criterio de&nbsp;TUAUTOpe, aplicar sanciones como la
                    eliminación del mensaje y/o registro de usuario, sin que
                    ello represente alguna indemnización para el usuario.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>12.- Evasión Fiscal</strong>
                  </p>
                  <p>
                    El precio de los productos publicados deberá ser siempre el
                    precio final del mismo, por lo que tendrá que incluir el
                    valor del IGV siempre que corresponda su
                    aplicación.&nbsp;TUAUTOpe, podrá corregir cualquier aviso
                    cuyo precio no cumpla con este requerimiento, con el fin de
                    evitar infracciones publicitarias relacionadas con el precio
                    final del producto.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>13.- Artículos Prohibidos</strong>
                  </p>
                  <p>
                    Queda terminantemente prohibida la oferta y/o
                    comercialización de todo tipo de vehículos que no sean para
                    transportes terrestres y motorizados.&nbsp;
                  </p>
                  <p>
                    Asimismo, los bienes y/o servicios relacionados al rubro
                    automotriz que sean ingresados como avisos web o web e
                    impreso de vehículos usados o nuevos (por ejemplo repuestos,
                    servicios de mantenimiento o de taller, etc.), sólo podrán
                    ser comercializados dentro de las categorías designadas
                    por&nbsp;TUAUTOpe, en su debido momento como Tienda Neo.
                  </p>
                  <p>
                    Publicidad de otros rubros queda prohibida en los listados,
                    a excepción de un contrato de publicidad digital.
                  </p>
                  <p>
                    Si un aviso, no se adecua a la categoría correcta, dicho
                    aviso podrá ser eliminado por&nbsp;<u>TUAUTOpe</u>, sin que
                    ello genere algún tipo de compensación para el Usuario.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>14.- Lenguaje vulgar</strong>
                  </p>
                  <p>
                    Queda terminantemente prohibido el uso en&nbsp;TUAUTOpe:
                    página web o canal de “Chat center”; de lenguaje vulgar,
                    blasfemo, obsceno, racista, sexual u ofensivo. Esta política
                    se aplica en todo el sitio, incluyendo también el
                    intercambio de mensajes entre usuarios, como el que se puede
                    establecer en el envío de preguntas y respuestas.
                  </p>
                  <p>
                    En el caso de gestiones de cotización y venta, el “Chat
                    Center” se reservará el contacto de validarse cualquier tipo
                    de agresión o lenguaje vulgar a un ejecutivo.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>15.- Regalos, Rifas y Premios</strong>
                  </p>
                  <p>
                    Las publicaciones que incluyan publicidad sobre
                    bonificaciones, regalos, cuotas, sorteos o premios
                    aleatorios como incentivo para los compradores no están
                    permitidas en&nbsp;TUAUTOpe.
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>16.- Fallas del Sistema</strong>
                  </p>
                  <p>
                    Los Usuarios NO podrán imputarle
                    a&nbsp;TUAUTOpe&nbsp;responsabilidad alguna ni exigir pago
                    por lucro cesante, en virtud de perjuicios resultantes de
                    dificultades técnicas o fallas en los sistemas o en
                    Internet.&nbsp;TUAUTOpe&nbsp;no garantiza el acceso y uso
                    continuado o ininterrumpido de su sitio. El sistema o algún
                    aviso, pueden eventualmente no estar disponible debido a
                    dificultades técnicas o fallas de Internet, o por cualquier
                    otra circunstancia ajena a&nbsp;Neoauto; en tales casos se
                    procurará restablecerlo con la mayor celeridad posible sin
                    que por ello pueda imputársele algún tipo de
                    responsabilidad.&nbsp;Neoauto&nbsp;no será responsable por
                    ningún error u omisión contenido en su sitio web.
                  </p>
                  <p>
                    <strong>17.- &nbsp;Reglas para publicaciones&nbsp;</strong>
                  </p>
                  <p>
                    - Los avisos gratuitos se pueden publicar cada 60 días (2
                    avisos por usuario). Al agotar los avisos gratuitos en este
                    periodo de tiempo, el usuario debe adquirir un aviso pagado
                    para poder publicar.
                  </p>
                  <p>
                    - Si el precio del vehículo publicado se encuentra por
                    debajo del precio promedio de los avisos en la web, se
                    procederá a dar de baja el aviso, puesto que se podría
                    considerar como un aviso no verídico. Para estos casos, se
                    podrá reactivar el aviso a solicitud del cliente, siempre y
                    cuando envíe la tarjeta de propiedad del vehículo y DNI del
                    propietario de la cuenta.
                  </p>
                  <p>
                    - El teléfono registrado en el aviso, no debe estar
                    registrado en otro aviso de otra cuenta o como teléfono de
                    usuario. De darse este escenario, el aviso gratuito no podrá
                    ser publicado y el usuario deberá pagar la tarifa
                    correspondiente para poder publicarlo.
                  </p>
                  <p>
                    - Si el teléfono o correo no está confirmado, &nbsp;el
                    usuario no podrá publicar un aviso, ya que, es necesario
                    validar que el propietario del correo y/o celular es la
                    misma persona que se registró en TUAUTOpe
                  </p>
                  <p>&nbsp;</p>
                  <p>
                    <strong>MEDIDAS APLICADAS POR TUAUTOpe</strong>
                  </p>
                  <p>
                    <strong>
                      TUAUTOpe&nbsp;podrá editar, modificar, desactivar y/o
                      eliminar al aviso(s) y/o usuario(s) que incumplan las
                      políticas especificadas en párrafos anteriores o la ley
                      vigente, sin que de esto cree ninguna obligación de
                      resarcimiento a favor del usuario, ni reembolso del dinero
                      en caso haya adquirido un destaque.
                    </strong>
                  </p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>Actualización 01-2023</p>
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
                    Usuarios a los que les pareció útil: 2 de 3
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
                    <a href="{{route('Cokkie')}}">Política de Cookies</a>
                  </li>
                  <li>
                    <a href="{{route('Consentimiento')}}">
                      Consentimiento para fines adicionales
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
                    <a href="{{route('Terminos_condiciones')}}" rel="nofollow">
                      {" "}
                      Condiciones Generales de Uso
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Privacidad')}}" rel="nofollow">
                      POLÍTICA DE PRIVACIDAD DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a href="{{route('compra_segura')}}" rel="nofollow">
                      Consejos para una compra segura del vehículo{" "}
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

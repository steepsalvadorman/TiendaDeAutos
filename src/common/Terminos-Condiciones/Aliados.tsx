export const Aliados = () => {
  return (
    <main role="main">
      <div className="container-divider" />
      <div className="container">
        <nav className="sub-nav">
          <ol className="breadcrumbs">
            <li title="Central de Ayuda">
              <a href="{{route('Preguntas')}}">Central de Ayuda</a>
            </li>
            <li title="Cuentas, privacidad y términos de uso">
              <a href="{{route('cuentas')}}">
                Cuentas, privacidad y términos de uso
              </a>
            </li>
            <li title="Cuentas, privacidad y términos de uso">
              <a href="{{route('Privacidad_menu')}}">
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
                    <a
                      href="{{route('Aliados')}}"
                      className="sidenav-item current-article"
                    >
                      Aliados comerciales de TUAUTOpe SAC
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
                    <a href="{{route('Cokkie')}}" className="sidenav-item ">
                      POLÍTICA DE COKKIE DE TUAUTOpe
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Privacidad')}}" className="sidenav-item ">
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
              <h1
                title="Aliados comerciales de Neoauto SAC"
                className="article-title"
              >
                Aliados comerciales de TUAUTOpe SAC
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
                        dateTime="2023-05-04T15:12:15Z"
                        title="2023-05-04 10:12"
                        data-datetime="relative"
                      >
                        hace 20 días
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
                  <table
                    className="table table-bordered"
                    style={{ width: "100%" }}
                    cellSpacing={1}
                  >
                    <tbody>
                      <tr>
                        <td className="wysiwyg-text-align-center">
                          <strong>RAZÓN SOCIAL</strong>
                        </td>
                        <td className="wysiwyg-text-align-center">
                          <strong>DIRECCIÓN</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>1 ONE S.A.C&nbsp;</td>
                        <td>
                          AV. TOMAS MARSANO NRO. 432 URB. VILLA VICTORIA LIMA -
                          LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>1222 PERU S.A.C.&nbsp;</td>
                        <td>
                          CAL.MARTIR JOSE OLAYA NRO. 129 INT. 1101 COM. SAN
                          MIGUEL DE MIRAFLORES LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>A.S.B. &amp; MOTORS S.A.C.</td>
                        <td>
                          PJ. MARCAVILCA NRO. 140 URB. SANTA TERESA LIMA - LIMA
                          - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>
                          ABAD &amp; CARBONEL ASOCIADOS SOCIEDAD ANONIMA
                          CERRADA&nbsp;
                        </td>
                        <td>
                          CAL.AURELIO FERNANDEZ CONCHA NRO. 462 URB. EL ROSEDAL
                          LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>ADJ'S PRO PERU E.I.R.L</td>
                        <td>
                          AV. ALFREDO MENDIOLA NRO. 6413 INT. 101 URB. SANTA
                          LUISA LIMA - LIMA - LOS OLIVOS
                        </td>
                      </tr>
                      <tr>
                        <td>AFE SERVICE SOCIEDAD ANONIMA CERRADA&nbsp;</td>
                        <td>
                          AV. TOMAS MARSANO NRO. 1599 (CRUCE DE AV. TOMAS
                          MARSANO Y ROQUE BOLOG) LIMA - LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>AFP HABITAT S.A.&nbsp;</td>
                        <td>
                          AV. JORGE BASADRE NRO. 592 (PISO 6 OF. 608 - 609) LIMA
                          - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>AGALDEP ASOCIADOS S.A.C.&nbsp;</td>
                        <td>
                          AV. JORGE CHAVEZ NRO. 745 INT. A FND. PARQUE ALTO LIMA
                          - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>ALD AUTOMOTIVE PERU S.A.&nbsp;</td>
                        <td>
                          AV. 28 DE JULIO NRO. 1005 INT. 701 URB. SAN ANTONIO
                          LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>ALESE PERU S.A.C.&nbsp;</td>
                        <td>
                          CAL.MANUEL OLGUIN NRO. 335 INT. 101 URB. MONTERRICO
                          CHICO (EDIFICIO LINK TOWER) LIMA - LIMA - SANTIAGO DE
                          SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>ALESE S.A.C.&nbsp;</td>
                        <td>
                          AV. MANUEL OLGUIN NRO. 335 INT. 102 URB. MONTERRICO
                          (EDIFICIO LINK TOWER 1ER PISO) LIMA - LIMA - SANTIAGO
                          DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>ALFKAT E.I.R.L.&nbsp;</td>
                        <td>
                          JR. PEDRO LOPEZ DE AYALA NRO. 1598 DPTO. 503 URB. SAN
                          BORJA SUR (ESQUINA DE AV. SAN LUIS Y AV SAN BORJA N)
                          LIMA - LIMA - SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>ALFREDO PIMENTEL SEVILLA S.A.&nbsp;</td>
                        <td>
                          AV. ANGAMOS ESTE NRO. 1795 URB. EL CONDOR LIMA - LIMA
                          - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>ALMACENES SANTA CLARA S.A.&nbsp;</td>
                        <td>
                          AV. SAN LUIS NRO. 2257 URB. SAN BORJA LIMA - LIMA -
                          SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>ALTOS ANDES S.A.C.&nbsp;</td>
                        <td>
                          AV. TOMAS MARSANO NRO. 402 URB. VILLA VICTORIA LIMA -
                          LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>AMBACAR S.A.C.&nbsp;</td>
                        <td>
                          AV. REPUBLICA DE PANAMA NRO. 3881 URB. VILLA VICTORIA
                          LIMA - LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>AMG MOTORS S.A.C.&nbsp;</td>
                        <td>
                          AV. HEROES DEL ALTO SENEPA MZA. M LOTE. 3-4 URB.
                          CHACRA CERRO LIMA - LIMA - COMAS
                        </td>
                      </tr>
                      <tr>
                        <td>ANC PERU S.A.&nbsp;</td>
                        <td>
                          AV. ELMER FAUCETT Y TOMAS VALLE NRO. 124 INT. A CENTRO
                          AEREO COMERCIAL PROV. CONST. DEL CALLAO - PROV. CONST.
                          DEL CALLAO - CALLAO
                        </td>
                      </tr>
                      <tr>
                        <td>AQP ROBERTS SOCIEDAD ANONIMA CERRADA&nbsp;</td>
                        <td>
                          CAL.EDUARDO LOPEZ DE ROMAÑA NRO. 201 Z.I. PARQUE
                          INDUSTRIAL (A DOS CUADRAS DE LAIVE) AREQUIPA -
                          AREQUIPA - AREQUIPA
                        </td>
                      </tr>
                      <tr>
                        <td>ARENA MEDIA PERU S.A.C.&nbsp;</td>
                        <td>
                          AV. ALBERTO DEL CAMPO NRO. 411 (PISO 10) LIMA - LIMA -
                          MAGDALENA DEL MAR
                        </td>
                      </tr>
                      <tr>
                        <td>ASTARA PERU RETAIL S.A.C.</td>
                        <td>
                          AV. REPUBLICA DE PANAMA NRO. 4679 LIMA - LIMA -
                          SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTO CLUB FLORIDA S.A.C.&nbsp;</td>
                        <td>
                          CAL.AV. CIRCUNVALACION NRO. 2195 URB. SALAMANCA (2
                          CUADRAS DEL ARCO SALAMANCA) LIMA - LIMA - ATE
                        </td>
                      </tr>
                      <tr>
                        <td>AUTO SUMMIT PERU S.A.C.&nbsp;</td>
                        <td>
                          AV. JAVIER PRADO NRO. 5425 URB. RESIDENCIAL MONTERRICO
                          (CRUCE DE JAVIER PRADO CON FRUTALES) LIMA - LIMA - LA
                          MOLINA
                        </td>
                      </tr>
                      <tr>
                        <td>AUTO TOTAL S.R.L.&nbsp;</td>
                        <td>
                          AV. ALFREDO BENAVIDES NRO. 5022 URB. LAS GARDENIAS
                          LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTO TRADERS S.A.C.&nbsp;</td>
                        <td>
                          AV. JAVIER PRADO ESTE NRO. 3580 URB. JACARANDA II LIMA
                          - LIMA - SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>AUTO VENDING COMPANY S.A.C.&nbsp;</td>
                        <td>
                          AV. AREQUIPA NRO. 1492 INT. 801 URB. SANTA BEATRIZ
                          LIMA - LIMA - LIMA
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOCAR DEL PERU S.A&nbsp;</td>
                        <td>
                          AV. MORRO SOLAR NRO. 812 URB. SANTA TERESA LIMA - LIMA
                          - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOCLASS&nbsp;</td>
                        <td>
                          PJ. MARCOS NICOLINI NRO. 216 URB. AZCONA LIMA - LIMA -
                          BREÑA
                        </td>
                      </tr>
                      <tr>
                        <td>AUTODISA MOTOS E.I.R.L.&nbsp;</td>
                        <td>
                          CAL.LOS GERANIOS NRO. 105 (SUB LOTE 2A-3 SANTA MARIA -
                          CHOSICA) LIMA - LIMA - LURIGANCHO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOESPAR S A&nbsp;</td>
                        <td>
                          AV. ALFREDO MENDIOLA NRO. 1635 URB. LA MILLA (EX
                          FIORI-INDUSTRIAL) LIMA - LIMA - SAN MARTIN DE PORRES
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOFONDO SAC&nbsp;</td>
                        <td>
                          AV. MANUEL OLGUÍN NRO. 335 (EDIFICIO LINK TOWER
                          OFICINA 102) LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOLAND S.A.&nbsp;</td>
                        <td>
                          AV. ALFREDO BENAVIDES NRO. 4040 URB. CHAMA LIMA - LIMA
                          - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOMOTORES FRANCIA PERU S.A.C&nbsp;</td>
                        <td>
                          AV. RICARDO RIVERA NAVARRETE NRO. 495 INT. 601A URB.
                          JARDIN (TORRE NAVARRETE) LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOMOTORES GILDEMEISTER PERU S.A.&nbsp;</td>
                        <td>
                          AV. CRISTOBAL DE PERALTA NORT NRO. 968 URB. SAN
                          IDELFONSO DE MONTERRI LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOMOTRIZ MI TALLER S.A.C.&nbsp;</td>
                        <td>
                          AV. TOMAS MARSANO NRO. 890 URB. VILLA VICTORIA LIMA -
                          LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOMOTRIZ SAN BORJA S.A.C.&nbsp;</td>
                        <td>
                          AV. SAN LUIS NRO. 2433 URB. SAN BORJA CENTRO LIMA -
                          LIMA - SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOMOVILPERU.COM S.A.C.&nbsp;</td>
                        <td>
                          JR. PEDRO LOPEZ DE AYALA NRO. 748 DPTO. 401 LIMA -
                          LIMA - SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>AUTONIZA S.A.C.</td>
                        <td>
                          AV. REPUBLICA DE PANAMA NRO. 4141 LIMA - LIMA -
                          SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOS AVANZADOS E.I.R.L.&nbsp;</td>
                        <td>
                          AV. CONSTRUCTORES MZA. Q LOTE. 32 URB. LAS ACACIAS
                          (CUADRA 5 DE CONSTRUCTORES) LIMA - LIMA - LA MOLINA
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOS EXCLUSIVOS S.R.L.&nbsp;</td>
                        <td>
                          AV. ALFREDO BENAVIDES NRO. 4845 URB. LAS GARDENIAS
                          LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOS FAJARDO E.I.R.L.&nbsp;</td>
                        <td>
                          CAL.SANTANDER NRO. 186 LIMA - LIMA - PUEBLO LIBRE
                          (MAGDALENA VIEJA)
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOS MONTECARLO S.A.C.&nbsp;</td>
                        <td>
                          CAR.CENTRAL MZA. F LOTE. 4 URB. ALFONSO COBIÁN LIMA -
                          LIMA - CHACLACAYO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOSHOP PERU S.A.C.&nbsp;</td>
                        <td>
                          AV. AMERICA NORTE NRO. 1406 URB. SANTA LEONOR LA
                          LIBERTAD - TRUJILLO - TRUJILLO
                        </td>
                      </tr>
                      <tr>
                        <td>AUTOTIENDA SOCIEDAD ANONIMA CERRADA</td>
                        <td>
                          AV. MARISCAL CASTILLA NRO. 2991 URB. 1 DE MAYO JUNIN -
                          HUANCAYO - EL TAMBO
                        </td>
                      </tr>
                      <tr>
                        <td>AZUR CAR E.I.R.L.&nbsp;</td>
                        <td>
                          AV. ALFREDO BENAVIDES NRO. 5017 URB. LAS GARDENIAS
                          LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>BANCO SANTANDER PERU SA&nbsp;</td>
                        <td>
                          AV. RICARDO RIVERA NAVARRETE NRO. 475 INT. 14 URB.
                          JARDIN (EDIFICIO TORRE NAVARRETE) LIMA - LIMA - SAN
                          ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>BARBACCI MOTORS S.A.&nbsp;</td>
                        <td>
                          AV. PETIT THOUARS NRO. 4324 LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>BC AUTOS E.I.R.L.&nbsp;</td>
                        <td>
                          AV. ALFREDO BENAVIDES NRO. 4845 URB. LAS GARDENIAS
                          LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>BENCAR ASOCIADOS S.A.C&nbsp;</td>
                        <td>
                          JR. LAS BAYAS MZA. F LOTE. 21 URB. PORTADA DE CERES
                          (HUAROCHIRI Y LOS CAHNCAS-PORTON AZUL) LIMA - LIMA -
                          SANTA ANITA
                        </td>
                      </tr>
                      <tr>
                        <td>BGAS IMPORT SRL&nbsp;</td>
                        <td>
                          AV. FRAY LUIS DE LEON NRO. 417 URB. SAN BORJA (ALTURA
                          MINISTERIO ENERGIA Y MINAS) LIMA - LIMA - SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>BOOST BRAND ACCELERATOR SAC&nbsp;</td>
                        <td>
                          AV. AYACUCHO NRO. 1331 URB. LIGURIA (INTERIOR 101-J)
                          LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>BUREKI S.A.C.&nbsp;</td>
                        <td>
                          AV. BENAVIDES NRO. 5085 LIMA - LIMA - SANTIAGO DE
                          SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>CALET CARS SOCIEDAD ANONIMA CERRADA</td>
                        <td>
                          AV. DEL PACIFICO NRO. 135 DPTO. 402 URB. PARQUES DE LA
                          HUACA LIMA - LIMA - SAN MIGUEL
                        </td>
                      </tr>
                      <tr>
                        <td>CARMAX PERU E.I.R.L.&nbsp;</td>
                        <td>
                          VALLES DEL SUR 240 MZA. V LOTE. 10 DPTO. 301 URB. LOS
                          ROSALES LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>CFRR INVESTMENTS E.I.R.L.&nbsp;</td>
                        <td>
                          AV. VELASCO ASTETE NRO. 217 DPTO. 302 LIMA - LIMA -
                          SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>CHOCAVENTO S A&nbsp;</td>
                        <td>
                          AV. GRAL FRANCISCO BOLOGNESI NRO. 808 LIMA - LIMA -
                          BARRANCO
                        </td>
                      </tr>
                      <tr>
                        <td>CODIMAK SELVA SAC&nbsp;</td>
                        <td>
                          PJ. MARTIR OLAYA NRO. 129 INT. 1506 LIMA - LIMA -
                          MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>COMPAÑIA GOODYEAR DEL PERU S.A.</td>
                        <td>
                          AV. ARGENTINA NRO. 6037 Z.I. INDUSTRIAL (A 3 CDRAS DE
                          LA AV.UNIVERSITARIA) PROV. CONST. DEL CALLAO - PROV.
                          CONST. DEL CALLAO - CARMEN DE LA LEGUA REYNOSO
                        </td>
                      </tr>
                      <tr>
                        <td>CORPORACIÓN VEGA S.A.C&nbsp;</td>
                        <td>
                          CAL.1 MZA. A LOTE. 23 DPTO. 302 URB. LOS JARDINES DE
                          SANTA ROSA ET. UNO LIMA - LIMA - SAN MARTIN DE PORRES
                        </td>
                      </tr>
                      <tr>
                        <td>CROSLAND AUTOMOTRIZ SAC&nbsp;</td>
                        <td>
                          AV. AUGUSTO PEREZ ARANIBAR NRO. 1872 LIMA - LIMA - SAN
                          ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>DATOS GRUPO EXITOS E.I.R.L.&nbsp;</td>
                        <td>
                          JR. SIMON BOLIVAR NRO. 105 INT. 101 URB. SAN MIGUEL
                          (ALTURA DE LA 3 DE LA AV. BERTOLOTTO) LIMA - LIMA -
                          SAN MIGUEL
                        </td>
                      </tr>
                      <tr>
                        <td>DERCO PERU S.A.&nbsp;</td>
                        <td>
                          AV. MANUEL OLGUIN NRO. 325 (PISO 11) LIMA - LIMA -
                          SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>DERCOCENTER S.A.C.&nbsp;</td>
                        <td>
                          AV. MANUEL OLGUIN NRO. 325 (PISO 11) LIMA - LIMA -
                          SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>
                          DHG MULTISERVICIOS SOCIEDAD ANONIMA CERRADA&nbsp;
                        </td>
                        <td>
                          CAL.TRINIDAD NRO. 385 DPTO. 202 (ESPALDA PASTELERIA
                          SAN ANTONIO) LIMA - LIMA - SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>DIAMANTE DEL PACIFICO S.A.&nbsp;</td>
                        <td>
                          AV. REPUBLICA DE PANAMA NRO. 3837 URB. VILLA VICTORIA
                          LIMA - LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>DIVECENTER S.A.C&nbsp;</td>
                        <td>
                          AV. CANADA NRO. 1160 URB. SANTA CATALINA LIMA - LIMA -
                          LA VICTORIA
                        </td>
                      </tr>
                      <tr>
                        <td>DIVEIMPORT S.A.&nbsp;</td>
                        <td>
                          AV. NICOLAS ARRIOLA NRO. 500 URB. SANTA CATALINA LIMA
                          - LIMA - LA VICTORIA
                        </td>
                      </tr>
                      <tr>
                        <td>DONGFENG MOTOR PERU SAC&nbsp;</td>
                        <td>
                          AV. ELMER FAUCETT NRO. 101 (101-103) LIMA - LIMA - SAN
                          MIGUEL
                        </td>
                      </tr>
                      <tr>
                        <td>EAFC MAQUISISTEMA S.A.&nbsp;</td>
                        <td>
                          AV. AREQUIPA NRO. 4598 RES. MIRAFLORES LIMA - LIMA -
                          MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>
                          EFICIENCIA GARANTIZADA EN SERVICIOS DE CALIDAD
                          S.A.C.&nbsp;
                        </td>
                        <td>
                          CAL.FRANCISCO MASIAS NRO. 544 DPTO. 701 LIMA - LIMA -
                          SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>ELECTRON MOTORS S.A.&nbsp;</td>
                        <td>
                          AV. JOSE PARDO NRO. 434 INT. 1001 URB. SURQUILLO LIMA
                          - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>
                          EMPRESA DE CRÉDITOS ACCESO CREDITICIO SOCIEDAD ANÓNIMA
                        </td>
                        <td>
                          AV. ENRIQUE CANAVAL Y MOREYRA NRO. 452 DPTO. 11 URB.
                          SANTA ANA LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>EQUIFAX PERU S.A.&nbsp;</td>
                        <td>
                          CAL.CHINCHON NRO. 1018 (PISO 13) LIMA - LIMA - SAN
                          ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>EURO CAMIONES S.A.</td>
                        <td>
                          CAL.LOS CIPRESES NRO. 420 URB. LOS FICUS LIMA - LIMA -
                          SANTA ANITA
                        </td>
                      </tr>
                      <tr>
                        <td>EURO MOTORS S.A.&nbsp;</td>
                        <td>
                          AV. DOMINGO ORUE NRO. 973 LIMA - LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>EV SERVICIOS GENERALES DE AUTOS EIRL&nbsp;</td>
                        <td>
                          JR. AYACUHO NRO. 665 DPTO. 301 URB. SARITA COLONIA
                          (CRUCE DE AV PACIFICO Y HAYA DE LA TORRE) PROV. CONST.
                          DEL CALLAO - PROV. CONST. DEL CALLAO - LA PERLA
                        </td>
                      </tr>
                      <tr>
                        <td>EXIMPORT DISTRIBUIDORES DEL PERU S A</td>
                        <td>
                          AV. ARGENTINA NRO. 1710 (ALT AV NICOLAS DUEñAS) LIMA -
                          LIMA - LIMA
                        </td>
                      </tr>
                      <tr>
                        <td>FASTLANE S.A.&nbsp;</td>
                        <td>
                          AV. NUEVA TOMAS MARSANO NRO. 280 URB.
                          LOTIZAC.IND.PANAMA (ESQ.PASAJE SAN LORENZO 1393) LIMA
                          - LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>FINANCIERA EFECTIVA S.A.</td>
                        <td>
                          AV. EL DERBY NRO. 254 INT. 2101 (EDIFICIO LIMA CENTRAL
                          TOWER) LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>FORD PERU S.R.L.</td>
                        <td>
                          AV. VICTOR A. BELAUNDE NRO. 332 INT. 601 LIMA - LIMA -
                          SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>GACSA PERU S.A.C&nbsp;</td>
                        <td>
                          AV. PASEO DE LA REPUBLICA NRO. 2289 URB. SANTA
                          CATALINA LIMA - LIMA - LA VICTORIA
                        </td>
                      </tr>
                      <tr>
                        <td>GAMAUTOS SAC&nbsp;</td>
                        <td>
                          AV. GUARDIA CIVIL SUR MZA. B-1 LOTE. 5 URB. SANTA ROSA
                          DE SURCO (A DOS CUADRA DEL TREN DEL SABER) LIMA - LIMA
                          - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>GENERAL MOTORS PERU S.A.&nbsp;</td>
                        <td>
                          AV. JUAN DE ARONA NRO. 151 INT. 405 LIMA - LIMA - SAN
                          ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>GERMANIA AUTOMOTRIZ S.A.C.&nbsp;</td>
                        <td>
                          AV. ANGAMOS ESTE NRO. 1869 (COSTADO OPEN PLAZA DE
                          SURQUILLO) LIMA - LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>GLASO INMOBILIARIA SAC&nbsp;</td>
                        <td>
                          NRO. S/N DPTO. 203 PLAYA LA HERRA DURA (EDIFICIO LAS
                          GAVIOTAS) LIMA - LIMA - CHORRILLOS
                        </td>
                      </tr>
                      <tr>
                        <td>GRUPO BECAL S.A.C.&nbsp;</td>
                        <td>
                          AV. JAVIER PRADO OESTE NRO. 555 DPTO. 1303 URB.
                          ORRANTIA LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>GRUPO BESS S.A.C.</td>
                        <td>
                          MZA. A LOTE. 11 URB. PALMAS REALES (PARALELA A CDRA.
                          13 AV. CARLOS IZAGUIRRE) LIMA - LIMA - LOS OLIVOS
                        </td>
                      </tr>
                      <tr>
                        <td>GRUPO CIGA S.A.C.&nbsp;</td>
                        <td>
                          JR. PASEO DE AGUAS NRO. 296 URB. PORTADA DEL SOL
                          (CUADRA 11 DE AV. LOS FRESNOS) LIMA - LIMA - LA MOLINA
                        </td>
                      </tr>
                      <tr>
                        <td>GRUPO INTREX S.A.C&nbsp;</td>
                        <td>
                          PJ. PEDRO PAULET NRO. 251 C.H. TORRES DE SAN BORJA
                          LIMA - LIMA - SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>GRUPO INVENVE S.A.C.&nbsp;</td>
                        <td>
                          AV. GOZZOLI SUR NRO. 199 DPTO. 301 LIMA - LIMA - SAN
                          BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>GRUPO PANA S.A.&nbsp;</td>
                        <td>
                          AV. AVIACION NRO. 4928 URB. HIGUERETA LIMA - LIMA -
                          SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>GRUPO V &amp; J S.A.C.&nbsp;</td>
                        <td>
                          CAL.THALIA MZA. H1 LOTE. 10 INT. 504 URB. OLIMPO
                          (CRDRA. 13 AV. LOS QUECHUAS) LIMA - LIMA - ATE
                        </td>
                      </tr>
                      <tr>
                        <td>GYD COMERCIAL E.I.R.L.&nbsp;</td>
                        <td>
                          AV. DE LA MARINA NRO. 790 DPTO. 2 URB. MARISCAL
                          ANTONIO JOSE DE SUCRE LIMA - LIMA - PUEBLO LIBRE
                          (MAGDALENA VIEJA)
                        </td>
                      </tr>
                      <tr>
                        <td>HAUSWAGEN S.A</td>
                        <td>
                          AV. JAVIER PRADO OESTE NRO. 203 URB. ORRANTIA (PISO 7)
                          LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>HAVAS MEDIA PERU S.A.C.&nbsp;</td>
                        <td>
                          AV. ALBERTO DEL CAMPO NRO. 411 (PISO 10) LIMA - LIMA -
                          MAGDALENA DEL MAR
                        </td>
                      </tr>
                      <tr>
                        <td>HONDA DEL PERU S.A.&nbsp;</td>
                        <td>
                          AV. REPUBLICA DE PANAMA NRO. 3545 INT. 501 URB.
                          LIMATAMBO LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>IBEROTEX S.A.C.&nbsp;</td>
                        <td>
                          CAL.EL PARQUE NRO. 149 (2DO PISO) LIMA - LIMA - SAN
                          ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>IMPORTACIONES BIG DADDY S.A.C.&nbsp;</td>
                        <td>
                          AV. SAN BORJA NORTE NRO. 979 DPTO. 202 URB. SAN BORJA
                          SUR LIMA - LIMA - SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>INCHCAPE LATAM PERU S.A.&nbsp;</td>
                        <td>
                          AV. MORRO SOLAR NRO. 812 URB. SANTA TERESA LIMA - LIMA
                          - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>INCHCAPE MOTORS PERU S.A.&nbsp;</td>
                        <td>
                          AV. EL POLO NRO. 1117 URB. LA ARBOLEDA (CRUCE AV.EL
                          POLO CON AV. EL CORTIJO) LIMA - LIMA - SANTIAGO DE
                          SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>INTERAMERICANA TRUJILLO SA&nbsp;</td>
                        <td>
                          AV. NICOLAS DE PIEROLA NRO. 750 URB. SAN FERNANDO LA
                          LIBERTAD - TRUJILLO - TRUJILLO
                        </td>
                      </tr>
                      <tr>
                        <td>INTERNATIONAL CAMIONES DEL PERU S.A&nbsp;</td>
                        <td>
                          AV. DOMINGO ORUE NRO. 973 LIMA - LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>INTERSEGURO COMPAÑIA DE SEGUROS S.A.&nbsp;</td>
                        <td>
                          AV. JAVIER PRADO ESTE NRO. 492 INT. 2601 URB. JARDIN
                          LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>INTI MOTORS S.A.C.&nbsp;</td>
                        <td>
                          CAR.CTRAL MZA. N LOTE. 16 PORT.J.PRADO (FTE
                          SUPERMERCADO METRO-1ERA ETAPA) LIMA - LIMA - ATE
                        </td>
                      </tr>
                      <tr>
                        <td>INVERSIONES KIMER S.R.LTDA&nbsp;</td>
                        <td>
                          AV. CAMINOS DEL INCA NRO. 2615 URB. MONTERICO SUR LIMA
                          - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>IVOSALVI MULTISERVICIOS S.A.C.&nbsp;</td>
                        <td>
                          AV. EL BANCO MZA. B LOTE. 14A DPTO. 201 URB. EL BANCO
                          DE JAVIER PRADO LIMA - LIMA - ATE
                        </td>
                      </tr>
                      <tr>
                        <td>J.C. UGARTE IMPORT S.A.C.&nbsp;</td>
                        <td>
                          AV. NICOLAS DE ARRIOLA NRO. 330 URB. SANTA CATALINA
                          LIMA - LIMA - LA VICTORIA
                        </td>
                      </tr>
                      <tr>
                        <td>JAPAN AUTOS S.A.&nbsp;</td>
                        <td>
                          AV. SAN LUIS NRO. 2445 URB. SAN BORJA CENTRO LIMA -
                          LIMA - SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>JEMMAS SAC&nbsp;</td>
                        <td>
                          AV. PABLO CARRIQUIRY MAURER NRO. 498 LIMA - LIMA - SAN
                          ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>JG GENERAL IMPORTS E.I.R.L.&nbsp;</td>
                        <td>
                          PQ. MANUEL GONZALES PRADA NRO. 190 URB. OYAGUE
                          (ESPALDAS DE CENTRO LARCO HERRERA) LIMA - LIMA -
                          MAGDALENA DEL MAR
                        </td>
                      </tr>
                      <tr>
                        <td>JOB BUSINESS DEL PERU S.A.C&nbsp;</td>
                        <td>
                          AV. JOSE PARDO NRO. 182 DPTO. 702 LIMA - LIMA -
                          MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>JP CAR SOCIEDAD ANONIMA CERRADA&nbsp;</td>
                        <td>
                          AV. GUARDIA PERUANA MZA. Q LOTE. 12 URB. LA CAMPIÑA
                          (CDRA 13. DE GUARDIA PERUANA.) LIMA - LIMA -
                          CHORRILLOS
                        </td>
                      </tr>
                      <tr>
                        <td>KIA IMPORT PERU S.A.C.&nbsp;</td>
                        <td>
                          AV. RICARDO RIVERA NAVARRETE NRO. 495 INT. 601A URB.
                          JARDIN (TORRE NAVARRETE) LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>KM AUTOS SAC&nbsp;</td>
                        <td>
                          AV. PABLO CARRIQUIRRY NRO. 498 URB. EL PALOMAR (CRUCE
                          CON CANAVAL Y MOREYRA) LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>KOOPA S.A.C.&nbsp;</td>
                        <td>
                          CAL.JOSE GRANDA NRO. 335 DPTO. 9 URB. SANTA ROSA LIMA
                          - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>KURT &amp; ASOCIADOS S.A.C.&nbsp;</td>
                        <td>
                          AV. REPUBLICA DE PANAMA NRO. 6949 LIMA - LIMA -
                          SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>LA POSITIVA SEGUROS Y REASEGUROS S.A.A.</td>
                        <td>
                          CAL.FRANCISCO MASIAS NRO. 370 (CRUCE CON AV. JAVIER
                          PRADO ESTE) LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>LEON AUTOS S.A&nbsp;</td>
                        <td>
                          JR. MORRO SOLAR NRO. 1030 URB. JUAN PABLO DE
                          MONTERRICO LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>LIMAUTOS AUTOMOTRIZ DEL PERU S.A.C&nbsp;</td>
                        <td>
                          CAL.FRANCISCO DEL CASTILLO NRO. 236 URB. SAN ANTONIO
                          LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>LS INVERSIONES AUTOPARK E.I.R.L.&nbsp;</td>
                        <td>
                          AV. CORONEL JOSE LEAL NRO. 1511 DPTO. NUM. URB. RISSO
                          LIMA - LIMA - LINCE
                        </td>
                      </tr>
                      <tr>
                        <td>LUIVAR E.I.R.L.&nbsp;</td>
                        <td>
                          CAR.PANAMERICANA SUR KM. 10.5 LOTE. 584- DPTO. B Z.I.
                          PANAMERICANA SUR LIMA - LIMA - SAN JUAN DE MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>LUREVA INVERSIONES Y REPRESENTACIONES SAC&nbsp;</td>
                        <td>
                          CAL.ARTURO DURAY NRO. 259 DPTO. 501 URB. JORGE CHAVEZ
                          LIMA - LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>LUZ DEL SUR S.A.A.&nbsp;</td>
                        <td>
                          AV. CANAVAL Y MOREYRA NRO. 380 LIMA - LIMA - SAN
                          ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>LV AUTOS &amp; SERVICIOS SAC&nbsp;</td>
                        <td>
                          JR. ARTURO AGUILAR NRO. 107 URB. VISTA ALEGRE LIMA -
                          LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>
                          M. ALBERTIS AUTOMOTRIZ EMPRESA INDIVIDUAL DE
                          RESPONSABILIDAD LIMITADA&nbsp;
                        </td>
                        <td>
                          AV. JAVIER PRADO ESTE NRO. 2962 URB. JACARANDA LIMA -
                          LIMA - SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>M.C. AUTOS DEL PERU S.A.&nbsp;</td>
                        <td>
                          AV. RICARDO RIVERA NAVARRETE NRO. 495 INT. 601A (TORRE
                          NAVARRETE) LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>MAGIC TOUCH S.A.C.&nbsp;</td>
                        <td>
                          CAL.GRAL SUAREZ NRO. 341 (MEDIA CDRA DEL TEATRO
                          MARSANO) LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>
                          MAPFRE PERU COMPAÑIA DE SEGUROS Y REASEGUROS
                          S.A.&nbsp;
                        </td>
                        <td>
                          AV. 28 DE JULIO NRO. 873 URB. MIRAFLORES LIMA - LIMA -
                          MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>MAPFRE PERU VIDA COMPANIA DE SEGUROS&nbsp;</td>
                        <td>
                          AV. 28 DE JULIO NRO. 873 (--) LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>MAQALFA SAC&nbsp;</td>
                        <td>
                          AV. DE LA MARINA NRO. 3392 URB. MARANGA ET. CUATRO
                          LIMA - LIMA - SAN MIGUEL
                        </td>
                      </tr>
                      <tr>
                        <td>MAQBETA SAC&nbsp;</td>
                        <td>
                          AV. REPUBLICA DE PANAMA NRO. 4577 URB. CERCADO LIMA -
                          LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>MaqDelta SAC&nbsp;</td>
                        <td>
                          AV. JAVIER PRADO ESTE NRO. 5475 URB. RESIDENCIAL
                          MONTERRICO LIMA - LIMA - LA MOLINA
                        </td>
                      </tr>
                      <tr>
                        <td>MAQGAMA S.A.C.&nbsp;</td>
                        <td>
                          JR. SAN LORENZO NRO. 1001 LIMA - LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>MAQSEMINUEVOS S.A.C.&nbsp;</td>
                        <td>
                          AV. TOMAS VALLE NRO. 611 INT. 621 FND. CHAVARRIA (AV.
                          TOMÁS VALLE 611 - 621) LIMA - LIMA - SAN MARTIN DE
                          PORRES
                        </td>
                      </tr>
                      <tr>
                        <td>MAQUIMOTORA S.A.C.&nbsp;</td>
                        <td>
                          AV. LA MARINA NRO. 1110 LIMA - LIMA - PUEBLO LIBRE
                          (MAGDALENA VIEJA)
                        </td>
                      </tr>
                      <tr>
                        <td>MAQUINARIA NACIONAL S.A. PERU&nbsp;</td>
                        <td>
                          AV. CRISTOBAL DE PERALTA NORT NRO. 968 URB. SAN
                          IDELFONSO DE MONTERRI LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>MAQUINARIAS S.A&nbsp;</td>
                        <td>
                          AV. CAMINO REAL NRO. 390 INT. 1501 URB. CENTRO
                          COMERCIAL CAMINO REAL LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>MAREAUTO PERU SA&nbsp;</td>
                        <td>
                          AV. RICARDO RIVERA NAVARRETE NRO. 475 INT. 501B URB.
                          JARDIN LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>MASA EQUIPOS INDUSTRIALES S.A.</td>
                        <td>
                          CAR.CENTRAL NRO. 1283 Z.I. UNIDAD INMOBILIARIA (SUBLT
                          2-A-2) LIMA - LIMA - SANTA ANITA
                        </td>
                      </tr>
                      <tr>
                        <td>MASAKI S.A.C.&nbsp;</td>
                        <td>
                          JR. JOSE GALVEZ NRO. 140 INT. 008 URB. ORBEA (MUNI
                          MAGDALENA DEL MAR, CUAD 35 BRASIL) LIMA - LIMA -
                          MAGDALENA DEL MAR
                        </td>
                      </tr>
                      <tr>
                        <td>MATSURI REPRESENTACIONES SAC&nbsp;</td>
                        <td>
                          AV. JORGE BASADRE GROHMANN OESTE NRO. 240 URB. TACNA
                          (FRENTE LAVADERO VEH.AUTOMAX) TACNA - TACNA - TACNA
                        </td>
                      </tr>
                      <tr>
                        <td>MAXI MOBILITY PERU S.A.C.&nbsp;</td>
                        <td>
                          EMILIO CAVENECIA NRO. 151 (PISO 7) LIMA - LIMA -
                          MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>MB RENTING SA&nbsp;</td>
                        <td>
                          AV. JAVIER PRADO ESTE NRO. 6042 LIMA - LIMA - LA
                          MOLINA
                        </td>
                      </tr>
                      <tr>
                        <td>MBA INVERSIONES Y DESARROLLO S.A.C.&nbsp;</td>
                        <td>
                          CAL.LOS ALMENDROS NRO. 141 DPTO. 18 URB. RESIDENCIAL
                          MONTERRICO LIMA - LIMA - LA MOLINA
                        </td>
                      </tr>
                      <tr>
                        <td>MITSUI AUTOMOTRIZ S A&nbsp;</td>
                        <td>
                          AV. JAVIER PRADO ESTE NRO. 6042 URB. SAN CESAR LIMA -
                          LIMA - LA MOLINA
                        </td>
                      </tr>
                      <tr>
                        <td>MMS INVERSIONES S.R.L.&nbsp;</td>
                        <td>
                          AV. ALEJANDRO VELASCO ASTETE NRO. 2817 URB. PROLONG.
                          BENAVIDES LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>MOTOCORP S.A.C.&nbsp;</td>
                        <td>
                          AV. EL DERBY NRO. 254 (EDIFICIO LIMA CENTRAL TOWER OF.
                          2105) LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>MOTOLAB SOCIEDAD ANONIMA CERRADA&nbsp;</td>
                        <td>
                          CAL.28 DE JULIO NRO. 261 DPTO. 808 LIMA - LIMA -
                          MAGDALENA DEL MAR
                        </td>
                      </tr>
                      <tr>
                        <td>MOTOR MUNDO SA&nbsp;</td>
                        <td>
                          AV. CRISTOBAL DE PERALTA NORT NRO. 968 URB. SAN
                          IDELFONSO DE MONTERRI LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>MOTORIUM S.A.C&nbsp;</td>
                        <td>
                          AV. ALFREDO MENDIOLA NRO. 7020 (ALT. PRIMERA ENTRADA
                          DE PRO) LIMA - LIMA - SAN MARTIN DE PORRES
                        </td>
                      </tr>
                      <tr>
                        <td>MOTORSUR S.A.C.&nbsp;</td>
                        <td>
                          AV. AVIACION KM. 7 ZAMACOLA (TIENDA DE VEHICULOS KIA)
                          AREQUIPA - AREQUIPA - CERRO COLORADO
                        </td>
                      </tr>
                      <tr>
                        <td>MP AUTOS S.A.C.&nbsp;</td>
                        <td>
                          AV. BENAVIDES NRO. 1977 LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>
                          NATRON EMPRESA INDIVIDUAL DE RESPONSABILIDAD
                          LIMITADA&nbsp;
                        </td>
                        <td>
                          AV. LIMA NRO. 610 URB. VALLECITO (PISO 2) AREQUIPA -
                          AREQUIPA - AREQUIPA
                        </td>
                      </tr>
                      <tr>
                        <td>NETMOTORS S.A.C.&nbsp;</td>
                        <td>
                          AV. MARISCAL RAMON CASTILLA NRO. 459 URB. LAS
                          MAGNOLIAS DE SURCO LIMA - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>NEUFUSS &amp; AMADO S.A.C.&nbsp;</td>
                        <td>
                          AV. BELAUNDE OESTE NRO. 500 DPTO. 1A URB. UV RIMAC
                          LIMA - LIMA - COMAS
                        </td>
                      </tr>
                      <tr>
                        <td>NISSAN PERU S.A.C.&nbsp;</td>
                        <td>
                          AV. JAVIER PRADO ESTE NRO. 492 INT. 1501 (URB. JARDÍN)
                          LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>OK AUTOMOTORES S.A.C.&nbsp;</td>
                        <td>
                          AV. CARLOS IZAGUIRRE NRO. 271 (FRENTE A PLAZA VEA)
                          LIMA - LIMA - INDEPENDENCIA
                        </td>
                      </tr>
                      <tr>
                        <td>
                          OLX CLASIFICADOS PERU SOCIEDAD ANONIMA CERRADA&nbsp;
                        </td>
                        <td>
                          AV. JOSE LARCO NRO. 880 INT. 801 URB. LEURO LIMA -
                          LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>OPERACIONES ARGUS SAC&nbsp;</td>
                        <td>
                          AV. LOS FRUTALES NRO. 601 LIMA - LIMA - LA MOLINA
                        </td>
                      </tr>
                      <tr>
                        <td>OVERSEAS MOTORS PERU S.A.C.&nbsp;</td>
                        <td>
                          AV. RICARDO RIVERA NAVARRETE NRO. 495 INT. 601A URB.
                          JARDIN (TORRE NAVARRETE) LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>PACIFICO COMPAÑIA DE SEGUROS Y REASEGUROS&nbsp;</td>
                        <td>
                          AV. JUAN DE ARONA NRO. 830 OTR. CENTRO EMPRESARIAL SAN
                          ISIDRO LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>PANA MOTORS SAC&nbsp;</td>
                        <td>
                          AV. REPUBLICA DE PANAMA NRO. 3321 URB. EL PALOMAR LIMA
                          - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>PEGAMIL CORPORATION S.A.C.&nbsp;</td>
                        <td>
                          CAL.19 MZA. R LOTE. 05 APV. COMPRADORES DE TERRENOS DE
                          CAMPOY (FRENTE COLEGIO SOLIDARIDAD PRIMARIA) LIMA -
                          LIMA - SAN JUAN DE LURIGANCHO
                        </td>
                      </tr>
                      <tr>
                        <td>PERU AUTOSELECTOS S.A.C.&nbsp;</td>
                        <td>
                          AV. EL SOL ESTE NRO. 850 URB. TEJADA ALTA LIMA - LIMA
                          - BARRANCO
                        </td>
                      </tr>
                      <tr>
                        <td>PERU TECNOLOGIA PARA ECOMMERCE S.A.C.&nbsp;</td>
                        <td>
                          AV. JORGE BASADRE GROHMANN NRO. 349 URB. ORRANTIA LIMA
                          - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>PESQUERA SAN LUIS S.A&nbsp;</td>
                        <td>
                          AV. BOLOGNESI NRO. 617 INT. 14 (MERCADO LA PUNTA)
                          PROV. CONST. DEL CALLAO - PROV. CONST. DEL CALLAO - LA
                          PUNTA
                        </td>
                      </tr>
                      <tr>
                        <td>PLANETA MOTOR S.A.C.&nbsp;</td>
                        <td>
                          CAL.ROMA NRO. 561 INT. 101 (ALT. CDAS. 5 Y 6 MALECON
                          CISNEROS) LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>PLAYA DE ESTACIONAMIENTO ARAMBURU EIRL&nbsp;</td>
                        <td>
                          AV. ANDRES ARAMBURU NRO. 150 LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>PLAZA MOTORS S.A.C&nbsp;</td>
                        <td>
                          AV. RICARDO RIVERA NAVARRETE NRO. 495 INT. 601A URB.
                          JARDIN (TORRE NAVARRETE) LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>PLUS NEO MOTORS SAC&nbsp;</td>
                        <td>
                          AV. TOMAS MARSANO NRO. 890 URB. EL CONDOR LIMA - LIMA
                          - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>PROCUSTODIA S.R.L.&nbsp;</td>
                        <td>
                          AV. GUARDIA CIVIL NRO. 1270 URB. CORPAC LIMA - LIMA -
                          SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>QUAL MEDIA S.A.C.&nbsp;</td>
                        <td>
                          AV. ARMENDARIZ NRO. 480 INT. 7 LIMA - LIMA -
                          MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>RENTAEQUIPOS LEASING PERU SA&nbsp;</td>
                        <td>
                          CAL.DIONISIO DERTEANO NRO. 184 INT. 1601 URB. SANTA
                          ANA LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>REPARACIONES Y SERVICIOS DEL SUR S.A.C.&nbsp;</td>
                        <td>
                          AV. ALFONSO UGARTE NRO. 250 AREQUIPA - AREQUIPA -
                          AREQUIPA
                        </td>
                      </tr>
                      <tr>
                        <td>RETAIL ANDROID PUNTO COM SAC&nbsp;</td>
                        <td>
                          CAL.FRANCISCO MORENO NRO. 136 URB. CERCADO (A1 CDRA
                          RICARDO PALMA CON VIA EXPRESA) LIMA - LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>REVO MOTORS S.A.&nbsp;</td>
                        <td>
                          AV. TOMAS MARSANO NRO. 402 URB. VILLA VICTORIA LIMA -
                          LIMA - SURQUILLO
                        </td>
                      </tr>
                      <tr>
                        <td>RIMAC SEGUROS Y REASEGUROS&nbsp;</td>
                        <td>
                          CAL.EL PARQUE NRO. 149 INT. PIS2 URB. JARDIN LIMA -
                          LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>ROCIMA E.I.R.L.&nbsp;</td>
                        <td>
                          CAL.PUCALA NRO. 210 INT. 301 LIMA - LIMA - SANTIAGO DE
                          SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>SERVICIOS AL BLANCO E.I.R.L.&nbsp;</td>
                        <td>
                          PJ. HUAURA NRO. 170 URB. SALAMANCA DE MONTERRICO LIMA
                          - LIMA - ATE
                        </td>
                      </tr>
                      <tr>
                        <td>SERVICIOS YELLOW PAGES S.A.C&nbsp;</td>
                        <td>
                          CAL.LAS FRESAS NRO. 617 DPTO. 102 LIMA - LIMA -
                          MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>SMZ TRAKS E.I.R.L.&nbsp;</td>
                        <td>
                          CAL.TRES MARIAS NRO. 340 URB. MONTERRICO LIMA - LIMA -
                          SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>SOCIEDAD AGRICOLA ARONA S.A.&nbsp;</td>
                        <td>
                          JR. CORICANCHA NRO. 114 URB. SAN JUAN BAUTISTA DE
                          VILLA LIMA - LIMA - CHORRILLOS
                        </td>
                      </tr>
                      <tr>
                        <td>SOCIEDAD DE AUTOMOTORES INKA S.A.C.&nbsp;</td>
                        <td>
                          CAR.PANAMERICANA NORTE NRO. SN FND. FUNDO IRIS (SUB
                          LOTE 3) LAMBAYEQUE - CHICLAYO - JOSE LEONARDO ORTIZ
                        </td>
                      </tr>
                      <tr>
                        <td>SOUTH PACIFIC SAC&nbsp;</td>
                        <td>
                          AV. RICARDO RIVERA NAVARRETE NRO. 495 INT. 601A URB.
                          JARDIN (TORRE NAVARRETE) LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>SPORT TRACK EIRL&nbsp;</td>
                        <td>
                          AV. AREQUIPA NRO. 4970 URB. MIRAFLORES (ALT. CDRA. 49
                          DE AV. AREQUIPA) LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>STARTECH VENTURES S.A.C.&nbsp;</td>
                        <td>
                          JR. CASCAJAL NRO. 234 INT. 302 URB. VALLE HERMOSO LIMA
                          - LIMA - SANTIAGO DE SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>STEEL INDUSTRY S A&nbsp;</td>
                        <td>
                          CAR.PANAMERICANA SUR KM. 30.5 LOTE. 1A (FRENTE AL
                          CAMPO MAR U) LIMA - LIMA - LURIN
                        </td>
                      </tr>
                      <tr>
                        <td>TEAM TMG S.A.C&nbsp;</td>
                        <td>
                          AV. BENAVIDES NRO. 5339 LIMA - LIMA - SANTIAGO DE
                          SURCO
                        </td>
                      </tr>
                      <tr>
                        <td>TESTA FREDDA S.A.C.&nbsp;</td>
                        <td>
                          AV. AREQUIPA NRO. 4970 (A UNA CUADRA DE PARDO) LIMA -
                          LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>TOYOTA DEL PERU S.A.&nbsp;</td>
                        <td>
                          AV. SANTO TORIBIO NRO. 173 INT. PI14 (VIA CENTRAL 125,
                          TORRE REAL 8 OF.1401-02) LIMA - LIMA - SAN ISIDRO
                        </td>
                      </tr>
                      <tr>
                        <td>TRACTOR INDUSTRY S.A.C.&nbsp;</td>
                        <td>
                          CAL.DOMINGUEZ NRO. 463 URB. SAN BORJA (ALT CDRA 29 AV
                          JAVIER PRADO) LIMA - LIMA - SAN BORJA
                        </td>
                      </tr>
                      <tr>
                        <td>TRACUSA E.I.R.L&nbsp;</td>
                        <td>
                          AV. NICOLÁS AYLLON NRO. 3904 (FRENTE DEL ESSALUD VOTO
                          BERNALES) LIMA - LIMA - ATE
                        </td>
                      </tr>
                      <tr>
                        <td>TRADECARS PERU S.A.C.&nbsp;</td>
                        <td>TRADECARS PERU S.A.C.&nbsp;</td>
                      </tr>
                      <tr>
                        <td>TRAZZO S.A.C.&nbsp;</td>
                        <td>AV. AREQUIPA NRO. 4986 LIMA - LIMA - MIRAFLORES</td>
                      </tr>
                      <tr>
                        <td>TU COCHE S.A.C.&nbsp;</td>
                        <td>
                          AV. CANADA NRO. 560 URB. SANTA CATALINA LIMA - LIMA -
                          LA VICTORIA
                        </td>
                      </tr>
                      <tr>
                        <td>UVI TECH PERU S.A.C.&nbsp;</td>
                        <td>
                          AV. JOSE LARCO NRO. 1232 URB. ARMENDARIZ (PISO 5
                          OFICINA 05W-101) LIMA - LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>VARGUINI AUTOS E.I.R.L&nbsp;</td>
                        <td>
                          AV. ANGAMOS OESTE NRO. 1569 INT. 602 (PISO 6) LIMA -
                          LIMA - MIRAFLORES
                        </td>
                      </tr>
                      <tr>
                        <td>VOLVO PERU S.A.&nbsp;</td>
                        <td>
                          CAR.PANAMERICANA SUR KM 23.88 KM. 23.8 URB.
                          PANAMERICANA SUR (CONCHAN) LIMA - LIMA - LURIN
                        </td>
                      </tr>
                      <tr>
                        <td>WORLD IMPORT GRENTZ S.A.C.&nbsp;</td>
                        <td>
                          CAL.EL PALMAR NRO. 107 DPTO. 509 URB. SALAMANCA DE
                          MONTERRICO LIMA - LIMA - ATE
                        </td>
                      </tr>
                      <tr>
                        <td>YAMAGUCHI MOTORS S.A.C.&nbsp;</td>
                        <td>
                          AV. NICOLAS ARRIOLA NRO. 835 URB. STA.CATALINA LIMA -
                          LIMA - LA VICTORIA
                        </td>
                      </tr>
                    </tbody>
                  </table>
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
                    <a href="{{route('Financiamiento')}}">
                      Financiamiento Santander Consumer
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Consentimiento')}}">
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Cokkie')}}">Política de Cookies</a>
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
                </ul>
              </section>
              <section className="related-articles">
                <h2 className="related-articles-title">
                  Artículos relacionados
                </h2>
                <ul>
                  <li>
                    <a href="{{route('Consentimiento')}}" rel="nofollow">
                      Consentimiento para fines adicionales
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Terminos_condiciones')}}" rel="nofollow">
                      {" "}
                      Condiciones Generales de Uso
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Cokkie')}}" rel="nofollow">
                      Política de Cookies
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Financiamiento')}}" rel="nofollow">
                      Financiamiento Santander Consumer
                    </a>
                  </li>
                  <li>
                    <a href="{{route('Politicas')}}" rel="nofollow">
                      Políticas de Publicación
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
                  <a
                    data-auth-action="signin"
                    rel="nofollow"
                    href="/hc/es/signin?return_to=https%3A%2F%2Fcentraldeayuda.neoauto.com%2Fhc%2Fes%2Farticles%2F15188797839764-Aliados-comerciales-de-Neoauto-SAC"
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

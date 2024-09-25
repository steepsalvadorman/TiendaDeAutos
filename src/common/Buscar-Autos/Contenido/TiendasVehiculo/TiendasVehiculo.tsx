import "./TiendasVehiculo.css";

export const TiendasVehiculo = () => {
  return (
    <div className="tiendas-container">
      <div className="aside_01 santander">
        <a className="js-gtm" href="http://localhost:8000/Credito">
          <img
            className="santander_img"
            src="https://cds.neoauto.pe/neoauto3/img/landing/santander/banner_solicitud.png?20230516121747"
          />
        </a>
      </div>
      <div id="gad_right1"></div>
      <div className="port_conce port-marc2 port-marcp_motodiv">
        <div className="port-marcp_top">
          <h2 className="port-marcp_moto">Tiendas de vehículos</h2>
          <div className="port-marcp_t2">
            <a href="">Ver todos »</a>
          </div>
        </div>
        <div className="port_conce_row pcr2">
          <a href="" title="Rebel Motors Perú">
            <img
              className="img_marcp"
              src="https://cde.neoauto.pe/ente/logo/160x120/72247/rebel-motors-peru.jpg?20230516121747"
              alt="rebel motors perú"
            />
          </a>
          <a href="" title="Kavak">
            <img
              className="img_marcp"
              src="https://cde.neoauto.pe/ente/logo/160x120/114953/kavak-1491375740.jpg?20230516121747"
              alt="kavak"
            />
          </a>
        </div>
        <div className="port_conce_row pcr2">
          <a href="" title="Autoland Miraflores">
            <img
              className="img_marcp"
              src="https://cde.neoauto.pe/ente/logo/160x120/2048/autoland-miraflores-1886816623.jpg?20230516121747"
              alt="autoland miraflores"
            />
          </a>
          <a href="" title="JC Ugarte">
            <img
              className="img_marcp"
              src="https://cde.neoauto.pe/ente/logo/160x120/15967/jc-ugarte-import.jpg?20230516121747"
              alt="jc ugarte"
            />
          </a>
        </div>
      </div>
      <div className="aside_04">
        <img
          src="https://cds.neoauto.pe/neoauto2/imagenes/portada/aside_p6.jpg?20230516121747"
          alt="publicidad"
        />
        <a
          data-cy="contact-help"
          href="https://centraldeayuda.neoauto.com/hc/es/requests/new"
          target="_blank"
          className="asidediv_btn4"
        >
          <input type="button" className="btn buttonsty" value="Saber Más" />
        </a>
        <div id="gad_right2"></div>
      </div>
    </div>
  );
};

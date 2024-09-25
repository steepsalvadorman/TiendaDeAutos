import "./TarifadorVehiculo.css";

export const TarifadorVehiculo = () => {
   return (
      <div className="aside_tari aside_">
         <div className="top">
            <h2>Tarifador de vehículos</h2>
         </div>
         <div className="backtari">
            <p>
               Cotiza tu vehículo según el mercado
               <br />
               actual y obtén un precio referencial para
               <br />
               la compra o venta de tu vehículo.
            </p>
            <form
               id="frmTarifador"
               method="post"
               action="/tarifador"
               className="frm-tarifador"
            >
               <div className="form-group">
                  <label htmlFor="tarimarca">Marca</label>
                  <select id="tarimarca" className="form-control" name="marca">
                     <option selected={true} value="">
                        Marca
                     </option>
                     <option value="840">ACURA</option>
                  </select>
               </div>
               <div className="form-group">
                  <label htmlFor="tarimodelo">Modelo</label>
                  <select
                     id="tarimodelo"
                     className="form-control"
                     name="modelo"
                  >
                     <option selected={true} value="">
                        Modelo
                     </option>
                     <option value="">Todos</option>
                  </select>
               </div>
               <div className="form-group">
                  <label htmlFor="cboyearTarifador">Año</label>
                  <select
                     id="cboyearTarifador"
                     className="form-control"
                     name="year"
                  >
                     <option value="" selected={true}>
                        Año
                     </option>
                     <option value="2020">2020</option>
                  </select>
               </div>
               <a
                  href="javascript:;"
                  className="sp_btn_a bullet_help tooltip"
                  onClick={() => false}
               >
                  [?]
               </a>
               <div className="center-items text-center">
                  <button
                     type="submit"
                     id="btnCotizar"
                     className="btn btn-primary"
                     title="Cotizar"
                  >
                     Cotizar
                  </button>
               </div>
            </form>
           </div>
           
      </div>
   );
};

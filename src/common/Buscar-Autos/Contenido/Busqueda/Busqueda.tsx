import "./Busqueda.css";

export const Busqueda = () => {
   return (
      <div className="contenedor">
         <h1 className="port-bqab-tit">
            Autos usados, camionetas, hatchback y más
         </h1>
         <div className="motos_div_ab">
            <form method="post" id="frm_home_search" action="/busqueda-autos/">
               <input type="hidden" name="flagUsado" value="1" />
               <input type="hidden" name="estado" value="usados" />
               <input type="hidden" name="tipoVehiculo" value="autos" />
               <input
                  id="id_keyword"
                  name="keyword"
                  type="text"
                  className="motos-ab"
                  placeholder="Ingresa el modelo, marca o código del aviso"
                  autoComplete="off"
               />
               <div className="motos_divs">
                  <div className="motos_ma">
                     <select id="marcaauto" name="marca" defaultValue="">
                        <option value="">Marca</option>
                        <option value="acura">ACURA</option>
                        <option value="agrale">AGRALE</option>
                     </select>
                  </div>
                  <div className="motos_mo">
                     <select
                        id="modelo"
                        name="modelo"
                        defaultValue=""
                     >
                        <option value="" selected>
                           Modelo
                        </option>
                        <option value="">Todos</option>
                     </select>
                  </div>
               </div>
               <div className="motos_divs2">
                  <div className="motos_anio">
                     <select id="cboyear" name="year" className="styled">
                        <option selected value="">
                           Año
                        </option>
                        <option value="2024-2020">2024-2020</option>
                     </select>
                  </div>
                  <div className="motos_precio">
                     <span className="span_price">Precio ($)</span>
                     <input
                        type="text"
                        name="txtdesde"
                        className="motos-desde text isPriceInt"
                        placeholder="Desde"
                        autoComplete="off"
                     />
                     <input
                        type="text"
                        name="txthasta"
                        className="motos-hasta text isPriceInt"
                        placeholder="Hasta"
                        autoComplete="off"
                     />
                  </div>
               </div>
               <div className="btndiv2">
                  <input
                     type="submit"
                     id="btn_acebus"
                     className="btn btn-primary"
                     value="Buscar"
                  />
               </div>
            </form>
         </div>
      </div>
   );
};

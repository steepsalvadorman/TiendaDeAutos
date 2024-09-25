import "./CompraVenta.css";
export const CompraVenta = () => {
   return (
      <div className="fondo d-flex align-items-end">
         <div className="paralelogramo container content-center">
            <div className="container d-flex justify-content-center">
               <ul className="nav d-flex justify-content-center">
                  <li className="nav-item mt-2">
                     <a className="nav-link text-white" href="">
                        Comprar Usados
                     </a>
                  </li>
                  <li className="nav-item mt-2">
                     <a className="nav-link text-white" href="#">
                        Comprar Nuevos
                     </a>
                  </li>
                  <li className="nav-item mt-2">
                     <a className="nav-link text-white" href="/vender">
                        Quiero Vender
                     </a>
                  </li>
                  <li className="nav-item mt-2">
                     <a className="nav-link text-white" href="/Credito">
                        Quiero Financiar
                     </a>
                  </li>
               </ul>
               <br />
            </div>
            <center>
               <hr style={{ width: "80%" }} />
            </center>
            <div
               className="container d-flex justify-content-around"
               id="form__radio"
            >
               <div className="form-check">
                  <input
                     className="form-check-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio1"
                     value="option1"
                  />
                  <label
                     className="form-check-label text-white"
                     htmlFor="inlineRadio1"
                     style={{ paddingRight: "4rem" }}
                  >
                     Autos
                  </label>
               </div>
               <div className="form-check">
                  <input
                     className="form-check-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio2"
                     value="option2"
                  />
                  <label
                     className="form-check-label text-white"
                     htmlFor="inlineRadio2"
                     style={{ paddingRight: "4rem" }}
                  >
                     Motos
                  </label>
               </div>
               <div className="form-check">
                  <input
                     className="form-check-input"
                     type="radio"
                     name="inlineRadioOptions"
                     id="inlineRadio3"
                     value="option3"
                  />
                  <label
                     className="form-check-label text-white"
                     htmlFor="inlineRadio3"
                  >
                     Buses y camiones
                  </label>
               </div>
            </div>
            <br />
            <div className="form__search">
               <form className="bg-white p-3 rounded" id="f-search">
                  <div className="row">
                     <div className="col-md-3 mb-3 form__search-desk flex-column">
                        <label
                           htmlFor="marca"
                           className="form-label text-black"
                        >
                           Marca:
                        </label>
                        <input
                           type="text"
                           id="marca"
                           name="marca"
                           placeholder="Agregar Marca"
                           className="form-control"
                        />
                     </div>
                     <div className="col-md-3 mb-3 form__search-desk flex-column">
                        <label
                           htmlFor="modelo"
                           className="form-label text-black"
                        >
                           Modelo:
                        </label>
                        <input
                           type="text"
                           id="modelo"
                           name="modelo"
                           className="form-control"
                           placeholder="Agregar Modelo"
                        />
                     </div>
                     <div className="col-md-3 mb-3 form__search-desk">
                        <div className="row">
                           <div className="col-6">
                              <label
                                 htmlFor="ano"
                                 className="form-label text-black"
                              >
                                 Año:
                              </label>
                              <input
                                 type="number"
                                 id="ano"
                                 name="ano"
                                 className="form-control"
                              />
                           </div>
                           <div className="col-6">
                              <label
                                 htmlFor="precio"
                                 className="form-label text-black"
                              >
                                 Precio:
                              </label>
                              <input
                                 type="number"
                                 id="precio"
                                 name="precio"
                                 className="form-control"
                              />
                           </div>
                        </div>
                     </div>
                     <div className="col-md-3 mb-3">
                        <button
                           type="submit"
                           className="btn btn-primary bg-warning border-0 text-white w-100 h-100"
                        >
                           Buscar
                        </button>
                     </div>
                  </div>
               </form>
            </div>
            <br />
         </div>
         <br />
      </div>
   );
};

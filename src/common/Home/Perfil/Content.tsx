import { useEffect, useState } from "react";
import authService from "../../../services/authService";
import "./Perfil.css";

interface ContentProps {
   selectedTab: string;
}

interface User {
   nombreUsuario: string;
   email: string;
}

export const Content = ({ selectedTab }: ContentProps) => {
   const [, setUser] = useState<User | null>(null);

   const checkAuth = async () => {
      const currentUser = authService.getCurrentUser();
      console.log("Current User:", currentUser);
      if (currentUser && currentUser.nombreUsuario) {
         setUser({
            nombreUsuario: currentUser.nombreUsuario,
            email: currentUser.email,
         });
      }
   };

   useEffect(() => {
      checkAuth();
   }, []);

   return (
      <div className="uiAdmin_content_main col2">
         <div className="uiAdmin_content_main_inner">
            {selectedTab === "datosPersonales" && (
               <>
                  <h3 className="nbm">Mis datos</h3>
                  <p className="nbm_description">Verifica tus datos personales.</p>

                  <p className="nbm_description"><strong>Correo electrónico:</strong> nombreapellido0@gmail.com</p>
                  <p className="nbm_description"><strong>Nombre:</strong> Jorgue Cuerdas</p>
                  <p className="nbm_description"><strong>Fecha de nacimiento:</strong> 2000-04-10</p>
                  <p className="nbm_description"><strong>Documento:</strong> 77777777</p>
                  <p className="nbm_description"><strong>Dirección:</strong> Av. Canada 488</p>
                  <p className="nbm_description"><strong>Teléfono 1:</strong> 999888777</p>
                  <p className="nbm_description"><strong>Teléfono 2:</strong> ----</p>
               </>
            )}
            {selectedTab === "cambioDeClave" && (
               <>
                  <h3 className="bm">Cambios de Clave</h3>
                  <p className="nbm_description">Para cambiar tu clave, ingresa los siguientes datos.</p>


                  <div className="textbox-container">
                     <label className="label_clave">Contraseña antigua</label>
                     <input type="text" id="nombre" name="nombre"></input>
                  </div>

                  <div className="textbox-container">
                     <label className="label_clave">Contraseña nueva</label>
                     <input type="text" id="nombre" name="nombre"></input>
                  </div>

                  <div className="textbox-container">
                     <label className="label_clave">Contraseña nueva (Confirmacion)</label>
                     <input type="text" id="nombre" name="nombre"></input>
                  </div>

                  <button className="btn">Guardar cambios</button>
               </>
            )}
            {selectedTab === "nuevaEmpresa" && (
               <>
                  <h3 className="nbm">Nueva Empresa</h3>
                  <p className="nbm_description">La información de la empresa que registre podrá ser utilizada para emitir las facturas de sus compras.</p>

                  <div className="textbox-container">
                     <label className="label_clave">RUC</label>
                     <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu RUC"></input>
                  </div>

                  <div className="textbox-container">
                     <label className="label_clave">Razón Social</label>
                     <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu Razón social"></input>
                  </div>

                  <div className="textbox-container">
                     <label className="label_clave">Dirección</label>
                     <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu dirección"></input>
                  </div>

                  <label className="checkbox-container">
                     <input type="checkbox" className="checkbox-avanzado"></input>
                     <span className="checkmark"></span>
                     Acepto los Términos del Servicio
                  </label>

                  <hr className="separacion"></hr>

                  <div>
                     <button className="btn">Guardar</button>
                  </div>
               </>
            )}
            {selectedTab === "empresasRegistradas" && (
               <>
                  <h3 className="nbm">Empresas Registradas</h3>
                  <p className="nbm_description">Los datos de las empresas registradas pueden ser usadas para la facturación al realizar una compra.</p>
                  {/* Add content related to "empresasRegistradas" */}
               </>
            )}{selectedTab === "cuenta" && (
               <>
                  <h3 className="nbm">Mi Cuenta</h3>
                  <p className="nbm_description">Aquí puedes gestionar la configuración de tu cuenta.</p>
                  {/* Add content related to "Mi Cuenta" */}
               </>
            )}
            {selectedTab === "avisosActivos" && (
               <>
                  <h3 className="nbm_avisos">Avisos activos ({"# vehículos"})</h3>
                  <button className="btn2">+ Añadir un nuevo aviso.</button>
                  <p className="nbm_description">No tiene ningun aviso activo</p>
               </>
            )}
            {selectedTab === "avisosPendientes" && (
               <>
                  <h3 className="nbm_avisos">Avisos pendientes de pago ({"# vehículos"})</h3>
                  <table width="100%" className="table">

                     <thead>
                        <tr>
                           <td>ID</td>
                           <td>Inicia</td>
                           <td>Termina</td>
                           <td>Foto</td>
                           <td>Vehiculo</td>
                           <td>Tipo de aviso</td>
                           <td>Editar</td>
                           <td>Eliminar</td>
                        </tr>
                     </thead>
                  </table>
               </>
            )}
            {selectedTab === "avisosBajas" && (
               <>
                  <h3 className="nbm_avisos">Avisos de baja ({"# vehículos"})</h3>
                  <p className="nbm_description">No tiene ningun aviso desactivado</p>
               </>
            )}
            {selectedTab === "misInteresados" && (
               <>
                  <h3 className="nbm_avisos">Mis interesados ({"#"})</h3>
                  <div className="uiAdmin_tableToolBar">
                     <form action="/submit" method="POST">
                        <input type="text2" id="nombre2" name="nombre2" placeholder="Ingresa datos del contacto. Ejem: nombre, telefono, email, etc"></input>
                        <input type="date" id="fecha" name="fecha" placeholder="Fecha inicio" required></input>
                        <input type="date" id="fecha" name="fecha" placeholder="Fecha fin" required></input>
                        <button className="btn4">Buscar</button>
                     </form>
                  </div>
                  <div>
                     <a>
                        <button className="btn3">Imprimir</button>
                     </a>
                     <a>
                        <button className="btn3">Exportar Excel</button>
                     </a>

                  </div>
               </>
            )}
         </div>
      </div>
   );
};

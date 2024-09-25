import { useForm, Controller } from "react-hook-form";
import authService from "../../../services/authService";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface RegisterFormInputs {
   email: string;
   password: string;
   nombre: string;
   fechaNacimiento: string;
   identidad: number;
   celular: number;
   apellidos: string;
   genero: string;
}

const validationSchema = Yup.object().shape({
   email: Yup.string().email("Email is invalid").required("Email is required"),
   password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
   nombre: Yup.string().required("Nombre is required"),
   fechaNacimiento: Yup.string().required("Fecha de Nacimiento is required"),
   identidad: Yup.number().required("Identidad is required"),
   celular: Yup.number().required("Celular is required"),
   apellidos: Yup.string().required("Apellidos is required"),
   genero: Yup.string().required("Genero is required"),
});

export const Register = () => {
   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
   } = useForm<RegisterFormInputs>({
      resolver: yupResolver(validationSchema),
   });

   const navigate = useNavigate();
   const modalRef = useRef<HTMLDivElement | null>(null);
   const closeButtonRef = useRef<HTMLButtonElement | null>(null);

   const onSubmit = async (data: RegisterFormInputs) => {
      try {
         const response = await authService.register(data);
         console.log("API Response:", response);
         if (response && response.status === true) {
            if (closeButtonRef.current) {
               closeButtonRef.current.click();
            }
            setTimeout(() => navigate("/"), 300);
         } else {
            console.error(
               "Registration failed:",
               response.message || "Unknown error"
            );
         }
      } catch (error) {
         console.error("Registration error:", error);
      }
   };

   return (
      <div
         className="modal fade"
         id="registerModal"
         tabIndex={-1}
         ref={modalRef}
         aria-labelledby="registerModalLabel"
         aria-hidden="true"
      >
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="registerModalLabel">
                     Registro
                  </h5>
                  <button
                     type="button"
                     className="btn-close"
                     data-bs-dismiss="modal"
                     aria-label="Close"
                     ref={closeButtonRef}
                  ></button>
               </div>
               <div className="modal-body">
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div className="row">
                        <div className="col-md-6 mb-3">
                           <label htmlFor="email" className="form-label">
                              Email *
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              placeholder="correo electrónico"
                              {...register("email")}
                           />
                           {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div className="col-md-6 mb-3">
                           <label htmlFor="document" className="form-label">
                              Documento de Identidad *
                           </label>
                           <div className="input-group">
                              <Controller
                                 name="identidad"
                                 control={control}
                                 render={({ field }) => (
                                    <>
                                       <select
                                          className="form-select select-small"
                                          {...field}
                                          required
                                       >
                                          <option value="DNI">DNI</option>
                                          <option value="RUC">RUC</option>
                                       </select>
                                       <input
                                          type="number"
                                          className="form-control input-large"
                                          placeholder="número de doc."
                                          {...field}
                                       />
                                    </>
                                 )}
                              />
                           </div>
                           {errors.identidad && (
                              <p>{errors.identidad.message}</p>
                           )}
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-6 mb-3">
                           <label htmlFor="password" className="form-label">
                              Contraseña *
                           </label>
                           <input
                              type="password"
                              className="form-control"
                              placeholder="contraseña"
                              {...register("password")}
                           />
                           {errors.password && <p>{errors.password.message}</p>}
                        </div>
                        <div className="col-md-6 mb-3">
                           <label htmlFor="phone" className="form-label">
                              Celular *
                           </label>
                           <input
                              type="tel"
                              className="form-control"
                              placeholder="celular"
                              {...register("celular")}
                           />
                           {errors.celular && <p>{errors.celular.message}</p>}
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-6 mb-3">
                           <label htmlFor="firstName" className="form-label">
                              Nombre *
                           </label>
                           <input
                              type="text"
                              className="form-control"
                              placeholder="nombre"
                              {...register("nombre")}
                           />
                           {errors.nombre && <p>{errors.nombre.message}</p>}
                        </div>
                        <div className="col-md-6 mb-3">
                           <label htmlFor="lastName" className="form-label">
                              Apellidos *
                           </label>
                           <input
                              type="text"
                              className="form-control"
                              placeholder="apellidos"
                              {...register("apellidos")}
                           />
                           {errors.apellidos && (
                              <p>{errors.apellidos.message}</p>
                           )}
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-6 mb-3">
                           <label htmlFor="birthdate" className="form-label">
                              Fecha de Nacimiento *
                           </label>
                           <input
                              type="date"
                              className="form-control"
                              {...register("fechaNacimiento")}
                           />
                           {errors.fechaNacimiento && (
                              <p>{errors.fechaNacimiento.message}</p>
                           )}
                        </div>
                        <div className="col-md-6 mb-3">
                           <label className="form-label">Género *</label>
                           <div className="form-check">
                              <input
                                 type="radio"
                                 className="form-check-input"
                                 {...register("genero")}
                                 value="M"
                              />
                              <label
                                 className="form-check-label"
                                 htmlFor="male"
                              >
                                 Masculino
                              </label>
                           </div>
                           <div className="form-check">
                              <input
                                 type="radio"
                                 className="form-check-input"
                                 {...register("genero")}
                                 value="F"
                              />
                              <label
                                 className="form-check-label"
                                 htmlFor="female"
                              >
                                 Femenino
                              </label>
                           </div>
                           {errors.genero && <p>{errors.genero.message}</p>}
                        </div>
                     </div>
                     <div className="form-check mb-2">
                        <input
                           className="form-check-input"
                           type="checkbox"
                           required
                        />
                        <label
                           className="form-check-label"
                           htmlFor="privacyPolicy"
                        >
                           Acepto las <a href="#">Políticas de privacidad</a> de
                           Neoauto.com
                        </label>
                     </div>
                     <div className="form-check mb-2">
                        <input
                           className="form-check-input"
                           type="checkbox"
                           required
                        />
                        <label
                           className="form-check-label"
                           htmlFor="termsConditions"
                        >
                           Acepto los <a href="/home">Términos y Condiciones</a>{" "}
                           de Neoauto.com
                        </label>
                     </div>
                     <div className="form-check mb-2">
                        <input
                           className="form-check-input"
                           type="checkbox"
                           id="dataAuthorization"
                           required
                        />
                        <label
                           className="form-check-label"
                           htmlFor="dataAuthorization"
                        >
                           Autorizo el uso de mis datos para Fines Adicionales
                        </label>
                     </div>
                     <div className="d-grid gap-2">
                        <button
                           type="submit"
                           className="btn btn-primary botonCrearCuenta mt-4"
                        >
                           Registrar
                        </button>
                     </div>
                  </form>
                  <div className="mt-3 text-center">
                     ¿Ya tienes cuenta?<a href="#"> Ingresa</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

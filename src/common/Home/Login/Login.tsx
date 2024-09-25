import { useState, useRef } from "react";
import authService from "../../../services/authService";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";
import "./Login.css";

export const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState<string | null>(null);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
   const modalRef = useRef<HTMLDivElement>(null);

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      setError(null);

      try {
         await authService.login(email, password);
         if (modalRef.current) {
            const modal = Modal.getInstance(modalRef.current);
            if (modal) {
               modal.hide();
            }
         }
         navigate("/");
      } catch (err) {
         setError("Invalid email or password.");
      } finally {
         setLoading(false);
      }
   };

   return (
      <>
         <div
            className="modal"
            id="ingresarModal"
            tabIndex={-1}
            aria-labelledby="ingresarModalLabel"
            aria-hidden="true"
            ref={modalRef}
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="ingresarModalLabel">
                        LOGIN
                     </h5>
                     <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div className="modal-body">
                     <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                           <label htmlFor="emailInput" className="form-label">
                              Email
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="emailInput"
                              placeholder="Enter your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                           />
                        </div>
                        <div className="mb-3">
                           <label
                              htmlFor="passwordInput"
                              className="form-label"
                           >
                              Password
                           </label>
                           <input
                              type="password"
                              className="form-control"
                              id="passwordInput"
                              placeholder="Enter your password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                           />
                        </div>
                        {error && (
                           <div className="alert alert-danger" role="alert">
                              {error}
                           </div>
                        )}
                        <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-3">
                           <button
                              type="submit"
                              className="btn btn-primary colorBotonLogin"
                              disabled={loading}
                           >
                              {loading ? "Loading..." : "Login"}
                           </button>
                        </div>
                        <div className="mb-3 text-center">
                           <a href="#" className="text-decoration-none">
                              ¿Olvidaste tu contraseña?
                           </a>
                        </div>
                        <div className="mb-3 text-center">
                           <span>
                              Si no eres miembro de Neoauto,{" "}
                              <a href="#" className="text-decoration-none">
                                 Regístrate aquí
                              </a>{" "}
                              es fácil y rápido.
                           </span>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

interface User {
   message: string;
   status: boolean;
   email: string;
   nombre: string | null;
   fechaNacimiento: string | null;
   identidad: number | null;
   celular: number | null;
   apellidos: string | null;
   genero: string | null;
   accessToken: string;
}

interface StoredUser {
   email: string;
   nombreUsuario: string;
}

class AuthService {
   async login(email: string, password: string): Promise<User> {
      try {
         const response = await axios.post(API_URL + "log-in", {
            email,
            password,
         });

         console.log("Login response:", response.data); // Verifica la respuesta del backend

         const {
            email: userEmail,
            nombre,
            apellidos,
            accessToken,
         } = response.data;

         if (userEmail && accessToken) {
            // Extrae el primer nombre y primer apellido
            const nombreUsuario = [nombre, apellidos]
               .filter(Boolean) // Elimina valores nulos o indefinidos
               .map((item) => item.split(" ")[0]) // Obtén solo el primer nombre o apellido
               .join(" ");

            // Guarda el correo y el nombre de usuario en localStorage
            localStorage.setItem(
               "user",
               JSON.stringify({ email: userEmail, nombreUsuario })
            );

            console.log("User saved to localStorage:", {
               email: userEmail,
               nombreUsuario,
            });
         }

         return response.data;
      } catch (error) {
         console.error("Login error:", error);
         throw error;
      }
   }

   async logout(): Promise<void> {
      try {
         await axios.post(API_URL + "log-out");
         localStorage.removeItem("user");
         console.log("User removed from localStorage");
      } catch (error) {
         console.error("Logout error:", error);
         throw error;
      }
   }

   async register(data: {
      email: string;
      password: string;
      nombre: string;
      fechaNacimiento: string;
      identidad: number;
      celular: number;
      apellidos: string;
      genero: string;
   }): Promise<User> {
      try {
         const response = await axios.post(API_URL + "sign-up", data);
         return response.data;
      } catch (error) {
         console.error("Registration error:", error);
         throw error;
      }
   }

   getCurrentUser(): StoredUser | null {
      const userStr = localStorage.getItem("user");
      return userStr ? JSON.parse(userStr) : null;
   }

   isAuthenticated(): boolean {
      const user = this.getCurrentUser();
      return !!user && !!user.email; // Devuelve true si el usuario y el correo existen
   }

}
export default new AuthService();

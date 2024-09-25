import "./Ultimas_Noticias.css";

export const UltimasNoticias = () => {
   return (
      <section className="section blog" id="blog">
         <div className="container">
            <div className="container d-flex justify-content-between pb-4">
               <h2 className="bauto">Ultimas Noticias</h2>
               <a
                  href="Buses_camiones"
                  style={{ textDecoration: "none" }}
                  type="button"
                  className="btn btn-outline-warning"
               >
                  Ver mas Noticias
               </a>
            </div>
            <ul className="blog-list has-scrollbar">
               {blogData.map((blog, index) => (
                  <li key={index}>
                     <div className="blog-card">
                        <figure className="card-banner">
                           <a href={blog.link}>
                              <img
                                 src={blog.image}
                                 alt={blog.alt}
                                 loading="lazy"
                                 className="w-100"
                              />
                           </a>
                        </figure>
                        <div className="card-content">
                           <p className="card-description">
                              {blog.description}
                           </p>
                        </div>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
};

const blogData = [
   {
      link: "#",
      image: "/images/Noticia/reduce.webp",
      alt: "Opening of new offices of the company",
      description:
         " Abril 5,2023 Semana Santa 2023: 5 destinos ideales para visitar el próximo fin de semana largo",
   },
   {
      link: "#",
      image: "/images/Noticia/derrapar.webp",
      alt: "What cars are most vulnerable",
      description:
         "Marzo 31,2023 Drifting: Caracteristica de un auto para derrapar.",
   },
   {
      link: "#",
      image: "/images/Noticia/destinos.webp",
      alt: "Statistics showed which average age",
      description: "Descripcion para el Blog 3",
   },
   {
      link: "#",
      image: "/images/Noticia/destinos.webp",
      alt: "Statistics showed which average age",
      description: "Descripcion para el Blog 3",
   }
];

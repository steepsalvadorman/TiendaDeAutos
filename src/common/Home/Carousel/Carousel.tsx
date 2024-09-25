// Carousel.jsx
import CarouselItem from "./carousel-item/CarouselItem";
import "./Carousel.css";

export const Carousel = () => {
   return (
      <div
         id="carouselExampleIndicators"
         className="carousel"
         data-bs-ride="carousel"
      >
         <div className="carousel-inner">
            <CarouselItem
               src="/images/bg-slider.webp"
               alt="Producto 1"
               title="Producto 1"
               description="Descripción breve del producto 1."
            />
            {/* Se puede agregar más CarouselItem aquí */}
         </div>

         {/* Controles de Navegación */}
         <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
         >
            <span
               className="carousel-control-prev-icon"
               aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
         </button>
         <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
         >
            <span
               className="carousel-control-next-icon"
               aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
         </button>
      </div>
   );
};

interface CarouselItemProps {
   src: string;
   alt: string;
   title: string;
   description: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({
   src,
   alt,
   title,
   description,
}) => {
   return (
        <div className="carousel-item active">
            <img src={src} className="d-block w-100" alt={alt} />
            <div className="carousel-caption d-none d-md-block">
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
   );
};

export default CarouselItem;

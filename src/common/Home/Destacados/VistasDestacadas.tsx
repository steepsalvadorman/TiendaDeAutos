import './Destacados.css';

const featuredCars = [
  {
    id: 1,
    image: '/images/Carros/Toyota.webp',
    alt: 'Honda Pilot',
    year: 2013,
    people: '4 People',
    fuelType: 'Hybrid',
    mileage: '6.1km / 1-litre',
    transmission: 'Automatic',
    price: " 17,300",
  },
  {
    id: 2,
    image: '/images/Carros/Toyota.webp',
    alt: 'Mercedes Benz',
    year: 2020,
    people: '4 People',
    fuelType: 'Gasoline',
    mileage: '8.2km / 1-litre',
    transmission: 'Automatic',
    price: " 34,500",
  },
  {
    id: 3,
    image: '/images/Carros/Toyota.webp',
    alt: 'Mini Coope',
    year: 2017,
    people: '4 People',
    fuelType: 'Gasoline',
    mileage: '5.3km / 1-litre',
    transmission: 'Automatic',
    price: " 27,994",
  },
  {
    id: 4,
    image: '/images/Carros/Toyota.webp',
    alt: 'Citroen Berlingo',
    year: 2018,
    people: '4 People',
    fuelType: 'Gasoline',
    mileage: '5.3km / 1-litre',
    transmission: 'Automatic',
    price: " 9,100",
  },
];

export const VistasDestacadas = () => {
  return (
    <section className="section featured-car" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="bauto">Avisos Destacados</h2>
          <a
            style={{ textDecoration: "none" }}
            type="button"
            className="btn btn-outline-warning"
            href="Motos"
          >
            Ver más Destacados
          </a>
        </div>
   
        <ul className="featured-car-list">
          {/* Generando los cards*/}
          {featuredCars.map((car) => (
            <li key={car.id}>
              <div className="featured-car-card">
                <figure className="card-banner">
                  <img
                    src={car.image}
                    alt={car.alt}
                    loading="lazy"
                    width={440}
                    height={300}
                    className="w-100"
                  />
                </figure>
                
                <div className="card-content">
                  <div className="card-title-wrapper">
                    <h4 className="h5 card-title">
                      <a href="#">{car.alt}</a>
                    </h4>
                    <data className="year" value={car.year}>
                      {car.year}
                    </data>
                  </div>
                  <ul className="card-list">
                    <li className="card-list-item">
                      <span className="card-item-text">{car.people}</span>
                    </li>
                    <li className="card-list-item">
                      <span className="card-item-text">{car.fuelType}</span>
                    </li>
                    <li className="card-list-item">
                      <span className="card-item-text">{car.mileage}</span>
                    </li>
                    <li className="card-list-item">
                      <span className="card-item-text">{car.transmission}</span>
                    </li>
                  </ul>
                  <div className="card-price-wrapper">
                    <p className="card-price">
                      <strong>${car.price}</strong>
                    </p>
                    
                    <button className="btn">Comprar Ahora</button>
                  </div>
                </div>
                <div className="label">Sale</div>
                <div className='Ubicacion'>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                  Lima, Lima
                </div>

   
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
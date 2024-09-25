import './AvisosCamiones.css';
const featuredCamiones = [
  {
    id: 1,
    image: '/images/Camion/hino.webp',
    alt: 'Hino',
    year: 2023,
    people: '4 People',
    fuelType: 'Gasolina',
    mileage: '5.6km',
    transmission: 'Mecánico',
    price: " 125,000",
  },
  {
    id: 2,
    image: '/images/Camion/Internacional.webp',
    alt: 'International 7600',
    year: 2008,
    people: '4 People',
    fuelType: 'Gasolina',
    mileage: '60.0km',
    transmission: 'Mecánica',
    price: " 39,000",
  },
  {
    id: 3,
    image: '/images/Camion/hyundai.webp',
    alt: 'Hyundai Hd',
    year: 2017,
    people: '4 People',
    fuelType: 'Gasoline',
    mileage: '21.7km',
    transmission: 'Mecánica',
    price: " 34,900",
  },
  {
    id: 4,
    image: '/images/Camion/kia.webp',
    alt: 'Kia K2700',
    year: 2013,
    people: '4 People',
    fuelType: 'Gasoline',
    mileage: '154 km',
    transmission: 'Mecánica',
    price: " 13,900",
  },
];
export const CamionesDestacados = () => {
  return (
    <section className="mt-5 section featured-car" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
        <h2 className="bauto">Avisos de Camiones</h2>
          <a
            style={{ textDecoration: "none" }}
            type="button"
            className="btn btn-outline-warning"
            href="/camiones"
          >
            Ver más Camiones
          </a>
        </div>
        <ul className="featured-car-list">
          {/* Generando los cards*/}
          {featuredCamiones.map((camiones) => (
            <li key={camiones.id}>
              <div className="featured-car-card">
                <figure className="card-banner">
                  <img
                    src={camiones.image}
                    alt={camiones.alt}
                    loading="lazy"
                    width={440}
                    height={300}
                    className="w-100"
                  />
                </figure>
                <div className="card-content">
                  <div className="card-title-wrapper">
                    <h4 className="h5 card-title">
                      <a href="#">{camiones.alt}</a>
                    </h4>
                    <data className="year" value={camiones.year}>
                      {camiones.year}
                    </data>
                  </div>
                  <ul className="card-list">
                    <li className="card-list-item">
                      <span className="card-item-text">{camiones.people}</span>
                    </li>
                    <li className="card-list-item">
                      <span className="card-item-text">{camiones.fuelType}</span>
                    </li>
                    <li className="card-list-item">
                      <span className="card-item-text">{camiones.mileage}</span>
                    </li>
                    <li className="card-list-item">
                      <span className="card-item-text">{camiones.transmission}</span>
                    </li>
                  </ul>
                  <div className="card-price-wrapper">
                    <p className="card-price">
                      <strong>${camiones.price}</strong>
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

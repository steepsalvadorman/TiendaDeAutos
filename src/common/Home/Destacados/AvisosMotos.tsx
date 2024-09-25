export const AvisosMotos = () => {
   const motorcycles = [
      {
         id: 1,
         imgSrc: "/src/assets/images/Moto/bmw.webp",
         alt: "Ssenda Matrix",
         year: 2022,
         people: 1,
         transmission: "N/A",
         fuelType: 'Gasoline',
         mileage: '5.3km / 1-litre',
         title: "Ssenda Matrix 150",
         description: "2022-Automática",
         price: " 1,721",
      },
      {
         id: 2,
         imgSrc: "/src/assets/images/Moto/ducati.webp",
         alt: "Ducati",
         year: 2018,
         people: 1,
         transmission: "N/A",
         fuelType: 'Gasoline',
         mileage: '5.3km / 1-litre',
         title: "Ducati Multiestrada Enduro 950",
         description: "2018-Mecánica-4900 kms",
         price: " 16,000",
      },
      {
         id: 3,
         imgSrc: "/src/assets/images/Moto/pulsar.webp",
         alt: "Pulsar Rs200",
         year: 2022,
         people: 1,
         title: "Pulsar Rs200",
         transmission: "N/A",
         fuelType: 'Gasoline',
         mileage: '5.3km / 1-litre',
         description: "2022-Mecánica",
         price: " 4,617",
      },
      {
         id: 4,
         imgSrc: "/src/assets/images/Moto/ssenda.webp",
         alt: "Ct 125",
         year: 2022,
         people: 1,
         title: "Ct 125",
         transmission: "N/A",
         fuelType: 'Gasoline',
         mileage: '5.3km / 1-litre',
         description: "2022-Mecánica",
         price: " 1,450",
      },
   ];

   return (
      <section className="mt-5 section featured-car" id="featured-car">
      <div className="container">
        <div className="title-wrapper">
        <h2 className="bauto">Avisos de Motos</h2>
          <a
            style={{ textDecoration: "none" }}
            type="button"
            className="btn btn-outline-warning"
            href="Motos"
          >
            Ver más Motos
          </a>
        </div>
        <ul className="featured-car-list">
          {/* Generando los cards*/}
          {motorcycles.map((moto) => (
            <li key={moto.id}>
              <div className="featured-car-card">
                <figure className="card-banner">
                  <img
                    src={moto.imgSrc}
                    alt={moto.alt}
                    loading="lazy"
                    width={440}
                    height={300}
                    className="w-100"
                  />
                </figure>
                <div className="card-content">
                  <div className="card-title-wrapper">
                    <h4 className="h5 card-title">
                      <a href="#">{moto.alt}</a>
                    </h4>
                    <data className="year" value={moto.year}>
                      {moto.year}
                    </data>
                  </div>
                  <ul className="card-list">
                    <li className="card-list-item">
                      <span className="card-item-text">{moto.people}</span>
                    </li>
                    <li className="card-list-item">
                      <span className="card-item-text">{moto.fuelType}</span>
                    </li>
                    <li className="card-list-item">
                      <span className="card-item-text">{moto.mileage}</span>
                    </li>
                    <li className="card-list-item">
                      <span className="card-item-text">{moto.transmission}</span>
                    </li>
                  </ul>
                  <div className="card-price-wrapper">
                    <p className="card-price">
                      <strong>${moto.price}</strong>
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

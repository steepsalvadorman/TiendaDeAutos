import "./ListaCarros.css";

export const ListaCarros = () => {
   const cars = [
      {
         title: "HONDA CIVIC LX",
         year: 2012,
         fuel: "Gasolina",
         transmission: "Automática",
         price: "$12,100",
         url: "https://neoauto.com/auto/usado/honda-civic-lx-2013-1718785",
         imageUrl:
            "https://cde.neoauto.pe/autos_usados/196x165/714503/714503_6151934.webp?20230516121747",
      },
      {
         title: "CHEVROLET N300 MAX",
         year: 2022,
         fuel: "Gas GLP",
         transmission: "Mecánica",
         price: "$13,500",
         url: "https://neoauto.com/auto/usado/chevrolet-n300-max-2022-1718782",
         imageUrl:
            "https://cde.neoauto.pe/autos_usados/196x165/712952/712952_9834106.webp?20230516121747",
      },
      {
         title: "SUBARU IMPREZA SPORT",
         year: 2017,
         fuel: "Gasolina",
         transmission: "Automática - Secuencial",
         price: "$16,499",
         url: "https://neoauto.com/auto/usado/subaru-impreza-sport-2017-1718784",
         imageUrl:
            "https://cde.neoauto.pe/autos_usados/196x165/487362/487362_1979791.webp?20230516121747",
      },
      {
         title: "MITSUBISHI PAJERO IO",
         year: 1999,
         fuel: "Gasolina",
         transmission: "Automática",
         price: "$6,800",
         url: "https://neoauto.com/auto/usado/mitsubishi-pajero-io-2000-1718786",
         imageUrl:
            "https://cde.neoauto.pe/autos_usados/196x165/714501/714501_4650123.webp?20230516121747",
      },
   ];

   return (
      <div className="car-wrapper">
         <div className="car-container">
            {cars.map((car, index) => (
               <div key={index} className="car-item">
                  <a
                     href={car.url}
                     title={`${car.title} a ${car.price} del ${car.year}`}
                  >
                     <img
                        alt={`${car.title.toLowerCase().replace(/\s+/g, "-")}-${
                           car.year
                        }-1`}
                        src={car.imageUrl}
                        className="card-img-top"
                     />

                     <div className="card-body">
                        <h5 className="card-title vehi_tit">{car.title}</h5>
                        <p className="card-text">{`${car.year}, ${car.fuel}, ${car.transmission}`}</p>
                        <div className="preciofinal">
                           <b>{car.price}</b>
                        </div>
                     </div>
                  </a>
               </div>
            ))}
         </div>
      </div>
   );
};
